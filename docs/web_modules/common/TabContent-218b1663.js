import { i as ObservableValue, _ as __extends, a as __assign, F as FocusZoneContext, I as Icon, b as IconSize, T as Tooltip, O as Observer, c as FocusGroupContext, k as __spreadArrays, g as ObservableLike, f as FocusZoneDirection, e as FocusZone, S as SurfaceContext, n as SurfaceBackground, j as ObservableArray } from './Icon.Props-aa4785d7.js';
import { b as shimRef, a as css, g as getSafeId, K as KeyCode } from './Util-c5aac4ed.js';
import { r as react } from './index-abdc4d2d.js';
import { B as Button, F as FriendlyNumberThousandsFormat, a as FriendlyNumberMillionsFormat, b as FriendlyNumberBillionsFormat } from './ExpandableButton-0197ca49.js';
import { g as getTabIndex } from './Focus-eab5ece8.js';

var ScreenBreakpoints;
(function (ScreenBreakpoints) {
    /**
     * Smallest breakpoint used to react which usually corresponds to a mobile screen < 600px.
     */
    ScreenBreakpoints[ScreenBreakpoints["xsmall"] = 1] = "xsmall";
    /**
     * Medium breakpoint used to react when the screen size >= 600px and less than
     * the next breakpoint if exists.
     */
    ScreenBreakpoints[ScreenBreakpoints["small"] = 600] = "small";
    /**
     * Medium breakpoint used to react when the screen size >= 1024px and less than
     * the next breakpoint if exists.
     */
    ScreenBreakpoints[ScreenBreakpoints["medium"] = 1024] = "medium";
    /**
     * Large breakpoint used to react when the screen size >= 1366px and less than
     * the next breakpoint if exists.
     */
    ScreenBreakpoints[ScreenBreakpoints["large"] = 1366] = "large";
    /**
     * Largest breakpoint used to react when the screen size >= 1920px and less than
     * the next breakpoint if exists.
     */
    ScreenBreakpoints[ScreenBreakpoints["xlarge"] = 1920] = "xlarge";
})(ScreenBreakpoints || (ScreenBreakpoints = {}));
var ScreenSize;
(function (ScreenSize) {
    ScreenSize[ScreenSize["xsmall"] = 0] = "xsmall";
    ScreenSize[ScreenSize["small"] = 1] = "small";
    ScreenSize[ScreenSize["medium"] = 2] = "medium";
    ScreenSize[ScreenSize["large"] = 3] = "large";
    ScreenSize[ScreenSize["xlarge"] = 4] = "xlarge";
})(ScreenSize || (ScreenSize = {}));
var ScreenContextImp = /** @class */ (function () {
    function ScreenContextImp() {
        var _this = this;
        this.onResize = function () {
            var size = _this.getCurrentSize();
            if (_this.size.value !== size) {
                _this.size.value = size;
            }
        };
        this.size = new ObservableValue(this.getCurrentSize());
        window.addEventListener("resize", this.onResize);
    }
    ScreenContextImp.prototype.getCurrentSize = function () {
        if (window.innerWidth >= ScreenBreakpoints.xlarge) {
            return ScreenSize.xlarge;
        }
        else if (window.innerWidth >= ScreenBreakpoints.large) {
            return ScreenSize.large;
        }
        else if (window.innerWidth >= ScreenBreakpoints.medium) {
            return ScreenSize.medium;
        }
        else if (window.innerWidth >= ScreenBreakpoints.small) {
            return ScreenSize.small;
        }
        else {
            return ScreenSize.xsmall;
        }
    };
    return ScreenContextImp;
}());
var ScreenContext = react.createContext(new ScreenContextImp());

// We need to monitor fine grained changes, especially when the list
// has horizontal scroll. You dont get 100% visible ever.
var defaultThreshold = [];
for (var index = 0; index <= 100; index++) {
    defaultThreshold.push(index / 100);
}
var IntersectionContextImpl = /** @class */ (function () {
    function IntersectionContextImpl() {
        var _this = this;
        this.callbacks = [];
        this.pending = [];
        this.rootMargin = 0;
        this.root = document.body;
        this.onIntersect = function (entries) {
            if (_this.observer) {
                for (var _i = 0, _a = _this.callbacks; _i < _a.length; _i++) {
                    var callback = _a[_i];
                    callback(entries, _this.observer);
                }
            }
        };
    }
    IntersectionContextImpl.prototype.connect = function (root, rootMargin, threshold) {
        if (rootMargin === void 0) { rootMargin = 0; }
        if (threshold === void 0) { threshold = defaultThreshold; }
        this.observer = new IntersectionObserver(this.onIntersect, { root: root, rootMargin: rootMargin + "px", threshold: threshold });
        this.rootMargin = rootMargin;
        this.root = root;
        for (var _i = 0, _a = this.pending; _i < _a.length; _i++) {
            var element = _a[_i];
            this.observer.observe(element);
        }
    };
    IntersectionContextImpl.prototype.disconnect = function () {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    IntersectionContextImpl.prototype.observe = function (element) {
        if (this.observer) {
            this.observer.observe(element);
        }
        else {
            this.pending.push(element);
        }
    };
    IntersectionContextImpl.prototype.register = function (callback) {
        this.callbacks.push(callback);
    };
    IntersectionContextImpl.prototype.unobserve = function (element) {
        var elementIndex = this.pending.indexOf(element);
        if (elementIndex >= 0) {
            this.pending.splice(elementIndex, 1);
        }
        if (this.observer) {
            this.observer.unobserve(element);
        }
    };
    IntersectionContextImpl.prototype.unregister = function (callback) {
        var callbackIndex = this.callbacks.indexOf(callback);
        if (callbackIndex >= 0) {
            this.callbacks.splice(callbackIndex, 1);
        }
    };
    return IntersectionContextImpl;
}());
var IntersectionContext = react.createContext(new IntersectionContextImpl());
/**
 * The Intersection is used to observe the changes of visibility in the children
 * of the rootElement. It also will notify the caller when the rootElement is
 * scrolled. It will pass an empty array of entries in the scorlling case.
 */
var Intersection = /** @class */ (function (_super) {
    __extends(Intersection, _super);
    function Intersection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new IntersectionContextImpl();
        _this.onScroll = function (event) {
            _this.state.onIntersect([]);
        };
        return _this;
    }
    // Render the provider around a SINGLE child. This is the element that is scrollable.
    Intersection.prototype.render = function () {
        var _this = this;
        var child = react.Children.only(this.props.children);
        // Ensure we get the ref to the child if a rootElement wasnt supplied.
        if (!this.props.rootElement) {
            this.rootElement = shimRef(child);
        }
        var onScroll;
        if (child.props.onScroll) {
            onScroll = function (event) {
                if (child.props.onScroll) {
                    child.props.onScroll(event);
                }
                _this.onScroll(event);
            };
        }
        else {
            onScroll = this.onScroll;
        }
        return (react.createElement(IntersectionContext.Provider, { value: this.state }, react.cloneElement(child, __assign(__assign({}, child.props), { ref: this.rootElement, onScroll: onScroll }), child.props.children)));
    };
    Intersection.prototype.componentDidMount = function () {
        var _a = this.props, observationElement = _a.observationElement, rootElement = _a.rootElement;
        var connectElement = null;
        if (rootElement) {
            if (typeof rootElement === "string") {
                connectElement = document.querySelector(rootElement);
            }
            else if (typeof rootElement === "function") {
                connectElement = rootElement();
            }
            else {
                connectElement = rootElement;
            }
            if (connectElement) {
                connectElement.addEventListener("scroll", this.onScroll);
                this.externalElement = connectElement;
            }
        }
        else if (this.rootElement) {
            connectElement = this.rootElement.current;
        }
        if (connectElement) {
            this.state.connect(connectElement, this.props.rootMargin, this.props.threshold);
            // Allow the creator of the intersection to observe intersection events.
            if (this.props.onIntersect) {
                this.state.register(this.props.onIntersect);
            }
            if (observationElement) {
                var observeElement = void 0;
                if (typeof observationElement === "string") {
                    observeElement = document.querySelector(observationElement);
                }
                else if (typeof observationElement === "function") {
                    observeElement = observationElement();
                }
                else {
                    observeElement = observationElement;
                }
                if (observeElement) {
                    this.state.observe(observeElement);
                }
            }
        }
    };
    Intersection.prototype.componentWillUnmount = function () {
        if (this.externalElement) {
            this.externalElement.removeEventListener("scroll", this.onScroll);
        }
        this.state.disconnect();
    };
    return Intersection;
}(react.Component));

var MoreActions = "More actions";
var RemovePillLabel = "Remove {0}";

var TabSize;
(function (TabSize) {
    /**
     * 32px tall with 14px text
     */
    TabSize["Compact"] = "compact";
    /**
     * 48px tall with 14px text
     */
    TabSize["Tall"] = "tall";
    /**
     * 40px tall with 17px text
     */
    TabSize["LargeLink"] = "large-link";
})(TabSize || (TabSize = {}));
/**
 * Defines the orientation of the child FocusZone and the flex orientation
 * of the list
 */
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
    Orientation[Orientation["Vertical"] = 1] = "Vertical";
})(Orientation || (Orientation = {}));

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Tabs/Tabs.css */
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
__snowpack__injectStyle("/**\r\n * Generalized focus treatment for components \r\n */\n.focus-treatment:focus {\n  outline: none; }\n\n.bolt-focus-visible .bolt-tab.focus-treatment:focus, .bolt-focus-visible .bolt-tab.focus-treatment.focused {\n  border-radius: 3px;\n  animation: ms-focus-shadow-with-border-pulse 4s ease-in-out infinite;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23), 0 0 0 1px rgba(0, 120, 212, 1);\n  box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)), 0 0 0 1px var(--focus-border-color,rgba(0, 120, 212, 1)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-tab.focus-treatment:focus, .bolt-focus-visible .bolt-tab.focus-treatment.focused {\n      animation: none; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-tab.focus-treatment:focus, .bolt-focus-visible .bolt-tab.focus-treatment.focused {\n      border: 1px solid Highlight;\n      forced-color-adjust: none;\n      color: windowtext; }\n      .bolt-focus-visible .bolt-tab.focus-treatment:focus > *, .bolt-focus-visible .bolt-tab.focus-treatment.focused > * {\n        forced-color-adjust: auto; } }\n\n.bolt-tab {\n  color: inherit; }\n\n.bolt-tabbar .vss-FilterBar {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 8px;\n  height: 32px; }\n  .bolt-tabbar .vss-FilterBar .vss-FilterBar--list {\n    align-items: center; }\n    .bolt-tabbar .vss-FilterBar .vss-FilterBar--list .vss-FilterBar--item.vss-FilterBar--item-keyword-container {\n      margin-right: 0px; }\n    .bolt-tabbar .vss-FilterBar .vss-FilterBar--list .vss-FilterBar--right-items .vss-FilterBar--action {\n      display: none; }\n\n.bolt-tabbar.sticky {\n  position: sticky;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--background-color,rgba(255, 255, 255, 1));\n  z-index: 2;\n  top: 0px; }\n\n.bolt-tabbar-grey.sticky {\n  background-color: rgba( 248, 248, 248 ,  1 );\n  background-color: rgba( var(--palette-neutral-2,248, 248, 248) ,  1 ); }\n\n.bolt-tabbar-on-callout.sticky {\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--callout-background-color,rgba(255, 255, 255, 1)); }\n\n@supports (-ms-ime-align: auto) {\n  .bolt-tabbar.sticky.sticky {\n    position: relative; } }\n\n@media screen and (max-width: 600px) {\n  .bolt-tabbar-tabs {\n    overflow-x: auto; } }\n\n.bolt-tabbar-tabs.compact .bolt-tab {\n  height: 2rem;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: transparent;\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  display: inline-block;\n  margin-right: 0px;\n  padding: 0 8px;\n  text-align: center;\n  position: relative;\n  border: 0;\n  overflow: visible; }\n  .bolt-tabbar-tabs.compact .bolt-tab .bolt-tab-text {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .bolt-tabbar-tabs.compact .bolt-tab .bolt-tab-inner-container {\n    height: 100%;\n    display: flex;\n    align-items: center; }\n  .bolt-tabbar-tabs.compact .bolt-tab .bolt-tab-badge {\n    margin-left: 4px;\n    max-width: 80px;\n    cursor: pointer; }\n    .bolt-tabbar-tabs.compact .bolt-tab .bolt-tab-badge .bolt-pill-focusable {\n      overflow: hidden; }\n  .bolt-tabbar-tabs.compact .bolt-tab:last-child {\n    margin-right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-tabbar-tabs.compact .bolt-tab {\n      border: 1px solid transparent; } }\n  .bolt-tabbar-tabs.compact .bolt-tab:hover {\n    color: inherit; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-tabbar-tabs.compact .bolt-tab:hover {\n        border-color: Highlight; } }\n  .bolt-tabbar-tabs.compact .bolt-tab .bolt-tab-text::before {\n    content: attr(data-content);\n    display: block;\n    font-weight: normal;\n    height: 0px;\n    visibility: hidden; }\n  .bolt-tabbar-tabs.compact .bolt-tab .bolt-tab-text::after {\n    content: attr(data-content);\n    display: block;\n    font-weight: 600;\n    height: 0px;\n    visibility: hidden; }\n  .bolt-tabbar-tabs.compact .bolt-tab .bolt-tab-icon + .bolt-tab-text {\n    margin-left: 4px; }\n  .bolt-tabbar-tabs.compact .bolt-tab.selected .bolt-tab-inner-container {\n    font-weight: 600;\n    padding-top: 2px;\n    border-bottom: 2px solid rgba(0, 120, 212, 1);\n    border-bottom: 2px solid var(--communication-background,rgba(0, 120, 212, 1)); }\n\n.bolt-tabbar-tabs.tall .bolt-tab {\n  height: 3rem;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: transparent;\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  display: inline-block;\n  margin-right: 0px;\n  padding: 0 8px;\n  text-align: center;\n  position: relative;\n  border: 0;\n  overflow: visible; }\n  .bolt-tabbar-tabs.tall .bolt-tab .bolt-tab-text {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .bolt-tabbar-tabs.tall .bolt-tab .bolt-tab-inner-container {\n    height: 100%;\n    display: flex;\n    align-items: center; }\n  .bolt-tabbar-tabs.tall .bolt-tab .bolt-tab-badge {\n    margin-left: 4px;\n    max-width: 80px;\n    cursor: pointer; }\n    .bolt-tabbar-tabs.tall .bolt-tab .bolt-tab-badge .bolt-pill-focusable {\n      overflow: hidden; }\n  .bolt-tabbar-tabs.tall .bolt-tab:last-child {\n    margin-right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-tabbar-tabs.tall .bolt-tab {\n      border: 1px solid transparent; } }\n  .bolt-tabbar-tabs.tall .bolt-tab:hover {\n    color: inherit; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-tabbar-tabs.tall .bolt-tab:hover {\n        border-color: Highlight; } }\n  .bolt-tabbar-tabs.tall .bolt-tab .bolt-tab-text::before {\n    content: attr(data-content);\n    display: block;\n    font-weight: normal;\n    height: 0px;\n    visibility: hidden; }\n  .bolt-tabbar-tabs.tall .bolt-tab .bolt-tab-text::after {\n    content: attr(data-content);\n    display: block;\n    font-weight: 600;\n    height: 0px;\n    visibility: hidden; }\n  .bolt-tabbar-tabs.tall .bolt-tab .bolt-tab-icon + .bolt-tab-text {\n    margin-left: 4px; }\n  .bolt-tabbar-tabs.tall .bolt-tab.selected .bolt-tab-inner-container {\n    font-weight: 600;\n    padding-top: 2px;\n    border-bottom: 2px solid rgba(0, 120, 212, 1);\n    border-bottom: 2px solid var(--communication-background,rgba(0, 120, 212, 1)); }\n\n.bolt-tabbar-tabs.large-link .bolt-tab {\n  height: 2.5rem;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: transparent;\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  display: inline-block;\n  margin-right: 0px;\n  padding: 0 8px;\n  text-align: center;\n  position: relative;\n  border: 0;\n  overflow: visible; }\n  .bolt-tabbar-tabs.large-link .bolt-tab .bolt-tab-text {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .bolt-tabbar-tabs.large-link .bolt-tab .bolt-tab-inner-container {\n    height: 100%;\n    display: flex;\n    align-items: center; }\n  .bolt-tabbar-tabs.large-link .bolt-tab .bolt-tab-badge {\n    margin-left: 4px;\n    max-width: 80px;\n    cursor: pointer; }\n    .bolt-tabbar-tabs.large-link .bolt-tab .bolt-tab-badge .bolt-pill-focusable {\n      overflow: hidden; }\n  .bolt-tabbar-tabs.large-link .bolt-tab:last-child {\n    margin-right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-tabbar-tabs.large-link .bolt-tab {\n      border: 1px solid transparent; } }\n  .bolt-tabbar-tabs.large-link .bolt-tab:hover {\n    color: inherit; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-tabbar-tabs.large-link .bolt-tab:hover {\n        border-color: Highlight; } }\n  .bolt-tabbar-tabs.large-link .bolt-tab .bolt-tab-text::before {\n    content: attr(data-content);\n    display: block;\n    font-weight: normal;\n    height: 0px;\n    visibility: hidden; }\n  .bolt-tabbar-tabs.large-link .bolt-tab .bolt-tab-text::after {\n    content: attr(data-content);\n    display: block;\n    font-weight: 600;\n    height: 0px;\n    visibility: hidden; }\n  .bolt-tabbar-tabs.large-link .bolt-tab .bolt-tab-icon + .bolt-tab-text {\n    margin-left: 4px; }\n  .bolt-tabbar-tabs.large-link .bolt-tab.selected .bolt-tab-inner-container {\n    font-weight: 600;\n    padding-top: 2px;\n    border-bottom: 2px solid rgba(0, 120, 212, 1);\n    border-bottom: 2px solid var(--communication-background,rgba(0, 120, 212, 1)); }\n\n.bolt-tablist {\n  border-right: 1px solid rgba(0, 0, 0, 0.20);\n  border-right: 1px solid var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20));\n  overflow: auto; }\n\n.bolt-tablist-tabs .bolt-tab {\n  height: 32px;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: transparent;\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  display: inline-block;\n  padding-left: 32px; }\n  .bolt-tablist-tabs .bolt-tab .bolt-tab-text {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .bolt-tablist-tabs .bolt-tab .bolt-tab-inner-container {\n    height: 100%;\n    display: flex;\n    align-items: center; }\n  .bolt-tablist-tabs .bolt-tab .bolt-tab-badge {\n    margin-left: 4px;\n    max-width: 80px;\n    cursor: pointer; }\n    .bolt-tablist-tabs .bolt-tab .bolt-tab-badge .bolt-pill-focusable {\n      overflow: hidden; }\n  .bolt-tablist-tabs .bolt-tab.selected {\n    background-color: rgba( 234, 234, 234 ,  1 );\n    background-color: rgba( var(--palette-neutral-8,234, 234, 234) ,  1 ); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-tablist-tabs .bolt-tab.selected {\n        background: highlight;\n        forced-color-adjust: none; }\n        .bolt-tablist-tabs .bolt-tab.selected .bolt-tab-text {\n          color: windowtext;\n          background: window; } }\n\n.bolt-tablist-tabs a.bolt-tab {\n  color: inherit; }\n\n.bolt-tablist-heading {\n  align-items: center;\n  height: 32px;\n  margin-top: 16px;\n  padding-left: 32px; }\n\n.bolt-tablist-title {\n  height: 48px;\n  align-items: center;\n  display: flex;\n  padding-left: 32px; }\n\n.bolt-tablist-subtitle {\n  padding-left: 32px; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Pill/Pill.css */
function __snowpack__injectStyle$1(css) {
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
__snowpack__injectStyle$1("/* \r\n    We're using absolute height and negative margins in this file\r\n    this is because borders make a lot of this logic weird, and the spec calls for overlap of borders\r\n    between what are logically parent and child elements\r\n    \r\n    eg. in Outlined pills, the button focus circle should exactly overlap the pill's outline\r\n\r\n    Using negative margin means we need to do less padding management of the container based on\r\n    what elements it happens to contain, and elements can just intrude on the left-right padding of the parent\r\n    */\n.bolt-pill {\n  border-radius: 120px;\n  border: 1px solid transparent;\n  white-space: nowrap; }\n  .bolt-pill.clickable {\n    cursor: pointer; }\n  .bolt-pill.count .bolt-pill-content {\n    font-weight: 600; }\n  .bolt-pill .bolt-pill-content {\n    margin: 0px 0.5rem;\n    padding: 2px 0; }\n  .bolt-pill .bolt-pill-icon {\n    margin-left: 0.25rem;\n    margin-right: 0.375rem; }\n  .bolt-pill.compact.has-filled-visual .bolt-pill-content, .bolt-pill.compact.has-icon .bolt-pill-content, .bolt-pill.regular.has-filled-visual .bolt-pill-content, .bolt-pill.regular.has-icon .bolt-pill-content, .bolt-pill.large.has-filled-visual .bolt-pill-content, .bolt-pill.large.has-icon .bolt-pill-content {\n    margin-left: 0; }\n  .bolt-pill.compact.has-remove-button .bolt-pill-content, .bolt-pill.regular.has-remove-button .bolt-pill-content, .bolt-pill.large.has-remove-button .bolt-pill-content {\n    margin-right: 0.375rem; }\n  .bolt-pill.compact {\n    font-size: 0.6875rem; }\n  .bolt-pill.regular {\n    font-size: 0.75rem; }\n    .bolt-pill.regular .bolt-pill-filled-visual {\n      width: 1.25rem; }\n  .bolt-pill.large {\n    font-size: 0.875rem; }\n    .bolt-pill.large .bolt-pill-filled-visual {\n      width: 1.5rem; }\n  .bolt-pill.standard {\n    background-color: rgba(0, 0, 0, 0.06);\n    background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n    .bolt-pill.standard.clickable.hover {\n      background-color: rgba(0, 0, 0, 0.10);\n      background-color: var(--palette-black-alpha-10,rgba(0, 0, 0, 0.10)); }\n  .bolt-pill.outlined {\n    background-color: transparent;\n    border-color: rgba(0, 0, 0, 0.20);\n    border-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n    .bolt-pill.outlined.clickable.hover {\n      background-color: rgba(0, 0, 0, 0.06);\n      background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n    .bolt-pill.outlined .bolt-pill-button {\n      border: 1px solid transparent; }\n  .bolt-pill.colored.dark {\n    color: white; }\n  .bolt-pill.colored.light {\n    color: black; }\n\n.bolt-focus-visible .bolt-pill:focus {\n  border-color: rgba(0, 120, 212, 1);\n  border-color: var(--communication-background,rgba(0, 120, 212, 1));\n  animation: ms-focus-shadow-pulse 4s ease-in-out infinite;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23);\n  box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23));\n  outline: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-pill:focus {\n      animation: none; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-pill:focus {\n      forced-color-adjust: none;\n      border-color: highlight; } }\n  @media screen and (-ms-high-contrast: black-on-white) {\n    .bolt-focus-visible .bolt-pill:focus {\n      outline: 1px solid highlight;\n      outline-offset: 1px; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-pill:focus {\n      background: transparent !important;\n      color: windowtext; } }\n\n.bolt-pill-icon {\n  padding: 2px; }\n\n.bolt-pill-filled-visual {\n  overflow: hidden;\n  border-radius: 50%;\n  margin-right: 4px; }\n\nbutton.bolt-pill-button.bolt-button.icon-only {\n  border-radius: 50%;\n  color: inherit;\n  margin-left: auto;\n  padding: 2px; }\n  button.bolt-pill-button.bolt-button.icon-only:hover {\n    background-color: rgba(0, 0, 0, 0.06);\n    background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n");

/**
 * Generate a string using a format string and arguments.
 *
 * @param format Format string
 * @param args Arguments to use as replacements
 */
function format(format) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return _stringFormat(false, format, args);
}
function _stringFormat(useLocale, format, args) {
    var result = "";
    for (var i = 0;;) {
        var open_1 = format.indexOf("{", i);
        var close_1 = format.indexOf("}", i);
        if (open_1 < 0 && close_1 < 0) {
            result += format.slice(i);
            break;
        }
        if (close_1 > 0 && (close_1 < open_1 || open_1 < 0)) {
            if (format.charAt(close_1 + 1) !== "}") {
                throw new Error("The format string contains an unmatched opening or closing brace.");
            }
            result += format.slice(i, close_1 + 1);
            i = close_1 + 2;
            continue;
        }
        result += format.slice(i, open_1);
        i = open_1 + 1;
        if (format.charAt(i) === "{") {
            result += "{";
            i++;
            continue;
        }
        if (close_1 < 0) {
            throw new Error("The format string contains an unmatched opening or closing brace.");
        }
        var brace = format.substring(i, close_1);
        var colonIndex = brace.indexOf(":");
        var argNumber = parseInt(colonIndex < 0 ? brace : brace.substring(0, colonIndex), 10);
        if (isNaN(argNumber)) {
            throw new Error("The format string is invalid.");
        }
        var argFormat = colonIndex < 0 ? "" : brace.substring(colonIndex + 1);
        var arg = args[argNumber];
        if (typeof arg === "undefined" || arg === null) {
            arg = "";
        }
        if (arg.toFormattedString) {
            result += arg.toFormattedString(argFormat);
        }
        else if (arg instanceof Date) {
            result += dateToString(arg, useLocale);
        }
        else if (arg.format) {
            result += arg.format(argFormat);
        }
        else {
            result += arg.toString();
        }
        i = close_1 + 1;
    }
    return result;
}
var localeFormatters = ("Intl" in window) ? {
    date: new Intl.DateTimeFormat(),
    dateTime: new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })
} : {};
/**
 * Converts a date to a string, optionally using the locale formatter
 *
 * @param value date to convert to a string
 * @param useLocale use the locale formatter when converting to a string
 */
function dateToString(value, useLocale) {
    var localeKey = typeof useLocale === "string" ? useLocale : "dateTime";
    if (useLocale) {
        var formatter = localeFormatters[localeKey];
        if (!formatter) {
            {
                formatter = localeFormatters["dateTime"];
            }
        }
        return formatter.format(value);
    }
    else {
        return value.toString();
    }
}

function darken(color, darkenFactor) {
    var darkenMultiplier = 1 - darkenFactor;
    return {
        red: color.red * darkenMultiplier,
        green: color.green * darkenMultiplier,
        blue: color.blue * darkenMultiplier
    };
}
function getColorString(color) {
    return "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
}
function isDark(color) {
    var luminance = color.red * 0.299 + color.green * 0.587 + color.blue * 0.114;
    return luminance <= 128;
}

var PillSize;
(function (PillSize) {
    PillSize[PillSize["compact"] = 0] = "compact";
    PillSize[PillSize["regular"] = 1] = "regular";
    PillSize[PillSize["large"] = 2] = "large";
})(PillSize || (PillSize = {}));
var PillVariant;
(function (PillVariant) {
    PillVariant[PillVariant["standard"] = 0] = "standard";
    PillVariant[PillVariant["outlined"] = 1] = "outlined";
    PillVariant[PillVariant["colored"] = 2] = "colored";
})(PillVariant || (PillVariant = {}));

var Pill = /** @class */ (function (_super) {
    __extends(Pill, _super);
    function Pill(props) {
        var _this = _super.call(this, props) || this;
        _this.getChildText = function () {
            var text = "";
            react.Children.map(_this.props.children, function (child) {
                if (typeof child === "string") {
                    text += child;
                }
            });
            return text;
        };
        _this.onKeyDown = function (event) {
            var keyCode = event.which;
            if (keyCode === KeyCode.enter) {
                _this.props.onClick && _this.props.onClick();
            }
        };
        _this.onMouseEnter = function (event) {
            _this.props.onMouseEnter && _this.props.onMouseEnter(event);
            _this.setState({
                isHoveringPrimaryElement: true
            });
        };
        /**
         * onMouseLeaveButton fires first; if it leaves the container too
         * onMouseLeave will setState again, which will prevent weird behavior
         */
        _this.onMouseLeave = function (event) {
            _this.props.onMouseLeave && _this.props.onMouseLeave(event);
            _this.setState({
                isHoveringPrimaryElement: false
            });
        };
        _this.onMouseLeaveButton = function () {
            _this.setState({
                isHoveringPrimaryElement: true
            });
        };
        _this.onMouseOverButton = function () {
            _this.setState({
                isHoveringPrimaryElement: false
            });
        };
        _this.state = {
            isHoveringPrimaryElement: false
        };
        return _this;
    }
    Pill.getColorStyle = function (color, isHoveringPrimaryElement, onClick) {
        if (!color) {
            return undefined;
        }
        var renderColor = onClick && isHoveringPrimaryElement ? darken(color, 0.06) : color;
        return { backgroundColor: getColorString(renderColor) };
    };
    Pill.getSizeClass = function (size) {
        switch (size) {
            case PillSize.compact:
                return "compact";
            case PillSize.large:
                return "large";
            case PillSize.regular:
            default:
                return "regular";
        }
    };
    Pill.getVariantClass = function (variant, color) {
        switch (variant) {
            case PillVariant.outlined:
                return "outlined";
            case PillVariant.colored:
                if (color) {
                    return css("colored", isDark(color) ? "dark" : "light");
                }
                else {
                    return "standard";
                }
            case PillVariant.standard:
            default:
                return "standard";
        }
    };
    Pill.getDerivedStateFromProps = function (props, state) {
        return state;
    };
    Pill.prototype.render = function () {
        var _this = this;
        var _a = this.props, ariaHidden = _a.ariaHidden, contentClassName = _a.contentClassName, className = _a.className, color = _a.color, _b = _a.containsCount, containsCount = _b === void 0 ? false : _b, iconProps = _a.iconProps, id = _a.id, onClick = _a.onClick, onFocus = _a.onFocus, onRemoveClick = _a.onRemoveClick, onRenderFilledVisual = _a.onRenderFilledVisual, _c = _a.size, size = _c === void 0 ? PillSize.regular : _c, _d = _a.variant, variant = _d === void 0 ? PillVariant.standard : _d;
        var isHoveringPrimaryElement = this.state.isHoveringPrimaryElement;
        var ariaLabel = this.props.ariaLabel || this.getChildText();
        return (react.createElement(FocusZoneContext.Consumer, null, function (zoneContext) { return (react.createElement("div", { "aria-label": ariaLabel, "aria-hidden": ariaHidden, className: css(className, "bolt-pill flex-row flex-center", Pill.getVariantClass(variant, color), Pill.getSizeClass(size), containsCount && "count", isHoveringPrimaryElement && "hover", onClick && "clickable", onRenderFilledVisual && "has-filled-visual", iconProps && !onRenderFilledVisual && "has-icon", onRemoveClick && "has-remove-button"), "data-focuszone": !_this.props.excludeFocusZone ? zoneContext.focuszoneId : undefined, id: getSafeId(id), onClick: onClick, onFocus: onFocus, onKeyDown: _this.onKeyDown, onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave, role: onClick ? "button" : "presentation", style: Pill.getColorStyle(color, isHoveringPrimaryElement, onClick), tabIndex: onClick || onFocus ? getTabIndex(_this.props) : undefined },
            onRenderFilledVisual && react.createElement("div", { className: "bolt-pill-filled-visual flex-noshrink" }, onRenderFilledVisual()),
            iconProps && !onRenderFilledVisual && react.createElement(Icon, __assign({}, iconProps, { className: css(iconProps.className, "bolt-pill-icon") })),
            react.createElement("div", { className: css(contentClassName, "bolt-pill-content text-ellipsis") }, _this.props.children),
            onRemoveClick && (react.createElement(Button, { ariaLabel: format(RemovePillLabel, ariaLabel), className: "bolt-pill-button", iconProps: { iconName: "Cancel", size: IconSize.inherit }, onClick: onRemoveClick, onMouseLeave: _this.onMouseLeaveButton, onMouseOver: _this.onMouseOverButton, subtle: true, tooltipProps: { text: format(RemovePillLabel, ariaLabel) } })))); }));
    };
    return Pill;
}(react.Component));

var TabBadge = function (props) {
    var children = props.children, className = props.className, _a = props.containsCount, containsCount = _a === void 0 ? true : _a, tooltipProps = props.tooltipProps;
    var badge = (react.createElement(Pill, { className: css(className, "bolt-tab-badge"), containsCount: containsCount, size: PillSize.compact, contentClassName: "text-ellipsis", excludeFocusZone: true, excludeTabStop: true }, children));
    if (tooltipProps) {
        badge = react.createElement(Tooltip, __assign({}, tooltipProps), badge);
    }
    return badge;
};

/**
 * Gets a friendly display value like "15K+" for a given numerical
 * value like 15217.
 *
 * @param value The numerical value to convert to a friendlier text string
 */
function getFriendlyDisplayValue(value) {
    var displayValue = "";
    var negative = false;
    if (isNaN(value)) {
        return "";
    }
    if (value < 0) {
        negative = true;
        value = -value;
    }
    value = Math.floor(value);
    if (value < 1000) {
        displayValue = value.toString();
    }
    else if (value < 1000000) {
        displayValue = format(FriendlyNumberThousandsFormat, Math.floor(value / 1000));
    }
    else if (value < 1000000000) {
        displayValue = format(FriendlyNumberMillionsFormat, Math.floor(value / 1000000));
    }
    else {
        displayValue = format(FriendlyNumberBillionsFormat, Math.floor(value / 1000000000));
    }
    return (negative && value > 0 ? "-" : "") + displayValue;
}

/**
 * Presentational component that represents a single tab.
 */
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function (event) {
            var url = _this.props.url;
            var updatePivot = true;
            // If ctrl-click is pressed, and there is a URL specified for this item, then
            // don't handle the click here, allowing the browser to perform a navigation
            // (i.e. open in a new tab/window)
            if (event.ctrlKey) {
                if (url) {
                    updatePivot = false;
                }
            }
            if (updatePivot) {
                event.preventDefault();
                _this.updateSelectedItem(event);
            }
        };
        _this.onKeyDown = function (event) {
            if (!event.defaultPrevented) {
                if (event.which === KeyCode.space || event.which === KeyCode.enter) {
                    event.preventDefault();
                    _this.updateSelectedItem(event);
                }
            }
        };
        return _this;
    }
    Tab.prototype.render = function () {
        var _this = this;
        var _a = this.props, ariaLabel = _a.ariaLabel, index = _a.index, setSize = _a.setSize, iconProps = _a.iconProps, id = _a.id, isSelected = _a.isSelected, renderBadge = _a.renderBadge, url = _a.url;
        var TagName = url ? "a" : "div";
        return (react.createElement(Observer, { name: this.props.name, badgeCount: this.props.badgeCount }, function (props) {
            var name = props.name;
            return (react.createElement(FocusGroupContext.Consumer, null, function (focusGroupContext) { return (react.createElement(FocusZoneContext.Consumer, null, function (zoneContext) {
                var badge = renderBadge ? renderBadge() : _this.renderBadge(props.badgeCount);
                var icon = iconProps !== undefined && Icon(__assign({ className: "bolt-tab-icon" }, iconProps));
                var text = name && (react.createElement("span", { className: "bolt-tab-text", "data-content": name }, name));
                var tooltipProps = icon && !name && ariaLabel
                    ? {
                        text: ariaLabel,
                        overflowOnly: false
                    }
                    : {
                        text: name,
                        overflowDetected: overflowDetected,
                        overflowOnly: true
                    };
                return (react.createElement(Tooltip, __assign({}, tooltipProps),
                    react.createElement(TagName, { "aria-label": ariaLabel, "aria-posinset": index !== undefined ? index + 1 : undefined, "aria-selected": isSelected, "aria-setsize": setSize, className: css(_this.props.className, "bolt-tab focus-treatment flex-noshrink", isSelected && "selected"), "data-focuszone": zoneContext.focuszoneId, href: url, id: getSafeId("tab-" + id), key: id, onClick: _this.onClick, onKeyDown: _this.onKeyDown, role: "tab", tabIndex: focusGroupContext.focusedElementId === "tab-" + id ? 0 : -1 },
                        react.createElement("span", { className: "bolt-tab-inner-container" },
                            icon,
                            text,
                            badge))));
            })); }));
        }));
    };
    Tab.prototype.renderBadge = function (badgeCount) {
        var badgeDisplayValue = badgeCount !== undefined ? getFriendlyDisplayValue(badgeCount) : undefined;
        var badgeTooltip = undefined;
        if (badgeCount && badgeDisplayValue !== badgeCount.toString()) {
            badgeTooltip = badgeCount.toString();
        }
        var badge = null;
        if (badgeDisplayValue) {
            var tooltipProps = badgeTooltip ? { text: badgeTooltip } : undefined;
            badge = react.createElement(TabBadge, { tooltipProps: tooltipProps }, badgeDisplayValue);
        }
        return badge;
    };
    /**
     * Updates the state with the new selected pivot.
     */
    Tab.prototype.updateSelectedItem = function (ev) {
        var onClick = this.props.onClick;
        if (ev && this.props.onBeforeTabChange && !this.props.onBeforeTabChange(ev, this.props.id, this.props.url)) {
            ev.preventDefault();
            return;
        }
        // Update notifiers
        if (onClick) {
            onClick(this.props.id);
        }
    };
    return Tab;
}(react.Component));
function overflowDetected(anchorElement) {
    var overflowElement = anchorElement.querySelector(".bolt-tab-text");
    if (overflowElement) {
        return overflowElement && overflowElement.scrollWidth > Math.ceil(overflowElement.offsetWidth);
    }
    return false;
}

var TabProviderContext = react.createContext({
    selectedId: undefined,
    tabs: [],
    commandBarItems: [],
    renderContent: undefined,
    renderFilterBar: undefined
});
var TabProvider = /** @class */ (function (_super) {
    __extends(TabProvider, _super);
    function TabProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabProvider.prototype.render = function () {
        var _this = this;
        return (react.createElement(Observer, { selectedTabId: this.props.selectedTabId, tabs: this.props.providers }, function (props) {
            var selectedTabId = props.selectedTabId;
            var selectedTab = undefined;
            var tabs = __spreadArrays(props.tabs.sort(function (a, b) { return (a.order || 100) - (b.order || 100); }));
            tabs.forEach(function (tab) {
                if (tab.id === selectedTabId) {
                    selectedTab = tab;
                }
            });
            if (selectedTab === undefined) {
                selectedTab = {
                    id: selectedTabId,
                    name: undefined,
                    render: undefined
                };
            }
            return (react.createElement(TabProviderContext.Provider, { value: {
                    selectedId: selectedTab.id,
                    tabs: tabs,
                    commandBarItems: selectedTab.commandBarItems,
                    renderContent: selectedTab.render,
                    renderFilterBar: selectedTab.renderFilterBar
                } }, _this.props.children));
        }));
    };
    return TabProvider;
}(react.Component));

/**
 * Renders all children as focusable, selectable elements and indicates whether or not they are
 * currently selected.
 */
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.onTabClick = function (newTabId) {
            var onSelectedTabChanged = _this.props.onSelectedTabChanged;
            if (onSelectedTabChanged) {
                onSelectedTabChanged(newTabId);
            }
        };
        _this.onSelectedTabIdChanged = function () {
            _this.forceUpdate();
        };
        if (ObservableLike.isObservable(props.selectedTabId)) {
            props.selectedTabId.subscribe(_this.onSelectedTabIdChanged);
        }
        return _this;
    }
    Tabs.prototype.componentWillUnmount = function () {
        if (ObservableLike.isObservable(this.props.selectedTabId)) {
            this.props.selectedTabId.unsubscribe(this.onSelectedTabIdChanged);
        }
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.tabSize, tabSize = _b === void 0 ? TabSize.Tall : _b, _c = _a.orientation, orientation = _c === void 0 ? Orientation.Horizontal : _c;
        var selectedTabId = this.props.selectedTabId && ObservableLike.getValue(this.props.selectedTabId);
        var childrenCount = 0;
        var childIndex = 0;
        var idToIndex = {};
        var defaultId;
        react.Children.map(this.props.children, function (child) {
            if (child && child.type === Tab) {
                idToIndex[child.props.id] = childIndex++;
                childrenCount++;
                if (!defaultId && child.props.id) {
                    defaultId = "tab-" + child.props.id;
                }
            }
        });
        var children = react.Children.map(this.props.children, function (child) {
            if (child && typeof child.type !== "string") {
                // We don't want to pass along the following props, unless the
                // child is a React component that will presumably know what
                // to do with them.
                var isSelected = (child.props.id && child.props.id.toLocaleLowerCase()) === (selectedTabId && selectedTabId.toLocaleLowerCase());
                var onClick = _this.onTabClick;
                return react.cloneElement(child, __assign(__assign({}, child.props), { isSelected: isSelected,
                    onClick: onClick, index: idToIndex[child.props.id], setSize: childrenCount }));
            }
            return child;
        });
        var orientationClass = orientation === Orientation.Vertical ? "flex-column" : "flex-row";
        var focusZoneDirection = orientation === Orientation.Vertical ? FocusZoneDirection.Vertical : FocusZoneDirection.Horizontal;
        return (react.createElement(FocusZone, { direction: focusZoneDirection, focusGroupProps: { defaultElementId: defaultId } },
            react.createElement("div", { "aria-label": this.props.ariaLabel, className: css(this.props.className, "bolt-tabs", orientationClass, tabSize), role: "tablist" }, children)));
    };
    return Tabs;
}(react.Component));

/**
 * Renders tabs (provided as children or through a tab provider context) as well as addtional
 * content such as in-line filters, view options, etc.
 *
 * Tabs provided directly as children will always be place before contributed tabs.
 */
/** @class */ ((function (_super) {
    __extends(TabBar, _super);
    function TabBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderAdditionalContent = function (renderFilterBar) {
            if (renderFilterBar) {
                return renderFilterBar(true);
            }
            return _this.props.renderAdditionalContent && _this.props.renderAdditionalContent();
        };
        _this.createTab = function (tab) {
            return (react.createElement(Tab, { badgeCount: tab.badgeCount, key: tab.id, id: tab.id, name: tab.name, onBeforeTabChange: tab.onBeforeTabChange, url: tab.url && ObservableLike.getValue(tab.url), renderBadge: tab.renderBadge }));
        };
        return _this;
    }
    TabBar.prototype.render = function () {
        var _this = this;
        return (react.createElement(Observer, { size: this.context.size }, function (props) {
            // If the screen is really small (mobile) then we don't let tabbar grow and let its container
            // to scroll in overflow case. Instead, we enable horizontal scrolling for tabs only.
            var smallScreen = props.size === ScreenSize.xsmall;
            return (react.createElement(SurfaceContext.Consumer, null, function (surfaceContext) { return (react.createElement(TabProviderContext.Consumer, null, function (tabProviderContext) {
                var selectedTabId = _this.props.selectedTabId || tabProviderContext.selectedId;
                return (react.createElement("div", { className: css(_this.props.className, "bolt-tabbar flex-row flex-center flex-noshrink", !_this.props.disableSticky && props.size >= ScreenSize.small && "sticky", surfaceContext.background === SurfaceBackground.neutral && "bolt-tabbar-grey", surfaceContext.background === SurfaceBackground.callout && "bolt-tabbar-on-callout") },
                    react.createElement(Tabs, __assign({ selectedTabId: selectedTabId }, _this.props, { className: css(_this.props.tabsClassName, "bolt-tabbar-tabs flex-grow flex-noshrink", !smallScreen && "flex-noshrink", smallScreen && "h-scroll-auto") }),
                        _this.props.children,
                        tabProviderContext.tabs.map(_this.createTab)),
                    _this.renderAdditionalContent(tabProviderContext.renderFilterBar)));
            })); }));
        }));
    };
    TabBar.contextType = ScreenContext;
    return TabBar;
})(react.Component));

var TabGroupProviderContext = react.createContext({ groups: [] });
var TabGroupProvider = /** @class */ (function (_super) {
    __extends(TabGroupProvider, _super);
    function TabGroupProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabGroupProvider.prototype.render = function () {
        var _this = this;
        return (react.createElement(Observer, { groups: this.props.providers }, function (props) {
            var groups = props.groups.sort(function (a, b) { return (a.order || 100) - (b.order || 100); });
            return react.createElement(TabGroupProviderContext.Provider, { value: { groups: groups } }, _this.props.children);
        }));
    };
    return TabGroupProvider;
}(react.Component));

/** @class */ ((function (_super) {
    __extends(TabList, _super);
    function TabList(props) {
        var _this = _super.call(this, props) || this;
        _this.generateGroupMap = function (groups) {
            if (!groups) {
                return {};
            }
            var map = {};
            groups.forEach(function (group) {
                map[group.id] = group;
            });
            return map;
        };
        _this.processChildren = function (groups) {
            var childGroups = {};
            react.Children.forEach(_this.props.children, function (child) {
                if (child) {
                    var groupId = child.props.groupId || "";
                    if (!childGroups[groupId]) {
                        childGroups[groupId] = {
                            items: [child],
                            groupProps: groups[groupId] || {
                                id: "",
                                name: "",
                                order: -1
                            }
                        };
                    }
                    else {
                        childGroups[groupId].items.push(child);
                    }
                }
            });
            return childGroups;
        };
        _this.processContributions = function (tabs, baseGroups, childGroups) {
            tabs.forEach(function (tab) {
                var mappedTab = _this.createRow(tab);
                var groupId = tab.groupId || "";
                if (!childGroups[groupId]) {
                    childGroups[groupId] = {
                        items: [mappedTab],
                        groupProps: baseGroups[groupId] || {
                            id: "",
                            name: "",
                            order: -1
                        }
                    };
                }
                else {
                    childGroups[groupId].items.push(mappedTab);
                }
            });
            return childGroups;
        };
        _this.processGroups = function (groups) {
            var elements = [];
            // Flattening to allow for sort
            var flatMappedGroups = [];
            for (var groupId in groups) {
                flatMappedGroups.push(groups[groupId]);
            }
            flatMappedGroups
                .sort(function (a, b) { return (a.groupProps.order || 1000) - (b.groupProps.order || 1000); })
                .forEach(function (group) {
                group.groupProps.name &&
                    elements.push(react.createElement("div", { key: group.groupProps.name, className: "bolt-tablist-heading title-xs flex-noshrink" }, group.groupProps.name));
                elements.push.apply(elements, group.items);
            });
            return elements;
        };
        _this.createRow = function (tab) {
            return (react.createElement(Tab, { key: tab.id, id: tab.id, name: tab.name, url: tab.url && ObservableLike.getValue(tab.url), onBeforeTabChange: tab.onBeforeTabChange, iconProps: tab.iconProps }));
        };
        _this.renderTitle = function (header) {
            return react.createElement("div", { className: "bolt-tablist-title title-m flex-noshrink" }, header);
        };
        _this.renderSubTitle = function (header) {
            return react.createElement("div", { className: "bolt-tablist-subtitle secondary-text flex-noshrink text-ellipsis" }, header);
        };
        _this.onSelectedTabIdChanged = function () {
            _this.forceUpdate();
        };
        return _this;
    }
    TabList.prototype.render = function () {
        var _this = this;
        return (react.createElement(TabGroupProviderContext.Consumer, null, function (provider) {
            var _a = _this.props, className = _a.className, tabGroups = _a.tabGroups;
            var mergedGroups = tabGroups ? tabGroups.concat(provider.groups) : provider.groups;
            var groupMap = _this.generateGroupMap(mergedGroups);
            return (react.createElement(TabProviderContext.Consumer, null, function (provider) {
                var selectedTabId = _this.props.selectedTabId || provider.selectedId;
                var tabGroups = _this.processContributions(provider.tabs, groupMap, _this.processChildren(groupMap));
                var trueChildren = _this.processGroups(tabGroups);
                return (react.createElement("div", { className: css(className, "bolt-tablist flex-column") },
                    _this.props.listTitle && _this.renderTitle(_this.props.listTitle),
                    _this.props.listSubTitle && _this.renderSubTitle(_this.props.listSubTitle),
                    react.createElement(Tabs, __assign({ ariaLabel: _this.props.listTitle, selectedTabId: selectedTabId }, _this.props, { className: "bolt-tablist-tabs", orientation: Orientation.Vertical }), trueChildren)));
            }));
        }));
    };
    return TabList;
})(react.Component));

/**
 * Hooks into tab provider context to render the tab's provided content, as well
 * as optionally the a filter bar if it is to be rendered outside of the TabBar.
 */
/** @class */ ((function (_super) {
    __extends(TabContent, _super);
    function TabContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabContent.prototype.render = function () {
        var _this = this;
        return (react.createElement(TabProviderContext.Consumer, null, function (tabProviderContext) {
            var content;
            if (tabProviderContext.renderContent) {
                var filterBar = tabProviderContext.renderFilterBar && tabProviderContext.renderFilterBar(false);
                content = (react.createElement(react.Fragment, null,
                    filterBar,
                    tabProviderContext.renderContent()));
            }
            else {
                content = react.createElement(react.Fragment, null, _this.props.children);
            }
            return (react.createElement(TabProvider, { providers: new ObservableArray([]), selectedTabId: tabProviderContext.selectedId || "" }, content));
        }));
    };
    return TabContent;
})(react.Component));

export { Intersection as I, MoreActions as M, ScreenContext as S, TabProviderContext as T, ScreenSize as a, IntersectionContext as b, TabProvider as c, TabGroupProvider as d };
