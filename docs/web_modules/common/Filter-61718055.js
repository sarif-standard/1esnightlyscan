import { r as react } from './index-abdc4d2d.js';
import { a as ScreenContext } from './Screen-d33ca090.js';
import { O as Observer } from './SelectionObserver-a72f3be5.js';
import './core-1947a0ef.js';
import { I as Intersection } from './Intersection-4b10b9db.js';
import './Observable-24aa1084.js';

var ScreenSizeObserver = function (props) {
    return react.createElement(ScreenContext.Consumer, null, function (screen) { return react.createElement(Observer, { screenSize: screen.size }, props.children); });
};
/**
 * Conditionally renders children based on screen size.
 */
var ScreenSizeConditional = function (props) {
    return (react.createElement(ScreenSizeObserver, null, function (screenSizeProps) { return props.condition(screenSizeProps.screenSize) && props.children; }));
};

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Breakpoint/Breakpoint.css */
function __snowpack__injectStyle(css) {
  const headEl = document.head || document.getElementsByTagName('head')[0];
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  if (styleEl.styleSheet) {
    styleEl.styleSheet.cssText = css;
  } else {
    styleEl.appendChild(document.createTextNode(css));
  }
  headEl.appendChild(styleEl);
}
__snowpack__injectStyle(".bolt-breakpoint {\n  pointer-events: none; }\n\n.bolt-breakpoint-container {\n  height: 2px; }\n\n.bolt-breakpoint-observation {\n  bottom: 0;\n  left: 0;\n  top: 0; }\n");

function Breakpoint(props) {
    var observationElement = react.useState(function () { return react.createRef(); })[0];
    var lastBreakpointIndex = -2;
    var observationElementFunction = function () {
        return observationElement.current;
    };
    var observationDelegate = function () {
        var visibleWidth = observationElement.current.parentElement.clientWidth;
        var breakpoints = props.breakpoints, onBreakpoint = props.onBreakpoint;
        // Determine the longest visible breakpoint.
        var breakpointIndex = breakpoints.length - 1;
        for (; breakpointIndex >= 0; breakpointIndex--) {
            if (visibleWidth >= breakpoints[breakpointIndex]) {
                break;
            }
        }
        // Notify the caller about the change in the breakpoint.
        if (breakpointIndex !== lastBreakpointIndex) {
            lastBreakpointIndex = breakpointIndex;
            onBreakpoint(breakpointIndex, breakpoints[breakpointIndex]);
        }
    };
    // Compute the threshold we will use for the notification. This is the percentage
    // visibility of the observation element within the container.
    // NOTE: Due to rounding issues we need to know about all 3 pixels (1 before, at breakpoint, 1 after).
    var breakpoints = props.breakpoints;
    var observationWidth = breakpoints[breakpoints.length - 1] + 1;
    var threshold = [];
    for (var index = 0; index < breakpoints.length; index++) {
        threshold[index * 3] = (breakpoints[index] - 1) / observationWidth;
        threshold[index * 3 + 1] = breakpoints[index] / observationWidth;
        threshold[index * 3 + 2] = (breakpoints[index] + 1) / observationWidth;
    }
    return (react.createElement("div", { className: "bolt-breakpoint relative" },
        react.createElement(Intersection, { observationElement: observationElementFunction, onIntersect: observationDelegate, threshold: threshold },
            react.createElement("div", { className: "bolt-breakpoint-container absolute-fill scroll-hidden" },
                react.createElement("div", { className: "bolt-breakpoint-observation absolute", ref: observationElement, style: { width: observationWidth + "px" } })))));
}

var FilterOperatorType;
(function (FilterOperatorType) {
    /**
     * The filter's value should be treated as having the AND operator
     * e.g. If the value is ['a', 'c', 'd'] any item which does not contain
     * 'a' AND 'c' AND 'd' should not be included
     */
    FilterOperatorType["and"] = "and";
    /**
     * The filter's value should be treated as having the OR operator
     * e.g. If the value is ['a', 'c', 'd'] any item which contains
     * 'a' OR 'c' OR 'd' should be included
     */
    FilterOperatorType["or"] = "or";
})(FilterOperatorType || (FilterOperatorType = {}));
var FILTER_CHANGE_EVENT = "filter-changed";
react.createContext({
    filter: null,
    filterToggled: null
});

export { Breakpoint as B, FILTER_CHANGE_EVENT as F, ScreenSizeObserver as S, ScreenSizeConditional as a };
