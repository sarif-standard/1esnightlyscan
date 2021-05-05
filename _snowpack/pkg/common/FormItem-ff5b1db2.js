import { _ as __extends } from './Observable-063af883.js';
import './core-4c1f1367.js';
import { r as react } from './index-abdc4d2d.js';
import { O as Observer } from './SelectionObserver-458393aa.js';
import { c as css, g as getSafeId } from './Util-e30cbaf3.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/FormItem/FormItem.css */
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
__snowpack__injectStyle(".bolt-formitem-label {\n  color: inherit;\n  margin-bottom: 8px; }\n\n.bolt-formitem-message {\n  color: rgba(0, 0, 0, .55);\n  color: var(--text-secondary-color,rgba(0, 0, 0, .55));\n  margin-top: 8px; }\n\n.bolt-formitem-message-error {\n  color: rgba(218, 10, 0, 1);\n  color: var(--status-error-text,rgba(218, 10, 0, 1)); }\n");

var FormItemContext = react.createContext({});
var formItemId = 1;
var FormItem = /** @class */ (function (_super) {
    __extends(FormItem, _super);
    function FormItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "form-item-" + formItemId++;
        return _this;
    }
    FormItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, ariaLabel = _a.ariaLabel, className = _a.className, error = _a.error, label = _a.label, message = _a.message;
        var ariaLabelledById = label ? this.id + "-label" : undefined;
        return (react.createElement(Observer, { error: error, message: message }, function (observedProps) {
            var ariaDescribedById = observedProps.message ? _this.id + "-message" : undefined;
            return (react.createElement(FormItemContext.Provider, { value: { ariaDescribedById: ariaDescribedById, ariaLabelledById: ariaLabelledById, error: observedProps.error } },
                react.createElement("div", { className: css(className, "flex-column") },
                    label && (react.createElement("label", { "aria-label": ariaLabel, className: "bolt-formitem-label body-m", id: getSafeId(ariaLabelledById) }, label)),
                    _this.props.children,
                    observedProps.message && (react.createElement("span", { className: css("bolt-formitem-message body-xs", observedProps.error && "bolt-formitem-message-error"), id: getSafeId(ariaDescribedById), role: observedProps.error ? "alert" : undefined }, observedProps.message)))));
        }));
    };
    return FormItem;
}(react.Component));

export { FormItemContext as F, FormItem as a };
