import {Button} from "../_snowpack/pkg/azure-devops-ui/Button.js";
import {Card} from "../_snowpack/pkg/azure-devops-ui/Card.js";
import {Checkbox} from "../_snowpack/pkg/azure-devops-ui/Checkbox.js";
import {Icon, IconSize} from "../_snowpack/pkg/azure-devops-ui/Icon.js";
import {Page} from "../_snowpack/pkg/azure-devops-ui/Page.js";
import React, {useState} from "../_snowpack/pkg/react.js";
export function RepoStatus(props) {
  const {repository, repoEnabled, sarif, fetchSpam, setRepoEnabled} = props;
  const [responsibility, setResponsibility] = useState(false);
  const isRespository = repoEnabled != void 0;
  if (!isRespository)
    return null;
  const resultCount = sarif?.runs?.reduce((acc, run) => {
    return acc + (run.results?.filter((result) => result.level === "error").length ?? 0);
  }, 0);
  if (repoEnabled && !resultCount)
    return null;
  return /* @__PURE__ */ React.createElement(Page, {
    className: "heightAuto bolt-page-grey flex-00auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "page-content page-content-top"
  }, /* @__PURE__ */ React.createElement(Card, null, repoEnabled ? /* @__PURE__ */ React.createElement("div", {
    className: "flex-row flex-center"
  }, /* @__PURE__ */ React.createElement(Icon, {
    iconName: "Unlock",
    size: IconSize.large
  }), /* @__PURE__ */ React.createElement("div", {
    style: {marginLeft: 16}
  }, "The '", repository, "' repository contains live secrets in its source code or history. All repositories inside Microsoft must be free of secrets. The repository is temporarily enabled in order to assist with remediation. If the below issues are not remediated, this repository will be disabled.")) : /* @__PURE__ */ React.createElement("div", {
    className: "flex-row flex-center"
  }, /* @__PURE__ */ React.createElement(Icon, {
    iconName: "Lock",
    size: IconSize.large
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow",
    style: {margin: "0 32px 0 16px"}
  }, !resultCount ? /* @__PURE__ */ React.createElement("div", null, "No live secrets were detected. This repository is currently disabled (due to system refresh latency or missing repository ownership information). Click 'Enable Repository' to enable the repository.") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, "The '", repository, "' repository has been disabled because it contains live secrets in its source code or history. All repositories inside Microsoft must be free of secrets. You may temporarily enable this repository by clicking the 'Enable Repository' button. Your identity will be associated with this request."), /* @__PURE__ */ React.createElement("div", {
    style: {marginTop: 12}
  }, /* @__PURE__ */ React.createElement(Checkbox, {
    label: "I understand that by enabling this repository, I accept responsibility to ensure all currently exposed secrets are invalidated within 72 hours.",
    checked: responsibility,
    onChange: (_, checked) => setResponsibility(checked)
  })))), /* @__PURE__ */ React.createElement(Button, {
    disabled: !!resultCount && !responsibility,
    onClick: async () => {
      try {
        const response = await fetchSpam("enable", "PATCH");
        if (response.status !== 200)
          throw new Error(response.statusText);
        setRepoEnabled(true);
      } catch (error) {
        alert(error);
      }
    },
    primary: true
  }, "Enable Repository")))));
}
