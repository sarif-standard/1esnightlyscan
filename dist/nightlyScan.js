import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

import swc from "../_snowpack/pkg/@microsoft/sarif-web-component.js";
import {Button} from "../_snowpack/pkg/azure-devops-ui/Button.js";
import {MoreButton} from "../_snowpack/pkg/azure-devops-ui/Menu.js";
import {Spinner} from "../_snowpack/pkg/azure-devops-ui/Spinner.js";
import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
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
export function NightlyScan() {
  const account = useFirstAuthenticatedAccount(instance);
  const isAuthenticated = account !== void 0;
  const username = account?.username ?? "Anonymous";
  const [loading, setLoading] = useState(false);
  const [sarif, setSarif] = useState();
  const [discussionStore, setDiscussionStore] = useState();
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
    const stage = __SNOWPACK_ENV__.MODE === "development" || document.location.pathname.includes("stage") ? "-stage" : "";
    return await fetch(`https://1esnightlyscan-api${stage}.azurewebsites.net/api/${funcName}?${outboundParams}`, {method, headers});
  }
  useEffect(() => {
    if (!isAuthenticated)
      return;
    if (loading)
      return;
    if (sarif)
      return;
    function onSarifChanged(log) {
      if (params.mockRepoEnabled !== void 0)
        return;
      const repoDisabled = log.runs?.[0]?.versionControlProvenance?.[0]?.properties?.isDisabled;
      setRepoEnabled(repoDisabled == void 0 ? void 0 : !repoDisabled);
      setDiscussionStore(new DiscussionStore(instance, params.secretHash));
    }
    if (params.mockZeroResults) {
      setSarif(sarifLogZeroResults);
      onSarifChanged(sarifLogZeroResults);
      return;
    }
    if (params.mockSomeResults) {
      setSarif(sarifLogSomeResults);
      onSarifChanged(sarifLogSomeResults);
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
        onSarifChanged(responseJson);
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
    onClick: () => instance.acquireTokenPopup({scopes: []}),
    primary: true
  }, "Sign in"), /* @__PURE__ */ React.createElement("div", {
    className: "signinMessage"
  }, "Sign in to view scan results.")))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "intro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "introHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, document.title, ": ", params.unassignedRepos ? "Product Catalog" : "Live Secrets"), /* @__PURE__ */ React.createElement(Age, null), loading && /* @__PURE__ */ React.createElement(Spinner, null), !params.unassignedRepos && /* @__PURE__ */ React.createElement(RevalidateButton, null), /* @__PURE__ */ React.createElement(Button, {
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
      Keywords: {value: params.keywords},
      Baseline: {value: ["new", "unchanged", "updated"]},
      Level: {value: params.level ?? ["error"]}
    },
    hideBaseline: !params.showBaseline,
    successMessage: (() => {
      if (params.unassignedRepos)
        return "No unassigned repositories were found.";
      if (isRespository)
        return `No live secrets have been detected in the '${params.repository ?? params.repo}' repository. Nice job!`;
      return "No live secrets detected.";
    })(),
    onSnippetAction: (result) => {
      const hash = result.fingerprints?.["ValidationFingerprintHash/v1"];
      if (!hash)
        return;
      window.open(`${document.location.href.split("?").shift()}?secretHash=${hash}`);
    }
  })), discussionStore && /* @__PURE__ */ React.createElement(Discussion2, {
    store: discussionStore,
    user: username
  })));
}
