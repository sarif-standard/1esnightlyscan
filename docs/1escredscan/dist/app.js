import {InteractionType} from "../../web_modules/@azure/msal-browser.js";
import {AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal, useMsalAuthentication} from "../../web_modules/@azure/msal-react.js";
import swc from "../../web_modules/@microsoft/sarif-web-component.js";
import {Button} from "../../web_modules/azure-devops-ui/Button.js";
import {Card} from "../../web_modules/azure-devops-ui/Card.js";
import {Checkbox} from "../../web_modules/azure-devops-ui/Checkbox.js";
import {Icon, IconSize} from "../../web_modules/azure-devops-ui/Icon.js";
import {Page} from "../../web_modules/azure-devops-ui/Page.js";
import {Spinner} from "../../web_modules/azure-devops-ui/Spinner.js";
import React, {useEffect, useState} from "../../web_modules/react.js";
const {Viewer} = swc;
const params = new URLSearchParams(window.location.search);
export function App() {
  const isAuthenticated = useIsAuthenticated();
  const {instance, accounts} = useMsal();
  const {login} = useMsalAuthentication(InteractionType.Silent, {scopes: []});
  const [loading, setLoading] = useState(false);
  const [sarif, setSarif] = useState();
  const [responsibility, setResponsibility] = useState(false);
  const [locked, setLocked] = useState(true);
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
        const tokenResponse = await instance.acquireTokenSilent({
          account: instance.getAllAccounts()[0],
          scopes: ["api://f42dbafe-6e53-4dce-b025-cc4df39fb5cc/Ruleset.read"]
        });
        headers.append("Authorization", `Bearer ${tokenResponse.accessToken}`);
        const {organization, project, repository} = Object.fromEntries(params.entries());
        const response = await fetch(`https://sarif-pattern-matcher-internal-function.azurewebsites.net/api/query?${new URLSearchParams(Object.entries({organization, project, repository}))}`, {headers});
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
  }, /* @__PURE__ */ React.createElement(Page, {
    className: "heightAuto bolt-page-grey"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "page-content page-content-top"
  }, /* @__PURE__ */ React.createElement(Card, null, locked ? /* @__PURE__ */ React.createElement("div", {
    className: "flex-row flex-center"
  }, /* @__PURE__ */ React.createElement(Icon, {
    iconName: "Lock",
    size: IconSize.large
  }), /* @__PURE__ */ React.createElement("div", {
    style: {margin: "0 32px 0 16px"}
  }, /* @__PURE__ */ React.createElement("div", null, "The '", params.get("repository"), "' repository have been disabled because it contains live credentials in its source code or history. All repositories inside Microsoft must be free of plain-text, valid credentials. You may temporarily enable this repository by clicking the 'Enable Repository' button. Your identity will be associated with this request."), /* @__PURE__ */ React.createElement("div", {
    style: {marginTop: 12}
  }, /* @__PURE__ */ React.createElement(Checkbox, {
    label: "I understand that by enabling this repository, I accept responsibility to ensure all currently exposed credentials are invalidated within 5 business days.",
    checked: responsibility,
    onChange: (_, checked) => setResponsibility(checked)
  }))), /* @__PURE__ */ React.createElement(Button, {
    disabled: !responsibility,
    onClick: () => setLocked(false),
    primary: true
  }, "Enable Repository")) : /* @__PURE__ */ React.createElement("div", {
    className: "flex-row flex-center"
  }, /* @__PURE__ */ React.createElement(Icon, {
    iconName: "Unlock",
    size: IconSize.large
  }), /* @__PURE__ */ React.createElement("div", {
    style: {marginLeft: 16}
  }, "The '", params.get("repository"), "' repository contains live credentials in its source code or history. All repositories inside Microsoft must be free of plain-text, valid credentials. The repository has been enabled temporarily in order to assist with remediation."))))), /* @__PURE__ */ React.createElement(Viewer, {
    logs: sarif && [sarif],
    filterState: {
      Baseline: {value: ["new", "unchanged", "updated"]},
      Level: {value: ["error"]}
    },
    successMessage: "No validated credentials detected."
  }))));
}
