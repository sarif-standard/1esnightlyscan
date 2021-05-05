import { r as react } from '../common/index-abdc4d2d.js';
import { s as stubbedPublicClientApplication, I as InteractionStatus, L as Logger, W as WrapperSKU, a as EventType, E as EventMessageUtils } from '../common/index.es-d7a3fb9a.js';
import '../common/_commonjsHelpers-4f955397.js';

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * Stubbed context implementation
 * Only used when there is no provider, which is an unsupported scenario
 */

const defaultMsalContext = {
  instance: stubbedPublicClientApplication,
  inProgress: InteractionStatus.None,
  accounts: [],
  logger: /*#__PURE__*/new Logger({})
};
const MsalContext = /*#__PURE__*/react.createContext(defaultMsalContext);
const MsalConsumer = MsalContext.Consumer;
/**
 * Helper function to determine whether 2 arrays are equal
 * Used to avoid unnecessary state updates
 * @param arrayA
 * @param arrayB
 */

function accountArraysAreEqual(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  const comparisonArray = [...arrayB];
  return arrayA.every(elementA => {
    const elementB = comparisonArray.shift();

    if (!elementA || !elementB) {
      return false;
    }

    return elementA.homeAccountId === elementB.homeAccountId && elementA.localAccountId === elementB.localAccountId && elementA.username === elementB.username;
  });
}

/* eslint-disable header/header */
const name = "@azure/msal-react";
const version = "1.0.0-beta.2";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function MsalProvider({
  instance,
  children
}) {
  react.useEffect(() => {
    instance.initializeWrapperLibrary(WrapperSKU.React, version);
  }, [instance]); // Create a logger instance for msal-react with the same options as PublicClientApplication

  const logger = react.useMemo(() => {
    return instance.getLogger().clone(name, version);
  }, [instance]); // State hook to store accounts

  const [accounts, setAccounts] = react.useState([]); // State hook to store in progress value

  const [inProgress, setInProgress] = react.useState(InteractionStatus.Startup);
  react.useEffect(() => {
    const callbackId = instance.addEventCallback(message => {
      switch (message.eventType) {
        case EventType.LOGIN_SUCCESS:
        case EventType.SSO_SILENT_SUCCESS:
        case EventType.HANDLE_REDIRECT_END:
        case EventType.LOGIN_FAILURE:
        case EventType.SSO_SILENT_FAILURE:
        case EventType.LOGOUT_END:
        case EventType.ACQUIRE_TOKEN_SUCCESS:
        case EventType.ACQUIRE_TOKEN_FAILURE:
          const currentAccounts = instance.getAllAccounts();

          if (!accountArraysAreEqual(currentAccounts, accounts)) {
            logger.info("MsalProvider - updating account state");
            setAccounts(currentAccounts);
          } else {
            logger.info("MsalProvider - no account changes");
          }

          break;
      }
    });
    logger.verbose(`MsalProvider - Registered event callback with id: ${callbackId}`);
    return () => {
      // Remove callback when component unmounts or accounts change
      if (callbackId) {
        logger.verbose(`MsalProvider - Removing event callback ${callbackId}`);
        instance.removeEventCallback(callbackId);
      }
    };
  }, [instance, accounts, logger]);
  react.useEffect(() => {
    const callbackId = instance.addEventCallback(message => {
      const status = EventMessageUtils.getInteractionStatusFromEvent(message);

      if (status !== null) {
        logger.info(`MsalProvider - ${message.eventType} results in setting inProgress to ${status}`);
        setInProgress(status);
      }
    });
    logger.verbose(`MsalProvider - Registered event callback with id: ${callbackId}`);
    instance.handleRedirectPromise().catch(() => {
      // Errors should be handled by listening to the LOGIN_FAILURE event
      return;
    });
    return () => {
      if (callbackId) {
        logger.verbose(`MsalProvider - Removing event callback ${callbackId}`);
        instance.removeEventCallback(callbackId);
      }
    };
  }, [instance, logger]);
  const contextValue = {
    instance,
    inProgress,
    accounts,
    logger
  };
  return react.createElement(MsalContext.Provider, {
    value: contextValue
  }, children);
}

export { MsalProvider };
