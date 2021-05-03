import swc from "../web_modules/@microsoft/sarif-web-component.js";
import {Button} from "../web_modules/azure-devops-ui/Button.js";
import {MoreButton} from "../web_modules/azure-devops-ui/Menu.js";
import {Spinner} from "../web_modules/azure-devops-ui/Spinner.js";
import React, {useEffect, useState} from "../web_modules/react.js";
import {Age} from "./age.js";
import {Discussion2} from "./discussion2.js";
import {DiscussionStore} from "./discussionStore.js";
import {download} from "./download.js";
import {instance} from "./publicClientApplication.js";
import {RepoStatus} from "./repoStatus.js";
import {RevalidateButton} from "./revalidateButton.js";
import {sarifLogSomeResults, sarifLogZeroResults} from "./sampleSarifLog.js";
import params from "./searchParams.js";
import {useFirstAuthenticatedAccount} from "./useFirstAuthenticatedAccount.js";
const {Viewer} = swc;
const discussionStore = new DiscussionStore(instance, params.secretHash);
export function NightlyScan() {
  const account = useFirstAuthenticatedAccount(instance);
  const isAuthenticated = account !== void 0;
  const username = account?.username ?? "Anonymous";
  const [loading, setLoading] = useState(false);
  const [sarif, setSarif] = useState();
  const [getSnippets, setGetSnippets] = useState();
  const [repoEnabled, setRepoEnabled] = useState(params.mockRepoEnabled);
  const isRespository = repoEnabled != void 0;
  async function callApi(funcName, method) {
    const headers = new Headers();
    const {accessToken: funcToken} = await instance.acquireTokenSilent({
      account,
      scopes: ["api://f42dbafe-6e53-4dce-b025-cc4df39fb5cc/Ruleset.read"]
    });
    headers.append("Authorization", `Bearer ${funcToken}`);
    const {accessToken: adoToken} = await instance.acquireTokenSilent({
      account,
      scopes: ["499b84ac-1321-427f-aa17-267ca6975798/user_impersonation"]
    });
    const outboundParams = new URLSearchParams(window.location.search);
    outboundParams.set("token", adoToken);
    return await fetch(`https://1esnightlyscan-api.azurewebsites.net/api/${funcName}?${outboundParams}`, {method, headers});
  }
  useEffect(() => {
    if (!isAuthenticated)
      return;
    if (loading)
      return;
    if (sarif)
      return;
    function computeRepoEnabled(log) {
      if (params.mockRepoEnabled !== void 0)
        return;
      const repoDisabled = log.runs?.[0]?.versionControlProvenance?.[0]?.properties?.isDisabled;
      setRepoEnabled(repoDisabled == void 0 ? void 0 : !repoDisabled);
    }
    if (params.mockZeroResults) {
      setSarif(sarifLogZeroResults);
      computeRepoEnabled(sarifLogZeroResults);
      return;
    }
    if (params.mockSomeResults) {
      setSarif(sarifLogSomeResults);
      computeRepoEnabled(sarifLogSomeResults);
      return;
    }
    ;
    (async () => {
      setLoading(true);
      try {
        const response = await callApi("query");
        const responseJson = await response.json();
        if (params.download && username === "mikefan@microsoft.com") {
          const fileName = params.repository ?? params.repo ?? "results";
          download(`${fileName}.sarif`, JSON.stringify(responseJson, null, "  "));
        }
        setSarif(responseJson);
        computeRepoEnabled(responseJson);
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    })();
  }, [isAuthenticated]);
  return !isAuthenticated ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "intro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "introHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, document.title))), /* @__PURE__ */ React.createElement("div", {
    className: "center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-column flex-center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => instance.acquireTokenPopup({scopes: []})
  }, "Sign in"), /* @__PURE__ */ React.createElement("div", {
    className: "signinMessage"
  }, "Sign in to view scan results.")))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "intro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "introHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, document.title, ": Live Secrets"), /* @__PURE__ */ React.createElement(Age, null), loading && /* @__PURE__ */ React.createElement(Spinner, null), /* @__PURE__ */ React.createElement(RevalidateButton, {
    disabled: !sarif,
    getSnippets
  }), /* @__PURE__ */ React.createElement(Button, {
    iconProps: {iconName: "Mail"},
    href: `mailto:caicredremediation@microsoft.com?subject=${encodeURIComponent(document.location.toString())}`
  }), /* @__PURE__ */ React.createElement(Button, {
    iconProps: {iconName: "Help"},
    href: "https://aka.ms/1esnightlyscan/help",
    target: "_blank"
  }), /* @__PURE__ */ React.createElement(MoreButton, {
    contextualMenuProps: {
      menuProps: {id: "moreMenu", items: [
        {
          id: "signOut",
          text: `Sign out ${username}`,
          onActivate: () => void instance.logout()
        }
      ]}
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: `viewer ${sarif ? "viewerActive" : ""}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-column"
  }, /* @__PURE__ */ React.createElement(RepoStatus, {
    repository: params.repository ?? params.repo ?? "",
    repoEnabled,
    sarif,
    fetchSpam: callApi,
    setRepoEnabled
  }), /* @__PURE__ */ React.createElement(Viewer, {
    logs: sarif && [sarif],
    filterState: {
      Keywords: {value: params.filterKeywords},
      Baseline: {value: ["new", "unchanged", "updated"]},
      Level: {value: ["error"]}
    },
    hideBaseline: true,
    successMessage: isRespository ? `No live secrets have been detected in the '${params.repository ?? params.repo}' repository. Nice job!` : "No live secrets detected.",
    onCreate: (getFilteredContextRegionSnippetTexts) => {
      setGetSnippets(() => getFilteredContextRegionSnippetTexts);
    }
  })), /* @__PURE__ */ React.createElement(Discussion2, {
    store: discussionStore,
    user: username
  })));
}
