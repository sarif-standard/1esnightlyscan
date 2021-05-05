import {PublicClientApplication} from "../_snowpack/pkg/@azure/msal-browser.js";
export const instance = new PublicClientApplication({
  auth: {
    clientId: "16acf595-5442-4b4b-8450-88b6ebfc098b",
    authority: "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47"
  }
});
