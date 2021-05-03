import {Button} from "../web_modules/azure-devops-ui/Button.js";
import React from "../web_modules/react.js";
export function RevalidateButton(props) {
  const {disabled, getSnippets} = props;
  return /* @__PURE__ */ React.createElement(Button, {
    disabled: disabled || !getSnippets,
    onClick: () => {
      const spamcopUrl = "https://sarif-standard.github.io/spamcop/";
      const spamcop = open(spamcopUrl);
      if (!spamcop)
        return;
      setTimeout(() => {
        spamcop.postMessage(getSnippets().join("\n\n"), spamcopUrl);
      }, 500);
    }
  }, "Revalidate Now");
}
