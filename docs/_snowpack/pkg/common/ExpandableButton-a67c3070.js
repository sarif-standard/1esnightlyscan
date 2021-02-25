import { _ as __extends, F as FocusZoneContext, I as Icon, a as __assign, b as IconSize, T as Tooltip, c as FocusGroupContext, M as MouseWithin, L as Location } from './Icon.Props-7e4a5eac.js';
import { c as childCount, g as getSafeId, a as css, K as KeyCode, s as setFocusVisible } from './Util-bc2f8488.js';
import { r as react } from './index-c314220c.js';
import { a as announce } from './Accessibility-e11a7e50.js';
import { g as getTabIndex } from './Focus-5dc7d126.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Button/Button.css */
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
__snowpack__injectStyle(".bolt-button {\n  align-items: center;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  display: inline-flex;\n  flex-direction: row;\n  flex-shrink: 0;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 600;\n  justify-content: center;\n  line-height: inherit;\n  outline: none;\n  overflow: visible;\n  /* IE11 needs overflow visible for the focus treatment to show up */\n  padding: 6px 12px;\n  position: relative;\n  transition: background 80ms linear; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-button {\n      border: 1px solid windowtext; } }\n\n/* This is here to work around Legacy styles setting the heights of all buttons to 30px */\nbutton.bolt-button {\n  height: auto; }\n\n/* Needed to remove the focus-rectangle from FireFox. */\n.bolt-button::-moz-focus-inner {\n  border: 0; }\n\n/* Danger modifiers */\n.bolt-button.danger {\n  background-color: rgba(232, 17, 35, 1);\n  background-color: var(--palette-error,rgba(232, 17, 35, 1));\n  color: rgba(255, 255, 255, 1);\n  color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n\n.bolt-button.danger:hover {\n  background-color: rgba(203, 15, 31, 1);\n  background-color: var(--palette-error-6,rgba(203, 15, 31, 1)); }\n\n.bolt-button.danger:active,\n.bolt-button.danger.active {\n  background-color: rgba(184, 14, 28, 1);\n  background-color: var(--palette-error-10,rgba(184, 14, 28, 1)); }\n\n/* Primary modifiers */\n.bolt-button.primary {\n  background-color: rgba(0, 120, 212, 1);\n  background-color: var(--communication-background,rgba(0, 120, 212, 1));\n  color: rgba(255, 255, 255, 1);\n  color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n\n.bolt-button.primary:hover {\n  background-color: rgba( 0, 103, 181 ,  1 );\n  background-color: rgba( var(--palette-primary-darkened-6,0, 103, 181) ,  1 ); }\n\n.bolt-button.primary:active,\n.bolt-button.primary.active {\n  background-color: rgba( 0, 91, 161 ,  1 );\n  background-color: rgba( var(--palette-primary-darkened-10,0, 91, 161) ,  1 ); }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-button:not(.disabled):hover {\n    color: HighLight; } }\n\n/* Disabled modifiers */\n.bolt-button.disabled,\n.bolt-button.disabled:hover,\n.bolt-button.disabled:focus {\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06));\n  color: rgba(0, 0, 0, .38);\n  color: var(--text-disabled-color,rgba(0, 0, 0, .38));\n  cursor: default; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-button.disabled,\n    .bolt-button.disabled:hover,\n    .bolt-button.disabled:focus {\n      color: GrayText;\n      forced-color-adjust: none; } }\n\n/* Subtle modifiers (before standard for overrides) */\n.bolt-button.subtle,\n.bolt-button.subtle.disabled:hover,\n.bolt-button.subtle.disabled:focus {\n  background-color: transparent; }\n\n.bolt-button.subtle:hover {\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n\n.bolt-button.subtle:active {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n\n/* Basic button colors */\n.bolt-button {\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06));\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  margin: 0; }\n\n.bolt-button:focus {\n  z-index: 1; }\n\n.bolt-button:hover {\n  background-color: rgba(0, 0, 0, 0.10);\n  background-color: var(--palette-black-alpha-10,rgba(0, 0, 0, 0.10)); }\n\n.bolt-button:active,\n.bolt-button.active {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n\n.bolt-link-button {\n  text-decoration: none; }\n\n.bolt-button.icon-only {\n  padding: 8px 22px;\n  font-weight: normal; }\n\n.bolt-button.icon-only.subtle {\n  padding: 8px; }\n\n.bolt-button:not(.icon-only) > .left-icon {\n  font-weight: normal;\n  padding-right: 10px; }\n\n.bolt-button.bolt-link-button {\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n  .bolt-button.bolt-link-button:hover {\n    color: rgba(0, 0, 0, .9);\n    color: var(--text-primary-color,rgba(0, 0, 0, .9));\n    text-decoration: none; }\n  .bolt-button.bolt-link-button:visited {\n    color: rgba(0, 0, 0, .9);\n    color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n  .bolt-button.bolt-link-button:active, .bolt-button.bolt-link-button.active {\n    color: rgba(0, 0, 0, .9);\n    color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n  .bolt-button.bolt-link-button.disabled {\n    color: rgba(0, 0, 0, .38);\n    color: var(--text-disabled-color,rgba(0, 0, 0, .38)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-button.bolt-link-button.disabled {\n        color: GrayText;\n        forced-color-adjust: none; } }\n\n.bolt-button.bolt-link-button.primary {\n  color: rgba(255, 255, 255, 1);\n  color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n  .bolt-button.bolt-link-button.primary:hover {\n    color: rgba(255, 255, 255, 1);\n    color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n  .bolt-button.bolt-link-button.primary:visited {\n    color: rgba(255, 255, 255, 1);\n    color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n  .bolt-button.bolt-link-button.primary:active, .bolt-button.bolt-link-button.primary.active {\n    color: rgba(255, 255, 255, 1);\n    color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n\n.bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n  animation: ms-focus-shadow-pulse 4s ease-in-out infinite;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23);\n  box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23));\n  border-color: rgba(0, 120, 212, 1);\n  border-color: var(--focus-border-color,rgba(0, 120, 212, 1)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n      animation: none; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n      forced-color-adjust: none;\n      border-color: highlight; } }\n  @media screen and (-ms-high-contrast: black-on-white) {\n    .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n      outline: 1px solid highlight;\n      outline-offset: 1px; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n      background: window;\n      color: windowtext; } }\n  .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus.primary {\n    animation: ms-focus-shadow-with-border-pulse 4s ease-in-out infinite;\n    box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23), 0 0 0 1px rgba(0, 120, 212, 1);\n    box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)), 0 0 0 1px var(--focus-border-color,rgba(0, 120, 212, 1));\n    border-color: rgba(255, 255, 255, 1);\n    border-color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus.primary {\n        animation: none; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus.primary {\n        border-color: highlight;\n        box-shadow: none; } }\n  .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus:after {\n    content: none !important; }\n\n.ms-Dialog-action .bolt-button {\n  font-size: 0.875rem; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Button/ExpandableButton.css */
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
__snowpack__injectStyle$1(".bolt-expandable-button .icon-right {\n  padding-left: 10px; }\n\n.bolt-expandable-button .subtle.active {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n");

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttonElement = react.createRef();
        _this.onClick = function (event) {
            if (!_this.props.disabled) {
                var onClick = _this.props.onClick;
                // @NOTE: Safari doesnt set focus to buttons when they are clicked, we need this
                //  to help manage the focus state for callouts.
                _this.focus();
                if (onClick) {
                    onClick(event);
                }
            }
            else {
                event.preventDefault();
            }
        };
        _this.onFocus = function (event) {
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
            if (_this.props.id) {
                // @NOTE: Due to test issues using React.16.3.2 we MUST validate the onFocus method.
                _this.context.onFocus && _this.context.onFocus(_this.props.id);
            }
        };
        _this.onKeyDown = function (event) {
            if (!event.defaultPrevented && !_this.props.disabled) {
                if (event.which === KeyCode.enter || event.which === KeyCode.space) {
                    if (_this.props.onClick) {
                        _this.props.onClick(event);
                    }
                    if (!_this.props.href) {
                        event.preventDefault();
                    }
                }
                else if (_this.props.onKeyDown) {
                    _this.props.onKeyDown(event);
                }
            }
        };
        _this.onMouseDown = function (event) {
            if (!event.defaultPrevented) {
                if (_this.props.disabled) {
                    event.preventDefault();
                }
            }
            var onMouseDown = _this.props.onMouseDown;
            if (onMouseDown) {
                onMouseDown(event);
            }
        };
        _this.onMouseLeave = function (event) {
            if (!_this.props.disabled) {
                var onMouseLeave = _this.props.onMouseLeave;
                if (onMouseLeave) {
                    onMouseLeave(event);
                }
            }
        };
        _this.onMouseOver = function (event) {
            if (!_this.props.disabled) {
                var onMouseOver = _this.props.onMouseOver;
                if (onMouseOver) {
                    onMouseOver(event);
                }
            }
        };
        return _this;
    }
    Button.prototype.render = function () {
        var _this = this;
        // Determine if the button is an iconOnly button.
        var iconOnly = this.props.iconProps && !this.props.text && childCount(this.props.children) === 0;
        var tooltipProps = this.props.tooltipProps !== undefined
            ? this.props.tooltipProps
            : iconOnly && this.props.ariaLabel
                ? { text: this.props.ariaLabel }
                : undefined;
        return (react.createElement(FocusZoneContext.Consumer, null, function (zoneContext) {
            var ButtonType = _this.props.href ? "a" : "button";
            // @TODO (line-height): remove the body-m from the text once the line-height is applied globally.
            var role = _this.props.role || (_this.props.href ? "link" : "button");
            var button = (
            // @ts-ignore TypeScript no longer works with dynamic intrinsic component types.
            react.createElement(ButtonType, { autoFocus: !_this.props.href ? _this.props.autoFocus : undefined, "aria-controls": getSafeId(_this.props.ariaControls), "aria-describedby": getSafeId(_this.props.ariaDescribedBy), "aria-disabled": _this.props.disabled, "aria-expanded": _this.props.ariaExpanded, "aria-haspopup": _this.props.ariaHasPopup, "aria-label": _this.props.ariaLabel, "aria-setsize": _this.props.ariaSetSize, "aria-posinset": _this.props.ariaPosInSet, "aria-selected": _this.props.ariaSelected, "aria-checked": _this.props.ariaChecked, "aria-pressed": _this.props.ariaPressed, "aria-roledescription": _this.props.ariaRoleDescription, className: css(_this.props.className, "bolt-button", _this.props.href && "bolt-link-button", _this.props.iconProps && "bolt-icon-button", _this.props.danger && "danger", _this.props.disabled ? "disabled" : "enabled", _this.props.primary && "primary", _this.props.subtle && "subtle", iconOnly && "icon-only", "bolt-focus-treatment"), "data-focuszone": !_this.props.disabled && !_this.props.excludeFocusZone
                    ? css(_this.props.focusZoneId, zoneContext.focuszoneId)
                    : undefined, "data-index": _this.props.dataIndex, "data-is-focusable": !_this.props.excludeFocusZone, href: !_this.props.disabled ? _this.props.href : undefined, id: getSafeId(_this.props.id), onBlur: _this.props.onBlur, onClick: _this.onClick, onMouseLeave: _this.onMouseLeave, onMouseOver: _this.onMouseOver, onKeyDown: _this.onKeyDown, onMouseDown: _this.onMouseDown, onFocus: _this.onFocus, rel: _this.props.rel, role: role, style: _this.props.style, tabIndex: getTabIndex(_this.props, _this.context), target: _this.props.target, type: _this.props.type ? _this.props.type : !_this.props.href ? "button" : undefined, ref: _this.buttonElement },
                _this.props.iconProps &&
                    Icon(__assign(__assign({ size: IconSize.medium }, _this.props.iconProps), { className: css(_this.props.iconProps.className, "left-icon") })),
                _this.props.text && react.createElement("span", { className: "bolt-button-text body-m" }, _this.props.text),
                _this.props.children));
            if (tooltipProps) {
                button = (react.createElement(Tooltip, __assign({ addAriaDescribedBy: true }, tooltipProps), button));
            }
            return button;
        }));
    };
    Button.prototype.focus = function () {
        if (this.buttonElement.current) {
            this.buttonElement.current.focus();
        }
    };
    Button.contextType = FocusGroupContext;
    return Button;
}(react.Component));

var Collapsed = "Collapsed";
var Expanded = "Expanded";
var FriendlyNumberBillionsFormat = "{0}B+";
var FriendlyNumberMillionsFormat = "{0}M+";
var FriendlyNumberThousandsFormat = "{0}K+";

var Expandable = /** @class */ (function (_super) {
    __extends(Expandable, _super);
    function Expandable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { expanded: false };
        _this.collapse = function () {
            if (_this.state.expanded) {
                _this.setState({ expanded: false });
                announce(Collapsed, true);
                if (_this.props.onCollapse) {
                    _this.props.onCollapse();
                }
            }
        };
        _this.expand = function () {
            if (!_this.state.expanded) {
                _this.setState({ expanded: !_this.state.expanded });
                announce(Expanded, true);
                if (_this.props.onExpand) {
                    _this.props.onExpand();
                }
            }
        };
        _this.onClick = function (event) {
            if (!_this.props.disabled) {
                if (!event.defaultPrevented) {
                    if (!_this.state.expanded && !_this.ignoreClick) {
                        _this.expand();
                        event.preventDefault();
                    }
                }
            }
            else {
                event.preventDefault();
            }
        };
        _this.onKeyDown = function (event) {
            if (!event.defaultPrevented) {
                // If the control key is pressed we want to navigate in a focus zone and not open the menu
                if (event.ctrlKey) {
                    return;
                }
                if (!_this.state.expanded && _this.isExpandKey(event)) {
                    _this.ignoreClick = false;
                    _this.expand();
                    event.preventDefault();
                }
            }
        };
        _this.onMouseDown = function () {
            // If the callout is expanded when we click on it, we want to ignore the click
            // and let the blur occur and close the callout.
            _this.ignoreClick = _this.state.expanded;
        };
        return _this;
    }
    Expandable.prototype.render = function () {
        var expanded = this.state.expanded;
        var child = this.props.children;
        return (react.createElement(react.Fragment, null,
            child({ expanded: expanded, onClick: this.onClick, onKeyDown: this.onKeyDown, onMouseDown: this.onMouseDown }),
            expanded && this.props.renderCallout && this.props.renderCallout()));
    };
    Expandable.prototype.isExpandKey = function (event) {
        return (Array.isArray(this.props.expandKey) && this.props.expandKey.indexOf(event.which) !== -1) || event.which === this.props.expandKey;
    };
    Expandable.defaultProps = {
        expandKey: KeyCode.downArrow
    };
    return Expandable;
}(react.Component));
var expandableContainerId = 1;
/**
 * ExpandableContainer is a specialized form of Expandable and generally shouldn't be used.
 * It's main goal is to provider mouse enter/leave behavior for collapsing.
 *
 * @NOTE: This component MAY be deprecated in the future, use <Expandable /> instead.
 */
/** @class */ ((function (_super) {
    __extends(ExpandableContainer, _super);
    function ExpandableContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = react.createRef();
        _this.expandedOnHover = false;
        _this.expandable = react.createRef();
        _this.expandableId = "expandableContainer-" + expandableContainerId++;
        _this.collapse = function () {
            if (_this.expandable.current) {
                _this.expandable.current.collapse();
            }
        };
        _this.expand = function () {
            if (_this.expandable.current) {
                _this.expandable.current.expand();
            }
        };
        _this.onFocus = function (event) {
            // Only call onFocus for the FocusGroup is the expandable itself is getting focus.
            // Otherwise it is going to a child element and it should manage focus appropriately.
            if (_this.props.id && (!_this.element.current || _this.element.current === event.target)) {
                _this.context.onFocus(_this.props.id);
            }
        };
        _this.onMouseEnter = function () {
            if (_this.props.expandOnHover) {
                _this.expandedOnHover = true;
                setFocusVisible(false);
                _this.expand();
            }
        };
        _this.onMouseLeave = function () {
            if (_this.expandedOnHover) {
                _this.collapse();
            }
        };
        _this.renderCallout = function () {
            return _this.props.renderCallout(_this.expandable.current, _this.expandableId, _this.element.current);
        };
        return _this;
    }
    ExpandableContainer.prototype.render = function () {
        var _this = this;
        return (react.createElement(FocusZoneContext.Consumer, null, function (zoneContext) { return (react.createElement(MouseWithin, { enterDelay: _this.props.expandDelay, leaveDelay: _this.props.collapseDelay, onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave, updateStateOnMouseChange: false }, function (mouseContext) { return (react.createElement(Expandable, __assign({}, _this.props, { renderCallout: undefined, ref: _this.expandable }), function (expandableProps) { return (react.createElement("div", { "aria-controls": expandableProps.expanded ? getSafeId(_this.props.expandableId) : undefined, "aria-expanded": expandableProps.expanded, "aria-haspopup": true, "aria-label": _this.props.ariaLabel, className: css(_this.props.className, "bolt-expandable-container flex-row flex-center", expandableProps.expanded && "expanded"), "data-focuszone": !_this.props.disabled && !_this.props.excludeFocusZone ? zoneContext.focuszoneId : undefined, id: getSafeId(_this.props.id), onClick: expandableProps.onClick, onFocus: _this.onFocus, onKeyDown: expandableProps.onKeyDown, onMouseDown: expandableProps.onMouseDown, onMouseEnter: mouseContext.onMouseEnter, onMouseLeave: mouseContext.onMouseLeave, role: _this.props.role || "button", tabIndex: getTabIndex(_this.props, _this.context), ref: _this.element },
            _this.props.children,
            expandableProps.expanded && _this.renderCallout())); })); })); }));
    };
    ExpandableContainer.contextType = FocusGroupContext;
    ExpandableContainer.defaultProps = {
        collapseDelay: 250,
        expandDelay: 250,
        expandKey: [KeyCode.downArrow, KeyCode.enter]
    };
    return ExpandableContainer;
})(react.Component));

var buttonId = 1;
var ExpandableButton = /** @class */ (function (_super) {
    __extends(ExpandableButton, _super);
    function ExpandableButton(props) {
        var _this = _super.call(this, props) || this;
        _this.buttonElement = react.createRef();
        _this.expandable = react.createRef();
        _this.collapse = function () {
            if (_this.expandable.current) {
                _this.expandable.current.collapse();
            }
        };
        _this.expand = function () {
            if (_this.expandable.current) {
                _this.expandable.current.expand();
            }
        };
        _this.renderCallout = function () {
            return _this.props.renderCallout(_this, _this.dropdownId, _this.props.anchorElement
                ? _this.props.anchorElement
                : !_this.props.anchorPoint
                    ? _this.containerElement.current
                        ? _this.containerElement.current
                        : undefined
                    : undefined, _this.props.anchorOffset || { horizontal: 0, vertical: 0 }, _this.props.anchorOrigin || { horizontal: Location.end, vertical: Location.end }, _this.props.anchorPoint, _this.props.dropdownOrigin || { horizontal: Location.end, vertical: Location.start });
        };
        _this.dropdownId = props.dropdownId || "dropdown-" + buttonId++;
        _this.containerElement = props.containerRef || react.createRef();
        return _this;
    }
    ExpandableButton.prototype.render = function () {
        var _this = this;
        // We disable the tooltip when we are expanded. Make sure we dont remove it
        // from the component tree, this causes the button element to get regenerated
        // and focus wont return.
        return (react.createElement(Expandable, { disabled: this.props.disabled, expandKey: this.props.expandKey, onCollapse: this.props.onCollapse, onExpand: this.props.onExpand, renderCallout: this.renderCallout, ref: this.expandable }, function (expandableProps) {
            return (react.createElement("div", { className: css(_this.props.className, "bolt-expandable-button inline-flex-row"), onMouseDown: expandableProps.onMouseDown, onKeyDown: expandableProps.onKeyDown, ref: _this.containerElement },
                react.createElement(Button, __assign({}, _this.props, { ariaControls: expandableProps.expanded ? _this.dropdownId : undefined, ariaExpanded: expandableProps.expanded, ariaHasPopup: true, className: css(!_this.props.text && !_this.props.children && _this.props.iconProps && "icon-only", expandableProps.expanded && "active"), onClick: function (e) {
                        expandableProps.onClick(e);
                        if (_this.props.onClick) {
                            _this.props.onClick(e);
                        }
                        e.preventDefault();
                    }, ref: _this.buttonElement, tooltipProps: _this.props.tooltipProps ? __assign(__assign({}, _this.props.tooltipProps), { disabled: expandableProps.expanded }) : undefined }),
                    _this.props.children,
                    !_this.props.hideDropdownIcon
                        ? Icon({
                            key: "dropdown-icon",
                            className: "icon-right font-weight-normal",
                            iconName: "ChevronDownMed",
                            size: IconSize.small
                        })
                        : undefined)));
        }));
    };
    ExpandableButton.prototype.focus = function () {
        if (this.buttonElement.current) {
            this.buttonElement.current.focus();
        }
    };
    ExpandableButton.defaultProps = {
        expandKey: [KeyCode.downArrow, KeyCode.enter]
    };
    return ExpandableButton;
}(react.Component));

export { Button as B, ExpandableButton as E, FriendlyNumberThousandsFormat as F, FriendlyNumberMillionsFormat as a, FriendlyNumberBillionsFormat as b };
