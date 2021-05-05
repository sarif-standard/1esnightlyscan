import {AccountEntity, EventMessageUtils, EventType} from "../_snowpack/pkg/@azure/msal-browser.js";
import {useEffect, useState} from "../_snowpack/pkg/react.js";
function accountIsEqual(a, b) {
  if (a !== void 0 && b !== void 0)
    return AccountEntity.accountInfoIsEqual(a, b);
  if (a !== void 0 && b === void 0)
    return false;
  if (a === void 0 && b !== void 0)
    return false;
  return true;
}
export function useFirstAuthenticatedAccount(instance) {
  const [account, setAccount] = useState(void 0);
  useEffect(() => {
    let isReady = false;
    const callbackId = instance.addEventCallback((message) => {
      switch (message.eventType) {
        case EventType.LOGIN_SUCCESS:
        case EventType.SSO_SILENT_SUCCESS:
        case EventType.HANDLE_REDIRECT_END:
        case EventType.LOGIN_FAILURE:
        case EventType.SSO_SILENT_FAILURE:
        case EventType.LOGOUT_END:
        case EventType.ACQUIRE_TOKEN_SUCCESS:
        case EventType.ACQUIRE_TOKEN_FAILURE:
          if (EventMessageUtils.getInteractionStatusFromEvent(message) !== null)
            isReady = true;
          const firstAccount = instance.getAllAccounts().shift();
          if (isReady && !accountIsEqual(account, firstAccount)) {
            setAccount(firstAccount);
          }
          break;
      }
    });
    return () => void (callbackId && instance.removeEventCallback(callbackId));
  }, [instance, account]);
  return account;
}
