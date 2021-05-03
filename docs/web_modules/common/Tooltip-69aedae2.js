import { _ as __extends, a as __assign, O as ObservableValue, b as __spreadArrays } from './Observable-24aa1084.js';
import './core-1947a0ef.js';
import { r as react } from './index-abdc4d2d.js';
import { n as noop, g as getSafeId, s as shimRef, K as KeyCode, a as getRelationship, E as ElementRelationship, c as css, i as isFunctionalChildren, b as getFocusVisible, M as Mouse } from './Util-e30cbaf3.js';
import { r as reactDom } from './index-2be6b7dd.js';
import { O as Observer } from './SelectionObserver-a72f3be5.js';
import { S as SurfaceContext, a as SurfaceBackground } from './Surface-779be6fe.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/TooltipEx/Tooltip.css */
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
__snowpack__injectStyle(".bolt-tooltip {\n  max-width: 320px;\n  animation: tooltip-fade-in 300ms ease-in; }\n  .bolt-tooltip .bolt-callout-content {\n    background-color: transparent; }\n\n.bolt-tooltip-content {\n  background-color: rgba( 51, 51, 51 ,  0.95 );\n  background-color: rgba( var(--palette-neutral-80,51, 51, 51) ,  0.95 );\n  border-radius: 2px;\n  color: rgba( 255, 255, 255 ,  1 );\n  color: rgba( var(--palette-neutral-0,255, 255, 255) ,  1 );\n  padding: 8px 12px;\n  text-align: left;\n  /* @NOTE: List break-all first and break-word second, IE11/Firefox dont support break-word, they will fallback to break-all */\n  word-break: break-all;\n  word-break: break-word; }\n\n.bolt-tooltip-fade-out {\n  animation: tooltip-fade-out 300ms ease-in; }\n  .bolt-tooltip-fade-out.bolt-callout {\n    pointer-events: none; }\n\n@keyframes tooltip-fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes tooltip-fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Callout/Callout.css */
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
__snowpack__injectStyle$1(".bolt-callout {\n  background-color: transparent;\n  pointer-events: auto; }\n\n/* NOTE: Create a element that overlaps the container by 5000px on all sides.\r\n * This allows callouts to layout naturally and not be influenced by edges of\r\n * the window.\r\n */\n.bolt-portal.bolt-layout-relative {\n  bottom: -5000px;\n  left: -5000px;\n  right: -5000px;\n  top: -5000px; }\n\n.bolt-light-dismiss {\n  pointer-events: auto; }\n\n.bolt-callout-modal {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-callout-modal {\n      background: transparent; } }\n\n.bolt-callout-content {\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--callout-background-color,rgba(255, 255, 255, 1));\n  z-index: 1; }\n\n.bolt-callout-shadow {\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, .132);\n  box-shadow: 0px 6px 12px var(--callout-shadow-color,rgba(0, 0, 0, .132)); }\n\n.bolt-callout-extra-large {\n  width: 800px; }\n\n.bolt-callout-large {\n  width: 640px; }\n\n.bolt-callout-medium {\n  width: 480px; }\n\n.bolt-callout-small {\n  width: 320px; }\n\n.bolt-callout-auto {\n  width: auto; }\n");

var FocusWithinContext = react.createContext({});
var FocusWithin = /** @class */ (function (_super) {
    __extends(FocusWithin, _super);
    function FocusWithin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blurTimeout = -1;
        _this.focusCount = 0;
        _this.focus = false;
        /**
         * onBlur method that should be attached to the onBlur handler of the
         * continers root element.
         */
        _this.onBlur = function () {
            // Don't let the focus count go below 0.
            // We have seen cases where we get a blur event, even when we
            // do not have focus. One such example is the Office Fabric TrapZone,
            // which will lose focus, then regain focus and stop propagation on
            // the event.
            _this.focusCount = Math.max(0, _this.focusCount - 1);
            // Clear any previous timeout if we somehow got a second blur event before
            // ever processing the timeout from the first one.
            if (_this.blurTimeout !== -1) {
                window.clearTimeout(_this.blurTimeout);
            }
            // We must delay the blur processing for two basic reasons:
            // 1) If focus is transitioning to a child element we will fire a Blur
            //  followed quickly by a Focus even though focus never left the element.
            //  This causes problems for things like menus that close on loss of focus.
            // 2) IE 11 fires the blur before the focus (no other browser does this)
            //  and this causes the same issue above but also causes focusCount
            //  inconsistencies.
            _this.blurTimeout = window.setTimeout(function () {
                _this.blurTimeout = -1;
                if (!_this.focusCount) {
                    _this.focus = false;
                    // If we are tracking the focus state we will force a component update.
                    if (_this.props.updateStateOnFocusChange) {
                        _this.forceUpdate();
                    }
                    if (_this.props.onBlur) {
                        _this.props.onBlur();
                    }
                }
            }, 0);
        };
        /**
         * onFocus method that should be attached to the onFocus handler of the
         * continer's root element.
         */
        _this.onFocus = function (event) {
            _this.focusCount++;
            // If focus is just entering one of the child components and not just moving
            // one child to another we will call the onFocus delegate if supplied.
            if (!_this.focus) {
                _this.focus = true;
                // If we are tracking the focus state we will force a component update.
                if (_this.props.updateStateOnFocusChange) {
                    _this.forceUpdate();
                }
                if (_this.props.onFocus) {
                    _this.props.onFocus(event);
                }
            }
        };
        return _this;
    }
    FocusWithin.prototype.render = function () {
        var _this = this;
        return (react.createElement(FocusWithinContext.Consumer, null, function (focusWithinContext) {
            var children;
            var newProps = {
                onBlur: _this.onBlur,
                onFocus: _this.onFocus
            };
            // Save ou parent focus within for potential communication.
            _this.parentFocusWithin = focusWithinContext.focusWithin;
            if (typeof _this.props.children === "function") {
                var child = _this.props.children;
                // For functional components we pass the hasFocus attribute as well.
                newProps.hasFocus = _this.focus;
                children = child(newProps);
            }
            else {
                var child = react.Children.only(_this.props.children);
                children = react.cloneElement(child, __assign(__assign({}, child.props), newProps), child.props.children);
            }
            return react.createElement(FocusWithinContext.Provider, { value: { focusWithin: _this } }, children);
        }));
    };
    /**
     * componentWillUnmount is used to cleanup the component state.
     *
     * @NOTE: The main thing we need to deal with is when this component is unmounted
     * while it has focus. We need to get this FocusWithin and all of its parents state
     * updated since focus will move directly to the body without a blur event.
     */
    FocusWithin.prototype.componentWillUnmount = function () {
        if (this.blurTimeout !== -1) {
            window.clearTimeout(this.blurTimeout);
            this.blurTimeout = -1;
        }
        if (this.focusCount > 0) {
            this.unmountWithFocus(false);
        }
    };
    /**
     * hasFocus returns true if the focus is contained within the focus component
     * hierarchy. This includes portals, the element may or may not
     * be a direct descendant of the focus component in the DOM structure.
     */
    FocusWithin.prototype.hasFocus = function () {
        return this.focusCount > 0;
    };
    /**
     * When the focusWithin unmounts we need to determine if we currently have focus.
     * If we do, focus will be moved silently to the body. We need to cleanup the
     * focusWithin's that are affected by this silent change.
     */
    FocusWithin.prototype.unmountWithFocus = function (fromParent) {
        if (this.focusCount > 0) {
            this.focusCount--;
            if (this.focusCount > 0) {
                // If we are tracking the focus state we will force a component update.
                if (fromParent) {
                    this.focusCount = 0;
                    this.focus = false;
                    if (this.props.updateStateOnFocusChange) {
                        this.forceUpdate();
                    }
                    if (this.props.onBlur) {
                        this.props.onBlur();
                    }
                }
            }
            // Notify the parent focus within that the mounted focus component is unmounting.
            if (this.parentFocusWithin) {
                this.parentFocusWithin.unmountWithFocus(true);
            }
        }
    };
    FocusWithin.defaultProps = {
        updateStateOnFocusChange: true
    };
    return FocusWithin;
}(react.Component));

var FocusGroupContext = react.createContext({
    onFocus: noop
});
var FocusGroup = /** @class */ (function (_super) {
    __extends(FocusGroup, _super);
    function FocusGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.onFocus = function (focusedElementId) {
            // Only setState if the focusedElement is changing. This prevents us from setting the state
            // when focus keeps getting fired on the same element. Example: Browser keeps losing and
            // getting focus.
            if (_this.state.focusedElementId !== focusedElementId) {
                _this.setState({ focusedElementId: focusedElementId });
            }
        };
        _this.state = { defaultElementId: props.defaultElementId, focusedElementId: props.defaultElementId };
        return _this;
    }
    FocusGroup.getDerivedStateFromProps = function (props, state) {
        if (state.defaultElementId !== props.defaultElementId) {
            return __assign(__assign({}, state), { defaultElementId: props.defaultElementId, focusedElementId: props.defaultElementId });
        }
        return null;
    };
    FocusGroup.prototype.render = function () {
        return (react.createElement(FocusGroupContext.Provider, { value: {
                focusedElementId: this.state.focusedElementId,
                onFocus: this.onFocus
            } }, this.props.children));
    };
    FocusGroup.prototype.focus = function (elementId) {
        var id = getSafeId(elementId || this.state.focusedElementId);
        if (id) {
            var element = document.getElementById(id);
            if (element) {
                element.focus();
            }
        }
    };
    return FocusGroup;
}(react.Component));

/**
 * Which direction focus moves within a FocusZone
 */
var FocusZoneDirection;
(function (FocusZoneDirection) {
    FocusZoneDirection[FocusZoneDirection["Horizontal"] = 1] = "Horizontal";
    FocusZoneDirection[FocusZoneDirection["Vertical"] = 2] = "Vertical";
})(FocusZoneDirection || (FocusZoneDirection = {}));
/**
 * The preprocessKeyStroke method can return one of the following values
 * to modify how the current and parent focus zones treat the keystroke.
 */
var FocusZoneKeyStroke;
(function (FocusZoneKeyStroke) {
    /**
     * Dont alter the keystroke in any way.
     */
    FocusZoneKeyStroke[FocusZoneKeyStroke["IgnoreNone"] = 1] = "IgnoreNone";
    /**
     * All parent focus zones should ignore the keystroke, but it should be
     * processed normally by the current focuszone.
     */
    FocusZoneKeyStroke[FocusZoneKeyStroke["IgnoreParents"] = 2] = "IgnoreParents";
    /**
     * All focuszones that receive the keystroke should ignore it.
     */
    FocusZoneKeyStroke[FocusZoneKeyStroke["IgnoreAll"] = 3] = "IgnoreAll";
})(FocusZoneKeyStroke || (FocusZoneKeyStroke = {}));

// The FocusZoneContext carries the identifier for the current FocusZone.
var FocusZoneContext = react.createContext({ direction: undefined, focuszoneId: undefined });
// As an event propagates through the hierarchy of focus zones it may
// be marked as ignored. This allows a child focus zone to mark an event
// as "pass-through" for all of its parents.
var ignoreEvent = false;
// An internal identifier used to created unique focuszoneId's.
var focuszoneId = 1;
var FocusZone = /** @class */ (function (_super) {
    __extends(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this.rootElements = [];
        _this.state = {
            focuszoneId: "focuszone-" + focuszoneId++
        };
        return _this;
    }
    FocusZone.prototype.render = function () {
        var _this = this;
        // We need to shim the KeyDown event on each of the children. This allows us to capture
        // the event and process it for focus changes.
        var content = (react.createElement(FocusZoneContext.Consumer, null, function (parentContext) { return (react.createElement(FocusZoneContext.Provider, { value: { direction: _this.props.direction, focuszoneId: _this.state.focuszoneId } }, react.Children.map(_this.props.children, function (child, index) {
            if (child === null || typeof child === "string" || typeof child === "number") {
                return child;
            }
            // All direct children MUST be DOM elements.
            if (typeof child.type !== "string") {
                throw Error("Children of a focus zone MUST be DOM elements");
            }
            // Save the supplied keydown event handler so we can forward the event to it.
            var existingOnKeyDown = child.props.onKeyDown;
            var existingOnFocus = child.props.onFocus;
            // Save the component reference for this element, either the one from the original
            // component or the one we added.
            _this.rootElements[index] = shimRef(child);
            return react.cloneElement(child, __assign(__assign({ key: index }, child.props), { ref: _this.rootElements[index], onFocus: function (event) {
                    var _a;
                    if (existingOnFocus) {
                        existingOnFocus(event);
                    }
                    var focusCurrent = document.activeElement;
                    for (var index_1 = 0; index_1 < _this.rootElements.length; index_1++) {
                        var rootElement = (_a = _this.rootElements[index_1]) === null || _a === void 0 ? void 0 : _a.current;
                        if (rootElement && (rootElement.contains(focusCurrent) || rootElement === focusCurrent)) {
                            _this.lastFocusElement = event.target;
                        }
                    }
                }, onKeyDown: function (event) {
                    var ignoreKeystroke = FocusZoneKeyStroke.IgnoreNone;
                    if (existingOnKeyDown) {
                        existingOnKeyDown(event);
                    }
                    // Determine whether or not this focuszone wants to preprocess this keystroke
                    // and mark the current propagation as ignored.
                    if (!ignoreEvent && _this.props.preprocessKeyStroke) {
                        ignoreKeystroke = _this.props.preprocessKeyStroke(event);
                        if (ignoreKeystroke === FocusZoneKeyStroke.IgnoreAll) {
                            ignoreEvent = true;
                        }
                    }
                    if (!ignoreEvent) {
                        if (!event.defaultPrevented && !_this.props.disabled) {
                            var nodeName = event.target.nodeName;
                            var offset = void 0;
                            // Logic to handle input / text area tags
                            var inputPosition = void 0;
                            var inputLength = void 0;
                            if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
                                var input = event.target;
                                try {
                                    inputPosition = typeof input.selectionStart === "number" ? input.selectionStart : undefined;
                                }
                                catch (_a) {
                                    // Microsoft Edge throws InvalidStateError when calling 'input.selectionStart' on non-supported input element types
                                    // according to https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
                                    // Ignore this error
                                }
                                inputLength = input.value.length;
                            }
                            var allowLeftArrow = inputPosition === undefined || (inputPosition === 0 && _this.props.allowArrowOutOfInputs);
                            var allowRightArrow = inputPosition === undefined ||
                                inputLength === undefined ||
                                (inputPosition === inputLength && _this.props.allowArrowOutOfInputs);
                            switch (event.which) {
                                case KeyCode.upArrow:
                                    if (nodeName !== "TEXTAREA") {
                                        if (_this.props.direction === FocusZoneDirection.Vertical) {
                                            offset = -1;
                                        }
                                    }
                                    break;
                                case KeyCode.downArrow:
                                    if (nodeName !== "TEXTAREA") {
                                        if (_this.props.direction === FocusZoneDirection.Vertical) {
                                            offset = 1;
                                        }
                                    }
                                    break;
                                case KeyCode.rightArrow:
                                    if (allowRightArrow) {
                                        if (_this.props.direction === FocusZoneDirection.Horizontal) {
                                            offset = 1;
                                        }
                                    }
                                    break;
                                case KeyCode.leftArrow:
                                    if (allowLeftArrow) {
                                        if (_this.props.direction === FocusZoneDirection.Horizontal) {
                                            offset = -1;
                                        }
                                    }
                                    break;
                                case KeyCode.tab:
                                    if (_this.props.handleTabKey) {
                                        offset = event.shiftKey ? -1 : 1;
                                    }
                                    break;
                                case KeyCode.enter:
                                    if (_this.props.activateOnEnter) {
                                        event.target.click();
                                    }
                            }
                            if (offset) {
                                if (_this.focusNextElement(event, offset)) {
                                    event.preventDefault();
                                }
                            }
                        }
                    }
                    if (ignoreKeystroke === FocusZoneKeyStroke.IgnoreParents) {
                        ignoreEvent = true;
                    }
                    // Perform any supplied event post processing.
                    if (!ignoreEvent && _this.props.postprocessKeyStroke) {
                        if (_this.props.postprocessKeyStroke(event) === FocusZoneKeyStroke.IgnoreParents) {
                            ignoreEvent = true;
                        }
                    }
                    // Once we reach the root focuszone we need to clear the ignoredEvent.
                    if (!parentContext.focuszoneId) {
                        ignoreEvent = false;
                    }
                } }));
        }))); }));
        if (this.props.focusGroupProps) {
            content = react.createElement(FocusGroup, __assign({}, this.props.focusGroupProps), content);
        }
        return content;
    };
    FocusZone.prototype.componentDidMount = function () {
        var focusElement;
        // If a defaultActiveElement is supplied we will focus it. It is not required to
        // be member of the focus zone, it can be any element.
        if (this.props.focusOnMount) {
            var defaultActiveElement = this.props.defaultActiveElement;
            var focusElements = this.getFocusElements(typeof defaultActiveElement === "function" ? defaultActiveElement() : defaultActiveElement);
            if (focusElements.length > 0) {
                focusElement = focusElements[0];
            }
        }
        if (focusElement) {
            focusElement.focus();
        }
    };
    FocusZone.prototype.focusNextElement = function (event, offset) {
        var focusElements = this.getFocusElements();
        if (focusElements.length > 0) {
            var focusCurrent = document.activeElement;
            var rootElements = this.rootElements;
            // Determine if an element in the focus zone has focus.
            var focusIndex = focusElements.indexOf(focusCurrent);
            // Focus may not be on an element in the zone so we need to
            // figure out which one we are between in this case.
            if (focusIndex === -1) {
                var index = 0;
                // Determine if the element is in a portal or directly within a focuszone root.
                for (index = 0; index < rootElements.length; index++) {
                    var elementRef = rootElements[index];
                    if (elementRef.current) {
                        if (elementRef.current.contains(event.target)) {
                            break;
                        }
                    }
                }
                // If this is coming from a portal, we will use the element that last had focus.
                if (index === this.rootElements.length && this.lastFocusElement) {
                    focusIndex = focusElements.indexOf(this.lastFocusElement);
                }
                else {
                    for (index = 0; index < focusElements.length; index++) {
                        var relationship = getRelationship(focusCurrent, focusElements[index]);
                        if (relationship === ElementRelationship.Before) {
                            focusIndex = index - (offset > 0 ? 1 : 0);
                            break;
                        }
                        else if (relationship === ElementRelationship.Child) {
                            focusIndex = index;
                            break;
                        }
                        else if (relationship === ElementRelationship.After && index === focusElements.length - 1) {
                            focusIndex = focusElements.length;
                        }
                    }
                }
            }
            // Move to the next component in the set of focus zone components.
            focusIndex += offset;
            // If the FocusZone supports circular navigation and we are on the end
            // we will move to the element on the opposite end.
            if (this.props.circularNavigation) {
                if (focusIndex < 0) {
                    focusIndex = focusElements.length - 1;
                }
                else if (focusIndex >= focusElements.length) {
                    focusIndex = 0;
                }
            }
            // If we ended up on a focusable element update the focus.
            if (focusIndex > -1 && focusIndex < focusElements.length) {
                focusElements[focusIndex].focus();
                return true;
            }
        }
        return false;
    };
    FocusZone.prototype.getFocusElements = function (customSelector) {
        var focusElements = [];
        var selector = customSelector;
        // If a custom selector was supplied we will use it.
        if (!selector) {
            // The default selector will just pick up items tagged with this focuszone id.
            selector = "[data-focuszone~=" + this.state.focuszoneId + "]";
            // If we are including the default elements from the DOM we will add the
            // default selector to our list of selectors.
            if (this.props.includeDefaults) {
                selector += ",a[href],button,iframe,input,select,textarea,[tabIndex]";
            }
        }
        // Filter the elements that matched our query to the elements that are elligible
        // for receiving focus in this focuszone.
        for (var _i = 0, _a = this.rootElements; _i < _a.length; _i++) {
            var rootElement = _a[_i];
            if (rootElement.current) {
                var focusChildren = rootElement.current.querySelectorAll(selector);
                // Check if the root element matches our selector.
                if (rootElement.current.matches(selector) && this.isFocusElement(rootElement.current, customSelector)) {
                    focusElements.push(rootElement.current);
                }
                // Check all the children of the root that are potential focus elements.
                for (var rootIndex = 0; rootIndex < focusChildren.length; rootIndex++) {
                    var element = focusChildren[rootIndex];
                    if (this.isFocusElement(element, customSelector)) {
                        focusElements.push(element);
                    }
                }
            }
        }
        return focusElements;
    };
    /**
     * isFocusElement is used to determine whether or not an element should participate
     * in this focus zone.
     *
     * @param element HTML Element that you are testing as a valid focus element.
     *
     * @param customSelector A custom selector that is used to match elements with
     *  negative tabIndex. These wont match normally unless targetted by the custom
     *  selector.
     */
    FocusZone.prototype.isFocusElement = function (element, customSelector) {
        // Filter out elements that are disabled.
        if (element.hasAttribute("disabled")) {
            return false;
        }
        if (!customSelector) {
            // Filter out elements that are not visible.
            if (!this.props.skipHiddenCheck) {
                var style = window.getComputedStyle(element);
                if (style.visibility === "hidden" ||
                    style.display === "none" ||
                    !(element.offsetWidth || element.offsetHeight || element.getClientRects().length)) {
                    return false;
                }
            }
            // Filter out elements with negative tabIndex that aren't
            // explicity marked for this focuszone.
            var tabIndex = element.getAttribute("tabindex");
            if (tabIndex && parseInt(tabIndex) < 0) {
                var focuszoneId_1 = element.getAttribute("data-focuszone");
                if (!focuszoneId_1 || focuszoneId_1.indexOf(this.state.focuszoneId) < 0) {
                    return false;
                }
            }
        }
        return true;
    };
    return FocusZone;
}(react.Component));

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Portal/Portal.css */
function __snowpack__injectStyle$2(css) {
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
__snowpack__injectStyle$2(".bolt-portal-host {\n  position: fixed;\n  /* 1 million used because OF used it and the product has built around this number */\n  z-index: 1000000; }\n\n.bolt-portal {\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 10; }\n");

/**
 * The Portal component is used to create a React Portal through a well known component.
 * This component allows the platform to control where portals are rooted in the document
 * and ensure these are managed properly.
 */
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal(props) {
        var _this = _super.call(this, props) || this;
        _this.mounted = new ObservableValue(false);
        // Determine the element that will host the portal.
        var parentElement = _this.props.portalElement;
        if (!parentElement && _this.props.portalSelector) {
            parentElement = document.querySelector(_this.props.portalSelector);
        }
        if (!parentElement) {
            parentElement = document.querySelector(".bolt-portal-host");
            if (!parentElement) {
                parentElement = document.createElement("div");
                parentElement.className = "bolt-portal-host absolute-fill no-events scroll-hidden";
                document.body.appendChild(parentElement);
            }
        }
        if (_this.props.parentClassName && !parentElement.classList.contains(_this.props.parentClassName)) {
            parentElement.classList.add(_this.props.parentClassName);
        }
        _this.parentElement = parentElement;
        // Create the hosting element for the portal.
        _this.hostElement = document.createElement("div");
        _this.hostElement.classList.add("bolt-portal");
        _this.hostElement.classList.add("absolute-fill");
        // If custom class's are supplied add them (1 at a time since IE doesnt support multiple args).
        if (props.className) {
            var classNames = props.className.split(" ");
            for (var _i = 0, classNames_1 = classNames; _i < classNames_1.length; _i++) {
                var className = classNames_1[_i];
                _this.hostElement.classList.add(className);
            }
        }
        return _this;
    }
    Portal.prototype.render = function () {
        var _this = this;
        // NOTE: We dont render the children until after we have mounted the portal.
        //  If the caller needs to access the document while mounting the content this
        //  will ensure the children of the portal are not mounted until the portal
        //  is attached to the DOM.
        return reactDom.createPortal(react.createElement(Observer, { mounted: this.mounted }, function (props) { return (props.mounted ? _this.props.children : null); }), this.hostElement);
    };
    Portal.prototype.componentDidMount = function () {
        this.parentElement.appendChild(this.hostElement);
        this.mounted.value = true;
    };
    Portal.prototype.componentWillUnmount = function () {
        this.parentElement.removeChild(this.hostElement);
    };
    return Portal;
}(react.Component));

var Location;
(function (Location) {
    Location["start"] = "start";
    Location["center"] = "center";
    Location["end"] = "end";
})(Location || (Location = {}));
/**
 * The position method is used to set the location of an absolutely positioned element
 * using the standard positioning properties. The names of these properties conform to
 * the naming patterns used in the Material Popover https://material-ui.com. They
 * are not exact but follow the same pattern.
 *
 * For an example usage, look at the Callout component and how it uses this method to
 * position the element in the page.
 *
 * @param transformElement The element that is being positioned/transformed.
 * @param transformOrigin The origin within the transformed element to align with the
 *  anchor position.
 * @param anchorOffset Offset on the anchorElement that is applied to the computed location
 *  given the element/origin/point.
 * @param anchorElement The element used to anchor the position of the transformed element.
 *  The caller must supply either an anchorElement and anchorOrigin, or anchorPoint.
 * @param anchorOrigin When an anchorElement is supplied the anchorOrigin defines the location
 *  on the anchorElement used for positioning.
 * @param anchorPoint Instead of an anchorElement the caller can use an explicit point
 *  to be used as the basis for the anchorLocation. The anchorOffset will still be applied.
 */
function position(transformElement, transformOrigin, anchorOffset, anchorElement, anchorOrigin, anchorPoint) {
    // Translate the anchor location information to a point on the anchor element
    // if a specific point was not supplied.
    if (!anchorPoint) {
        if (anchorElement && anchorOrigin) {
            anchorPoint = pointFromOrigin(anchorOrigin, anchorElement.getBoundingClientRect());
        }
        else {
            return;
        }
    }
    var xPosition = anchorPoint.x;
    var yPosition = anchorPoint.y;
    var translateXFactor = 0;
    var translateYFactor = 0;
    // Update the anchorPoint by the anchorOffset if one was supplied.
    if (anchorOffset) {
        xPosition += anchorOffset.horizontal;
        yPosition += anchorOffset.vertical;
    }
    // Special case Start/Start since we dont need the parent rect.
    if (transformOrigin.horizontal !== Location.start || transformOrigin.vertical !== Location.start) {
        var windowHeight = document.documentElement.clientHeight;
        var windowWidth = document.documentElement.clientWidth;
        // Compute the effective horizontal position of the element.
        switch (transformOrigin.horizontal) {
            case Location.end:
                xPosition = windowWidth - xPosition;
                break;
            case Location.center:
                translateXFactor = -50;
                break;
        }
        // Compute the effective vertical position of the element.
        switch (transformOrigin.vertical) {
            case Location.end:
                yPosition = windowHeight - yPosition;
                break;
            case Location.center:
                translateYFactor = -50;
                break;
        }
    }
    // Update the transform elements position (it needs to be absolutely positioned in the window).
    // Void out other styles in case this is a re-call
    if (transformOrigin.horizontal !== Location.end) {
        transformElement.style.left = xPosition + 5000 + "px";
        transformElement.style.right = "";
    }
    else {
        transformElement.style.left = "";
        transformElement.style.right = xPosition + 5000 + "px";
    }
    if (transformOrigin.vertical !== Location.end) {
        transformElement.style.top = yPosition + 5000 + "px";
        transformElement.style.bottom = "";
    }
    else {
        transformElement.style.top = "";
        transformElement.style.bottom = yPosition + 5000 + "px";
    }
    // Apply centering as necessary
    if (translateXFactor !== 0 || translateYFactor !== 0) {
        transformElement.style.transform = "translate(" + translateXFactor + "%, " + translateYFactor + "%)";
    }
    else {
        transformElement.style.transform = "";
    }
}
/**
 * updateLayout is used to move an element to the "best" location based on it
 * layout. This will look at all the positioning attributes and move the
 * transformElement to a new location based on its size. This is usually done
 * after an initial call to position. After the element is positioned the
 * caller determines if the transformElement is in the desired location, which
 * generally translates to, is it clipped in the window.
 *
 * This is delayed because when position is called the transformElement is
 * frequently not fully laid out and we need to wait other a force reflow will
 * happen and cause performance issues.
 *
 * @param transformElement The element that is being positioned/transformed.
 * @param transformOrigin The origin within the transformed element to align with the
 *  anchor position.
 * @param anchorOffset Offset on the anchorElement that is applied to the computed location
 *  given the element/origin/point.
 * @param anchorElement The element used to anchor the position of the transformed element.
 *  The caller must supply either an anchorElement and anchorOrigin, or anchorPoint.
 * @param anchorOrigin When an anchorElement is supplie the anchorOrigin defines the location
 *  on the anchorElement used for positioning.
 * @param anchorPoint Instead of an anchorElement the caller can use an explicit point
 *  to be used as the basis for the anchorLocation. The anchorOffset will still be applied.
 */
function updateLayout(transformElement, transformOrigin, anchorOffset, anchorElement, anchorOrigin, anchorPoint) {
    var windowHeight = document.documentElement.clientHeight;
    var windowWidth = document.documentElement.clientWidth;
    // Get the current layout for the transformElement to determine the best layout.
    var transformElementRect = transformElement.getBoundingClientRect();
    // Determine which edges of the transform element are clipped by the window.
    var clippedBottom = Math.floor(transformElementRect.bottom) > windowHeight;
    var clippedRight = Math.floor(transformElementRect.right) > windowWidth;
    var clippedLeft = Math.floor(transformElementRect.left) < 0;
    var clippedTop = Math.floor(transformElementRect.top) < 0;
    // If any of the edges are clipped we will update the layout to a better layout if available.
    if (clippedBottom || clippedRight || clippedLeft || clippedTop) {
        // If we are positioned based on a point and and offset we will flip over
        // the clipped edge.
        if (anchorPoint) {
            // Flip vertically top/bottom depending on the clipping edges.
            if (clippedTop !== clippedBottom) {
                if (clippedTop) {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.bottom < windowHeight / 2 - 10) {
                        if (transformOrigin.vertical === Location.end) {
                            transformOrigin.vertical = Location.start;
                        }
                    }
                }
                else {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.top > windowHeight / 2 + 10) {
                        if (transformOrigin.vertical === Location.start) {
                            transformOrigin.vertical = Location.end;
                        }
                    }
                }
                if (anchorOffset) {
                    anchorOffset.vertical = -anchorOffset.vertical;
                }
            }
            // Flip hoizontally left/right depending on the clipping edges.
            if (clippedLeft !== clippedRight) {
                if (clippedLeft) {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.right < windowWidth / 2 - 10) {
                        if (transformOrigin.horizontal === Location.end) {
                            transformOrigin.horizontal = Location.start;
                        }
                    }
                }
                else {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.left > windowWidth / 2 + 10) {
                        if (transformOrigin.horizontal === Location.start) {
                            transformOrigin.horizontal = Location.end;
                        }
                    }
                }
                if (anchorOffset) {
                    anchorOffset.horizontal = -anchorOffset.horizontal;
                }
            }
        }
        // If the element is positioned based on an anchorElement/anchorOrigin
        // we need to look determine if the element can slide along any axis.
        else if (anchorOrigin && anchorElement) {
            // Flip vertically top/bottom depending on the clipping edges.
            if (clippedTop !== clippedBottom) {
                if (clippedTop) {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.bottom < windowHeight / 2 - 10) {
                        if (transformOrigin.vertical === Location.end && anchorOrigin.vertical === Location.start) {
                            transformOrigin.vertical = Location.start;
                            anchorOrigin.vertical = Location.end;
                        }
                        else if (transformOrigin.vertical === Location.center ||
                            (transformOrigin.vertical === Location.end && anchorOrigin.vertical === Location.end)) {
                            transformOrigin.vertical = Location.start;
                            anchorOrigin.vertical = Location.start;
                        }
                    }
                }
                else {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.top > windowHeight / 2 + 10) {
                        if (transformOrigin.vertical === Location.start && anchorOrigin.vertical === Location.end) {
                            transformOrigin.vertical = Location.end;
                            anchorOrigin.vertical = Location.start;
                        }
                        else if (transformOrigin.vertical === Location.center ||
                            (transformOrigin.vertical === Location.start && anchorOrigin.vertical === Location.start)) {
                            transformOrigin.vertical = Location.end;
                            anchorOrigin.vertical = Location.end;
                        }
                    }
                }
                if (anchorOffset) {
                    anchorOffset.vertical = -anchorOffset.vertical;
                }
            }
            if (clippedLeft !== clippedRight) {
                // Flip hoizontally left/right depending on the clipping edges.
                if (clippedLeft) {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.right < windowWidth / 2 - 10) {
                        if (transformOrigin.horizontal === Location.end && anchorOrigin.horizontal === Location.start) {
                            transformOrigin.horizontal = Location.start;
                            anchorOrigin.horizontal = Location.end;
                        }
                        else if (transformOrigin.horizontal === Location.center ||
                            (transformOrigin.horizontal === Location.end && anchorOrigin.horizontal === Location.end)) {
                            transformOrigin.horizontal = Location.start;
                            anchorOrigin.horizontal = Location.start;
                        }
                    }
                }
                else {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.left > windowWidth / 2 + 10) {
                        if (transformOrigin.horizontal === Location.start && anchorOrigin.horizontal === Location.end) {
                            transformOrigin.horizontal = Location.end;
                            anchorOrigin.horizontal = Location.start;
                        }
                        else if (transformOrigin.horizontal === Location.center ||
                            (transformOrigin.horizontal === Location.start && anchorOrigin.horizontal === Location.start)) {
                            transformOrigin.horizontal = Location.end;
                            anchorOrigin.horizontal = Location.end;
                        }
                    }
                }
                if (anchorOffset) {
                    anchorOffset.horizontal = -anchorOffset.horizontal;
                }
            }
        }
        // Update the position based on the changes made to the location details.
        position(transformElement, transformOrigin, anchorOffset, anchorElement, anchorOrigin, anchorPoint);
        // If the repositioned element doesnt fit, we will put max-height/max-width to
        // force the entire element into the viewport.
        transformElementRect = transformElement.getBoundingClientRect();
        // Determine which edges of the transform element are clipped by the window.
        clippedBottom = Math.floor(transformElementRect.bottom) > windowHeight;
        clippedRight = Math.floor(transformElementRect.right) > windowWidth;
        clippedLeft = Math.floor(transformElementRect.left) < 0;
        clippedTop = Math.floor(transformElementRect.top) < 0;
        // Since we are clipped compute the updated sizes and position a second time.
        if (clippedTop || clippedBottom || clippedLeft || clippedRight) {
            if (clippedTop || clippedBottom) {
                var maxHeight = transformElementRect.height -
                    (clippedTop ? -transformElementRect.top : 0) -
                    (clippedBottom ? transformElementRect.bottom - windowHeight : 0) -
                    5;
                transformElement.style.maxHeight = maxHeight + "px";
            }
            if (clippedLeft || clippedRight) {
                var maxWidth = transformElementRect.width -
                    (clippedLeft ? -transformElementRect.left : 0) -
                    (clippedRight ? transformElementRect.right - windowWidth : 0) -
                    5;
                transformElement.style.maxWidth = maxWidth + "px";
            }
            // Note the change to the component with the overflow className.
            transformElement.classList.add("overflow");
            // Update its position one final time.
            position(transformElement, transformOrigin, anchorOffset, anchorElement, anchorOrigin, anchorPoint);
        }
    }
}
function pointFromOrigin(location, rect) {
    var x;
    var y;
    // Compute the horizontal position based on the rectangle.
    switch (location.horizontal) {
        case Location.start:
            x = rect.left;
            break;
        case Location.end:
            x = rect.right;
            break;
        default:
            x = rect.left + rect.width / 2;
    }
    // Compute the vertical position based on the rectangle.
    switch (location.vertical) {
        case Location.start:
            y = rect.top;
            break;
        case Location.end:
            y = rect.bottom;
            break;
        default:
            y = rect.top + rect.height / 2;
    }
    return { x: x, y: y };
}

/**
 * The TimerManagement class is used to track a set of timers.
 */
var TimerManagement = /** @class */ (function () {
    function TimerManagement(parent) {
        this.disposed = false;
        this.immediateIds = null;
        this.intervals = [];
        this.timeouts = [];
        this.parent = parent || null;
    }
    /**
     * clearAllTimers is used to clear any active timers in the object.
     */
    TimerManagement.prototype.clearAllTimers = function () {
        for (var _i = 0, _a = this.intervals; _i < _a.length; _i++) {
            var intervalId = _a[_i];
            window.clearInterval(intervalId);
        }
        for (var _b = 0, _c = this.timeouts; _b < _c.length; _b++) {
            var timeoutId = _c[_b];
            window.clearTimeout(timeoutId);
        }
        this.intervals.splice(0, this.intervals.length);
        this.timeouts.splice(0, this.timeouts.length);
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    TimerManagement.prototype.clearImmediate = function (id) {
        if (this.immediateIds && this.immediateIds[id]) {
            window.clearTimeout(id);
            delete this.immediateIds[id];
        }
    };
    /**
     * clearInterval is used to stop the series of callbacks that was setup through setInterval.
     *
     * @param intervalId - The id returned from eh setInterval call that you want stopped.
     */
    TimerManagement.prototype.clearInterval = function (intervalId) {
        window.clearInterval(intervalId);
        this.removeInterval(intervalId);
    };
    /**
     * clearTimeout is used to stop a timeout callback that was setup through setTimeout.
     *
     * @param timeoutId - The id returned from the setTimeout call that you want stopped.
     */
    TimerManagement.prototype.clearTimeout = function (timeoutId) {
        window.clearTimeout(timeoutId);
        this.removeTimeout(timeoutId);
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    TimerManagement.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this.disposed) {
            if (!this.immediateIds) {
                this.immediateIds = {};
            }
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this.immediateIds) {
                        delete _this.immediateIds[immediateId];
                    }
                    callback.apply(_this.parent);
                }
                catch (e) { }
            };
            immediateId = window.setTimeout(setImmediateCallback, 0);
            this.immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * setInterval is used to setup a callback that is called on an interval.
     *
     * @param callback - The callback that should be called each interval time period.
     *
     * @param milliseconds - The number of milliseconds between each callback.
     *
     * @param args - Optional variable argument list passed to the callback.
     *
     * @returns - returns a handle to the interval, this can be used to cancel through clearInterval method.
     */
    TimerManagement.prototype.setInterval = function (callback, milliseconds) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        // Create the timer, and add a method to track the completion so we can
        // remove our tracked reference.
        var intervalId = window.setInterval.apply(window, __spreadArrays([callback, milliseconds], args));
        this.intervals.push(intervalId);
        return intervalId;
    };
    /**
     * setTimeout is used to setup a onetime callback that is called after the specified timeout.
     *
     * @param callback - The callback that should be called when the time period has elapsed.
     *
     * @param milliseconds - The number of milliseconds before the callback should be called.
     *  Even if a timeout of 0 is used the callback will be executed asynchronouly.
     *
     * @param args - Optional variable argument list passed to the callback.
     *
     * @returns - returns a handle to the timeout, this can be used to cancel through clearTimeout method.
     */
    TimerManagement.prototype.setTimeout = function (callback, milliseconds) {
        var _this = this;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var timeoutId = 0;
        // Create the timer, and add a method to track the completion so we can
        // remove our tracked reference.
        timeoutId = window.setTimeout.apply(window, __spreadArrays([function () {
                _this.removeTimeout(timeoutId);
                callback.apply(void 0, args);
            },
            milliseconds], args));
        this.timeouts.push(timeoutId);
        return timeoutId;
    };
    TimerManagement.prototype.dispose = function () {
        this.disposed = true;
        this.parent = null;
        this.clearAllTimers();
        // Clear immediates.
        if (this.immediateIds) {
            for (var id in this.immediateIds) {
                if (this.immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
        }
        this.immediateIds = null;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    TimerManagement.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this.disposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            noOpFunction.flush = (function () { return null; });
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = new Date().getTime();
        var lastResult;
        var lastArgs;
        var timeoutId = null;
        if (options) {
            leading = options.leading || false;
            trailing = options.trailing || true;
            maxWait = options.maxWait || null;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(null, lastArgs);
        };
        var callback = function (userCall) {
            var now = new Date().getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    TimerManagement.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this.disposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            noOpFunction.flush = (function () { return null; });
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === "boolean") {
            leading = options.leading;
        }
        if (options && typeof options.trailing === "boolean") {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = new Date().getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(null, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    TimerManagement.prototype.removeInterval = function (intervalId) {
        var index = this.intervals.indexOf(intervalId);
        if (index >= 0) {
            this.intervals.splice(index, 1);
        }
    };
    TimerManagement.prototype.removeTimeout = function (timeoutId) {
        var index = this.timeouts.indexOf(timeoutId);
        if (index >= 0) {
            this.timeouts.splice(index, 1);
        }
    };
    return TimerManagement;
}());

var ContentJustification;
(function (ContentJustification) {
    ContentJustification[ContentJustification["Start"] = 0] = "Start";
    ContentJustification[ContentJustification["Center"] = 1] = "Center";
    ContentJustification[ContentJustification["End"] = 2] = "End";
    ContentJustification[ContentJustification["Stretch"] = 3] = "Stretch";
})(ContentJustification || (ContentJustification = {}));
var ContentLocation;
(function (ContentLocation) {
    ContentLocation[ContentLocation["Start"] = 0] = "Start";
    ContentLocation[ContentLocation["Center"] = 1] = "Center";
    ContentLocation[ContentLocation["End"] = 2] = "End";
})(ContentLocation || (ContentLocation = {}));
var ContentOrientation;
(function (ContentOrientation) {
    ContentOrientation[ContentOrientation["Column"] = 0] = "Column";
    ContentOrientation[ContentOrientation["Row"] = 1] = "Row";
})(ContentOrientation || (ContentOrientation = {}));
var ContentSize;
(function (ContentSize) {
    ContentSize[ContentSize["Small"] = 0] = "Small";
    ContentSize[ContentSize["Medium"] = 1] = "Medium";
    ContentSize[ContentSize["Large"] = 2] = "Large";
    ContentSize[ContentSize["Auto"] = 3] = "Auto";
    ContentSize[ContentSize["ExtraLarge"] = 4] = "ExtraLarge";
})(ContentSize || (ContentSize = {}));

var Callout = /** @class */ (function (_super) {
    __extends(Callout, _super);
    function Callout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.calloutContent = react.createRef();
        return _this;
    }
    Callout.prototype.render = function () {
        var portalProps = this.props.portalProps;
        return (react.createElement(Portal, __assign({}, portalProps, { className: css(portalProps && portalProps.className, this.props.anchorElement && "bolt-layout-relative") }),
            react.createElement(CalloutContent, __assign({ ref: this.calloutContent }, this.props))));
    };
    Callout.prototype.componentWillUnmount = function () {
        // We need to let the content handle the WillUnmount before the Portal, this
        // will ensure the the callout can deal with unmounting content that still has
        // focus. Otherwise the root will be detached from the document and focus will
        // have moved to the body.
        if (this.calloutContent.current) {
            this.calloutContent.current.portalWillUnmount();
        }
    };
    Callout.prototype.updateLayout = function () {
        if (this.calloutContent.current) {
            this.calloutContent.current.updateLayout();
        }
    };
    Callout.defaultProps = {
        blurDismiss: false,
        viewportChangeDismiss: true
    };
    return Callout;
}(react.Component));
var CalloutContent = /** @class */ (function (_super) {
    __extends(CalloutContent, _super);
    function CalloutContent(props) {
        var _this = _super.call(this, props) || this;
        _this.calloutElement = react.createRef();
        _this.relayoutTimer = new TimerManagement();
        _this.scrollListen = false;
        _this.scrollEvent = null;
        _this.initialScreenWidth = window.innerWidth;
        _this.onBlur = function () {
            _this.props.onDismiss && _this.props.onDismiss();
        };
        _this.onClick = function (event) {
            // If we click on the light dismiss div we will dismiss it.
            if (_this.props.lightDismiss && !event.defaultPrevented) {
                if (_this.props.onDismiss) {
                    _this.props.onDismiss();
                }
                event.preventDefault();
            }
        };
        _this.onKeyDown = function (event) {
            // If we press escape from within the callout this will dismiss it.
            if (_this.props.escDismiss && event.which === KeyCode.escape && !event.defaultPrevented) {
                if (_this.props.onDismiss) {
                    _this.props.onDismiss();
                }
                event.preventDefault();
            }
        };
        _this.onResize = function () {
            // Fix for issue where the soft keyboard on android closes callouts.
            if (_this.props.viewportChangeDismiss === true &&
                (_this.initialScreenWidth !== window.innerWidth ||
                    !document.activeElement ||
                    (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA"))) {
                _this.props.onDismiss && _this.props.onDismiss();
            }
            else if (_this.props.updateLayout) {
                _this.relayoutTimer.clearAllTimers();
                _this.relayoutTimer.setTimeout(function () {
                    _this.updateLayout();
                }, 200);
            }
        };
        _this.onScroll = function (event) {
            if (_this.scrollListen) {
                _this.scrollEvent = event.nativeEvent;
            }
        };
        _this.onScrollDocument = function (event) {
            if (_this.scrollListen) {
                if (event === _this.scrollEvent) {
                    _this.scrollEvent = null;
                }
                else {
                    if (_this.props.viewportChangeDismiss === true) {
                        var anchorElement = _this.props.anchorElement;
                        // If the element containing the anchor is scrolled dismiss the callout.
                        if (event.target && anchorElement && event.target.contains(anchorElement)) {
                            _this.props.onDismiss && _this.props.onDismiss();
                        }
                    }
                    else if (_this.props.updateLayout) {
                        _this.relayoutTimer.setTimeout(function () {
                            _this.updateLayout();
                        }, 50);
                    }
                }
            }
        };
        // Track the element that had focus when we mounted.
        _this.focusElement = document.activeElement;
        _this.contentElement = props.contentRef || react.createRef();
        return _this;
    }
    CalloutContent.prototype.render = function () {
        var _this = this;
        var _a = this.props, blurDismiss = _a.blurDismiss, contentJustification = _a.contentJustification, contentLocation = _a.contentLocation, contentOrientation = _a.contentOrientation, focuszoneProps = _a.focuszoneProps, lightDismiss = _a.lightDismiss, modal = _a.modal, onAnimationEnd = _a.onAnimationEnd, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, anchorElement = _a.anchorElement;
        var content;
        // If we have both a FocusWithin and a FocusZone we need to use the functional version
        // of the FocusWithin to allow the FocusZone to contain the content directly.
        if (blurDismiss && focuszoneProps) {
            content = (react.createElement(FocusWithin, { onBlur: this.onBlur, updateStateOnFocusChange: false }, function (props) { return react.createElement(FocusZone, __assign({}, focuszoneProps), _this.renderContent(props.onFocus, props.onBlur)); }));
        }
        else {
            content = this.renderContent();
            // Add the focus tracker to dismiss the callout if we are dismissing on blur.
            if (blurDismiss) {
                content = (react.createElement(FocusWithin, { onBlur: this.onBlur, updateStateOnFocusChange: false }, content));
            }
            // Add focus zone if focuszoneProperties are specified
            if (focuszoneProps) {
                content = react.createElement(FocusZone, __assign({}, focuszoneProps), content);
            }
        }
        var lightDismissDiv = lightDismiss ? (react.createElement("div", { className: css("absolute-fill bolt-light-dismiss", modal && "bolt-callout-modal"), onClick: this.onClick })) : null;
        // The callout is wrapped in a floating element in the portal.
        // If lightDismiss is enabled we will create an absolute-fill div to capture onClick events.
        return (react.createElement(SurfaceContext.Provider, { value: { background: SurfaceBackground.callout } },
            react.createElement("div", { className: "flex-row flex-grow" },
                react.createElement("div", { className: css(this.props.className, "bolt-callout absolute", contentLocation !== undefined && "absolute-fill", contentJustification === ContentJustification.Start && "justify-start", contentJustification === ContentJustification.Center && "justify-center", contentJustification === ContentJustification.End && "justify-end", contentLocation === ContentLocation.Start && "flex-start", contentLocation === ContentLocation.Center && "flex-center", contentLocation === ContentLocation.End && "flex-end", contentOrientation === ContentOrientation.Column && "flex-column", contentOrientation !== ContentOrientation.Column && "flex-row", modal && !lightDismiss && "bolt-callout-modal"), id: getSafeId(this.props.id), onAnimationEnd: onAnimationEnd, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onKeyDown: this.onKeyDown, ref: this.calloutElement, role: this.props.role },
                    !anchorElement && lightDismissDiv,
                    content),
                !!anchorElement && lightDismissDiv)));
    };
    CalloutContent.prototype.componentDidMount = function () {
        this.updateLayout();
        // If this is an element relative layout we need to listen for scroll events
        // on the document and dismiss the callout if the scroll event didnt pass
        // through the callout.
        if (this.props.anchorElement) {
            window.addEventListener("resize", this.onResize);
            document.addEventListener("scroll", this.onScrollDocument, true);
            this.scrollListen = true;
        }
    };
    CalloutContent.prototype.componentDidUpdate = function () {
        if (this.props.updateLayout) {
            this.updateLayout();
        }
    };
    CalloutContent.prototype.componentWillUnmount = function () {
        if (this.scrollListen) {
            document.removeEventListener("scroll", this.onScrollDocument, true);
            window.removeEventListener("resize", this.onResize);
        }
        if (this.relayoutTimer) {
            this.relayoutTimer.clearAllTimers();
        }
    };
    CalloutContent.prototype.portalWillUnmount = function () {
        var contentElement = this.contentElement.current;
        var focusElement = this.focusElement;
        // If the callout has focus when unmounted we need to set focus back to the last element with focus.
        // Need to wait for next tick otherwise focus/blur events are not fired.
        if (focusElement && contentElement && contentElement.contains(document.activeElement)) {
            window.setTimeout(function () {
                // We need to make sure the active element is portal after the timeout.
                // It may have moved through other means before the timeout expires.
                // Set focus to the focusElement if our element contains focus, or if the focus has gone back to the document body
                if (contentElement.contains(document.activeElement) || document.activeElement === document.body || document.activeElement === null) {
                    focusElement.focus();
                }
            }, 0);
        }
    };
    CalloutContent.prototype.updateLayout = function () {
        if (this.props.contentLocation === undefined) {
            if (this.calloutElement.current) {
                // Position the element based on the initial layout parameters.
                position(this.calloutElement.current, this.props.calloutOrigin || { horizontal: Location.start, vertical: Location.start }, this.props.anchorOffset, this.props.anchorElement, this.props.anchorOrigin, this.props.anchorPoint);
                // Now that the component is placed at the requested location, update
                // the layout if the caller didnt request a fixed layout.
                if (!this.props.fixedLayout) {
                    updateLayout(this.calloutElement.current, this.props.calloutOrigin || { horizontal: Location.start, vertical: Location.start }, this.props.anchorOffset, this.props.anchorElement, this.props.anchorOrigin, this.props.anchorPoint);
                }
            }
        }
    };
    CalloutContent.prototype.renderContent = function (onFocus, onBlur) {
        var _a = this.props, contentJustification = _a.contentJustification, contentOrientation = _a.contentOrientation, contentSize = _a.contentSize, height = _a.height, width = _a.width;
        return (react.createElement("div", { "aria-describedby": getSafeId(this.props.ariaDescribedBy), "aria-label": this.props.ariaLabel, "aria-labelledby": getSafeId(this.props.ariaLabelledBy), "aria-modal": this.props.modal, className: css(this.props.contentClassName, "bolt-callout-content", this.props.contentShadow && "bolt-callout-shadow", contentJustification === ContentJustification.Stretch && "flex-grow", contentOrientation === ContentOrientation.Column && "flex-column", contentOrientation === ContentOrientation.Row && "flex-row", contentSize === ContentSize.Small && "bolt-callout-small", contentSize === ContentSize.Medium && "bolt-callout-medium", contentSize === ContentSize.Large && "bolt-callout-large", contentSize === ContentSize.ExtraLarge && "bolt-callout-extra-large", contentSize === ContentSize.Auto && "bolt-callout-auto"), onBlur: onBlur, onFocus: onFocus, onScroll: this.onScroll, ref: this.contentElement, role: this.props.role || "dialog", style: { height: height, width: width } }, this.props.children));
    };
    return CalloutContent;
}(react.Component));

var MouseWithin = /** @class */ (function (_super) {
    __extends(MouseWithin, _super);
    function MouseWithin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enterTimeout = 0;
        _this.delayTimeout = 0;
        _this.mouse = false;
        /**
         * onMouseEnter method that should be attached to the onMouseEnter handler of the
         * continer's root element.
         */
        _this.onMouseEnter = function (event) {
            // If the mouse is just entering one of the child components and not just moving
            // from one child to another we will call the onMouseEnter delegate if supplied.
            if (!_this.mouse) {
                _this.mouse = true;
                // Clear any pending leave if we have left and re-entered the component during
                // the leaveTimeout.
                if (_this.delayTimeout) {
                    window.clearTimeout(_this.delayTimeout);
                    _this.delayTimeout = 0;
                }
                if (_this.props.enterDelay) {
                    event.persist();
                    // persist does not preserve the currentTarget so we do that manually
                    var currentTarget_1 = event.currentTarget;
                    _this.enterTimeout = window.setTimeout(function () {
                        _this.enterTimeout = 0;
                        var newCurrentTarget = event.currentTarget;
                        event.currentTarget = currentTarget_1;
                        _this.mouseEntered(event);
                        event.currentTarget = newCurrentTarget;
                    }, _this.props.enterDelay);
                }
                else {
                    _this.mouseEntered(event);
                }
            }
        };
        /**
         * onMouseLeave method that should be attached to the onMouseLeave handler of the
         * container's root element.
         */
        _this.onMouseLeave = function (event) {
            if (_this.mouse) {
                _this.mouse = false;
                // Clear any pending enterTimeout if we didnt stay over the element long enough.
                if (_this.enterTimeout) {
                    window.clearTimeout(_this.enterTimeout);
                    _this.enterTimeout = 0;
                }
                if (_this.props.leaveDelay) {
                    event.persist();
                    _this.delayTimeout = window.setTimeout(function () {
                        _this.delayTimeout = 0;
                        _this.mouseLeft(event);
                    }, _this.props.leaveDelay);
                }
                else {
                    _this.mouseLeft(event);
                }
            }
        };
        return _this;
    }
    MouseWithin.prototype.render = function () {
        var newProps = {
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
        };
        if (isFunctionalChildren(this.props.children)) {
            var child = this.props.children;
            // For functional components we pass the hasMouse attribute as well.
            newProps.hasMouse = this.mouse;
            return child(newProps);
        }
        else {
            var child = react.Children.only(this.props.children);
            return react.cloneElement(child, __assign(__assign({}, child.props), newProps), child.props.children);
        }
    };
    MouseWithin.prototype.componentWillUnmount = function () {
        if (this.enterTimeout) {
            window.clearTimeout(this.enterTimeout);
        }
        if (this.delayTimeout) {
            window.clearTimeout(this.delayTimeout);
        }
    };
    /**
     * hasMouse returns true if the mouse is contained within the component
     * hierarchy. This includes portals, the element may or may not
     * be a direct descendant of the component in the DOM structure.
     */
    MouseWithin.prototype.hasMouse = function () {
        return this.mouse;
    };
    MouseWithin.prototype.mouseEntered = function (event) {
        // If we are tracking the mouse state we will force a component update.
        if (this.props.updateStateOnMouseChange) {
            this.forceUpdate();
        }
        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(event);
        }
    };
    MouseWithin.prototype.mouseLeft = function (event) {
        // If we are tracking the mouse state we will force a component update.
        if (this.props.updateStateOnMouseChange) {
            this.forceUpdate();
        }
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event);
        }
    };
    MouseWithin.defaultProps = {
        updateStateOnMouseChange: true
    };
    return MouseWithin;
}(react.Component));

var TooltipStatus;
(function (TooltipStatus) {
    TooltipStatus[TooltipStatus["hidden"] = 0] = "hidden";
    TooltipStatus[TooltipStatus["visible"] = 1] = "visible";
    TooltipStatus[TooltipStatus["fadingout"] = 2] = "fadingout";
})(TooltipStatus || (TooltipStatus = {}));
var tooltipId = 1;
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.contentRef = react.createRef();
        _this.tooltipId = "tooltip-" + tooltipId++;
        _this.focus = false;
        _this.mouse = false;
        _this.showTooltip = function (event) {
            var anchorElement = event.currentTarget;
            if (_this.shouldShowTooltip(anchorElement)) {
                // If no anchorOrigin was specified use the Mouse.position when we show the toolip.
                var anchorPoint = void 0;
                if (!_this.props.anchorOrigin) {
                    anchorPoint = Mouse.position;
                }
                _this.mouse = true;
                document.addEventListener("keydown", _this.onKeyDown);
                _this.setState({
                    anchorElement: anchorElement,
                    anchorOffset: { horizontal: 8, vertical: 8 },
                    anchorOrigin: { horizontal: Location.center, vertical: Location.end },
                    anchorPoint: anchorPoint,
                    innerText: _this.props.overflowOnly && !_this.props.text ? anchorElement.innerText : undefined,
                    tooltipStatus: TooltipStatus.visible,
                    tooltipOrigin: { horizontal: Location.start, vertical: Location.start }
                });
            }
        };
        _this.closeTooltip = function () {
            if (!(_this.focus && getFocusVisible()) && _this.state.tooltipStatus === TooltipStatus.visible) {
                _this.mouse = false;
                document.removeEventListener("keydown", _this.onKeyDown);
                _this.setState({ tooltipStatus: _this.getDismissStatus() });
            }
        };
        _this.onKeyDown = function (event) {
            var _a;
            if (event.which === KeyCode.escape && _this.state.tooltipStatus === TooltipStatus.visible) {
                _this.closeTooltip();
            }
            if (event.which === KeyCode.ctrl && _this.state.tooltipStatus === TooltipStatus.visible) {
                var container = _this.contentRef.current;
                var selectionNode = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.anchorNode;
                var hasSelectionInTooltip = container && selectionNode && container.contains(selectionNode);
                // Ctrl keystroke anywhere will dismiss the callout as per MAS 1.4.13,
                // except if user has selected something inside, in which case we allow Ctrl-C.
                if (!hasSelectionInTooltip) {
                    _this.closeTooltip();
                }
            }
        };
        _this.onAnimationEnd = function () {
            if (_this.state.tooltipStatus === TooltipStatus.fadingout) {
                _this.setState({
                    tooltipStatus: TooltipStatus.hidden
                });
            }
        };
        _this.getDismissStatus = function () {
            return _this.props.disabled ? TooltipStatus.hidden : TooltipStatus.fadingout;
        };
        _this.shouldShowTooltip = function (anchorElement) {
            if (_this.state.tooltipStatus !== TooltipStatus.hidden) {
                return false;
            }
            // If the tooltip only appears when the anchorElement overflows its parent then
            // we need to check on mouse enter.
            if (_this.props.overflowOnly && !_this.overflowDetected(anchorElement)) {
                return false;
            }
            // Dont show the tooltip if there is not content to show.
            if (!(_this.props.text || _this.props.renderContent || (anchorElement.innerText && _this.props.overflowOnly))) {
                return false;
            }
            return !_this.props.disabled;
        };
        _this.overflowDetected = props.overflowDetected || overflowDetected;
        _this.state = {
            tooltipStatus: TooltipStatus.hidden
        };
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _this = this;
        return (react.createElement(MouseWithin, { leaveDelay: 50, enterDelay: this.props.delayMs, onMouseLeave: this.closeTooltip, onMouseEnter: this.showTooltip }, function (mouseWithinEvents) {
            var child = react.Children.only(_this.props.children);
            var id = _this.props.id || _this.tooltipId;
            var showTooltip = _this.state.tooltipStatus !== TooltipStatus.hidden && !_this.props.disabled && _this.state.anchorElement;
            // Save the existing events we will potentially proxy.
            var existingMouseEnter = child.props.onMouseEnter;
            var existingMouseLeave = child.props.onMouseLeave;
            var existingKeyDown = child.props.onKeyDown;
            var existingBlur;
            var existingFocus;
            var onMouseEnter = function (event) {
                if (mouseWithinEvents.onMouseEnter) {
                    mouseWithinEvents.onMouseEnter(event);
                }
                if (existingMouseEnter) {
                    existingMouseEnter(event);
                }
            };
            var onMouseLeave = function (event) {
                if (mouseWithinEvents.onMouseLeave) {
                    mouseWithinEvents.onMouseLeave(event);
                }
                if (existingMouseLeave) {
                    existingMouseLeave(event);
                }
            };
            var onKeyDown = function (event) {
                if (event.which === KeyCode.escape && showTooltip) {
                    _this.setState({ tooltipStatus: TooltipStatus.hidden });
                    event.preventDefault();
                }
                if (existingKeyDown) {
                    existingKeyDown(event);
                }
            };
            // to not let consumers have to care about an implementation detail, wrap
            // the tooltip id in getSafeId and use that as the aria-describedBy property
            // on the child.
            var ariaDescribedById = _this.props.addAriaDescribedBy && _this.state.tooltipStatus !== TooltipStatus.hidden ? getSafeId(id) : undefined;
            var childProps = __assign(__assign({}, child.props), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onKeyDown: onKeyDown });
            if (childProps["aria-describedby"] === undefined) {
                childProps["aria-describedby"] = ariaDescribedById;
            }
            var clonedChild = react.cloneElement(child, childProps, child.props.children);
            // If this tooltip should become visible when focus is within the component add the focus tracking.
            if (_this.props.showOnFocus && (_this.props.text || _this.props.renderContent || _this.props.overflowOnly)) {
                existingBlur = child.props.onBlur;
                existingFocus = child.props.onFocus;
                var onBlur = function () {
                    _this.focus = false;
                    if (!_this.mouse) {
                        _this.closeTooltip();
                    }
                    if (existingBlur) {
                        existingBlur();
                    }
                };
                var onFocus = function (event) {
                    var anchorElement = event.currentTarget;
                    if (_this.shouldShowTooltip(anchorElement)) {
                        _this.focus = true;
                        getFocusVisible() &&
                            _this.setState({
                                anchorElement: event.target,
                                anchorOffset: { horizontal: 0, vertical: 8 },
                                anchorOrigin: { horizontal: Location.center, vertical: Location.end },
                                anchorPoint: undefined,
                                innerText: _this.props.overflowOnly && !_this.props.text ? anchorElement.innerText : undefined,
                                tooltipStatus: TooltipStatus.visible,
                                tooltipOrigin: { horizontal: Location.center, vertical: Location.start }
                            });
                    }
                    if (existingFocus) {
                        existingFocus(event);
                    }
                };
                clonedChild = (react.createElement(FocusWithin, { onBlur: onBlur, onFocus: onFocus, updateStateOnFocusChange: false }, clonedChild));
            }
            return (react.createElement(react.Fragment, null,
                clonedChild,
                showTooltip ? (react.createElement(Callout, { anchorElement: _this.state.anchorElement, anchorOffset: _this.props.anchorOffset || _this.state.anchorOffset, anchorOrigin: _this.props.anchorOrigin || _this.state.anchorOrigin, anchorPoint: _this.state.anchorPoint, calloutOrigin: _this.props.tooltipOrigin || _this.state.tooltipOrigin, className: css(_this.props.className, "bolt-tooltip", _this.state.tooltipStatus === TooltipStatus.fadingout && "bolt-tooltip-fade-out"), fixedLayout: _this.props.fixedLayout, id: id, key: id, onAnimationEnd: _this.onAnimationEnd, onMouseEnter: mouseWithinEvents.onMouseEnter, onMouseLeave: mouseWithinEvents.onMouseLeave, portalProps: { className: "bolt-tooltip-portal" }, contentRef: _this.contentRef, role: "tooltip" },
                    react.createElement("div", { className: "bolt-tooltip-content body-m" }, (_this.props.renderContent && _this.props.renderContent()) || _this.props.text || _this.state.innerText))) : null));
        }));
    };
    Tooltip.prototype.componentWillUnmount = function () {
        document.removeEventListener("keydown", this.onKeyDown);
    };
    Tooltip.defaultProps = {
        delayMs: 250,
        showOnFocus: true
    };
    return Tooltip;
}(react.Component));
function overflowDetected(anchorElement) {
    return anchorElement.scrollWidth > Math.ceil(anchorElement.offsetWidth);
}

export { Callout as C, FocusZoneContext as F, Location as L, MouseWithin as M, Portal as P, Tooltip as T, FocusGroupContext as a, FocusZone as b, FocusZoneDirection as c, FocusWithin as d, FocusZoneKeyStroke as e, TimerManagement as f, ContentSize as g };
