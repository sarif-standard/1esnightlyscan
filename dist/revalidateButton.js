import {Button} from "../_snowpack/pkg/azure-devops-ui/Button.js";
import React from "../_snowpack/pkg/react.js";
export function RevalidateButton() {
  return /* @__PURE__ */ React.createElement(Button, {
    onClick: () => {
      const spamcopUrl = "https://sarif-standard.github.io/spamcop/";
      const spamcop = open(spamcopUrl);
      if (!spamcop)
        return;
      setTimeout(() => {
        spamcop.postMessage(document.location.href, spamcopUrl);
      }, 500);
    }
  }, "Revalidate Now");
}
