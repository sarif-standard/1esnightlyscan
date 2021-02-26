import {InteractionType} from "../web_modules/@azure/msal-browser.js";
import {AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal, useMsalAuthentication} from "../web_modules/@azure/msal-react.js";
import swc from "../web_modules/@microsoft/sarif-web-component.js";
import {Button} from "../web_modules/azure-devops-ui/Button.js";
import "../web_modules/azure-devops-ui/Card.js";
import "../web_modules/azure-devops-ui/Checkbox.js";
import "../web_modules/azure-devops-ui/Icon.js";
import "../web_modules/azure-devops-ui/Page.js";
import {Spinner} from "../web_modules/azure-devops-ui/Spinner.js";
import React, {useEffect, useState} from "../web_modules/react.js";
const {Viewer} = swc;
const params = new URLSearchParams(window.location.search);
const {organization, project, repository} = Object.fromEntries(params.entries());
const isRepositoryId = /^[{]?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/m.test(repository);
export function App() {
  const isAuthenticated = useIsAuthenticated();
  const {instance, accounts} = useMsal();
  const {login} = useMsalAuthentication(InteractionType.Silent, {scopes: []});
  const [loading, setLoading] = useState(false);
  const [sarif, setSarif] = useState();
  const [responsibility, setResponsibility] = useState(false);
  const [locked, setLocked] = useState(true);
  const isParamsValid = isRepositoryId || organization || organization && project || organization && project && repository;
  if (!isParamsValid) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "center"
    }, "Invalid parameters.");
  }
  useEffect(() => {
    if (!isAuthenticated)
      return;
    if (loading)
      return;
    if (sarif)
      return;
    (async () => {
      setLoading(true);
      try {
        const headers = new Headers();
        const {accessToken: funcToken} = await instance.acquireTokenSilent({
          account: instance.getAllAccounts()[0],
          scopes: ["api://f42dbafe-6e53-4dce-b025-cc4df39fb5cc/Ruleset.read"]
        });
        headers.append("Authorization", `Bearer ${funcToken}`);
        const {accessToken: adoToken} = await instance.acquireTokenSilent({
          account: instance.getAllAccounts()[0],
          scopes: ["499b84ac-1321-427f-aa17-267ca6975798/user_impersonation"]
        });
        const outboundParams = new URLSearchParams(params);
        outboundParams.set("token", adoToken);
        const response = await fetch(`https://sarif-pattern-matcher-internal-function.azurewebsites.net/api/query?${outboundParams}`, {headers});
        const responseJson = await response.json();
        setSarif(responseJson);
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    })();
  }, [isAuthenticated]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UnauthenticatedTemplate, null, /* @__PURE__ */ React.createElement("div", {
    className: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => login(InteractionType.Popup, {scopes: []})
  }, "Sign in"))), /* @__PURE__ */ React.createElement(AuthenticatedTemplate, null, /* @__PURE__ */ React.createElement("div", {
    className: "intro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "introHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, document.title), loading && /* @__PURE__ */ React.createElement(Spinner, null), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => instance.logout()
  }, "Sign out ", accounts[0]?.username))), /* @__PURE__ */ React.createElement("div", {
    className: `viewer ${sarif ? "viewerActive" : ""}`
  }, false, /* @__PURE__ */ React.createElement(Viewer, {
    logs: sarif && [sarif],
    filterState: {
      Baseline: {value: ["new", "unchanged", "updated"]},
      Level: {value: ["error"]}
    },
    successMessage: "No validated credentials detected."
  }))));
}
