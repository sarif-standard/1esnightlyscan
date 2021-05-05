import {MsalProvider} from "../_snowpack/pkg/@azure/msal-react.js";
import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import {NightlyScan} from "./nightlyScan.js";
import {instance} from "./publicClientApplication.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(MsalProvider, {
  instance
}, /* @__PURE__ */ React.createElement(NightlyScan, null)), document.getElementById("root"));
