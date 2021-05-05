import { a as __assign } from '../common/Observable-063af883.js';
import '../common/core-4c1f1367.js';
import { r as react } from '../common/index-abdc4d2d.js';
import { B as Button } from '../common/ExpandableButton-778bbe51.js';
import { H as Header } from '../common/Header-e51a25d0.js';
import '../common/Screen-9c158c22.js';
import { a as IconSize } from '../common/Icon.Props-050e98eb.js';
import '../common/Tooltip-bfc7063c.js';
import { c as css } from '../common/Util-e30cbaf3.js';
import { O as Observer } from '../common/SelectionObserver-458393aa.js';
import { S as SurfaceContext, b as Surface, c as Spacing, a as SurfaceBackground } from '../common/Surface-9548ad22.js';
import '../common/process-2545f00a.js';
import '../common/_commonjsHelpers-4f955397.js';
import '../common/Accessibility-e11a7e50.js';
import '../common/Resources.Core-6b4f8906.js';
import '../common/Focus-dd57f317.js';
import '../common/Filter-c4d98be1.js';
import '../common/Intersection-ecdadb98.js';
import '../common/MoreButton-5bbaae90.js';
import '../common/Checkbox-cfa17752.js';
import '../common/ListSelection-50fc8f5c.js';
import '../common/Resources.Widgets-1363c6a9.js';
import '../common/TabContent-0e8129a0.js';
import '../common/String-19e5561c.js';
import '../common/Pill-ed46bf0c.js';
import '../common/Color-c39ec9d4.js';
import '../common/index-2be6b7dd.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Card/Card.css */
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
__snowpack__injectStyle(".bolt-card {\n  border-radius: 4px;\n  overflow: hidden;\n  padding: 20px 0px; }\n  @media screen and (min-width: 0\\0) {\n    .bolt-card {\n      border-radius: 0; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-card {\n      border: solid 1px; } }\n  @media screen and (max-width: 600px) {\n    .bolt-card {\n      border-radius: 0; } }\n\n.bolt-card-with-header {\n  padding-top: 0px; }\n\n.bolt-card-content {\n  overflow: hidden; }\n\n.bolt-card-footer {\n  padding-top: 12px; }\n\n.bolt-card-no-vertical-padding {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.bolt-card-white {\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--callout-background-color,rgba(255, 255, 255, 1)); }\n\n.bolt-table-card {\n  padding-bottom: 0px;\n  padding-top: 0px; }\n  .bolt-table-card .bolt-card-header {\n    padding-bottom: 0px; }\n  .bolt-table-card.no-column-headers .bolt-card-header {\n    padding-bottom: 20px;\n    border-bottom:  1px solid;\n    border-bottom-color: rgba( 234, 234, 234 ,  1 );\n    border-bottom-color: rgba( var(--palette-neutral-8,234, 234, 234) ,  1 ); }\n  .bolt-table-card .bolt-card-content {\n    padding: 0px; }\n\n.bolt-button.bolt-card-expand-button {\n  margin-left: 12px;\n  margin-top: 16px;\n  margin-right: 4px; }\n\n.bolt-card-header-collapsible {\n  padding-left: 8px; }\n\n.bolt-card-expandable-header.bolt-card-expandable-header {\n  padding-left: 8px; }\n\n.bolt-card-header-collapsed.bolt-card-header-collapsed {\n  padding-bottom: 0px; }\n");

var CollapseButtonAriaLabel = "Collapse";
var ExpandButtonAriaLabel = "Expand";

var CardContent = function (props) {
    return (react.createElement(SurfaceContext.Consumer, null, function (surfaceContext) {
        var _a = props.contentPadding, contentPadding = _a === void 0 ? true : _a;
        return (react.createElement("div", { className: css(props.className, "bolt-card-content flex-row flex-grow", contentPadding && surfaceContext.horizontalClassName) }, props.children));
    }));
};

var CustomCard = function (props) {
    return (react.createElement(SurfaceContext.Consumer, null, function (surfaceContext) { return (react.createElement(Surface, __assign({}, surfaceContext, { spacing: Spacing.default }),
        react.createElement("div", { className: css(props.className, "bolt-card flex-column depth-8", surfaceContext.background === SurfaceBackground.neutral && "bolt-card-white") }, props.children))); }));
};

var Card = function (props) {
    var collapsible = props.collapsible, _a = props.collapsed, collapsed = _a === void 0 ? false : _a, _b = props.titleProps, titleProps = _b === void 0 ? {} : _b, headerCommandBarItems = props.headerCommandBarItems, onCollapseClick = props.onCollapseClick, renderHeader = props.renderHeader;
    var text = titleProps.text;
    return (react.createElement(CustomCard, { className: css(props.className, (text || headerCommandBarItems) && "bolt-card-with-header") }, collapsible ? (react.createElement(Observer, { collapsed: collapsed }, function (observerProps) { return (react.createElement(react.Fragment, null,
        (text || headerCommandBarItems || renderHeader) && (react.createElement("div", { className: "flex-row" },
            react.createElement(Button, { ariaLabel: observerProps.collapsed ? ExpandButtonAriaLabel : CollapseButtonAriaLabel, subtle: true, iconProps: { iconName: observerProps.collapsed ? "ChevronRightMed" : "ChevronDownMed", size: IconSize.small }, className: "bolt-card-expand-button flex-self-start", onClick: onCollapseClick }),
            renderHeader ? (renderHeader()) : (react.createElement(CardHeader, __assign({}, props, { headerClassName: css(props.headerClassName, "bolt-card-expandable-header", observerProps.collapsed && "bolt-card-header-collapsed") }))))),
        !observerProps.collapsed && react.createElement(CardContent, __assign({}, props.contentProps), props.children))); })) : (react.createElement(react.Fragment, null,
        renderHeader ? renderHeader() : (text || headerCommandBarItems) && react.createElement(CardHeader, __assign({}, props)),
        react.createElement(CardContent, __assign({}, props.contentProps), props.children)))));
};
var CardHeader = function (props) {
    var collapsible = props.collapsible, _a = props.titleProps, titleProps = _a === void 0 ? {} : _a, headerBreakpoints = props.headerBreakpoints, headerClassName = props.headerClassName, headerCommandBarItems = props.headerCommandBarItems, _b = props.headerDescriptionProps, headerDescriptionProps = _b === void 0 ? {} : _b, headerIconProps = props.headerIconProps;
    var text = titleProps.text, className = titleProps.className, id = titleProps.id, size = titleProps.size, ariaLevel = titleProps.ariaLevel;
    return (react.createElement(Header, { className: css(headerClassName, "bolt-card-header", collapsible && "bolt-card-header-collapsible"), commandBarItems: headerCommandBarItems, description: headerDescriptionProps.text, descriptionClassName: headerDescriptionProps.className, headerBreakpoints: headerBreakpoints, titleId: id, titleIconProps: headerIconProps, title: text, titleAriaLevel: ariaLevel, titleClassName: className, titleSize: size }));
};

export { Card, CardContent, CustomCard };
