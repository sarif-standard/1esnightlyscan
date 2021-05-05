import { _ as __extends, a as __assign } from './Observable-063af883.js';
import './core-4c1f1367.js';
import { r as react } from './index-abdc4d2d.js';
import { f as format } from './String-19e5561c.js';
import { B as Button } from './ExpandableButton-778bbe51.js';
import { F as FocusZoneContext } from './Tooltip-bfc7063c.js';
import { I as Icon, a as IconSize } from './Icon.Props-050e98eb.js';
import { R as RemovePillLabel } from './Resources.Widgets-1363c6a9.js';
import { c as css, g as getSafeId, K as KeyCode } from './Util-e30cbaf3.js';
import { d as darken, g as getColorString, i as isDark } from './Color-c39ec9d4.js';
import { g as getTabIndex } from './Focus-dd57f317.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Pill/Pill.css */
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
__snowpack__injectStyle("/* \r\n    We're using absolute height and negative margins in this file\r\n    this is because borders make a lot of this logic weird, and the spec calls for overlap of borders\r\n    between what are logically parent and child elements\r\n    \r\n    eg. in Outlined pills, the button focus circle should exactly overlap the pill's outline\r\n\r\n    Using negative margin means we need to do less padding management of the container based on\r\n    what elements it happens to contain, and elements can just intrude on the left-right padding of the parent\r\n    */\n.bolt-pill {\n  border-radius: 120px;\n  border: 1px solid transparent;\n  white-space: nowrap; }\n  .bolt-pill.clickable {\n    cursor: pointer; }\n  .bolt-pill.count .bolt-pill-content {\n    font-weight: 600; }\n  .bolt-pill .bolt-pill-content {\n    margin: 0px 0.5rem;\n    padding: 2px 0; }\n  .bolt-pill .bolt-pill-icon {\n    margin-left: 0.25rem;\n    margin-right: 0.375rem; }\n  .bolt-pill.compact.has-filled-visual .bolt-pill-content, .bolt-pill.compact.has-icon .bolt-pill-content, .bolt-pill.regular.has-filled-visual .bolt-pill-content, .bolt-pill.regular.has-icon .bolt-pill-content, .bolt-pill.large.has-filled-visual .bolt-pill-content, .bolt-pill.large.has-icon .bolt-pill-content {\n    margin-left: 0; }\n  .bolt-pill.compact.has-remove-button .bolt-pill-content, .bolt-pill.regular.has-remove-button .bolt-pill-content, .bolt-pill.large.has-remove-button .bolt-pill-content {\n    margin-right: 0.375rem; }\n  .bolt-pill.compact {\n    font-size: 0.6875rem; }\n  .bolt-pill.regular {\n    font-size: 0.75rem; }\n    .bolt-pill.regular .bolt-pill-filled-visual {\n      width: 1.25rem; }\n  .bolt-pill.large {\n    font-size: 0.875rem; }\n    .bolt-pill.large .bolt-pill-filled-visual {\n      width: 1.5rem; }\n  .bolt-pill.standard {\n    background-color: rgba(0, 0, 0, 0.06);\n    background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n    .bolt-pill.standard.clickable.hover {\n      background-color: rgba(0, 0, 0, 0.10);\n      background-color: var(--palette-black-alpha-10,rgba(0, 0, 0, 0.10)); }\n  .bolt-pill.outlined {\n    background-color: transparent;\n    border-color: rgba(0, 0, 0, 0.20);\n    border-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n    .bolt-pill.outlined.clickable.hover {\n      background-color: rgba(0, 0, 0, 0.06);\n      background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n    .bolt-pill.outlined .bolt-pill-button {\n      border: 1px solid transparent; }\n  .bolt-pill.colored.dark {\n    color: white; }\n  .bolt-pill.colored.light {\n    color: black; }\n\n.bolt-focus-visible .bolt-pill:focus {\n  border-color: rgba(0, 120, 212, 1);\n  border-color: var(--communication-background,rgba(0, 120, 212, 1));\n  animation: ms-focus-shadow-pulse 4s ease-in-out infinite;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23);\n  box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23));\n  outline: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-pill:focus {\n      animation: none; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-pill:focus {\n      forced-color-adjust: none;\n      border-color: highlight; } }\n  @media screen and (-ms-high-contrast: black-on-white) {\n    .bolt-focus-visible .bolt-pill:focus {\n      outline: 1px solid highlight;\n      outline-offset: 1px; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-pill:focus {\n      background: transparent !important;\n      color: windowtext; } }\n\n.bolt-pill-icon {\n  padding: 2px; }\n\n.bolt-pill-filled-visual {\n  overflow: hidden;\n  border-radius: 50%;\n  margin-right: 4px; }\n\nbutton.bolt-pill-button.bolt-button.icon-only {\n  border-radius: 50%;\n  color: inherit;\n  margin-left: auto;\n  padding: 2px; }\n  button.bolt-pill-button.bolt-button.icon-only:hover {\n    background-color: rgba(0, 0, 0, 0.06);\n    background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n");

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

export { Pill as P, PillSize as a };
