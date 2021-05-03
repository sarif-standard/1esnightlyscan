import { _ as __extends, a as __assign } from './Observable-24aa1084.js';
import './core-1947a0ef.js';
import { r as react } from './index-abdc4d2d.js';
import { O as Observer } from './SelectionObserver-a72f3be5.js';
import { c as css, g as getSafeId } from './Util-e30cbaf3.js';
import { d as FocusWithin, F as FocusZoneContext, T as Tooltip } from './Tooltip-69aedae2.js';
import { F as FormItemContext } from './FormItem-a6cb55ea.js';
import { I as Icon, a as IconSize } from './Icon.Props-be292e60.js';
import { g as getTabIndex } from './Focus-dd57f317.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/TextField/TextField.css */
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
__snowpack__injectStyle(".bolt-textfield {\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  border-radius: 2px;\n  border:  1px solid;\n  border-color: rgba( 200, 200, 200 ,  1 );\n  border-color: rgba( var(--palette-neutral-20,200, 200, 200) ,  1 );\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--background-color,rgba(255, 255, 255, 1));\n  overflow: hidden;\n  min-width: 64px; }\n  .bolt-textfield.disabled {\n    color: rgba(0, 0, 0, .38);\n    color: var(--text-disabled-color,rgba(0, 0, 0, .38));\n    background-color: rgba( 244, 244, 244 ,  1 );\n    background-color: rgba( var(--palette-neutral-4,244, 244, 244) ,  1 ); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-textfield.disabled {\n        color: graytext;\n        background-color: window;\n        forced-color-adjust: none; } }\n  .bolt-textfield.focused.focus-treatment {\n    border-color: rgba(0, 120, 212, 1);\n    border-color: var(--communication-background,rgba(0, 120, 212, 1));\n    animation: ms-focus-shadow-pulse 4s ease-in-out infinite;\n    box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23);\n    box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-textfield.focused.focus-treatment {\n        animation: none; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-textfield.focused.focus-treatment {\n        forced-color-adjust: none;\n        border-color: highlight; } }\n    @media screen and (-ms-high-contrast: black-on-white) {\n      .bolt-textfield.focused.focus-treatment {\n        outline: 1px solid highlight;\n        outline-offset: 1px; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-textfield.focused.focus-treatment {\n        color: windowtext;\n        background-color: window; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-textfield.focused.focus-treatment > * {\n        forced-color-adjust: auto; } }\n  .bolt-textfield .prefix {\n    padding-left: 4px;\n    margin-left: 7px; }\n  .bolt-textfield .suffix {\n    padding-right: 4px;\n    margin-right: 7px; }\n\n.subtle.bolt-textfield:not(.focused):not(.disabled) {\n  background-color: inherit; }\n\n.hide-border.bolt-textfield:not(.focused):not(:hover) {\n  border-color: transparent; }\n\n.bolt-textfield-error.bolt-textfield,\n.bolt-textfield-error .bolt-textfield {\n  border-color: rgba(218, 10, 0, 1);\n  border-color: var(--status-error-text,rgba(218, 10, 0, 1)); }\n\n.bolt-textfield-auto-adjust {\n  overflow: hidden; }\n\n.bolt-textfield-auto-adjust-hidden {\n  position: absolute;\n  visibility: hidden;\n  width: 100%; }\n\n.bolt-textfield-auto-unresizable {\n  resize: none; }\n\n.bolt-textfield-input {\n  border: none;\n  outline: none;\n  background-color: inherit;\n  padding: 5px 11px;\n  resize: none; }\n  .bolt-textfield-input::placeholder {\n    color: rgba(0, 0, 0, .55);\n    color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n  .bolt-textfield-input:-ms-input-placeholder {\n    color: rgba(0, 0, 0, .55);\n    color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n  .bolt-textfield-input::-ms-input-placeholder {\n    color: rgba(0, 0, 0, .55);\n    color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n  .bolt-textfield-input::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, .55);\n    color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n  .bolt-textfield-input:-moz-placeholder {\n    color: rgba(0, 0, 0, .55);\n    color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n  .bolt-textfield-input::-ms-clear {\n    display: none; }\n  .bolt-textfield-input:-moz-ui-invalid {\n    box-shadow: none; }\n  .bolt-textfield-input.activatable {\n    cursor: pointer;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    .bolt-textfield-input.activatable::-moz-selection {\n      background: transparent; }\n    .bolt-textfield-input.activatable::selection {\n      background: transparent; }\n\n.bolt-textfield-input-with-prefix {\n  padding-left: 8px; }\n\n.bolt-textfield-input-with-suffix {\n  padding-right: 8px; }\n\n.bolt-textfield-no-text {\n  color: rgba(0, 0, 0, .55);\n  color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n\n.bolt-textfield-message {\n  margin-top: 8px;\n  font-size: 0.75rem;\n  color: rgba(0, 0, 0, .55);\n  color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n\n.bolt-textfield-message-error {\n  color: rgba(218, 10, 0, 1);\n  color: var(--status-error-text,rgba(218, 10, 0, 1)); }\n\n.bolt-textfield-label {\n  margin-bottom: 8px; }\n\n.bolt-text-filterbaritem {\n  background-color: transparent;\n  border: none; }\n\n.bolt-text-filterbaritem-input {\n  background-color: transparent; }\n  .bolt-text-filterbaritem-input::placeholder {\n    color: rgba(0, 0, 0, 0.60);\n    color: var(--palette-black-alpha-60,rgba(0, 0, 0, 0.60)); }\n  .bolt-text-filterbaritem-input:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.60);\n    color: var(--palette-black-alpha-60,rgba(0, 0, 0, 0.60)); }\n  .bolt-text-filterbaritem-input::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.60);\n    color: var(--palette-black-alpha-60,rgba(0, 0, 0, 0.60)); }\n  .bolt-text-filterbaritem-input::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.60);\n    color: var(--palette-black-alpha-60,rgba(0, 0, 0, 0.60)); }\n  .bolt-text-filterbaritem-input:-moz-placeholder {\n    color: rgba(0, 0, 0, 0.60);\n    color: var(--palette-black-alpha-60,rgba(0, 0, 0, 0.60)); }\n\n.bolt-text-filterbaritem-clear.bolt-button:not(:hover) {\n  background-color: transparent; }\n\n.bolt-text-filterbaritem-clear.bolt-button.icon-only {\n  padding: 4px;\n  font-size: 1rem;\n  border-color: transparent; }\n\n.bolt-focus-visible .bolt-text-filterbaritem-clear.bolt-button.bolt-focus-treatment:focus {\n  animation: none;\n  box-shadow: none;\n  background-color: rgba(0, 0, 0, 0.10);\n  background-color: var(--palette-black-alpha-10,rgba(0, 0, 0, 0.10)); }\n\n.bolt-textfield-inline {\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n  .bolt-textfield-inline:not(.disabled) {\n    border-color: transparent; }\n  .bolt-textfield-inline .bolt-textfield-input {\n    background-color: transparent; }\n  .bolt-textfield-inline:hover:not(.disabled):not(.focused) {\n    background-color: rgba(0, 0, 0, 0.10);\n    background-color: var(--palette-black-alpha-10,rgba(0, 0, 0, 0.10)); }\n\n.bolt-textfield-inline:hover:not(.disabled) {\n  cursor: text; }\n\n.bolt-textfield-default-width {\n  width: 296px; }\n\n.bolt-textfield-inline-tabbar-width {\n  width: 244px; }\n\n@media screen and (max-width: 600px) {\n  .bolt-inline-keyword-filter-bar {\n    flex-grow: 1;\n    margin-top: 16px; } }\n\n.bolt-focus-visible .bolt-textfield.focused.focus-keyboard-only {\n  border-color: rgba(0, 120, 212, 1);\n  border-color: var(--communication-background,rgba(0, 120, 212, 1));\n  animation: ms-focus-shadow-pulse 4s ease-in-out infinite;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23);\n  box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-textfield.focused.focus-keyboard-only {\n      animation: none; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-textfield.focused.focus-keyboard-only {\n      forced-color-adjust: none;\n      border-color: highlight; } }\n  @media screen and (-ms-high-contrast: black-on-white) {\n    .bolt-focus-visible .bolt-textfield.focused.focus-keyboard-only {\n      outline: 1px solid highlight;\n      outline-offset: 1px; } }\n");

/**
 * Defines how the TextField is styled
 */
var TextFieldStyle;
(function (TextFieldStyle) {
    /**
     * Rendered closer to a typical <input />
     */
    TextFieldStyle[TextFieldStyle["normal"] = 0] = "normal";
    /**
     * Rendered with no border and a non-white background
     */
    TextFieldStyle[TextFieldStyle["inline"] = 1] = "inline";
})(TextFieldStyle || (TextFieldStyle = {}));
/**
 * Defines how the focus treatment should be rendered for the TextField.
 */
var TextFieldFocusTreatmentBehavior;
(function (TextFieldFocusTreatmentBehavior) {
    /**
     * Focus treatment will appear when the TextField has focus via mouse or keyboard
     */
    TextFieldFocusTreatmentBehavior[TextFieldFocusTreatmentBehavior["all"] = 0] = "all";
    /**
     * Focus treatment will only appear when the TextField has focus via keyboard
     */
    TextFieldFocusTreatmentBehavior[TextFieldFocusTreatmentBehavior["keyboardOnly"] = 1] = "keyboardOnly";
    /**
     * Focus treatment will never appear (used within FilterBar)
     */
    TextFieldFocusTreatmentBehavior[TextFieldFocusTreatmentBehavior["none"] = 2] = "none";
})(TextFieldFocusTreatmentBehavior || (TextFieldFocusTreatmentBehavior = {}));
// /**
//  * Defines the TextField's width
//  */
var TextFieldWidth;
(function (TextFieldWidth) {
    /**
     * No width property is added to the TextField, it will grow to fill its container.
     */
    TextFieldWidth["auto"] = "auto";
    /**
     * A standard width of 296px is set for the TextField
     */
    TextFieldWidth["standard"] = "bolt-textfield-default-width";
    /**
     * Width for the TextField when it is used inline within a TabBar
     */
    TextFieldWidth["tabBar"] = "bolt-textfield-inline-tabbar-width";
})(TextFieldWidth || (TextFieldWidth = {}));

var inputId = 1;
var TextField = /** @class */ (function (_super) {
    __extends(TextField, _super);
    function TextField(props) {
        var _this = _super.call(this, props) || this;
        _this.select = function () {
            if (_this.inputElement.current) {
                _this.inputElement.current.select();
            }
        };
        _this.inputId = "textfield-input-" + inputId++;
        _this.inputElement = props.inputElement || react.createRef();
        return _this;
    }
    TextField.prototype.focus = function () {
        if (this.inputElement.current) {
            this.inputElement.current.focus();
        }
    };
    Object.defineProperty(TextField.prototype, "selectionEnd", {
        get: function () {
            return this.inputElement.current ? this.inputElement.current.selectionEnd : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextField.prototype, "selectionStart", {
        get: function () {
            return this.inputElement.current ? this.inputElement.current.selectionStart : null;
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype.setSelectionRange = function (start, end, direction) {
        if (this.inputElement.current) {
            this.inputElement.current.setSelectionRange(start, end, direction);
        }
    };
    TextField.prototype.render = function () {
        var _this = this;
        var _a = this.props; _a.autoAdjustHeight; var className = _a.className, containerClassName = _a.containerClassName, disabled = _a.disabled, _b = _a.focusTreatment, focusTreatment = _b === void 0 ? TextFieldFocusTreatmentBehavior.all : _b, inputId = _a.inputId, label = _a.label, onBlur = _a.onBlur, onFocus = _a.onFocus, style = _a.style, value = _a.value, width = _a.width;
        var input = (react.createElement(FocusWithin, { onFocus: onFocus, onBlur: onBlur }, function (focusStatus) { return (react.createElement(FormItemContext.Consumer, null, function (formItemContext) {
            return (react.createElement("div", { className: css("flex-column", containerClassName, width !== TextFieldWidth.auto && width) },
                react.createElement("div", { className: css(!label && className, "bolt-textfield flex-row flex-center", disabled && "disabled", focusTreatment === TextFieldFocusTreatmentBehavior.all && "focus-treatment", focusTreatment === TextFieldFocusTreatmentBehavior.keyboardOnly && "focus-keyboard-only", focusStatus.hasFocus && "focused", style === TextFieldStyle.inline && "bolt-textfield-inline", formItemContext.error && "bolt-textfield-error") },
                    react.createElement(FocusZoneContext.Consumer, null, function (zoneContext) { return (react.createElement(Observer, { value: value }, function (observedProps) {
                        return (react.createElement(TextFieldInnerValue, __assign({}, _this.props, { focus: function () { return _this.focus(); }, focusStatus: focusStatus, formItemContext: formItemContext, inputElement: _this.inputElement, inputId: _this.props.inputId || _this.inputId, value: observedProps.value, zoneContext: zoneContext })));
                    })); }))));
        })); }));
        if (label) {
            return (react.createElement("div", { className: css(className, "flex-column") },
                react.createElement("label", { htmlFor: getSafeId(inputId || this.inputId), className: "bolt-textfield-label" }, label),
                input));
        }
        else {
            return input;
        }
    };
    return TextField;
}(react.Component));
var TextFieldInnerValue = /** @class */ (function (_super) {
    __extends(TextFieldInnerValue, _super);
    function TextFieldInnerValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.adjustedHeight = -1;
        _this.adjustedHeightValue = "";
        _this.hiddenElement = react.createRef();
        return _this;
    }
    TextFieldInnerValue.prototype.render = function () {
        var _this = this;
        var _a = this.props, activatable = _a.activatable, ariaActiveDescendant = _a.ariaActiveDescendant, ariaAutoComplete = _a.ariaAutoComplete, ariaControls = _a.ariaControls, ariaExpanded = _a.ariaExpanded, ariaHasPopup = _a.ariaHasPopup, ariaInvalid = _a.ariaInvalid, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaRoleDescription = _a.ariaRoleDescription, autoAdjustHeight = _a.autoAdjustHeight, autoComplete = _a.autoComplete, autoFocus = _a.autoFocus, autoSelect = _a.autoSelect, disabled = _a.disabled, excludeFocusZone = _a.excludeFocusZone, focus = _a.focus, focusStatus = _a.focusStatus, formItemContext = _a.formItemContext, inputClassName = _a.inputClassName, inputElement = _a.inputElement, inputId = _a.inputId, inputType = _a.inputType, maxLength = _a.maxLength, maxWidth = _a.maxWidth, multiline = _a.multiline, onClick = _a.onClick, onKeyDown = _a.onKeyDown, onKeyPress = _a.onKeyPress, onKeyUp = _a.onKeyUp, onPaste = _a.onPaste, placeholder = _a.placeholder, prefixIconProps = _a.prefixIconProps, readOnly = _a.readOnly, required = _a.required, resizable = _a.resizable, role = _a.role, rows = _a.rows, spellCheck = _a.spellCheck, tooltipProps = _a.tooltipProps, value = _a.value, zoneContext = _a.zoneContext;
        var _b = this.props, ariaDescribedBy = _b.ariaDescribedBy, suffixIconProps = _b.suffixIconProps;
        var TagName = multiline ? "textarea" : "input";
        var tagSpecificProps = multiline ? { rows: rows } : { type: inputType, autoComplete: autoComplete ? "on" : "off" };
        if (suffixIconProps === undefined && formItemContext.error) {
            suffixIconProps = {
                className: "bolt-textfield-message-error",
                iconName: "Error"
            };
        }
        if (ariaDescribedBy === undefined) {
            ariaDescribedBy = formItemContext.ariaDescribedById;
        }
        var className = css(inputClassName, "bolt-textfield-input flex-grow", autoAdjustHeight && "bolt-textfield-auto-adjust", resizable && "bolt-textfield-auto-unresizable", prefixIconProps && "bolt-textfield-input-with-prefix", suffixIconProps && "bolt-textfield-input-with-suffix", activatable && "activatable");
        var style = maxWidth !== undefined ? { maxWidth: maxWidth } : {};
        var element = (react.createElement(TagName, __assign({}, tagSpecificProps, { "aria-activedescendant": getSafeId(ariaActiveDescendant), "aria-autocomplete": ariaAutoComplete, "aria-controls": getSafeId(ariaControls), "aria-describedby": getSafeId(ariaDescribedBy), "aria-disabled": disabled, "aria-expanded": ariaExpanded, "aria-haspopup": ariaHasPopup, "aria-invalid": ariaInvalid, "aria-label": ariaLabel === undefined && placeholder ? placeholder : ariaLabel, "aria-labelledby": getSafeId(ariaLabelledBy) || getSafeId(formItemContext.ariaLabelledById), "aria-readonly": inputType && inputType !== "text" ? readOnly : undefined, "aria-required": required, "aria-roledescription": ariaRoleDescription, autoFocus: autoFocus, "data-focuszone": !disabled && !excludeFocusZone ? zoneContext.focuszoneId : undefined, disabled: disabled, className: className, id: getSafeId(inputId), maxLength: maxLength, onBlur: focusStatus.onBlur, onClick: onClick, onChange: function (e) {
                _this.props.onChange && _this.props.onChange(e, e.target.value);
                // Adjust height synchronously. If we wait until the React update effect, then
                // the text area has already been painted in a partially-scrolled state which
                // causes some ugly flickering.
                _this.adjustHeight();
            }, onFocus: function (event) {
                if (autoSelect && inputElement.current) {
                    inputElement.current.select();
                }
                focusStatus.onFocus && focusStatus.onFocus(event);
            }, onKeyDown: onKeyDown, onKeyPress: onKeyPress, onKeyUp: onKeyUp, onPaste: onPaste, placeholder: placeholder, readOnly: readOnly, required: required, ref: inputElement, role: role, style: style, spellCheck: spellCheck, tabIndex: getTabIndex(this.props), value: value || "" })));
        // We will use a hidden element behind the input to measure the height.
        // This prevents the page from performing re-layout when measuring.
        if (multiline && autoAdjustHeight) {
            element = (react.createElement("div", { className: "flex-row flex-grow relative" },
                react.createElement(TagName, { "aria-hidden": true, className: css("bolt-textfield-auto-adjust-hidden", className), ref: this.hiddenElement, role: "presentation" }),
                element));
        }
        return (react.createElement(react.Fragment, null,
            prefixIconProps &&
                Icon(__assign(__assign({ size: IconSize.medium }, prefixIconProps), { className: css(prefixIconProps.className, "prefix", !prefixIconProps.render && "bolt-textfield-icon", ((placeholder && !value) || prefixIconProps.render) && "bolt-textfield-no-text"), onClick: function (e) {
                        prefixIconProps && prefixIconProps.onClick && prefixIconProps.onClick(e);
                        focus();
                    } })),
            tooltipProps ? react.createElement(Tooltip, __assign({}, tooltipProps), element) : element,
            suffixIconProps &&
                Icon(__assign(__assign({ size: IconSize.medium }, suffixIconProps), { className: css(suffixIconProps.className, "suffix", !suffixIconProps.render && "bolt-textfield-icon", ((placeholder && !value) || suffixIconProps.render) && "bolt-textfield-no-text"), onClick: function (e) {
                        suffixIconProps && suffixIconProps.onClick && suffixIconProps.onClick(e);
                        focus();
                    } }))));
    };
    TextFieldInnerValue.prototype.componentDidMount = function () {
        this.adjustHeight();
    };
    TextFieldInnerValue.prototype.componentDidUpdate = function () {
        this.adjustHeight();
    };
    TextFieldInnerValue.prototype.adjustHeight = function () {
        var hiddenElement = this.hiddenElement;
        var _a = this.props, autoAdjustHeight = _a.autoAdjustHeight, inputElement = _a.inputElement, multiline = _a.multiline, value = _a.value;
        // If this is a multi-line, auto-adjust text area, adjust the height based on the current content
        if (multiline && autoAdjustHeight && inputElement.current && hiddenElement.current && value !== this.adjustedHeightValue) {
            hiddenElement.current.value = inputElement.current.value;
            if (this.adjustedHeight !== hiddenElement.current.scrollHeight) {
                this.adjustedHeight = hiddenElement.current.scrollHeight;
                this.adjustedHeightValue = inputElement.current.value;
                inputElement.current.style.height = this.adjustedHeight + "px";
            }
        }
    };
    return TextFieldInnerValue;
}(react.Component));

var messageId = 1;
/** @class */ ((function (_super) {
    __extends(TextFieldWithMessage, _super);
    function TextFieldWithMessage(props) {
        var _this = _super.call(this, props) || this;
        _this.innerTextField = react.createRef();
        _this.select = function () {
            if (_this.innerTextField.current) {
                _this.innerTextField.current.select();
            }
        };
        _this.setSelectionRange = function (start, length) {
            if (_this.innerTextField.current) {
                _this.innerTextField.current.setSelectionRange(start, length);
            }
        };
        _this.descriptionId = "textfield-message-" + messageId++;
        return _this;
    }
    TextFieldWithMessage.prototype.focus = function () {
        if (this.innerTextField.current) {
            this.innerTextField.current.focus();
        }
    };
    Object.defineProperty(TextFieldWithMessage.prototype, "selectionEnd", {
        get: function () {
            return this.innerTextField.current ? this.innerTextField.current.selectionEnd : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldWithMessage.prototype, "selectionStart", {
        get: function () {
            return this.innerTextField.current ? this.innerTextField.current.selectionStart : null;
        },
        enumerable: true,
        configurable: true
    });
    TextFieldWithMessage.prototype.render = function () {
        var _this = this;
        var _a = this.props, message = _a.message, error = _a.error;
        return (react.createElement(Observer, { error: error, message: message }, function (observerProps) {
            var textFieldProps = __assign({}, _this.props.textFieldProps);
            var messageClassName = _this.props.messageClassName;
            if (observerProps.error) {
                textFieldProps.className = css(textFieldProps.className, "bolt-textfield-error");
                messageClassName = css(messageClassName, "bolt-textfield-message-error");
                textFieldProps.suffixIconProps = textFieldProps.suffixIconProps || {
                    className: "bolt-textfield-message-error",
                    iconName: "Error"
                };
            }
            return (react.createElement("div", { className: css(_this.props.className, "flex-column") },
                react.createElement(TextField, __assign({ ariaDescribedBy: observerProps.message && _this.descriptionId, ref: _this.innerTextField }, textFieldProps)),
                observerProps.message && (react.createElement("span", { role: error ? "alert" : undefined, id: getSafeId(_this.descriptionId), className: css(messageClassName, "bolt-textfield-message") }, observerProps.message))));
        }));
    };
    return TextFieldWithMessage;
})(react.Component));

export { TextField as T, TextFieldFocusTreatmentBehavior as a };
