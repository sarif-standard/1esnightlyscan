import { n as noop } from './Util-bc2f8488.js';

/**
 * getTabIndex takes in a standard set of focus related properties to determine
 * the correct tabIndex for the element.
 */
function getTabIndex(props, focusGroupContext) {
    // Return an explicit tabIndex if one was requested.
    if (props.tabIndex !== undefined) {
        return props.tabIndex;
    }
    // Make element tabbable if:
    //  The element is not disabled,
    //  The element does not have the excludeTabStop property
    //  Optionally, the component is within a focusGroup and is the focused element
    if (!props.disabled &&
        !props.excludeTabStop &&
        (!focusGroupContext || focusGroupContext.onFocus === noop || focusGroupContext.focusedElementId === props.id)) {
        return 0;
    }
    // Allow the element to have focus as long as the excludeFocusZone was not supplied.
    if (!props.excludeFocusZone) {
        return -1;
    }
    // The element is not tabbable and wont have a tabIndex, therefore it can't get focus.
    return undefined;
}

export { getTabIndex as g };
