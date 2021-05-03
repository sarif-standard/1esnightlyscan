import { _ as __extends, a as __assign, c as ObservableLike } from './Observable-24aa1084.js';
import './core-1947a0ef.js';
import { r as react } from './index-abdc4d2d.js';
import { F as FocusZoneContext, T as Tooltip, a as FocusGroupContext } from './Tooltip-69aedae2.js';
import { I as Icon, a as IconSize } from './Icon.Props-be292e60.js';
import { O as Observer } from './SelectionObserver-a72f3be5.js';
import { g as getSafeId, c as css, K as KeyCode } from './Util-e30cbaf3.js';
import { g as getTabIndex } from './Focus-dd57f317.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Checkbox/Checkbox.css */
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
__snowpack__injectStyle(".bolt-checkbox {\n  border-radius: 4px;\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  display: inline-flex;\n  align-items: center; }\n  .bolt-checkbox:focus {\n    outline: none; }\n  .bolt-checkbox.disabled {\n    color: rgba(0, 0, 0, .38);\n    color: var(--text-disabled-color,rgba(0, 0, 0, .38));\n    cursor: default; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-checkbox.disabled {\n        forced-color-adjust: none;\n        color: graytext; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-checkbox.disabled .bolt-checkmark {\n        border-color: graytext; } }\n    .bolt-checkbox.disabled.checked .bolt-checkmark {\n      background-color: rgba( 200, 200, 200 ,  1 );\n      background-color: rgba( var(--palette-neutral-20,200, 200, 200) ,  1 ); }\n      @media screen and (-ms-high-contrast: active) {\n        .bolt-checkbox.disabled.checked .bolt-checkmark {\n          background-color: transparent;\n          border-color: graytext; } }\n    .bolt-checkbox.disabled:not(.checked) .bolt-checkmark {\n      border:  1px solid;\n      border-color: rgba( 200, 200, 200 ,  1 );\n      border-color: rgba( var(--palette-neutral-20,200, 200, 200) ,  1 ); }\n      @media screen and (-ms-high-contrast: active) {\n        .bolt-checkbox.disabled:not(.checked) .bolt-checkmark {\n          border-color: graytext; } }\n  .bolt-checkbox.labelled {\n    padding: 2px 4px 2px 5px; }\n  .bolt-checkbox:not(.labelled) {\n    margin: 2px; }\n  .bolt-checkbox.checked .bolt-checkmark {\n    border: 1px solid transparent;\n    background-color: rgba(0, 120, 212, 1);\n    background-color: var(--communication-background,rgba(0, 120, 212, 1));\n    color: rgba(255, 255, 255, 1);\n    color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-checkbox.checked .bolt-checkmark {\n        background-color: transparent; } }\n  .bolt-checkbox:not(.checked) .bolt-checkmark {\n    border: 1px solid rgba(0, 0, 0, .55);\n    border: 1px solid var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-checkbox:not(.checked) .bolt-checkmark {\n        forced-color-adjust: none;\n        color: window;\n        border-color: windowtext; } }\n    .bolt-checkbox:not(.checked) .bolt-checkmark > .fabric-icon {\n      visibility: hidden; }\n\n.bolt-checkmark {\n  border-radius: 0.25rem;\n  color: transparent;\n  padding: 1px;\n  height: 1rem;\n  width: 1rem; }\n\n.bolt-checkbox-label {\n  padding-left: 10px;\n  padding-bottom: 1px; }\n\n.bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus {\n  animation: ms-focus-shadow-with-border-pulse 4s ease-in-out infinite;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23), 0 0 0 1px rgba(0, 120, 212, 1);\n  box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)), 0 0 0 1px var(--focus-border-color,rgba(0, 120, 212, 1)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus {\n      animation: none; } }\n  .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus:not(.checked):not(.labelled) .bolt-checkmark {\n    border: 1px solid rgba(0, 120, 212, 1);\n    border: 1px solid var(--communication-background,rgba(0, 120, 212, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus:not(.checked):not(.labelled) .bolt-checkmark {\n        forced-color-adjust: none;\n        border-color: highlight; } }\n    @media screen and (-ms-high-contrast: black-on-white) {\n      .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus:not(.checked):not(.labelled) .bolt-checkmark {\n        outline: 1px solid highlight;\n        outline-offset: 1px; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus:not(.checked):not(.labelled) .bolt-checkmark {\n        color: windowtext; } }\n  .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus.checked:not(.labelled) .bolt-checkmark {\n    border: 1px solid rgba(255, 255, 255, 1);\n    border: 1px solid var(--background-color,rgba(255, 255, 255, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus.checked:not(.labelled) .bolt-checkmark {\n        forced-color-adjust: none;\n        border-color: highlight; } }\n    @media screen and (-ms-high-contrast: black-on-white) {\n      .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus.checked:not(.labelled) .bolt-checkmark {\n        outline: 1px solid highlight;\n        outline-offset: 1px; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus.checked:not(.labelled) .bolt-checkmark {\n        color: windowtext; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus .bolt-checkmark {\n      forced-color-adjust: none;\n      border-color: highlight; } }\n  @media screen and (-ms-high-contrast: black-on-white) {\n    .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus .bolt-checkmark {\n      outline: 1px solid highlight;\n      outline-offset: 1px; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-checkbox.bolt-focus-treatment:focus .bolt-checkmark {\n      color: windowtext; } }\n");

var checkboxId = 1;
var TriStateCheckbox = /** @class */ (function (_super) {
    __extends(TriStateCheckbox, _super);
    function TriStateCheckbox(props) {
        var _this = _super.call(this, props) || this;
        _this.checkboxElement = react.createRef();
        _this.animationClassName = "";
        _this.onClick = function (event) {
            _this.focus();
            _this.onChange(event);
        };
        _this.onFocus = function () {
            var id = _this.props.id;
            if (id) {
                _this.context.onFocus(id);
            }
        };
        _this.onKeyDown = function (event) {
            if (!event.defaultPrevented && !_this.props.disabled) {
                if (event.which === KeyCode.space) {
                    _this.onChange(event);
                    event.preventDefault();
                }
            }
        };
        _this.onChange = function (event) {
            if (_this.props.onChange) {
                var checked = ObservableLike.getValue(_this.props.checked);
                // Unchecked transitions to Checked.
                // Checked transitions to TriState or Unchecked.
                // Indeterminate transitions to Unchecked.
                if (checked === false) {
                    checked = true;
                }
                else if (checked === true) {
                    if (_this.props.triState) {
                        checked = undefined;
                    }
                    else {
                        checked = false;
                    }
                }
                else {
                    checked = false;
                }
                _this.props.onChange(event, checked);
            }
        };
        _this.labelId = "checkbox-" + checkboxId++ + "-label";
        return _this;
    }
    TriStateCheckbox.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, label = _a.label, labelId = _a.labelId, tooltipProps = _a.tooltipProps;
        return (react.createElement(FocusZoneContext.Consumer, null, function (zoneContext) { return (react.createElement(Observer, { checked: _this.props.checked }, function (props) {
            var checkbox = (react.createElement("div", { "aria-checked": props.checked === undefined ? "mixed" : props.checked === true ? "true" : "false", "aria-describedby": getSafeId(_this.props.ariaDescribedBy), "aria-disabled": _this.props.disabled, "aria-label": _this.props.ariaLabel, "aria-labelledby": !_this.props.ariaLabel ? getSafeId(_this.props.ariaLabelledBy) : undefined, className: css(_this.props.className, "bolt-checkbox cursor-pointer", props.checked !== false && "checked", disabled ? "disabled" : "enabled", "bolt-focus-treatment", label && "labelled"), "data-focuszone": !disabled && css(_this.props.focuszoneId, !_this.props.excludeFocusZone ? zoneContext.focuszoneId : undefined), id: getSafeId(_this.props.id), onClick: !disabled ? _this.onClick : undefined, onFocus: _this.onFocus, onKeyDown: _this.onKeyDown, ref: _this.checkboxElement, role: _this.props.role || "checkbox", tabIndex: getTabIndex(_this.props, _this.context) },
                react.createElement("div", { className: "bolt-checkmark justify-center flex-row flex-noshrink scroll-hidden" }, Icon({
                    className: _this.animationClassName,
                    iconName: props.checked === undefined ? "SkypeMinus" : "CheckMark",
                    size: IconSize.small
                })),
                label && (react.createElement("div", { className: "bolt-checkbox-label", id: getSafeId(labelId || _this.labelId) }, label)),
                _this.props.children));
            if (tooltipProps) {
                checkbox = (react.createElement(Tooltip, __assign({ addAriaDescribedBy: true }, tooltipProps), checkbox));
            }
            return checkbox;
        })); }));
    };
    TriStateCheckbox.prototype.componentDidMount = function () {
        this.animationClassName = "animation-ready";
    };
    TriStateCheckbox.prototype.focus = function () {
        if (this.checkboxElement.current) {
            this.checkboxElement.current.focus();
        }
    };
    TriStateCheckbox.contextType = FocusGroupContext;
    return TriStateCheckbox;
}(react.Component));
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.defaultProps = {
        checked: false
    };
    return Checkbox;
}(TriStateCheckbox));

export { Checkbox as C, TriStateCheckbox as T };
