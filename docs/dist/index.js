import {MsalProvider} from "../web_modules/@azure/msal-react.js";
import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
import {NightlyScan} from "./nightlyScan.js";
import {instance} from "./publicClientApplication.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(MsalProvider, {
  instance
}, /* @__PURE__ */ React.createElement(NightlyScan, null)), document.getElementById("root"));
