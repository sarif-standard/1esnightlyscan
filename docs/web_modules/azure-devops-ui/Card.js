import { _ as __extends, S as SurfaceContext, d as Spacing, O as Observer, a as __assign, b as IconSize, I as Icon, T as Tooltip, e as FocusZone, f as FocusZoneDirection, g as ObservableLike, h as FocusWithin, F as FocusZoneContext, i as ObservableValue, c as FocusGroupContext, j as ObservableArray, k as __spreadArrays, M as MouseWithin, L as Location, C as Callout, A as ArrayItemProvider, l as FocusZoneKeyStroke, m as Surface, n as SurfaceBackground } from '../common/Icon.Props-7e4a5eac.js';
import { a as css, g as getSafeId, K as KeyCode, f as eventTargetContainsNode, p as preventDefault, h as getSafeIdSelector, s as setFocusVisible, j as isArrowKey } from '../common/Util-bc2f8488.js';
import { r as react } from '../common/index-c314220c.js';
import { B as Button, E as ExpandableButton } from '../common/ExpandableButton-a67c3070.js';
import { S as ScreenContext, a as ScreenSize, I as Intersection, b as IntersectionContext, M as MoreActions, T as TabProviderContext } from '../common/TabContent-88d9909b.js';
import { C as Checkbox } from '../common/Checkbox-3777c7f2.js';
import { g as getTabIndex } from '../common/Focus-5dc7d126.js';
import '../common/index-5a0b1fc3.js';
import '../common/Accessibility-e11a7e50.js';

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

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Header/Header.css */
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
__snowpack__injectStyle$1(".bolt-header-no-spacing-defined {\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-right: 20px; }\n\n.bolt-header-condensed {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.bolt-header-default {\n  padding-top: 16px;\n  padding-bottom: 16px; }\n\n.bolt-header-relaxed {\n  padding-top: 24px;\n  padding-bottom: 24px; }\n\n.bolt-header-with-commandbar.bolt-header-condensed {\n  padding-right: 12px; }\n\n.bolt-header-with-commandbar.bolt-header-default {\n  padding-right: 16px; }\n\n.bolt-header-with-commandbar.bolt-header-relaxed {\n  padding-right: 28px; }\n\n.bolt-header-with-commandbar {\n  padding-right: 16px; }\n  @media screen and (max-width: 600px) {\n    .bolt-header-with-commandbar {\n      padding-right: 20px; } }\n\n.bolt-header-with-back-button {\n  padding-left: 16px; }\n  @media screen and (max-width: 600px) {\n    .bolt-header-with-back-button {\n      flex-direction: column;\n      padding-left: 20px; } }\n\n.bolt-header-content-area {\n  min-width: 0px; }\n\n.bolt-header-title {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  margin-right: 8px; }\n  .bolt-header-title.l {\n    padding-top: 0px;\n    padding-bottom: 0px; }\n  .bolt-header-title.s {\n    padding-top: 6px;\n    padding-bottom: 6px; }\n  @media screen and (max-width: 600px) {\n    .bolt-header-title {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; } }\n\n.bolt-header-icon {\n  font-size: 1rem;\n  margin-right: 8px;\n  margin-top: 8px; }\n  .bolt-header-icon.l {\n    margin-top: 10px; }\n  .bolt-header-icon.s {\n    margin-top: 6px; }\n\n.bolt-header-separator {\n  height: 1px;\n  background-color: rgba( 244, 244, 244 ,  1 );\n  background-color: rgba( var(--palette-neutral-4,244, 244, 244) ,  1 ); }\n\n.bolt-button.bolt-header-back-button {\n  background-color: transparent;\n  font-size: 1rem;\n  margin-right: 8px; }\n  @media screen and (max-width: 600px) {\n    .bolt-button.bolt-header-back-button {\n      padding: 0px; }\n      .bolt-button.bolt-header-back-button .bolt-button-text {\n        font-size: 0.75rem;\n        color: rgba(0, 0, 0, .55);\n        color: var(--text-secondary-color,rgba(0, 0, 0, .55));\n        font-weight: normal; } }\n");

var CustomHeader = /** @class */ (function (_super) {
    __extends(CustomHeader, _super);
    function CustomHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHeader.prototype.render = function () {
        var _this = this;
        return (react.createElement(SurfaceContext.Consumer, null, function (surfaceContext) {
            return (react.createElement(react.Fragment, null,
                react.createElement("div", { className: css(_this.props.className, "bolt-header flex-row flex-noshrink flex-start", surfaceContext.horizontalClassName, surfaceContext.spacing === undefined && "bolt-header-no-spacing-defined", surfaceContext.spacing === Spacing.condensed && "bolt-header-condensed", surfaceContext.spacing === Spacing.default && "bolt-header-default", surfaceContext.spacing === Spacing.relaxed && "bolt-header-relaxed") }, _this.props.children),
                _this.props.separator && react.createElement("div", { className: "bolt-header-separator flex-noshrink" })));
        }));
    };
    return CustomHeader;
}(react.Component));

var Back = "Back";
var Filter = "Filter";

var ScreenSizeObserver = function (props) {
    return react.createElement(ScreenContext.Consumer, null, function (screen) { return react.createElement(Observer, { screenSize: screen.size }, props.children); });
};

function HeaderBackButton(props) {
    var buttonProps = props.buttonProps;
    return (react.createElement(ScreenSizeObserver, null, function (screenSizeProps) {
        var smallScreen = screenSizeProps.screenSize === ScreenSize.xsmall;
        return (react.createElement(Button, __assign({ ariaLabel: Back, iconProps: {
                iconName: "Back",
                size: smallScreen ? IconSize.small : undefined
            }, subtle: true }, buttonProps, { text: smallScreen ? (buttonProps.text ? buttonProps.text : Back) : undefined, className: css(buttonProps.className, "bolt-header-back-button justify-end") })));
    }));
}

var HeaderDescription = /** @class */ (function (_super) {
    __extends(HeaderDescription, _super);
    function HeaderDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderDescription.prototype.render = function () {
        return (react.createElement("div", { className: css(this.props.className, "bolt-header-description body-m secondary-text"), id: getSafeId(this.props.id) }, this.props.children));
    };
    return HeaderDescription;
}(react.Component));

var TitleSize;
(function (TitleSize) {
    TitleSize[TitleSize["Medium"] = 0] = "Medium";
    TitleSize[TitleSize["Large"] = 1] = "Large";
    TitleSize[TitleSize["Small"] = 2] = "Small";
})(TitleSize || (TitleSize = {}));

var HeaderIcon = /** @class */ (function (_super) {
    __extends(HeaderIcon, _super);
    function HeaderIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderIcon.prototype.render = function () {
        var titleSizeClass = undefined;
        switch (this.props.titleSize) {
            case TitleSize.Large:
                titleSizeClass = "l";
                break;
            case TitleSize.Small:
                titleSizeClass = "s";
                break;
            case TitleSize.Medium:
            default:
                titleSizeClass = "m";
        }
        return react.createElement("div", { className: css(this.props.className, "bolt-header-icon", titleSizeClass) }, Icon(this.props.iconProps));
    };
    return HeaderIcon;
}(react.Component));

function HeaderTitle(props) {
    var _a = props.ariaLevel, ariaLevel = _a === void 0 ? 1 : _a, id = props.id;
    var titleSizeClass = undefined;
    switch (props.titleSize) {
        case TitleSize.Large:
            titleSizeClass = "title-m l";
            break;
        case TitleSize.Small:
            titleSizeClass = "title-xs s";
            break;
        case TitleSize.Medium:
        default:
            titleSizeClass = "body-xl m";
    }
    return (react.createElement(Tooltip, { overflowOnly: true },
        react.createElement("div", { "aria-level": ariaLevel, className: css(props.className, "bolt-header-title", titleSizeClass), id: getSafeId(id), role: "heading" }, props.children)));
}

var HeaderTitleArea = /** @class */ (function (_super) {
    __extends(HeaderTitleArea, _super);
    function HeaderTitleArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderTitleArea.prototype.render = function () {
        return react.createElement("div", { className: css(this.props.className, "bolt-header-title-area flex-column flex-grow scroll-hidden") }, this.props.children);
    };
    return HeaderTitleArea;
}(react.Component));

var HeaderTitleRow = /** @class */ (function (_super) {
    __extends(HeaderTitleRow, _super);
    function HeaderTitleRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderTitleRow.prototype.render = function () {
        return react.createElement("div", { className: css(this.props.className, "bolt-header-title-row flex-row flex-baseline") }, this.props.children);
    };
    return HeaderTitleRow;
}(react.Component));

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Breakpoint/Breakpoint.css */
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
__snowpack__injectStyle$2(".bolt-breakpoint {\n  pointer-events: none; }\n\n.bolt-breakpoint-container {\n  height: 2px; }\n\n.bolt-breakpoint-observation {\n  bottom: 0;\n  left: 0;\n  top: 0; }\n");

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

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/HeaderCommandBar/HeaderCommandBar.css */
function __snowpack__injectStyle$3(css) {
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
__snowpack__injectStyle$3(".bolt-header-commandbar {\n  margin-left: 16px;\n  padding-right: 4px; }\n\n.bolt-header-command-item-button .bolt-button.icon-only {\n  padding: 8px; }\n\n.bolt-header-commandbar-no-right-padding {\n  padding-right: 0px; }\n\n.bolt-header-command-item-separator {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20));\n  width: 1px;\n  margin: 4px 8px; }\n");

var ButtonGroup = function (props) {
    return (react.createElement("div", { className: css(props.className, "bolt-button-group flex-row rhythm-horizontal-8"), role: props.role }, props.children));
};

/**
 * Renders children in a FocusZone and ButtonGroup. This should be used directly only
 * if you need to render custom content that does not map to an IHeaderCommandBarItem.
 *
 * This component will always render all of its children - the logic for which items live
 * in the ... button and which items are always shown is only in the HeaderCommandBar. It is assumed
 * that if you are custom rendering the header command bar, that you are responsible for putting
 * the items correctly into the menu button.
 */
var CustomHeaderCommandBar = /** @class */ (function (_super) {
    __extends(CustomHeaderCommandBar, _super);
    function CustomHeaderCommandBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHeaderCommandBar.prototype.render = function () {
        return (react.createElement(FocusZone, { direction: FocusZoneDirection.Horizontal, focusGroupProps: this.props.focusGroupProps }, ButtonGroup({
            className: css(this.props.className, "bolt-header-commandbar flex-noshrink", this.props.lastItemIsIconButton && "bolt-header-commandbar-no-right-padding"),
            children: this.props.children,
            role: this.props.role
        })));
    };
    return CustomHeaderCommandBar;
}(react.Component));

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Menu/Menu.css */
function __snowpack__injectStyle$4(css) {
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
__snowpack__injectStyle$4(".bolt-contextual-menu {\n  border-radius: 4px;\n  max-width: 320px;\n  overflow-x: hidden;\n  overflow-y: auto; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-contextual-menu {\n      border: 1px solid; } }\n\n@media screen and (max-width: 600px) {\n  .bolt-contextual-submenu {\n    min-width: 200px; } }\n\n.overflow .bolt-contextual-menu {\n  overflow-y: scroll; }\n\n.bolt-menu {\n  border-collapse: separate;\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  display: table;\n  table-layout: auto;\n  font-size: 0.875rem; }\n\n.bolt-menuitem-row {\n  background-color: transparent;\n  border-radius: 3px;\n  color: inherit;\n  display: table-row;\n  outline: none;\n  overflow: hidden;\n  text-decoration: none;\n  white-space: nowrap; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-menuitem-row {\n      border: 1px solid transparent; } }\n  .bolt-menuitem-row.focused {\n    background-color: transparent;\n    outline: none; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-menuitem-row.focused {\n        border-color: windowtext; } }\n  .bolt-menuitem-row:hover, .bolt-menuitem-row.expanded {\n    background-color: rgba(0, 0, 0, 0.04);\n    background-color: var(--palette-black-alpha-4,rgba(0, 0, 0, 0.04)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-menuitem-row.expanded {\n      border-color: windowtext; }\n    .bolt-menuitem-row:hover {\n      border-color: highlight; } }\n  .bolt-menuitem-row.disabled {\n    color: rgba(0, 0, 0, .38);\n    color: var(--text-disabled-color,rgba(0, 0, 0, .38)); }\n    .bolt-menuitem-row.disabled:hover {\n      background-color: transparent; }\n\n.bolt-focus-visible .bolt-menuitem-row.focused {\n  animation: focus-shadow-pulse-inset 4s ease-in-out infinite;\n  background-color: rgba(0, 0, 0, 0.04);\n  background-color: var(--palette-black-alpha-4,rgba(0, 0, 0, 0.04));\n  outline: none; }\n\na.bolt-menuitem-row:not(.ms-Button),\na.bolt-menuitem-row:not(.ms-Button):visited,\na.bolt-menuitem-row:not(.ms-Button):hover {\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  text-decoration: none; }\n  @media screen and (-ms-high-contrast: active) {\n    a.bolt-menuitem-row:not(.ms-Button),\n    a.bolt-menuitem-row:not(.ms-Button):visited,\n    a.bolt-menuitem-row:not(.ms-Button):hover {\n      color: windowtext; } }\n\n@media screen and (-ms-high-contrast: active) {\n  a.bolt-menuitem-row .bolt-list-cell {\n    border-color: transparent; } }\n\n@media screen and (-ms-high-contrast: active) {\n  a.bolt-menuitem-row:hover .bolt-list-cell {\n    border-color: highlight; } }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-focus-visible a.bolt-menuitem-row:focus .bolt-list-cell {\n    border-color: highlight; } }\n\n.bolt-menuitem-header {\n  font-weight: 600; }\n\n.bolt-menuitem-divider:hover,\n.bolt-menuitem-header:hover {\n  background-color: transparent; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-menuitem-divider:hover,\n    .bolt-menuitem-header:hover {\n      border: 1px solid transparent; } }\n\n.bolt-menuitem-cell {\n  padding: 0;\n  vertical-align: middle; }\n  .bolt-menuitem-cell:first-child .bolt-menuitem-cell-content {\n    padding-right: 0px; }\n  .bolt-menuitem-cell:last-child .bolt-menuitem-cell-content {\n    padding-left: 0px; }\n\n.bolt-menuitem-cell-content {\n  justify-content: center;\n  padding: 6px; }\n\n.bolt-menuitem-cell-text {\n  justify-content: flex-start;\n  max-width: 225px;\n  min-width: 180px; }\n\n.bolt-menuitem-cell-secondary {\n  color: rgba(0, 0, 0, .55);\n  color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n\n.bolt-menuitem-divider-content {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20));\n  height: 1px;\n  margin: 6px 6px;\n  padding: 0px; }\n\n.bolt-menu-spacer {\n  padding: 4px; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Menu/MenuButton.css */
function __snowpack__injectStyle$5(css) {
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
__snowpack__injectStyle$5("/**\r\n * Dropdown button styles\r\n */\n.bolt-dropdown-button {\n  display: inline-flex; }\n\n.bolt-dropdown-button .icon-right {\n  font-size: 0.75rem;\n  padding-left: 10px; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/List/List.css */
function __snowpack__injectStyle$6(css) {
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
__snowpack__injectStyle$6(".bolt-list {\n  border-spacing: 0 0;\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  cursor: default;\n  display: table;\n  table-layout: fixed;\n  user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  /* IE11: Limit the width of the list to prevent it from growing out of control */ }\n  @media screen and (min-width: 0\\0) {\n    .bolt-list {\n      max-width: 100vw; } }\n\n.bolt-list.bolt-list {\n  border-collapse: separate; }\n\n.bolt-fixed-height-list-row {\n  width: 100%; }\n\n.bolt-list-row {\n  color: inherit;\n  display: table-row;\n  outline: none;\n  text-decoration: none;\n  transition: background 80ms linear; }\n  .bolt-list-row:hover {\n    background-color: rgba(0, 0, 0, .02);\n    background-color: var(--component-grid-row-hover-color,rgba(0, 0, 0, .02)); }\n    .bolt-list-row:hover .bolt-list-cell-content-reveal {\n      visibility: visible; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-list-row:hover {\n        background: Highlight;\n        forced-color-adjust: none; }\n        .bolt-list-row:hover td {\n          forced-color-adjust: auto; } }\n  .bolt-list-row.focused .bolt-list-cell-content-reveal {\n    visibility: visible; }\n  .bolt-list-row.selected {\n    background-color: rgba(222, 236, 249, 1);\n    background-color: var(--component-grid-selected-row-color,rgba(222, 236, 249, 1));\n    outline: none; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-list-row.selected {\n        background: Highlight;\n        forced-color-adjust: none; }\n        .bolt-list-row.selected td {\n          forced-color-adjust: auto; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-list-row.selected .bolt-button.bolt-focus-treatment:focus,\n      .bolt-list-row.selected .bolt-checkbox.bolt-focus-treatment:focus .bolt-checkmark {\n        border-color: Background; } }\n    .bolt-list-row.selected .bolt-list-cell:first-child {\n      border-left: 2px solid rgba(0, 120, 212, 1);\n      border-left: 2px solid var(--component-grid-focus-border-color,rgba(0, 120, 212, 1)); }\n  .bolt-list-row:hover.selected {\n    background-color: rgba(222, 236, 249, 1);\n    background-color: var(--component-grid-action-selected-cell-hover-color,rgba(222, 236, 249, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-list-row:hover.selected {\n        background-color: Highlight; } }\n  .bolt-list-row.single-click-activation {\n    cursor: pointer; }\n\n.bolt-list-row-no-hover:hover {\n  background-color: initial; }\n\n.bolt-list-row-loading:hover {\n  background-color: initial;\n  cursor: default; }\n\n.bolt-list-cell {\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  color: inherit;\n  display: table-cell;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  white-space: nowrap; }\n  .bolt-list-cell:first-child {\n    border-left: 2px solid transparent; }\n  .bolt-list-cell:last-child {\n    border-right: 1px solid transparent; }\n\n.bolt-list-cell-content-reveal {\n  visibility: hidden; }\n\n.bolt-list-cell-spacer {\n  padding: 0; }\n\n.bolt-list-cell-text {\n  overflow: hidden; }\n\n.bolt-focus-visible .bolt-list-row:focus .bolt-list-cell {\n  border-color: rgba(0, 120, 212, 1);\n  border-color: var(--component-grid-focus-border-color,rgba(0, 120, 212, 1)); }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-focus-visible .bolt-list-row:focus {\n    forced-color-adjust: none;\n    border-color: highlight; } }\n\n@media screen and (-ms-high-contrast: black-on-white) {\n  .bolt-focus-visible .bolt-list-row:focus {\n    outline: 3px double highlight;\n    outline-offset: 1px; } }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-focus-visible .bolt-list-row:focus {\n    forced-color-adjust: none; }\n    .bolt-focus-visible .bolt-list-row:focus a {\n      forced-color-adjust: auto; }\n    .bolt-focus-visible .bolt-list-row:focus > td > * {\n      forced-color-adjust: auto; } }\n\n.bolt-list-row-marked .bolt-list-cell:first-child {\n  border-left:  2px solid;\n  border-left-color: rgba( 43, 136, 216 ,  1 );\n  border-left-color: rgba( var(--palette-primary-tint-10,43, 136, 216) ,  1 ); }\n\n.bolt-list-overlay-container {\n  width: 100%; }\n\n.bolt-list-overlay {\n  pointer-events: none;\n  width: 100%; }\n\n.bolt-list-drag-source-item {\n  background-color: rgba(255, 255, 255, 0.40);\n  background-color: var(--component-grid-drag-source-color,rgba(255, 255, 255, 0.40)); }\n\n.bolt-drag-image-portal {\n  z-index: 100; }\n\n.bolt-drag-image {\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--callout-background-color,rgba(255, 255, 255, 1));\n  height: 40px;\n  width: 320px;\n  padding: 0px 8px; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/List/ListDropIndicator.css */
function __snowpack__injectStyle$7(css) {
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
__snowpack__injectStyle$7(".bolt-list-drop-indicator-circle {\n  background-color: rgba( 43, 136, 216 ,  1 );\n  background-color: rgba( var(--palette-primary-tint-10,43, 136, 216) ,  1 );\n  border-radius: 50%;\n  height: 9px;\n  width: 9px; }\n  .bolt-list-drop-indicator-circle.top {\n    top: -4px; }\n  .bolt-list-drop-indicator-circle.bottom {\n    bottom: -4px; }\n\n.bolt-list-drop-indicator-line {\n  background-color: rgba( 199, 224, 244 ,  1 );\n  background-color: rgba( var(--palette-primary-tint-20,199, 224, 244) ,  1 );\n  height: 3px;\n  right: 0px; }\n  .bolt-list-drop-indicator-line.top {\n    top: -1px; }\n  .bolt-list-drop-indicator-line.bottom {\n    bottom: -1px; }\n\n.bolt-list-tree-drop-target {\n  border: 1px solid rgba(0, 120, 212, 1);\n  border: 1px solid var(--component-grid-focus-border-color,rgba(0, 120, 212, 1)); }\n");

var EventDispatch = /** @class */ (function () {
    function EventDispatch() {
        this.listeners = {};
    }
    EventDispatch.prototype.addEventListener = function (eventType, callback) {
        if (!(eventType in this.listeners)) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(callback);
    };
    EventDispatch.prototype.dispatchEvent = function (event, data, type) {
        var delegates = this.listeners[type || event.type];
        if (delegates) {
            var stack = delegates.slice();
            for (var i = 0, l = stack.length; i < l; i++) {
                stack[i].call(this, event, data);
            }
        }
    };
    EventDispatch.prototype.removeEventListener = function (eventType, callback) {
        if (!(eventType in this.listeners)) {
            return;
        }
        var stack = this.listeners[eventType];
        for (var i = 0, l = stack.length; i < l; i++) {
            if (stack[i] === callback) {
                stack.splice(i, 1);
                return;
            }
        }
    };
    return EventDispatch;
}());

/**
 * The FixedHeightList component is used to render a collection of items with a series of rows.
 */
/** @class */ ((function (_super) {
    __extends(FixedHeightList, _super);
    function FixedHeightList(props) {
        var _this = _super.call(this, props) || this;
        // Manage data about pages, including their spacers.
        _this.intersectionElements = {};
        // Track the table element used to render the rows.
        _this.bodyElement = react.createRef();
        _this.listElement = react.createRef();
        _this.scrollToIndex = -1;
        _this.scrollToOptions = undefined;
        // Focus/Selection management members.
        _this.selectOnFocus = true;
        _this.focusIndex = new ObservableValue(-1);
        _this.pivotIndex = -1;
        _this.onBlur = function () {
            _this.focusIndex.value = -1;
        };
        _this.onClick = function (event) {
            _this.onDispatch(event);
            if (!event.defaultPrevented) {
                if (_this.listElement.current) {
                    var _a = rowFromEvent(event), cellElement = _a.cellElement, rowIndex = _a.rowIndex;
                    if (!cellElement) {
                        var item = ObservableLike.getValue(_this.state.rows[rowIndex]);
                        if (rowIndex >= 0 && item) {
                            var listRow = { data: item, index: rowIndex };
                            // Even for singleClickActivation we fire the selection before activation.
                            if (_this.props.selectRowOnClick) {
                                _this.processSelectionEvent(event, listRow);
                            }
                            // For singleClickActivation we want the activation as well.
                            if (_this.props.singleClickActivation) {
                                _this.rowActivated(event, listRow);
                            }
                        }
                    }
                }
            }
        };
        _this.onDispatch = function (event) {
            _this.state.eventDispatch.dispatchEvent(event);
        };
        _this.onDoubleClick = function (event) {
            _this.onDispatch(event);
            if (!event.defaultPrevented && !_this.props.singleClickActivation) {
                var rowIndex = rowFromEvent(event).rowIndex;
                var item = ObservableLike.getValue(_this.state.rows[rowIndex]);
                if (rowIndex >= 0 && item) {
                    _this.rowActivated(event, { data: item, index: rowIndex });
                }
            }
        };
        _this.onFocusBody = function (event) {
            // The first time the list gets focus we need to select initial row if we are performing
            // selection of focus.
            if (_this.selectOnFocus) {
                var selection = _this.props.selection;
                if (!selection || selection.selectOnFocus) {
                    var rowIndex = _this.focusIndex.value;
                    if (rowIndex >= 0) {
                        var item = ObservableLike.getValue(_this.state.rows[rowIndex]);
                        if (item) {
                            _this.processSelectionEvent(event, { data: item, index: rowIndex });
                        }
                    }
                }
                _this.selectOnFocus = false;
            }
        };
        _this.onFocusItem = function (rowIndex, event) {
            var focusIndex = _this.focusIndex;
            if (focusIndex.value !== rowIndex) {
                _this.focusRow(rowIndex, 2);
                // We need to re-render the previously focused row and newly focused row so we will
                // clear the cached values.
                if (focusIndex.value >= 0) {
                    delete _this.state.renderedRows[focusIndex.value];
                }
                else if (_this.props.defaultTabbableRow !== undefined) {
                    // If there was a tabble row that was not the focusIndex.value row we need to update this
                    // row as well to get it re-rendered without the tabIndex.
                    delete _this.state.renderedRows[_this.props.defaultTabbableRow];
                }
                delete _this.state.renderedRows[rowIndex];
                _this.focusIndex.value = rowIndex;
                var item = ObservableLike.getValue(_this.state.rows[rowIndex]);
                if (item) {
                    _this.rowFocused(event, { data: item, index: rowIndex });
                }
            }
        };
        _this.onKeyDown = function (event) {
            _this.onDispatch(event);
            if (!event.defaultPrevented) {
                var nodeName = event.target.nodeName;
                if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
                    // Don't handle keyboard events when target is an input
                    return;
                }
                var focusIndex_1 = _this.focusIndex;
                var item_1 = ObservableLike.getValue(_this.state.rows[focusIndex_1.value]);
                if (item_1) {
                    if (event.which === KeyCode.enter) {
                        if (focusIndex_1.value >= 0 && !eventTargetContainsNode(event, ["A"])) {
                            _this.rowActivated(event, { data: item_1, index: focusIndex_1.value });
                        }
                    }
                    else if (event.which === KeyCode.space) {
                        _this.processSelectionEvent(event, { data: item_1, index: focusIndex_1.value });
                        event.preventDefault();
                    }
                    else if (event.which === KeyCode.upArrow || event.which === KeyCode.downArrow) {
                        var selection = _this.props.selection;
                        if (!selection || (selection.selectOnFocus && (event.shiftKey || !event.ctrlKey))) {
                            event.persist();
                            // Need to wait for the keyboard event to be processed by the focuszone.
                            window.setTimeout(function () {
                                if (_this.focusIndex.value != focusIndex_1.value) {
                                    _this.processSelectionEvent(event, { data: item_1, index: _this.focusIndex.value });
                                }
                            }, 0);
                        }
                    }
                    else if (event.which === KeyCode.pageDown) {
                        _this.focusRow(Math.min(focusIndex_1.value + _this.props.pageSize, _this.state.rowCount - 1), 1);
                        event.preventDefault();
                    }
                    else if (event.which === KeyCode.pageUp) {
                        _this.focusRow(Math.max(focusIndex_1.value - _this.props.pageSize, 0), -1);
                        event.preventDefault();
                    }
                    else if (event.which === KeyCode.home) {
                        _this.focusRow(0, 1);
                        event.preventDefault();
                    }
                    else if (event.which === KeyCode.end) {
                        _this.focusRow(_this.state.rowCount - 1, -1);
                        event.preventDefault();
                    }
                }
            }
        };
        _this.onIntersect = function (entries) {
            var scrollTop = _this.context.root.scrollTop;
            var rowCount = _this.state.rowCount;
            var _a = _this.state, firstMaterialized = _a.firstMaterialized, lastMaterialized = _a.lastMaterialized;
            var _b = _this.state, rowHeight = _b.rowHeight, rowProportion = _b.rowProportion;
            // Don't process an intersection while scroll event is pending.
            if (scrollTop !== _this.state.scrollTop && entries.length) {
                return;
            }
            // Ignore events if we dont have a our basic elements resolved (this should never happen).
            if (!_this.listElement.current || !_this.bodyElement.current) {
                return;
            }
            // Determine the location of the intersection within the page. This is the element
            // we are scrolling within.
            var intersectionRect = _this.context.root.getBoundingClientRect();
            var scrollTopRect = Math.max(0, scrollTop + _this.context.root.offsetTop - _this.listElement.current.offsetTop);
            // Track the first and last row elements for adjusting the range.
            var firstMaterializedUpdated = Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTopRect / (rowHeight * rowProportion))));
            var lastMaterializedUpdated = Math.min(rowCount - 1, firstMaterializedUpdated + Math.ceil(intersectionRect.height / rowHeight));
            if (scrollTopRect + (lastMaterializedUpdated - firstMaterializedUpdated) * rowHeight > _this.state.maxHeight) {
                lastMaterializedUpdated = rowCount - 1;
                firstMaterializedUpdated = Math.max(0, lastMaterializedUpdated - Math.ceil(intersectionRect.height / rowHeight));
            }
            // Update our state if and only if something has changed.
            if (firstMaterializedUpdated !== firstMaterialized ||
                lastMaterializedUpdated !== lastMaterialized ||
                rowHeight !== _this.state.rowHeight ||
                scrollTop !== _this.state.scrollTop ||
                scrollTopRect !== _this.state.scrollTopRect) {
                //
                // @TODO: We need to unload data for pages that are no longer rendererd.
                // This means not in the viewport or within any other rendered range.
                //
                _this.setState({
                    firstMaterialized: firstMaterializedUpdated,
                    lastMaterialized: lastMaterializedUpdated,
                    rowHeight: rowHeight,
                    scrollTop: scrollTop,
                    scrollTopRect: scrollTopRect
                });
            }
        };
        _this.onMouseDownBody = function (event) {
            // If the table body gets a mousedown, we will never need to fire the selection event when
            // the list gets focus since the mouse event will cause the selection.
            _this.selectOnFocus = false;
        };
        var rowCount = props.itemProvider.length;
        _this.state = {
            eventDispatch: props.eventDispatch || new EventDispatch(),
            firstMaterialized: 0,
            itemProvider: props.itemProvider,
            lastMaterialized: 0,
            maxHeight: _this.props.maxHeight || 1000000,
            focusRows: {},
            renderedRows: {},
            rowCount: rowCount,
            rowHeight: props.rowHeight || 0,
            rowProportion: props.rowHeight && props.maxHeight ? Math.min(1, props.maxHeight / (props.rowHeight * rowCount)) : 1,
            rows: {},
            scrollTop: 0,
            scrollTopRect: 0
        };
        return _this;
    }
    FixedHeightList.getDerivedStateFromProps = function (props, state) {
        var rowCount = props.itemProvider.length;
        var firstMaterialized = state.firstMaterialized;
        var lastMaterialized = state.lastMaterialized;
        if (rowCount !== state.rowCount) {
            firstMaterialized = Math.max(0, Math.min(state.firstMaterialized, rowCount));
            lastMaterialized = Math.max(firstMaterialized, Math.min(state.lastMaterialized + (state.lastMaterialized === state.rowCount - 1 ? props.pageSize : 0), rowCount - 1));
        }
        // Ensure out pages and providers are appropriately computed.
        var updatedState = {
            firstMaterialized: firstMaterialized,
            itemProvider: props.itemProvider,
            lastMaterialized: lastMaterialized,
            rowCount: rowCount,
            rowProportion: Math.min(1, state.maxHeight / (state.rowHeight * rowCount))
        };
        // If there are changes to the props that affect the cached data, we need it clear it.
        if (props.itemProvider !== state.itemProvider) {
            updatedState.renderedRows = {};
            updatedState.rows = {};
        }
        return updatedState;
    };
    FixedHeightList.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, focuszoneProps = _a.focuszoneProps, id = _a.id, width = _a.width;
        var _b = this.state, firstMaterialized = _b.firstMaterialized, lastMaterialized = _b.lastMaterialized, maxHeight = _b.maxHeight, rowCount = _b.rowCount, rowHeight = _b.rowHeight;
        var role = this.props.role ? this.props.role : this.props.selection ? "listbox" : "list";
        var rows = [];
        var firstFocusRow = Math.max(0, this.focusIndex.value - 3);
        var lastFocusRow = Math.min(rowCount, this.focusIndex.value + 3);
        rows.push(this.renderIntersectionBounds(true));
        // Add focus rows around rendered rows.
        if (this.focusIndex.value !== -1 && firstFocusRow < firstMaterialized) {
            for (var rowIndex = firstFocusRow; rowIndex <= Math.min(lastFocusRow, firstMaterialized - 1); rowIndex++) {
                rows.push(this.renderRow(rowIndex, false));
            }
        }
        for (var rowIndex = firstMaterialized; rowIndex <= lastMaterialized; rowIndex++) {
            rows.push(this.renderRow(rowIndex, true));
        }
        if (this.focusIndex.value !== -1 && lastFocusRow > lastMaterialized && lastMaterialized > 0) {
            for (var rowIndex = Math.max(firstFocusRow, lastMaterialized + 1); rowIndex <= lastFocusRow; rowIndex++) {
                rows.push(this.renderRow(rowIndex, false));
            }
        }
        rows.push(this.renderIntersectionBounds(false));
        var height = Math.min(maxHeight, rowHeight * this.state.rowCount);
        var list = (react.createElement("div", { "aria-label": this.props.ariaLabel, className: css(className, "bolt-fixed-height-list relative"), id: getSafeId(id), onBlur: this.onBlur, onClick: this.onClick, onDoubleClick: this.onDoubleClick, onDragEnd: this.onDispatch, onDragEnter: this.onDispatch, onDragExit: this.onDispatch, onDragOver: this.onDispatch, onDragStart: this.onDispatch, onDrop: this.onDispatch, onKeyUp: this.onDispatch, onMouseDown: this.onDispatch, onTouchStart: this.onDispatch, ref: this.listElement, role: role, style: { width: width, height: height } },
            react.createElement("div", { className: "relative", onFocus: this.onFocusBody, onKeyDown: this.onKeyDown, onMouseDown: this.onMouseDownBody, ref: this.bodyElement, style: { width: width, height: height } }, rows)));
        list = (react.createElement(FocusZone, __assign({ direction: FocusZoneDirection.Vertical, skipHiddenCheck: true }, focuszoneProps), list));
        return (react.createElement(Observer, { itemProvider: {
                // Supply an IObservableExpression to elevate the provider change to a state
                // update for the entire component instead of just the observer.
                filter: function (change, action) {
                    // Notify the selection about the change to the items.
                    if (_this.props.selection) {
                        _this.props.selection.onItemsChanged(change, action);
                    }
                    // @NOTE: For now we will just wipe out the entire cache, we can do an optimized
                    // update to the cache based on the rows that changed.
                    var updatedState = {
                        renderedRows: {},
                        focusRows: {},
                        rows: {}
                    };
                    // If their is a well defined rowcount we will update it and the maxPage.
                    if (_this.state.rowCount !== -1) {
                        var countChange = (change.addedItems ? change.addedItems.length : 0) - (change.removedItems ? change.removedItems.length : 0);
                        if (countChange) {
                            updatedState.rowCount = _this.state.rowCount + countChange;
                            updatedState.firstMaterialized = Math.max(0, Math.min(_this.state.firstMaterialized, updatedState.rowCount - 1));
                            updatedState.lastMaterialized = Math.max(updatedState.firstMaterialized, Math.min(_this.state.lastMaterialized +
                                (change.index >= _this.state.firstMaterialized && change.index <= _this.state.lastMaterialized + 1
                                    ? countChange
                                    : 0), updatedState.rowCount - 1));
                        }
                    }
                    _this.setState(updatedState);
                    return false;
                },
                observableValue: this.props.itemProvider
            } }, function () { return list; }));
    };
    FixedHeightList.prototype.componentDidMount = function () {
        this.onIntersect([]);
        this.context.register(this.onIntersect);
    };
    FixedHeightList.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a = this, scrollToIndex = _a.scrollToIndex, onScrollComplete = _a.onScrollComplete;
        if (this.state.rowCount !== prevState.rowCount) {
            this.onIntersect([]);
        }
        if (scrollToIndex !== -1 && this.state.rowHeight) {
            var parentElement = this.bodyElement.current;
            var _b = this.state, firstMaterialized = _b.firstMaterialized, lastMaterialized = _b.lastMaterialized;
            // If the row is materialized, we will ensure it is in the viewport.
            if (scrollToIndex >= firstMaterialized && scrollToIndex <= lastMaterialized && parentElement) {
                for (var currentIndex = 0; currentIndex < parentElement.children.length; currentIndex++) {
                    var childElement = parentElement.children[currentIndex];
                    var cellDetails = rowFromElement(childElement);
                    if (cellDetails.rowIndex === scrollToIndex) {
                        childElement.scrollIntoView(this.scrollToOptions);
                        break;
                    }
                }
            }
            // Reset the scroll state before we notify the complete function, it may start a new scroll operation.
            this.onScrollComplete = undefined;
            this.scrollToIndex = -1;
            this.scrollToOptions = undefined;
            // Notify any pending scrollComplete method that scrolling has completed.
            if (onScrollComplete) {
                onScrollComplete(scrollToIndex);
            }
        }
    };
    FixedHeightList.prototype.componentWillUnmount = function () {
        this.context.unregister(this.onIntersect);
    };
    FixedHeightList.prototype.getFocusIndex = function () {
        return this.focusIndex.value;
    };
    FixedHeightList.prototype.getStats = function () {
        return {
            firstMaterialized: this.state.firstMaterialized,
            lastMaterialized: this.state.lastMaterialized
        };
    };
    FixedHeightList.prototype.scrollIntoView = function (rowIndex, options, onScrollComplete) {
        this.props.pageSize;
        var _a = this.state, firstMaterialized = _a.firstMaterialized, lastMaterialized = _a.lastMaterialized, rowCount = _a.rowCount;
        if (rowIndex >= 0 && rowIndex < this.state.rowCount) {
            var parentElement = this.bodyElement.current;
            // If the row is materialized, we will ensure it is in the viewport.
            if (rowIndex >= firstMaterialized && rowIndex <= lastMaterialized && parentElement) {
                for (var currentIndex = 0; currentIndex < parentElement.children.length; currentIndex++) {
                    var childElement = parentElement.children[currentIndex];
                    var cellDetails = rowFromElement(childElement);
                    if (cellDetails.rowIndex === rowIndex) {
                        childElement.scrollIntoView(options);
                        break;
                    }
                }
                // If the caller wants to know when the scroll has completed, notify them.
                if (onScrollComplete) {
                    onScrollComplete(rowIndex);
                }
            }
            else {
                // We only notify the last caller for now, if someone was waiting and another
                // scroll request was made we will send -1 as the rowIndex scrolled into view.
                if (this.onScrollComplete) {
                    this.onScrollComplete(-1);
                }
                // Set the scrollToOptions that will be applied after the next update.
                this.onScrollComplete = onScrollComplete;
                this.scrollToIndex = rowIndex;
                this.scrollToOptions = options;
                // If we havent computed the rowHeight at this point we need to wait until
                // we know how big rows are to get the row in the right location.
                this.setState({
                    firstMaterialized: Math.max(0, rowIndex - Math.floor((lastMaterialized - firstMaterialized) / 2)),
                    lastMaterialized: Math.min(rowCount - 1, Math.ceil(rowIndex + (lastMaterialized - firstMaterialized) / 2))
                });
            }
        }
    };
    FixedHeightList.prototype.focusRow = function (rowIndex, direction) {
        var _this = this;
        this.scrollIntoView(rowIndex, { block: "nearest" }, function (completedIndex) {
            if (completedIndex === rowIndex && _this.bodyElement.current) {
                var rowElement = _this.bodyElement.current.querySelector("[data-row-index='" + completedIndex + "']");
                if (rowElement) {
                    // We need to ensure the requested row is focusable, if not we will move in the
                    // requested direction to find the first focusable row.
                    if (!rowElement.getAttribute("tabindex")) {
                        var newIndex = Math.min(_this.state.rowCount - 1, Math.max(0, completedIndex + direction));
                        if (newIndex !== completedIndex) {
                            _this.focusRow(newIndex, direction);
                        }
                        else if (newIndex !== _this.focusIndex.value) {
                            _this.focusRow(newIndex, -direction);
                        }
                    }
                }
            }
        });
    };
    FixedHeightList.prototype.processSelectionEvent = function (event, listRow) {
        var selection = this.props.selection;
        if (!selection || selection.selectable(listRow.index)) {
            var initialState = false;
            var targetState = true;
            if (selection) {
                var index = listRow.index;
                // If a selection is available use it to track the initial state.
                initialState = selection.selected(index);
                // Determine the type of change being made to the selection based on key states.
                if (this.pivotIndex >= 0 && event.shiftKey && selection.multiSelect) {
                    selection.select(Math.min(this.pivotIndex, index), Math.abs(this.pivotIndex - index) + 1, event.ctrlKey || event.metaKey);
                }
                else {
                    if ((event.ctrlKey || event.metaKey || selection.alwaysMerge) && selection.multiSelect) {
                        selection.toggle(index, true);
                        targetState = false;
                    }
                    else {
                        selection.select(index, 1, false);
                    }
                }
                // Save the last selectionIndex that we selected, this will allow
                // us to perform range based selection.
                if (!event.shiftKey) {
                    this.pivotIndex = index;
                }
            }
            if (initialState !== targetState) {
                this.rowSelected(event, listRow);
            }
        }
    };
    FixedHeightList.prototype.renderLoadingRow = function (rowIndex, details) {
        return (react.createElement("div", { className: "bolt-list-row-loading" },
            react.createElement("div", { className: "shimmer shimmer-line", style: { width: Math.random() * 80 + 20 + "%" } }, "\u00A0")));
    };
    FixedHeightList.prototype.renderIntersectionBounds = function (top) {
        var _this = this;
        var _a = this.state, firstMaterialized = _a.firstMaterialized, lastMaterialized = _a.lastMaterialized, rowHeight = _a.rowHeight, rowProportion = _a.rowProportion;
        var key = top ? "topobserv" : "bottomobserv";
        var rowTop = 0;
        // If we run out of room move from the bottom up. This can happen with proportionally allocated rows
        if (firstMaterialized * rowHeight * rowProportion + (lastMaterialized - firstMaterialized) * rowHeight > this.state.maxHeight) {
            if (top) {
                rowTop = this.state.maxHeight;
                rowTop -= (lastMaterialized - firstMaterialized) * rowHeight * rowProportion + rowHeight;
                rowTop--;
            }
            else {
                rowTop = this.state.maxHeight - 1;
            }
        }
        else {
            if (top) {
                rowTop = firstMaterialized * rowHeight * rowProportion - 1;
            }
            else {
                rowTop = firstMaterialized * rowHeight * rowProportion + (1 + lastMaterialized - firstMaterialized) * rowHeight + 1;
            }
        }
        return (react.createElement("div", { "aria-hidden": "true", className: "bolt-list-row-spacer invisible absolute", key: key, ref: function (spacerElement) {
                var existingElement = _this.intersectionElements[key];
                if (spacerElement) {
                    if (existingElement !== spacerElement) {
                        if (existingElement) {
                            _this.context.unobserve(spacerElement);
                        }
                        _this.context.observe(spacerElement);
                        _this.intersectionElements[key] = spacerElement;
                    }
                }
                else if (existingElement) {
                    _this.context.unobserve(existingElement);
                    delete _this.intersectionElements[key];
                }
            }, role: "presentation", style: { top: rowTop + "px", height: "1px" } }));
    };
    FixedHeightList.prototype.renderRow = function (rowIndex, isVisible) {
        var _this = this;
        var itemProvider = this.props.itemProvider;
        var _a = this.state, focusRows = _a.focusRows, renderedRows = _a.renderedRows, firstMaterialized = _a.firstMaterialized, lastMaterialized = _a.lastMaterialized; _a.rowHeight; var rowProportion = _a.rowProportion, rows = _a.rows;
        var renderedRow = isVisible ? renderedRows[rowIndex] : focusRows[rowIndex];
        // We can't use the cache for proportioned rows since the top is different based on what the firstMaterialized value is
        if (!renderedRow || rowProportion !== 1) {
            var item_2 = rows[rowIndex];
            if (!item_2) {
                if (itemProvider.getItem) {
                    item_2 = itemProvider.getItem(rowIndex);
                }
                else {
                    item_2 = itemProvider.value[rowIndex];
                }
            }
            // @TODO: If there are no more rows, we need to handle an itemProvider with -1 length.
            if (!item_2) {
                return null;
            }
            // Save the current item in the item cache.
            rows[rowIndex] = item_2;
            var selection = this.props.selection;
            var selectionObservable = void 0;
            if (selection) {
                selectionObservable = {
                    observableValue: selection,
                    filter: function (selectedRanges) {
                        for (var _i = 0, selectedRanges_1 = selectedRanges; _i < selectedRanges_1.length; _i++) {
                            var selectionRange = selectedRanges_1[_i];
                            if (rowIndex >= selectionRange.beginIndex && rowIndex <= selectionRange.endIndex) {
                                return true;
                            }
                        }
                        return false;
                    }
                };
            }
            var onFocus_1 = function (event) {
                _this.onFocusItem(rowIndex, event);
            };
            // Render the row, save it in the cache, and add it to the current page.
            renderedRow = (react.createElement(Observer, { item: item_2, key: rowIndex, selection: selectionObservable, focusIndex: this.focusIndex }, function (props) {
                var _a = _this.props, renderRow = _a.renderRow, renderLoadingRow = _a.renderLoadingRow;
                var _b = _this.state, rowHeight = _b.rowHeight, rowCount = _b.rowCount;
                var rowItem = ObservableLike.getValue(item_2);
                var itemDetails = {
                    ariaBusy: !props.item,
                    ariaRowOffset: 1,
                    data: rowItem,
                    eventDispatch: _this.state.eventDispatch,
                    itemProvider: _this.props.itemProvider,
                    listProps: _this.props,
                    onFocusItem: _this.onFocusItem,
                    singleClickActivation: _this.props.onActivate && _this.props.singleClickActivation
                };
                var renderedRow;
                if (props.item) {
                    renderedRow = renderRow(rowIndex, props.item, itemDetails);
                }
                else if (renderLoadingRow) {
                    renderedRow = renderLoadingRow(rowIndex, itemDetails);
                }
                else {
                    renderedRow = _this.renderLoadingRow(rowIndex, itemDetails);
                }
                var rowTop = 0;
                var rowHeightSpace = 0;
                if (rowIndex >= firstMaterialized && rowIndex <= lastMaterialized) {
                    rowHeightSpace = rowHeight;
                }
                // If we run out of room move from the bottom up. This can happen with proportionally allocated rows
                if (firstMaterialized * rowHeight * rowProportion + (lastMaterialized - firstMaterialized) * rowHeight >
                    _this.state.maxHeight) {
                    rowTop = _this.state.maxHeight;
                    rowTop -= (rowCount - lastMaterialized) * rowHeight * rowProportion;
                    rowTop -= (lastMaterialized - rowIndex) * rowHeight;
                }
                else {
                    if (rowHeightSpace === 0) {
                        rowTop = rowIndex * rowHeight * rowProportion;
                    }
                    else {
                        rowTop = firstMaterialized * rowHeight * rowProportion;
                        rowTop += (rowIndex - firstMaterialized) * rowHeight;
                    }
                }
                return (react.createElement(FocusWithin, { onFocus: onFocus_1 }, function (focusStatus) {
                    return (react.createElement(FocusZoneContext.Consumer, null, function (rowContext) {
                        return (react.createElement(FocusZone, { direction: FocusZoneDirection.Horizontal },
                            react.createElement("div", { className: css("bolt-fixed-height-list-row scroll-hidden absolute", _this.focusIndex.value === rowIndex && "focused"), style: {
                                    height: rowHeightSpace + "px",
                                    top: rowTop + "px"
                                }, "data-focuszone": rowContext.focuszoneId, "data-row-index": rowIndex, tabIndex: rowIndex === 0 ? 0 : -1, onBlur: focusStatus.onBlur, onFocus: focusStatus.onFocus }, renderedRow)));
                    }));
                }));
            }));
            // Save the row in our cache.
            if (isVisible) {
                this.state.renderedRows[rowIndex] = renderedRow;
            }
            else {
                this.state.focusRows[rowIndex] = renderedRow;
            }
        }
        return renderedRow;
    };
    FixedHeightList.prototype.rowActivated = function (event, listRow) {
        this.state.eventDispatch.dispatchEvent(event, listRow, "activate");
        if (this.props.onActivate) {
            this.props.onActivate(event, listRow);
        }
    };
    FixedHeightList.prototype.rowSelected = function (event, listRow) {
        this.state.eventDispatch.dispatchEvent(event, listRow, "select");
        if (this.props.onSelect) {
            this.props.onSelect(event, listRow);
        }
    };
    FixedHeightList.prototype.rowFocused = function (event, listRow) {
        this.state.eventDispatch.dispatchEvent(event, listRow, "focus");
        if (this.props.onFocus) {
            this.props.onFocus(event, listRow);
        }
    };
    FixedHeightList.contextType = IntersectionContext;
    FixedHeightList.defaultProps = {
        defaultTabbableRow: 0,
        focuszoneProps: { direction: FocusZoneDirection.Vertical },
        maxHeight: 1000000
    };
    return FixedHeightList;
})(react.Component));
function getAttributeAsNumber(element, attributeName) {
    var attributeValue = element.getAttribute(attributeName);
    if (attributeValue) {
        return parseInt(attributeValue, 10);
    }
    return -1;
}
function rowFromElement(element) {
    var attributeValue;
    var cellIndex = -1;
    var rowIndex = -1;
    var cellElement = null;
    while (element) {
        attributeValue = getAttributeAsNumber(element, "data-row-index");
        if (attributeValue !== -1) {
            rowIndex = attributeValue;
            break;
        }
        // We have hit the root of the details list, dont look above this.
        if (element.classList.contains("bolt-fixed-height-list")) {
            element = null;
            break;
        }
        element = element.parentElement;
    }
    return {
        cellElement: cellElement,
        cellIndex: cellIndex,
        rowElement: element,
        rowIndex: rowIndex
    };
}
function rowFromEvent(event) {
    return rowFromElement(event.target);
}

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Link/Link.css */
function __snowpack__injectStyle$8(css) {
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
__snowpack__injectStyle$8(".bolt-link {\n  border-radius: 2px;\n  color: rgba(0, 90, 158, 1);\n  color: var(--communication-foreground,rgba(0, 90, 158, 1));\n  cursor: pointer;\n  outline: transparent;\n  text-decoration: none;\n  transition: color 80ms cubic-bezier(0.165, 0.84, 0.44, 1), background 80ms linear; }\n  .bolt-link:hover {\n    color: rgba( 0, 69, 120 ,  1 );\n    color: rgba( var(--palette-primary-shade-30,0, 69, 120) ,  1 ); }\n  .bolt-focus-visible .bolt-link:focus {\n    animation: ms-focus-shadow-with-border-pulse 4s ease-in-out infinite;\n    box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23), 0 0 0 1px rgba(0, 120, 212, 1);\n    box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)), 0 0 0 1px var(--focus-border-color,rgba(0, 120, 212, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-link:focus {\n        animation: none; } }\n  .bolt-link.subtle {\n    border-radius: 4px;\n    color: inherit;\n    padding: 3px 6px; }\n    .bolt-link.subtle:hover {\n      color: rgba(0, 90, 158, 1);\n      color: var(--communication-foreground,rgba(0, 90, 158, 1));\n      background-color: rgba(0, 0, 0, 0.06);\n      background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n  .bolt-link.disabled {\n    cursor: default; }\n\n.bolt-focus-visible .bolt-link.subtle:focus {\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06));\n  color: rgba(0, 90, 158, 1);\n  color: var(--communication-foreground,rgba(0, 90, 158, 1));\n  outline: none; }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-focus-visible .bolt-link:focus {\n    outline: 1px solid highlight !important; } }\n");

var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = react.createRef();
        _this.onClick = function (event) {
            _this.handleActivation(event);
        };
        _this.onKeyPress = function (event) {
            if (!_this.props.href && event.which === KeyCode.enter) {
                // We only want to handle keyboard interaction if there is no href
                _this.handleActivation(event);
            }
        };
        _this.onFocus = function (event) {
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
            if (_this.props.id) {
                _this.context.onFocus(_this.props.id);
            }
        };
        return _this;
    }
    Link.prototype.render = function () {
        var _this = this;
        return (react.createElement(FocusZoneContext.Consumer, null, function (focusZoneContext) {
            var props = _this.props;
            var ariaDescribedBy = props.ariaDescribedBy, ariaLabel = props.ariaLabel, ariaExpanded = props.ariaExpanded, ariaHasPopup = props.ariaHasPopup, ariaSelected = props.ariaSelected, className = props.className, excludeFocusZone = props.excludeFocusZone, target = props.target, dataIsFocusable = props.dataIsFocusable;
            var rel = props.rel, role = props.role;
            var TagType = "a";
            // If the link is targetting an external window or tab and no explicit rel
            // attribute was supplied we will set noopener.
            if (target && !rel) {
                rel = "noopener";
            }
            if (!props.href && !props.role) {
                role = "button";
            }
            if (!props.href) {
                TagType = "span";
            }
            var link = (react.createElement(TagType, { ref: _this.ref, "aria-describedby": getSafeId(ariaDescribedBy), "aria-expanded": ariaExpanded, "aria-haspopup": ariaHasPopup, "aria-label": ariaLabel, "aria-selected": ariaSelected, className: css(className, "bolt-link", props.disabled && "disabled", props.subtle && "subtle"), "data-focuszone": !excludeFocusZone && focusZoneContext.focuszoneId, "data-is-focusable": dataIsFocusable, download: props.download, href: props.href, id: getSafeId(props.id), onBlur: props.onBlur, onClick: _this.onClick, onFocus: _this.onFocus, onKeyPress: _this.onKeyPress, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, onMouseOver: props.onMouseOver, onTouchEnd: props.onTouchEnd, onTouchMove: props.onTouchMove, onTouchStart: props.onTouchStart, rel: rel, role: role, tabIndex: getTabIndex(_this.props, _this.context), target: target }, _this.props.children));
            if (props.tooltipProps) {
                link = react.createElement(Tooltip, __assign({}, props.tooltipProps), link);
            }
            return link;
        }));
    };
    Link.prototype.focus = function () {
        this.ref.current && this.ref.current.focus();
    };
    Link.prototype.handleActivation = function (event) {
        if (!event.defaultPrevented) {
            if (this.props.disabled) {
                event.preventDefault();
            }
            else {
                this.props.onClick && this.props.onClick(event);
            }
        }
    };
    Link.contextType = FocusGroupContext;
    return Link;
}(react.Component));

/**
 * Handles an href and target being passed to an anchor, without a rel.
 */
function getDefaultAnchorProps(anchorProps) {
    var modifiedAnchorProps;
    if (anchorProps) {
        var rel = anchorProps.rel;
        if (anchorProps.href && anchorProps.target && !rel) {
            rel = "noopener";
        }
        modifiedAnchorProps = {
            href: anchorProps.href,
            rel: rel,
            target: anchorProps.target
        };
    }
    return modifiedAnchorProps;
}
/**
 * Handles an href and target being passed to a link, without a rel.
 */
function getDefaultLinkProps(linkProps) {
    if (!linkProps) {
        return getDefaultAnchorProps(linkProps);
    }
    return __assign(__assign({}, getDefaultAnchorProps(linkProps)), { disabled: linkProps.disabled, id: linkProps.id, onClick: linkProps.onClick, role: linkProps.role });
}

/**
 * The List component is used to render a collection of items with a series of rows.
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        // Track the table element used to render the rows.
        _this.bodyElement = react.createRef();
        _this.listElement = react.createRef();
        // Manage data about pages, including their spacers.
        _this.spacerElements = {};
        _this.scrollToIndex = -1;
        _this.scrollToOptions = undefined;
        // Focus/Selection management members.
        _this.selectOnFocus = true;
        _this.focusIndex = -1;
        _this.pivotIndex = -1;
        _this.onBlur = function () {
            _this.focusIndex = -1;
        };
        _this.onClick = function (event) {
            _this.onDispatch(event);
            if (!event.defaultPrevented && !(event.altKey && _this.props.selectableText)) {
                if (_this.listElement.current) {
                    var _a = cellFromEvent(event), cellElement = _a.cellElement, rowIndex = _a.rowIndex;
                    if (!cellElement || !eventTargetContainsNode(event, ["A"], cellElement)) {
                        var item = ObservableLike.getValue(_this.state.rows[rowIndex]);
                        if (rowIndex >= 0 && item) {
                            var listRow = { data: item, index: rowIndex };
                            // Even for singleClickActivation we fire the selection before activation.
                            if (_this.props.selectRowOnClick) {
                                _this.processSelectionEvent(event, listRow);
                            }
                            // For singleClickActivation we want the activation as well.
                            if (_this.props.singleClickActivation) {
                                _this.rowActivated(event, listRow);
                            }
                        }
                    }
                }
            }
        };
        _this.onDispatch = function (event) {
            _this.state.eventDispatch.dispatchEvent(event);
        };
        _this.onDoubleClick = function (event) {
            _this.onDispatch(event);
            if (!event.defaultPrevented && !_this.props.singleClickActivation) {
                var rowIndex = cellFromEvent(event).rowIndex;
                var item = ObservableLike.getValue(_this.state.rows[rowIndex]);
                if (rowIndex >= 0 && item) {
                    _this.rowActivated(event, { data: item, index: rowIndex });
                }
            }
        };
        _this.onFocusBody = function (event) {
            // The first time the list gets focus we need to select initial row if we are performing
            // selection of focus.
            if (_this.selectOnFocus) {
                var selection = _this.props.selection;
                if (!selection || selection.selectOnFocus) {
                    var rowIndex = _this.focusIndex;
                    if (rowIndex >= 0) {
                        var item = ObservableLike.getValue(_this.state.rows[rowIndex]);
                        if (item) {
                            _this.processSelectionEvent(event, { data: item, index: rowIndex });
                        }
                    }
                }
                _this.selectOnFocus = false;
            }
        };
        _this.onFocusItem = function (rowIndex, event) {
            var focusIndex = _this.focusIndex;
            if (focusIndex !== rowIndex) {
                // We need to re-render the previously focused row and newly focused row so we will
                // clear the cached values.
                if (focusIndex >= 0) {
                    delete _this.state.renderedRows[focusIndex];
                }
                else {
                    // If there was a tabble row that was not the focusIndex row we need to update this
                    // row as well to get it re-rendered without the tabIndex.
                    delete _this.state.renderedRows[_this.getInitialTabbableRow()];
                }
                delete _this.state.renderedRows[rowIndex];
                _this.focusIndex = rowIndex;
                var item = ObservableLike.getValue(_this.state.rows[rowIndex]);
                if (item) {
                    _this.rowFocused(event, { data: item, index: rowIndex });
                }
            }
        };
        _this.onKeyDown = function (event) {
            _this.onDispatch(event);
            if (!event.defaultPrevented) {
                var nodeName = event.target.nodeName;
                if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
                    // Don't handle keyboard events when target is an input
                    return;
                }
                var focusIndex_1 = _this.focusIndex;
                var item = ObservableLike.getValue(_this.state.rows[focusIndex_1]);
                if (item) {
                    if (event.which === KeyCode.enter) {
                        if (focusIndex_1 >= 0 && !eventTargetContainsNode(event, ["A"])) {
                            _this.rowActivated(event, { data: item, index: focusIndex_1 });
                        }
                    }
                    else if (event.which === KeyCode.space) {
                        _this.processSelectionEvent(event, { data: item, index: focusIndex_1 });
                        event.preventDefault();
                    }
                    else if (event.which === KeyCode.upArrow || event.which === KeyCode.downArrow) {
                        var selection = _this.props.selection;
                        if (!selection || (selection.selectOnFocus && (event.shiftKey || !event.ctrlKey))) {
                            event.persist();
                            // Need to wait for the keyboard event to be processed by the focuszone.
                            window.setTimeout(function () {
                                if (_this.focusIndex != focusIndex_1) {
                                    var data = ObservableLike.getValue(_this.state.rows[_this.focusIndex]);
                                    if (data) {
                                        _this.processSelectionEvent(event, { data: data, index: _this.focusIndex });
                                    }
                                }
                            }, 0);
                        }
                    }
                    else if (event.which === KeyCode.pageDown) {
                        var stats = _this.getStats();
                        _this.focusRow(Math.min(focusIndex_1 + (stats.lastRendered - stats.firstRendered), _this.state.rowCount - 1), 1);
                        event.preventDefault();
                    }
                    else if (event.which === KeyCode.pageUp) {
                        var stats = _this.getStats();
                        _this.focusRow(Math.max(focusIndex_1 - (stats.lastRendered - stats.firstRendered), 0), -1);
                        event.preventDefault();
                    }
                    else if (event.which === KeyCode.home) {
                        _this.focusRow(0, 1);
                        event.preventDefault();
                    }
                    else if (event.which === KeyCode.end) {
                        _this.focusRow(_this.state.rowCount - 1, -1);
                        event.preventDefault();
                    }
                }
            }
        };
        _this.onIntersect = function (entries) {
            // If virtualization is disabled, we will not attempt to adjust the viewport.
            if (!_this.props.virtualize) {
                return;
            }
            var scrollTop = _this.context.root.scrollTop;
            var _a = _this.state, firstRendered = _a.firstRendered, firstMaterialized = _a.firstMaterialized, lastRendered = _a.lastRendered, lastMaterialized = _a.lastMaterialized, rowCount = _a.rowCount, rowProportion = _a.rowProportion;
            var rowHeight = _this.state.rowHeight;
            // console.log({ phase: "onIntersect - Start", firstMaterialized, lastMaterialized, rowHeight });
            // Don't process an intersection while scroll event is pending.
            if (scrollTop !== _this.state.scrollTop && entries.length) {
                // console.log("Don't process an intersection while scroll event is pending.");
                return;
            }
            // Ignore events if we dont have a our basic elements resolved (this should never happen).
            if (!_this.listElement.current || !_this.bodyElement.current) {
                // console.log("Elements not available at this point.");
                return;
            }
            // We are going to enumerate all the children, if the row is in the viewport
            // we will determine if it should be paged out.
            var rowElements = _this.bodyElement.current.children;
            // If a rowHeight was specified we will compute one based on the average rowHeight in the
            // first page rendered.
            if (rowHeight === 0) {
                if (rowElements.length > 0) {
                    var totalHeight = 0;
                    var childCount = 0;
                    // Loop through all children and average the rowHeight's.
                    for (var childIndex = 0; childIndex < rowElements.length; childIndex++) {
                        var childHeight = _this.bodyElement.current.children[childIndex].getBoundingClientRect().height;
                        if (childHeight > 0) {
                            totalHeight += childHeight;
                            childCount++;
                        }
                    }
                    // Make sure we have at least one child row that has size.
                    if (childCount > 0) {
                        rowHeight = totalHeight / childCount;
                    }
                }
                if (rowHeight === 0) {
                    return;
                }
                // If we have a pending scrollIntoView we will schedule it now that we have the rowHeight
                if (_this.scrollToIndex !== -1) {
                    _this.setState({
                        firstMaterialized: Math.max(0, _this.scrollToIndex - _this.state.pageSize),
                        lastMaterialized: _this.scrollToIndex + Math.min(_this.props.initialPageCount * _this.state.pageSize, rowCount - 1),
                        rowHeight: rowHeight
                    });
                    return;
                }
                // console.log({ phase: "onIntersect - Compute RowHeight", rowHeight });
            }
            // Determine the location of the intersection within the page. This is the element
            // we are scrolling within.
            var intersectionRect = _this.context.root.getBoundingClientRect();
            // Track the first and last row elements for adjusting the range.
            var firstMaterializedElement;
            var lastMaterializedElement;
            var firstMaterializedUpdated = firstMaterialized;
            var lastMaterializedUpdated = lastMaterialized;
            var firstRenderedUpdated = lastMaterializedUpdated;
            var lastRenderedUpdated = firstMaterializedUpdated;
            // Go through the viewport pages and determine if any are out of range and should be
            // paged out. Range is defined as more than 1 page of estimated rows away from the
            // nearest edge. If you dont allow for 1 page of estimated rows it may thrash pages
            // in and out of materialization.
            for (var childIndex = 0; childIndex < rowElements.length; childIndex++) {
                // Determine if this child is in the viewport, ignore rows that are not.
                var rowElement = rowElements[childIndex];
                var rowIndex = getAttributeAsNumber$1(rowElement, "data-row-index");
                var rowRect = rowElement.getBoundingClientRect();
                if (rowIndex >= firstMaterialized && rowIndex <= lastMaterialized) {
                    // Make sure to leave some extra room above and below the visible rectangle to handle
                    // variable height rows. This helps prevent jittering when paging rows out.
                    if (rowRect.bottom < intersectionRect.top - _this.state.pageSize * rowHeight) {
                        firstMaterializedUpdated++;
                    }
                    else if (rowRect.top > intersectionRect.bottom + _this.state.pageSize * rowHeight) {
                        lastMaterializedUpdated--;
                    }
                    // We will save the first and last rows for later computations.
                    if (rowIndex === firstMaterialized) {
                        firstMaterializedElement = rowElement;
                    }
                    if (rowIndex === lastMaterialized) {
                        lastMaterializedElement = rowElement;
                    }
                }
                // If the row is within the intersection rect, update the first and last rendered rows. These might be the focused items
                if (rowIndex > -1 && rowRect.top < intersectionRect.bottom && rowRect.bottom > intersectionRect.top) {
                    lastRenderedUpdated = Math.max(lastRenderedUpdated, rowIndex);
                    firstRenderedUpdated = Math.min(firstRenderedUpdated, rowIndex);
                }
            }
            // When we are scaling the size of the list, we want to keep a pageSize worth of elements materiaized but not rendered.
            // This allows users to scroll a few items. If they quickly scroll past the last materialized element or drag the scroll wheel, we recalculate where we should be
            // instead of paging in rows.
            if (rowProportion < 1) {
                if (firstMaterializedUpdated > lastMaterializedUpdated ||
                    firstRenderedUpdated === firstMaterializedUpdated ||
                    lastRenderedUpdated === lastMaterializedUpdated) {
                    if (lastRenderedUpdated >= rowCount - 1) {
                        firstMaterializedUpdated = Math.ceil(lastMaterializedUpdated - (intersectionRect.height / rowHeight + _this.state.pageSize));
                    }
                    else {
                        var offsetTop = scrollTop - (_this.listElement.current.offsetTop - _this.context.root.offsetTop);
                        firstMaterializedUpdated = Math.max(0, Math.min(rowCount - 1, Math.floor(offsetTop / (rowProportion * rowHeight))) - _this.state.pageSize);
                        lastMaterializedUpdated = Math.min(rowCount - 1, firstMaterializedUpdated + Math.ceil(intersectionRect.height / rowHeight + _this.state.pageSize));
                        lastRenderedUpdated = -1;
                        firstRenderedUpdated = -1;
                    }
                }
                else {
                    firstMaterializedUpdated = Math.min(firstMaterializedUpdated, firstRenderedUpdated - _this.state.pageSize);
                    lastMaterializedUpdated = Math.max(lastMaterializedUpdated, lastRenderedUpdated + _this.state.pageSize);
                }
            }
            // If the row range is inverted (top above bottom) then all rows have been hidden and we should
            // recompute the viewport based on the scrollTop of our intersection and intersection height.
            else if (firstMaterializedUpdated > lastMaterializedUpdated) {
                var offsetTop = scrollTop - (_this.listElement.current.offsetTop - _this.context.root.offsetTop);
                firstMaterializedUpdated = Math.max(0, Math.min(rowCount - 1, Math.floor(offsetTop / rowHeight)) - _this.state.pageSize);
                lastMaterializedUpdated = Math.min(rowCount - 1, firstMaterializedUpdated + Math.ceil(intersectionRect.height / rowHeight + _this.state.pageSize));
                lastRenderedUpdated = -1;
                firstRenderedUpdated = -1;
            }
            else {
                // If the firstPage didn't move down, we may need more pages above.
                if (firstMaterializedUpdated === firstMaterialized && firstMaterializedElement) {
                    var rowRect = firstMaterializedElement.getBoundingClientRect();
                    var availableSpace = rowRect.top - intersectionRect.top;
                    if (availableSpace > 0) {
                        firstMaterializedUpdated -= Math.ceil(availableSpace / rowHeight);
                    }
                }
                // If the lastPage didn't move up, we may need more pages below.
                if (lastMaterializedUpdated === lastMaterialized && lastMaterializedElement) {
                    var rowRect = lastMaterializedElement.getBoundingClientRect();
                    var availableSpace = intersectionRect.bottom - rowRect.bottom;
                    if (availableSpace > 0) {
                        lastMaterializedUpdated += Math.ceil(availableSpace / rowHeight);
                    }
                }
            }
            // Make sure our page boundary stays in the available page range.
            firstMaterializedUpdated = Math.max(firstMaterializedUpdated, 0);
            lastMaterializedUpdated = Math.min(lastMaterializedUpdated, rowCount - 1);
            // console.log({ phase: "onIntersect - End", firstMaterializedUpdated, lastMaterializedUpdated, rowHeight });
            // Update our state if and only if something has changed.
            if (firstMaterializedUpdated !== firstMaterialized ||
                firstRenderedUpdated !== firstRendered ||
                lastMaterializedUpdated !== lastMaterialized ||
                lastRenderedUpdated !== lastRendered ||
                rowHeight !== _this.state.rowHeight ||
                scrollTop !== _this.state.scrollTop) {
                //
                // @TODO: We need to unload data for pages that are no longer rendererd.
                // This means not in the viewport or within any other rendered range.
                //
                // console.log({ phase: "onIntersect - stateChange", firstMaterializedUpdated, firstRenderedUpdated, lastRenderedUpdated, lastMaterializedUpdated, scrollTop });
                _this.setState({
                    firstMaterialized: firstMaterializedUpdated,
                    firstRendered: firstRenderedUpdated,
                    lastMaterialized: lastMaterializedUpdated,
                    lastRendered: lastRenderedUpdated,
                    rowHeight: rowHeight,
                    scrollTop: scrollTop
                });
            }
        };
        _this.onMouseDownBody = function (event) {
            // If the table body gets a mousedown, we will never need to fire the selection event when
            // the list gets focus since the mouse event will cause the selection.
            _this.selectOnFocus = false;
        };
        _this.getInitialTabbableRow = function () {
            var _a = _this.props, defaultTabbableRow = _a.defaultTabbableRow, itemProvider = _a.itemProvider, selection = _a.selection;
            if (defaultTabbableRow) {
                return defaultTabbableRow;
            }
            if (selection) {
                for (var i = 0; i < itemProvider.length; i++) {
                    if (selection.selectable(i)) {
                        return i;
                    }
                }
            }
            return 0;
        };
        _this.getHeight = function (rowIndex) {
            var height = 0;
            var rowHeights = _this.props.rowHeights || [];
            for (var i = 0; i < rowIndex - 1 && i < rowHeights.length; i++) {
                height += rowHeights[i];
            }
            return height;
        };
        var rowCount = props.itemProvider.length;
        var pageSize = props.pageSize;
        _this.state = {
            columnCount: 1,
            eventDispatch: props.eventDispatch || new EventDispatch(),
            firstMaterialized: 0,
            firstRendered: 0,
            itemProvider: props.itemProvider,
            lastMaterialized: _this.props.virtualize ? Math.min(props.initialPageCount * pageSize, rowCount - 1) : rowCount - 1,
            lastRendered: _this.props.virtualize ? Math.min(props.initialPageCount * pageSize, rowCount - 1) : rowCount - 1,
            overlays: new ObservableArray(),
            pageSize: pageSize,
            renderedRows: {},
            rowCount: rowCount,
            rowHeight: props.rowHeight || 0,
            rowProportion: props.rowHeight && props.maxHeight ? Math.min(1, props.maxHeight / (props.rowHeight * rowCount)) : 1,
            rows: {},
            scrollTop: 0
        };
        // Initialize the supplied behaviors.
        if (props.behaviors) {
            for (var _i = 0, _a = props.behaviors; _i < _a.length; _i++) {
                var behavior = _a[_i];
                if (behavior.initialize) {
                    behavior.initialize(props, _this, _this.state.eventDispatch);
                }
            }
        }
        return _this;
    }
    List.getDerivedStateFromProps = function (props, state) {
        var rowCount = props.itemProvider.length;
        var firstMaterialized = state.firstMaterialized;
        var lastMaterialized = state.lastMaterialized;
        if (rowCount !== state.rowCount) {
            firstMaterialized = Math.max(0, Math.min(state.firstMaterialized, rowCount));
            lastMaterialized = props.virtualize
                ? Math.max(firstMaterialized, Math.min(state.lastMaterialized + (state.lastMaterialized === state.rowCount - 1 ? props.pageSize : 0), rowCount - 1))
                : rowCount - 1;
        }
        // Ensure out pages and providers are appropriately computed.
        var updatedState = {
            firstMaterialized: firstMaterialized,
            itemProvider: props.itemProvider,
            lastMaterialized: lastMaterialized,
            pageSize: props.pageSize,
            rowCount: rowCount,
            rowProportion: Math.min(1, (props.maxHeight || 100000) / (state.rowHeight * (rowCount - (lastMaterialized - firstMaterialized))))
        };
        // If there are changes to the props that affect the cached data, we need it clear it.
        if (props.itemProvider !== state.itemProvider || props.columnCount !== state.columnCount) {
            updatedState.columnCount = props.columnCount;
            updatedState.renderedRows = {};
            updatedState.rows = {};
        }
        // console.log(updatedState);
        return updatedState;
    };
    List.prototype.render = function () {
        var _this = this;
        var _a = this.props, ariaRowOffset = _a.ariaRowOffset, className = _a.className, focuszoneProps = _a.focuszoneProps, id = _a.id, maxWidth = _a.maxWidth, minWidth = _a.minWidth, width = _a.width;
        var _b = this.state, firstMaterialized = _b.firstMaterialized, lastMaterialized = _b.lastMaterialized, rowCount = _b.rowCount, rowProportion = _b.rowProportion;
        var focusIndex = this.focusIndex;
        var role = this.props.role ? this.props.role : this.props.selection ? "listbox" : "list";
        var useAriaCounts = role === "table" || role === "grid" || role === "treegrid";
        var rows = [];
        // Number of pages each spacer takes up. There are potentially two spacers above
        // or below the view port. They surround the focus range when the focus range is
        // not within the viewport.
        var topSpacer1 = 0;
        var topSpacer2 = firstMaterialized;
        var bottomSpacer2 = Math.max(0, rowCount - lastMaterialized - 1);
        var bottomSpacer1 = 0;
        var firstFocusRow = Number.MAX_SAFE_INTEGER;
        var lastFocusRow = 0;
        // Compute the range of focus pages, these will be either before or after the pages
        // in the viewport. We need to ensure we have one row before and one row after the
        // focus row to support arrowing up and down.
        if (focusIndex !== -1) {
            firstFocusRow = Math.max(0, focusIndex - 3);
            lastFocusRow = Math.min(rowCount, focusIndex + 3);
            // Make sure we dont draw any of the pages that are in the viewport.
            if (firstFocusRow < firstMaterialized) {
                lastFocusRow = Math.min(lastFocusRow, firstMaterialized - 1);
                topSpacer1 = firstFocusRow;
                topSpacer2 = firstMaterialized - lastFocusRow - 1;
            }
            else if (lastFocusRow > lastMaterialized) {
                firstFocusRow = Math.max(firstFocusRow, lastMaterialized + 1);
                bottomSpacer2 = firstFocusRow - lastMaterialized - 1;
                bottomSpacer1 = Math.max(0, rowCount - lastFocusRow - 1);
            }
        }
        if (rowProportion < 1) {
            // Ensure that the spacers leave room for 1 pageSize above the viewport
            topSpacer2 += Math.min(this.state.pageSize, firstMaterialized);
        }
        // console.log({ phase: "render", firstMaterialized, lastMaterialized, topSpacer1, topSpacer2, bottomSpacer2, bottomSpacer1 });
        rows.push(this.renderSpacer("st1", topSpacer1));
        // If the focus pages are before the viewport render them up to
        // the first page but not including the first page.
        if (firstFocusRow < firstMaterialized) {
            for (var rowIndex = firstFocusRow; rowIndex <= lastFocusRow; rowIndex++) {
                rows.push(this.renderRow(rowIndex));
            }
        }
        rows.push(this.renderSpacer("st2", topSpacer2));
        // Go through each of the rendered pages and generate the child component.
        for (var rowIndex = firstMaterialized; rowIndex <= lastMaterialized; rowIndex++) {
            rows.push(this.renderRow(rowIndex));
        }
        rows.push(this.renderSpacer("sb2", bottomSpacer2, true));
        // If the focus pages are after the last page in the viewport render
        // them but not including the last page.
        if (lastFocusRow > lastMaterialized) {
            for (var rowIndex = firstFocusRow; rowIndex <= lastFocusRow; rowIndex++) {
                rows.push(this.renderRow(rowIndex));
            }
        }
        rows.push(this.renderSpacer("sb1", bottomSpacer1, true));
        return (react.createElement(Observer, { itemProvider: {
                // Supply an IObservableExpression to elevate the provider change to a state
                // update for the entire component instead of just the observer.
                filter: function (change, action) {
                    // Notify the selection about the change to the items.
                    if (_this.props.selection) {
                        _this.props.selection.onItemsChanged(change, action);
                    }
                    // @NOTE: For now we will just wipe out the entire cache, we can do an optimized
                    // update to the cache based on the rows that changed.
                    var updatedState = {
                        renderedRows: {},
                        rows: {}
                    };
                    // If the focused row was removed, we will clear the focus index.
                    if (change.removedItems && _this.focusIndex >= change.index && change.index + change.removedItems.length >= _this.focusIndex) {
                        _this.focusIndex = -1;
                    }
                    // If there is a well defined rowcount we will update it and the maxPage.
                    if (_this.state.rowCount !== -1) {
                        var countChange = (change.addedItems ? change.addedItems.length : 0) - (change.removedItems ? change.removedItems.length : 0);
                        if (countChange) {
                            updatedState.rowCount = _this.state.rowCount + countChange;
                            updatedState.firstMaterialized = Math.max(0, Math.min(_this.state.firstMaterialized, updatedState.rowCount - 1));
                            updatedState.lastMaterialized = _this.props.virtualize
                                ? Math.max(updatedState.firstMaterialized, Math.min(_this.state.lastMaterialized +
                                    (change.index >= _this.state.firstMaterialized && change.index <= _this.state.lastMaterialized + 1
                                        ? Math.min(_this.state.pageSize, countChange)
                                        : 0), updatedState.rowCount - 1))
                                : updatedState.rowCount - 1;
                        }
                    }
                    // console.log(updatedState);
                    _this.setState(updatedState);
                    return false;
                },
                observableValue: this.props.itemProvider
            } },
            react.createElement(FocusWithin, { onBlur: this.onBlur }, function (focusStatus) {
                // @TODO: Once we get the line-height: 20px in the body the body-m should be removed from the list.
                var list = (react.createElement("table", { "aria-colcount": useAriaCounts ? (_this.props.ariaColumnCount ? _this.props.ariaColumnCount : _this.props.columnCount) : undefined, "aria-label": _this.props.ariaLabel, "aria-rowcount": useAriaCounts ? _this.state.itemProvider.length + ariaRowOffset : undefined, className: css(className, "bolt-list body-m relative scroll-hidden"), id: getSafeId(id), onBlur: focusStatus.onBlur, onClick: _this.onClick, onContextMenu: _this.onDispatch, onDoubleClick: _this.onDoubleClick, onDragEnd: _this.onDispatch, onDragEnter: _this.onDispatch, onDragExit: _this.onDispatch, onDragOver: _this.onDispatch, onDragStart: _this.onDispatch, onDrop: _this.onDispatch, onFocus: focusStatus.onFocus, onKeyDown: _this.onKeyDown, onKeyUp: _this.onDispatch, onMouseDown: _this.onDispatch, onTouchStart: _this.onDispatch, ref: _this.listElement, role: role, style: { maxWidth: maxWidth, minWidth: minWidth, width: width } },
                    _this.props.renderHeader && _this.props.renderHeader(),
                    react.createElement("tbody", { className: "relative", onFocus: _this.onFocusBody, onMouseDown: _this.onMouseDownBody, ref: _this.bodyElement, role: role === "listbox" || role === "list" ? "presentation" : undefined },
                        _this.renderOverlay(_this.listElement),
                        rows)));
                if (focuszoneProps) {
                    list = (react.createElement(FocusZone, __assign({}, focuszoneProps, { skipHiddenCheck: true }), list));
                }
                return list;
            })));
    };
    List.prototype.componentDidMount = function () {
        this.context.register(this.onIntersect);
    };
    List.prototype.componentDidUpdate = function () {
        var _a = this, scrollToIndex = _a.scrollToIndex, onScrollComplete = _a.onScrollComplete;
        if (scrollToIndex !== -1 && this.state.rowHeight) {
            var parentElement = this.bodyElement.current;
            var _b = this.state, firstMaterialized = _b.firstMaterialized, lastMaterialized = _b.lastMaterialized;
            // If the row is materialized, we will ensure it is in the viewport.
            if (scrollToIndex >= firstMaterialized && scrollToIndex <= lastMaterialized && parentElement) {
                for (var currentIndex = 0; currentIndex < parentElement.children.length; currentIndex++) {
                    var childElement = parentElement.children[currentIndex];
                    var cellDetails = cellFromElement(childElement);
                    if (cellDetails.rowIndex === scrollToIndex) {
                        childElement.scrollIntoView(this.scrollToOptions);
                        break;
                    }
                }
            }
            // Reset the scroll state before we notify the complete function, it may start a new scroll operation.
            this.onScrollComplete = undefined;
            this.scrollToIndex = -1;
            this.scrollToOptions = undefined;
            // Notify any pending scrollComplete method that scrolling has completed.
            if (onScrollComplete) {
                onScrollComplete(scrollToIndex);
            }
        }
    };
    List.prototype.componentWillUnmount = function () {
        this.context.unregister(this.onIntersect);
    };
    List.prototype.addOverlay = function (id, rowIndex, render, zIndex) {
        if (zIndex === void 0) { zIndex = 0; }
        var overlays = this.state.overlays;
        var overlayIndex = overlays.value.findIndex(function (overlay) { return overlay.id === id; });
        var rowOverlay = { render: render, id: id, rowIndex: rowIndex, zIndex: zIndex + 1 };
        // Update the overlay if it exists for that id, otherwise add it
        if (overlayIndex >= 0) {
            overlays.change(overlayIndex, rowOverlay);
        }
        else {
            overlays.push(rowOverlay);
        }
    };
    List.prototype.removeOverlay = function (id) {
        var overlays = this.state.overlays;
        var overlayIndex = overlays.value.findIndex(function (overlay) { return overlay.id === id; });
        // Remove the overlay if it exists.
        if (overlayIndex >= 0) {
            overlays.splice(overlayIndex, 1);
        }
    };
    List.prototype.getFocusIndex = function () {
        return this.focusIndex;
    };
    List.prototype.getStats = function () {
        return {
            firstMaterialized: this.state.firstMaterialized,
            firstRendered: this.state.firstRendered,
            lastMaterialized: this.state.lastMaterialized,
            lastRendered: this.state.lastRendered
        };
    };
    List.prototype.scrollIntoView = function (rowIndex, options, onScrollComplete) {
        var _a = this.state, firstMaterialized = _a.firstMaterialized, lastMaterialized = _a.lastMaterialized, pageSize = _a.pageSize, rowCount = _a.rowCount, rowHeight = _a.rowHeight, rowProportion = _a.rowProportion;
        if (rowIndex >= 0 && rowIndex < this.state.rowCount) {
            var parentElement = this.bodyElement.current;
            // If the row is materialized, we will ensure it is in the viewport.
            if (rowIndex >= firstMaterialized && rowIndex <= lastMaterialized && parentElement) {
                for (var currentIndex = 0; currentIndex < parentElement.children.length; currentIndex++) {
                    var childElement = parentElement.children[currentIndex];
                    var cellDetails = cellFromElement(childElement);
                    if (cellDetails.rowIndex === rowIndex) {
                        childElement.scrollIntoView(options);
                        break;
                    }
                }
                // If the caller wants to know when the scroll has completed, notify them.
                if (onScrollComplete) {
                    onScrollComplete(rowIndex);
                }
            }
            else {
                // We only notify the last caller for now, if someone was waiting and another
                // scroll request was made we will send -1 as the rowIndex scrolled into view.
                if (this.onScrollComplete) {
                    this.onScrollComplete(-1);
                }
                // Set the scrollToOptions that will be applied after the next update.
                this.onScrollComplete = onScrollComplete;
                this.scrollToIndex = rowIndex;
                this.scrollToOptions = options;
                // We need to add some padding when we grow proportionally, since the spacers do not fill up enough room if
                // the list starts in the middle of the scrollable region
                var padding = rowProportion < 1 ? pageSize : 0;
                // If we havent computed the rowHeight at this point we need to wait until
                // we know how big rows are to get the row in the right location.
                if (rowHeight) {
                    this.setState({
                        firstMaterialized: Math.max(0, rowIndex - padding),
                        lastMaterialized: Math.min(rowCount - 1, rowIndex + padding)
                    });
                }
            }
        }
    };
    List.prototype.focusRow = function (rowIndex, direction) {
        var _this = this;
        if (direction === void 0) { direction = 1; }
        return new Promise(function (resolve) {
            _this.scrollIntoView(rowIndex, { block: "center" }, function (completedIndex) {
                if (completedIndex === rowIndex && _this.bodyElement.current) {
                    var rowElement = _this.bodyElement.current.querySelector("[data-row-index='" + completedIndex + "']");
                    if (rowElement) {
                        // We need to ensure the requested row is focusable, if not we will move in the
                        // requested direction to find the first focusable row.
                        if (!rowElement.getAttribute("tabindex")) {
                            var newIndex = Math.min(_this.state.rowCount - 1, Math.max(0, completedIndex + direction));
                            if (newIndex !== completedIndex) {
                                _this.focusRow(newIndex, direction);
                            }
                            else if (newIndex !== _this.focusIndex) {
                                _this.focusRow(newIndex, -direction);
                            }
                        }
                        else {
                            rowElement.focus();
                        }
                    }
                }
                resolve();
            });
        });
    };
    List.prototype.processSelectionEvent = function (event, listRow) {
        var _a = this.props, selection = _a.selection, enforceSingleSelect = _a.enforceSingleSelect;
        if (!selection || selection.selectable(listRow.index)) {
            if (selection) {
                var index = listRow.index;
                var multiSelect = enforceSingleSelect ? false : selection.multiSelect;
                // Determine the type of change being made to the selection based on key states.
                if (this.pivotIndex >= 0 && event.shiftKey && multiSelect) {
                    selection.select(Math.min(this.pivotIndex, index), Math.abs(this.pivotIndex - index) + 1, event.ctrlKey || event.metaKey, multiSelect);
                }
                else {
                    var isSpaceBarStroke = event.which === KeyCode.space;
                    if ((event.ctrlKey || event.metaKey || selection.alwaysMerge || isSpaceBarStroke) && multiSelect) {
                        selection.toggle(index, true, multiSelect);
                    }
                    else {
                        selection.select(index, 1, false, multiSelect);
                    }
                }
                // Save the last selectionIndex that we selected, this will allow
                // us to perform range based selection.
                if (!event.shiftKey) {
                    this.pivotIndex = index;
                }
            }
            this.rowSelected(event, listRow);
        }
    };
    List.prototype.renderLoadingRow = function (rowIndex, details) {
        return (react.createElement(ListItem, { className: "bolt-list-row-loading", details: details, index: rowIndex },
            react.createElement("div", { className: "shimmer shimmer-line", style: { width: Math.random() * 80 + 20 + "%" } }, "\u00A0")));
    };
    List.prototype.renderOverlay = function (listElementRef) {
        var _this = this;
        var _a = this.state, firstMaterialized = _a.firstMaterialized, lastMaterialized = _a.lastMaterialized, overlays = _a.overlays;
        return (react.createElement(Observer, { overlays: overlays }, function (props) {
            var bodyElement = _this.bodyElement.current;
            if (props.overlays.length > 0 && bodyElement) {
                return (react.createElement("div", { className: "bolt-list-overlay-container absolute" }, props.overlays.map(function (overlay) {
                    // Make sure the row is in the rendered range of rows before starting.
                    if (overlay.rowIndex < firstMaterialized || overlay.rowIndex > lastMaterialized) {
                        return null;
                    }
                    // Find the row for the given rowIndex
                    var rowElement = listElementRef.current &&
                        listElementRef.current.querySelector("[data-row-index='" + overlay.rowIndex + "']");
                    // We cant render the overlay if the row is paged out since we can't determine
                    // the location of the row.
                    if (rowElement) {
                        return (react.createElement("div", { className: "bolt-list-overlay flex-row absolute", id: getSafeId(overlay.id), key: overlay.id, style: {
                                height: rowElement.offsetHeight,
                                top: rowElement.getBoundingClientRect().top - bodyElement.getBoundingClientRect().top,
                                zIndex: overlay.zIndex * 10
                            } }, overlay.render({ rowElement: rowElement })));
                    }
                    return null;
                })));
            }
            return null;
        }));
    };
    List.prototype.renderRow = function (rowIndex) {
        var _this = this;
        var itemProvider = this.props.itemProvider;
        var _a = this.state, renderedRows = _a.renderedRows, rows = _a.rows;
        var renderedRow = renderedRows[rowIndex];
        if (!renderedRow) {
            var item_1 = rows[rowIndex];
            if (!item_1) {
                if (itemProvider.getItem) {
                    item_1 = itemProvider.getItem(rowIndex);
                }
                else {
                    item_1 = itemProvider.value[rowIndex];
                }
            }
            // @TODO: If there are no more rows, we need to handle an itemProvider with -1 length.
            if (!item_1) {
                return null;
            }
            // Save the current item in the item cache.
            rows[rowIndex] = item_1;
            var selection = this.props.selection;
            var selectionObservable = void 0;
            if (selection) {
                selectionObservable = {
                    observableValue: selection,
                    filter: function (selectedRanges) {
                        for (var _i = 0, selectedRanges_1 = selectedRanges; _i < selectedRanges_1.length; _i++) {
                            var selectionRange = selectedRanges_1[_i];
                            if (rowIndex >= selectionRange.beginIndex && rowIndex <= selectionRange.endIndex) {
                                return true;
                            }
                        }
                        return false;
                    }
                };
            }
            // console.log("render row - " + rowIndex);
            // Render the row, save it in the cache, and add it to the current page.
            renderedRow = (react.createElement(Observer, { item: item_1, key: rowIndex, selection: selectionObservable }, function (props) {
                var _a = _this.props, selectableText = _a.selectableText, renderRow = _a.renderRow, renderLoadingRow = _a.renderLoadingRow;
                var focusIndex = _this.focusIndex;
                var tabbableIndex = focusIndex >= 0 ? focusIndex : _this.getInitialTabbableRow();
                var rowItem = ObservableLike.getValue(item_1);
                var itemDetails = {
                    selectableText: selectableText,
                    ariaBusy: !props.item,
                    ariaRowOffset: _this.props.ariaRowOffset + 1,
                    data: rowItem,
                    eventDispatch: _this.state.eventDispatch,
                    excludeTabStop: tabbableIndex !== rowIndex,
                    listProps: _this.props,
                    onFocusItem: _this.onFocusItem,
                    singleClickActivation: _this.props.onActivate && _this.props.singleClickActivation
                };
                if (props.item) {
                    return renderRow(rowIndex, props.item, itemDetails);
                }
                else if (renderLoadingRow) {
                    return renderLoadingRow(rowIndex, itemDetails);
                }
                else {
                    return _this.renderLoadingRow(rowIndex, itemDetails);
                }
            }));
            // Save the row in our cache.
            this.state.renderedRows[rowIndex] = renderedRow;
        }
        return renderedRow;
    };
    List.prototype.renderSpacer = function (key, rowCount, estimateRowHeight) {
        var _this = this;
        var height = !estimateRowHeight && this.props.rowHeights ? this.getHeight(rowCount) : rowCount * this.state.rowHeight * this.state.rowProportion;
        return (react.createElement("tr", { "aria-hidden": "true", className: "bolt-list-row-spacer invisible", key: key, ref: function (spacerElement) {
                var existingElement = _this.spacerElements[key];
                if (spacerElement) {
                    if (existingElement !== spacerElement) {
                        if (existingElement) {
                            _this.context.unobserve(spacerElement);
                        }
                        _this.context.observe(spacerElement);
                        _this.spacerElements[key] = spacerElement;
                    }
                }
                else if (existingElement) {
                    _this.context.unobserve(existingElement);
                    delete _this.spacerElements[key];
                }
            }, role: "presentation" },
            react.createElement("td", { className: "bolt-list-cell-spacer invisible", colSpan: this.props.columnCount, style: { height: height + "px" } })));
    };
    List.prototype.rowActivated = function (event, listRow) {
        this.state.eventDispatch.dispatchEvent(event, listRow, "activate");
        if (this.props.onActivate) {
            this.props.onActivate(event, listRow);
        }
    };
    List.prototype.rowSelected = function (event, listRow) {
        this.state.eventDispatch.dispatchEvent(event, listRow, "select");
        if (this.props.onSelect) {
            this.props.onSelect(event, listRow);
        }
    };
    List.prototype.rowFocused = function (event, listRow) {
        this.state.eventDispatch.dispatchEvent(event, listRow, "focus");
        if (this.props.onFocus) {
            this.props.onFocus(event, listRow);
        }
    };
    List.contextType = IntersectionContext;
    List.defaultProps = {
        ariaRowOffset: 0,
        columnCount: 1,
        focuszoneProps: { direction: FocusZoneDirection.Vertical },
        initialPageCount: 3,
        maxHeight: 100000,
        pageSize: 10,
        singleClickActivation: false,
        selectRowOnClick: true,
        virtualize: true
    };
    return List;
}(react.Component));
var ScrollableList = /** @class */ (function (_super) {
    __extends(ScrollableList, _super);
    function ScrollableList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = react.createRef();
        _this.scrollableElement = react.createRef();
        return _this;
    }
    ScrollableList.prototype.render = function () {
        return (react.createElement(Intersection, { rootMargin: window.innerHeight / 2 },
            react.createElement("div", { ref: this.scrollableElement, onScroll: this.props.onScroll, className: css(this.props.outerClassName, "flex-grow", "scroll-auto") },
                react.createElement(List, __assign({}, this.props, { ref: this.list })))));
    };
    ScrollableList.prototype.addOverlay = function (id, rowIndex, render, zIndex) {
        if (zIndex === void 0) { zIndex = 0; }
        if (this.list.current) {
            return this.list.current.addOverlay(id, rowIndex, render, zIndex);
        }
    };
    ScrollableList.prototype.getStats = function () {
        if (this.list.current) {
            return this.list.current.getStats();
        }
        return {
            firstMaterialized: -1,
            firstRendered: -1,
            lastMaterialized: -1,
            lastRendered: -1
        };
    };
    ScrollableList.prototype.removeOverlay = function (id) {
        if (this.list.current) {
            return this.list.current.removeOverlay(id);
        }
    };
    ScrollableList.prototype.focusRow = function (rowIndex, direction) {
        if (direction === void 0) { direction = 1; }
        if (this.list.current) {
            return this.list.current.focusRow(rowIndex, direction);
        }
        else {
            return Promise.resolve();
        }
    };
    ScrollableList.prototype.getFocusIndex = function () {
        if (this.list.current) {
            return this.list.current.getFocusIndex();
        }
        return -1;
    };
    ScrollableList.prototype.scrollIntoView = function (rowIndex, scrollToOptions) {
        if (this.list.current) {
            return this.list.current.scrollIntoView(rowIndex, scrollToOptions);
        }
    };
    ScrollableList.prototype.scrollTo = function (scrollTop) {
        if (this.scrollableElement.current) {
            this.scrollableElement.current.scrollTop = scrollTop;
        }
    };
    return ScrollableList;
}(react.Component));
/** @class */ ((function (_super) {
    __extends(SimpleList, _super);
    function SimpleList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = react.createRef();
        _this.renderListItem = function (rowIndex, listCell, details) {
            return renderListItem(rowIndex, details, renderListCell(listCell));
        };
        return _this;
    }
    SimpleList.prototype.render = function () {
        var listProps = {
            selectableText: this.props.selectableText,
            className: this.props.className,
            columnCount: 1,
            eventDispatch: this.props.eventDispatch,
            focuszoneProps: this.props.focuszoneProps,
            id: this.props.id,
            initialPageCount: this.props.initialPageCount,
            itemProvider: this.props.itemProvider,
            maxHeight: this.props.maxHeight,
            onActivate: this.props.onActivate,
            onFocus: this.props.onFocus,
            onSelect: this.props.onSelect,
            pageSize: this.props.pageSize,
            renderRow: this.renderListItem,
            selection: this.props.selection,
            width: this.props.width,
            virtualize: this.props.virtualize
        };
        if (this.props.scrollable) {
            return react.createElement(ScrollableList, __assign({}, listProps, { ref: this.list }));
        }
        else {
            return react.createElement(List, __assign({}, listProps, { ref: this.list }));
        }
    };
    SimpleList.prototype.addOverlay = function (id, rowIndex, render, zIndex) {
        if (zIndex === void 0) { zIndex = 0; }
        if (this.list.current) {
            return this.list.current.addOverlay(id, rowIndex, render, zIndex);
        }
    };
    SimpleList.prototype.removeOverlay = function (id) {
        if (this.list.current) {
            return this.list.current.removeOverlay(id);
        }
    };
    SimpleList.prototype.focusRow = function (rowIndex, direction) {
        if (direction === void 0) { direction = 1; }
        if (this.list.current) {
            return this.list.current.focusRow(rowIndex, direction);
        }
        else {
            return Promise.resolve();
        }
    };
    SimpleList.prototype.getFocusIndex = function () {
        if (this.list.current) {
            return this.list.current.getFocusIndex();
        }
        return -1;
    };
    SimpleList.prototype.getStats = function () {
        if (this.list.current) {
            return this.list.current.getStats();
        }
        return {
            firstMaterialized: -1,
            firstRendered: -1,
            lastMaterialized: -1,
            lastRendered: -1
        };
    };
    SimpleList.prototype.scrollIntoView = function (rowIndex, scrollToOptions) {
        if (this.list.current) {
            return this.list.current.scrollIntoView(rowIndex, scrollToOptions);
        }
    };
    return SimpleList;
})(react.Component));
function renderListItem(rowIndex, details, children) {
    return (react.createElement(ListItem, { details: details, index: rowIndex }, children));
}
function ListItem(props) {
    var onFocus = function (event) {
        props.details.onFocusItem(props.index, event);
    };
    var children = props.children, details = props.details, index = props.index, linkProps = props.linkProps;
    var selectableText = details.selectableText, ariaBusy = details.ariaBusy, ariaDescribedBy = details.ariaDescribedBy, ariaLabel = details.ariaLabel, ariaPosInSet = details.ariaPosInSet, ariaSetSize = details.ariaSetSize, excludeFocusZone = details.excludeFocusZone;
    var _a = details.listProps, selection = _a.selection, singleClickActivation = _a.singleClickActivation;
    return (react.createElement(FocusWithin, { onFocus: onFocus }, function (focusStatus) { return (react.createElement(FocusZoneContext.Consumer, null, function (rowContext) {
        var rowProps = {
            "aria-busy": ariaBusy,
            "aria-describedby": ariaDescribedBy,
            "aria-label": ariaLabel,
            "aria-posinset": ariaPosInSet === undefined ? index + 1 : ariaPosInSet === null ? undefined : ariaPosInSet,
            "aria-selected": selection && selection.selected(index),
            "aria-setsize": ariaSetSize === undefined
                ? props.details.listProps.itemProvider.length
                : ariaSetSize === null
                    ? undefined
                    : ariaSetSize,
            className: css(props.className, "bolt-list-row", index === 0 && "first-row", linkProps && "bolt-link", selection && selection.selected(index) && "selected", focusStatus.hasFocus && "focused", singleClickActivation && "single-click-activation", selectableText && "selectable-text"),
            "data-focuszone": excludeFocusZone || (selection && !selection.selectable(index)) ? undefined : rowContext.focuszoneId,
            "data-row-index": index,
            tabIndex: getTabIndex(details),
            onBlur: focusStatus.onBlur,
            onFocus: focusStatus.onFocus,
            role: selection ? "option" : "listitem"
        };
        return (react.createElement(FocusZone, { direction: FocusZoneDirection.Horizontal }, linkProps ? (react.createElement("a", __assign({}, getDefaultLinkProps(linkProps), rowProps),
            react.createElement("div", { className: "bolt-list-cell", "data-column-index": 0 },
                react.createElement("div", { className: "bolt-list-cell-content flex-row" }, children)))) : (react.createElement("tr", __assign({}, rowProps),
            react.createElement("td", { className: "bolt-list-cell", "data-column-index": 0 },
                react.createElement("div", { className: "bolt-list-cell-content flex-row" }, children))))));
    })); }));
}
function renderListCell(listCell, showOverflowTooltip) {
    if (showOverflowTooltip === void 0) { showOverflowTooltip = true; }
    var textClassName = undefined;
    var textContent = (react.createElement("span", { className: "text-ellipsis body-m" }, typeof listCell === "string" || typeof listCell === "number" ? listCell : listCell.textNode ? listCell.textNode : listCell.text));
    if (showOverflowTooltip) {
        textContent = react.createElement(Tooltip, { overflowOnly: true }, textContent);
    }
    var content = textContent;
    var classNames = css("bolt-list-cell-child flex-row flex-center");
    if (typeof listCell !== "string" && typeof listCell !== "number") {
        textClassName = listCell.textClassName;
        if (listCell.iconProps) {
            content = (react.createElement(react.Fragment, null,
                Icon(__assign(__assign({}, listCell.iconProps), { className: css("icon-margin", listCell.iconProps.className) })),
                textContent));
        }
        if (listCell.href) {
            return (react.createElement(Link, { className: css(textClassName, classNames, "scroll-hidden"), href: listCell.href, rel: listCell.hrefRel, target: listCell.hrefTarget, excludeTabStop: true, subtle: true }, content));
        }
    }
    return react.createElement("span", { className: css(textClassName, classNames, "bolt-list-cell-text") }, content);
}
function getAttributeAsNumber$1(element, attributeName) {
    var attributeValue = element.getAttribute(attributeName);
    if (attributeValue) {
        return parseInt(attributeValue, 10);
    }
    return -1;
}
function cellFromElement(element) {
    var attributeValue;
    var cellIndex = -1;
    var rowIndex = -1;
    var cellElement = null;
    while (element) {
        attributeValue = getAttributeAsNumber$1(element, "data-column-index");
        if (attributeValue !== -1) {
            cellIndex = attributeValue;
            cellElement = element;
        }
        attributeValue = getAttributeAsNumber$1(element, "data-row-index");
        if (attributeValue !== -1) {
            rowIndex = attributeValue;
            break;
        }
        // We have hit the root of the details list, dont look above this.
        if (element.classList.contains("bolt-list")) {
            element = null;
            break;
        }
        element = element.parentElement;
    }
    return {
        cellElement: cellElement,
        cellIndex: cellIndex,
        rowElement: element,
        rowIndex: rowIndex
    };
}
function cellFromEvent(event) {
    return cellFromElement(event.target);
}

/**
 * Represents the end result of a drag / drop operation.
 */
var DragDropEffect;
(function (DragDropEffect) {
    /**
     * If the drop where to happen at this point, it would be a no-op.
     */
    DragDropEffect["none"] = "none";
    /**
     * The data should be moved from the drag source to the drop target.
     */
    DragDropEffect["move"] = "move";
    /**
     * The data should be copied from the drag source to the drop target.
     */
    DragDropEffect["copy"] = "copy";
})(DragDropEffect || (DragDropEffect = {}));

/**
 * Represents where within the containing element to draw the drop indicator
 */
var ListDropIndicatorPosition;
(function (ListDropIndicatorPosition) {
    ListDropIndicatorPosition[ListDropIndicatorPosition["bottom"] = 0] = "bottom";
    ListDropIndicatorPosition[ListDropIndicatorPosition["top"] = 1] = "top";
})(ListDropIndicatorPosition || (ListDropIndicatorPosition = {}));

var Selection = /** @class */ (function (_super) {
    __extends(Selection, _super);
    function Selection(options) {
        var _this = _super.call(this, []) || this;
        _this.selectedRanges = [];
        _this.lockCount = 0;
        _this.unselectableRangesValue = [];
        _this.selectedCount = 0;
        _this.unselectableCount = 0;
        _this.onItemsChanged = function (change, action) {
            var index = change.index;
            var removedUnselectableRange, unselectedRange;
            if (action === "change") {
                return;
            }
            // Unselect any items that were removed from the underlying item collection.
            if (change.removedItems && change.removedItems.length) {
                removedUnselectableRange = _this.removeUnselectableInternal(index, change.removedItems.length);
                unselectedRange = _this.unselectInternal(index, change.removedItems.length);
            }
            // Offset any selection by the items added.
            if (change.addedItems || change.removedItems) {
                var adjustCount = (change.addedItems ? change.addedItems.length : 0) - (change.removedItems ? change.removedItems.length : 0);
                var adjustedSelectionRanges = adjustRanges(index, adjustCount, _this.selectedRanges);
                var adjustedUnselectableRanges = adjustRanges(index, adjustCount, _this.unselectableRanges);
                if (adjustedSelectionRanges.length) {
                    _this.notify(adjustedSelectionRanges, "set");
                }
                if (adjustedUnselectableRanges.length) {
                    _this.notify(adjustedUnselectableRanges, "setUnselectable");
                }
            }
            if (removedUnselectableRange) {
                _this.notify([removedUnselectableRange], "removeUnselectable");
            }
            if (unselectedRange) {
                _this.notify([unselectedRange], "unselect");
            }
        };
        if (typeof options === "boolean" || options === undefined) {
            _this.multiSelect = !!options || false;
        }
        else {
            _this.alwaysMerge = !!options.alwaysMerge;
            _this.multiSelect = !!options.multiSelect;
            _this.unselectableRanges = options.unselectableRanges || [];
            _this.value = options.selectedRanges || [];
        }
        return _this;
    }
    Object.defineProperty(Selection.prototype, "value", {
        get: function () {
            return this.selectedRanges;
        },
        set: function (ranges) {
            var _this = this;
            this.selectedCount = 0;
            this.selectedRanges = ranges.map(function (range) {
                _this.selectedCount += range.endIndex - range.beginIndex + 1;
                return { beginIndex: range.beginIndex, endIndex: range.endIndex };
            });
            this.notify(ranges, "set");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "unselectableRanges", {
        get: function () {
            return this.unselectableRangesValue;
        },
        set: function (ranges) {
            var _this = this;
            this.unselectableCount = 0;
            this.unselectableRangesValue = ranges.map(function (range) {
                _this.unselectableCount += range.endIndex - range.beginIndex + 1;
                return { beginIndex: range.beginIndex, endIndex: range.endIndex };
            });
            this.notify(ranges, "setUnselectable");
        },
        enumerable: true,
        configurable: true
    });
    Selection.prototype.clear = function () {
        var selectedRanges = this.clearSelectedRanges();
        if (selectedRanges) {
            // Go through and notify any observers of the change.
            this.notify(selectedRanges, "unselect");
        }
    };
    Selection.prototype.clearUnselectable = function () {
        var unselectableRanges = __spreadArrays(this.unselectableRangesValue);
        this.unselectableRanges = [];
        this.unselectableCount = 0;
        this.notify(unselectableRanges, "removeUnselectable");
    };
    Selection.prototype.selectable = function (index) {
        return !indexWithinRanges(index, this.unselectableRanges);
    };
    Selection.prototype.selected = function (index) {
        return indexWithinRanges(index, this.selectedRanges);
    };
    Selection.prototype.addUnselectable = function (index, count) {
        var updatedRanges = false;
        var beginIndex = index;
        var endIndex = index + (count || 1) - 1;
        // If no count is specified we will add a single item.
        count = count || 1;
        for (; count > 0; count--) {
            if (!this.selectable(index)) {
                index++;
                continue;
            }
            var rangeIndex = 0;
            var updatedRange = void 0;
            // Determine if there is a range we can add this unselectable item to.
            for (; rangeIndex < this.unselectableRanges.length; rangeIndex++) {
                var unselectableRange = this.unselectableRanges[rangeIndex];
                // Check if this unselectable item occurs before this unselectableRange.
                if (index < unselectableRange.beginIndex) {
                    if (index === unselectableRange.beginIndex - 1) {
                        updatedRange = unselectableRange;
                        updatedRange.beginIndex--;
                    }
                    break;
                }
                // If this index is directly after this range we will extend it.
                else if (index === unselectableRange.endIndex + 1) {
                    // If there is a gap of 1 number we will merge the two ranges.
                    if (rangeIndex < this.unselectableRanges.length - 1 && index === this.unselectableRanges[rangeIndex + 1].beginIndex - 1) {
                        updatedRange = unselectableRange;
                        updatedRange.endIndex = this.unselectableRanges[rangeIndex + 1].endIndex;
                        // Remove the second range since it is merged into the previous range.
                        this.unselectableRanges.splice(rangeIndex + 1, 1);
                    }
                    else {
                        updatedRange = unselectableRange;
                        updatedRange.endIndex++;
                    }
                    break;
                }
            }
            // If there was no range to merge with, add a new one.
            if (!updatedRange) {
                updatedRange = { beginIndex: index, endIndex: index };
                this.unselectableRanges.splice(rangeIndex, 0, updatedRange);
            }
            updatedRanges = true;
            this.unselectableCount++;
            index++;
        }
        // Notify observers of the added item.
        if (updatedRanges) {
            this.notify([{ beginIndex: beginIndex, endIndex: endIndex }], "addUnselectable");
        }
    };
    Selection.prototype.removeUnselectable = function (index, count) {
        var removedRange = this.removeUnselectableInternal(index, count);
        if (removedRange) {
            this.notify([removedRange], "removeUnselectable");
        }
    };
    Selection.prototype.select = function (index, count, merge, multiSelect) {
        if (merge === void 0) { merge = this.alwaysMerge; }
        if (multiSelect === void 0) { multiSelect = this.multiSelect; }
        if (!this.lockCount) {
            var beginIndex = index;
            var endIndex = beginIndex + (count || 1) - 1;
            var updatedRanges = false;
            var unselectedRanges = void 0;
            if (!multiSelect) {
                if (!this.selected(index) && this.selectable(index)) {
                    unselectedRanges = this.clearSelectedRanges();
                    var updatedRange = { beginIndex: index, endIndex: index };
                    this.selectedRanges.push(updatedRange);
                    this.selectedCount++;
                    updatedRanges = true;
                }
            }
            else {
                if (!merge) {
                    unselectedRanges = this.clearSelectedRanges();
                }
                // If no count is specified we will use a single item selection.
                count = count || 1;
                // @TODO: Implement a more optimal multi-count selection
                for (; count > 0; count--) {
                    if (this.selected(index) || !this.selectable(index)) {
                        index++;
                        continue;
                    }
                    var rangeIndex = 0;
                    var updatedRange = void 0;
                    // Determine if there is a range we can add this selection to.
                    for (; rangeIndex < this.selectedRanges.length; rangeIndex++) {
                        var selectionRange = this.selectedRanges[rangeIndex];
                        // Check if this selection occurs before this selectionRange.
                        if (index < selectionRange.beginIndex) {
                            if (index === selectionRange.beginIndex - 1) {
                                updatedRange = selectionRange;
                                updatedRange.beginIndex--;
                            }
                            break;
                        }
                        // If this index is directly after this range we will extend it.
                        else if (index === selectionRange.endIndex + 1) {
                            // If there is a gap of 1 number we will merge the two ranges.
                            if (rangeIndex < this.selectedRanges.length - 1 && index === this.selectedRanges[rangeIndex + 1].beginIndex - 1) {
                                updatedRange = selectionRange;
                                updatedRange.endIndex = this.selectedRanges[rangeIndex + 1].endIndex;
                                // Remove the second range since it is merged into the previous range.
                                this.selectedRanges.splice(rangeIndex + 1, 1);
                            }
                            else {
                                updatedRange = selectionRange;
                                updatedRange.endIndex++;
                            }
                            break;
                        }
                    }
                    // If there was no range to merge with, add a new one.
                    if (!updatedRange) {
                        updatedRange = { beginIndex: index, endIndex: index };
                        this.selectedRanges.splice(rangeIndex, 0, updatedRange);
                    }
                    this.selectedCount++;
                    index++;
                    updatedRanges = true;
                }
            }
            if (unselectedRanges) {
                this.notify(unselectedRanges, "unselect");
            }
            // Notify observers of the added selection.
            if (updatedRanges) {
                this.notify([{ beginIndex: beginIndex, endIndex: endIndex }], "select");
            }
        }
    };
    Selection.prototype.toggle = function (index, merge, multiSelect) {
        if (merge === void 0) { merge = this.alwaysMerge; }
        if (multiSelect === void 0) { multiSelect = this.multiSelect; }
        if (this.selected(index)) {
            this.unselect(index);
        }
        else {
            this.select(index, 1, merge, multiSelect);
        }
    };
    Selection.prototype.unselect = function (index, count) {
        var unselectedRange = this.unselectInternal(index, count);
        if (unselectedRange) {
            this.notify([unselectedRange], "unselect");
        }
    };
    Selection.prototype.lock = function () {
        this.lockCount++;
    };
    Selection.prototype.unlock = function () {
        this.lockCount--;
    };
    Selection.prototype.removeUnselectableInternal = function (index, count) {
        var beginIndex = index;
        var endIndex = beginIndex + (count || 1) - 1;
        var updatedRanges = false;
        // If no count is specified we will use a single item selection.
        count = count || 1;
        // @TODO: Implement a more optimal multi-count selection
        for (; count > 0; count--) {
            if (this.selectable(index)) {
                index++;
                continue;
            }
            // Determine the range we are unselecting the item from.
            for (var rangeIndex = 0; rangeIndex < this.unselectableRanges.length; rangeIndex++) {
                var unselectableRange = this.unselectableRanges[rangeIndex];
                // If this index if before this range move on to the next one.
                if (index < unselectableRange.beginIndex) {
                    continue;
                }
                // Determine whether or not this index falls into this range.
                if (index >= unselectableRange.beginIndex && index <= unselectableRange.endIndex) {
                    // If the index is on the start or end of the range, we will just shrink it.
                    // Otherwise we will have to split it.
                    if (index === unselectableRange.beginIndex) {
                        unselectableRange.beginIndex++;
                    }
                    else if (index === unselectableRange.endIndex) {
                        unselectableRange.endIndex--;
                    }
                    else {
                        this.unselectableRanges.splice(rangeIndex + 1, 0, {
                            beginIndex: index + 1,
                            endIndex: unselectableRange.endIndex
                        });
                        unselectableRange.endIndex = index - 1;
                    }
                    // Shrinking may have created an empty range, we need to remove it.
                    if (unselectableRange.beginIndex > unselectableRange.endIndex) {
                        this.unselectableRanges.splice(rangeIndex, 1);
                    }
                    this.unselectableCount--;
                    updatedRanges = true;
                    break;
                }
            }
            index++;
        }
        if (updatedRanges) {
            return { beginIndex: beginIndex, endIndex: endIndex };
        }
    };
    Selection.prototype.unselectInternal = function (index, count) {
        var updatedRanges = false;
        var beginIndex = index;
        var endIndex = beginIndex + (count || 1) - 1;
        if (!this.lockCount) {
            // If no count is specified we will use a single item selection.
            count = count || 1;
            // @TODO: Implement a more optimal multi-count selection
            for (; count > 0; count--) {
                if (!this.selected(index)) {
                    index++;
                    continue;
                }
                // Determine the range we are unselecting the item from.
                for (var rangeIndex = 0; rangeIndex < this.selectedRanges.length; rangeIndex++) {
                    var selectionRange = this.selectedRanges[rangeIndex];
                    // If this index if before this range move on to the next one.
                    if (index < selectionRange.beginIndex) {
                        continue;
                    }
                    // Determine whether or not this index falls into this range.
                    if (index >= selectionRange.beginIndex && index <= selectionRange.endIndex) {
                        // If the index is on the start or end of the range, we will just shrink it.
                        // Otherwise we will have to split it.
                        if (index === selectionRange.beginIndex) {
                            selectionRange.beginIndex++;
                        }
                        else if (index === selectionRange.endIndex) {
                            selectionRange.endIndex--;
                        }
                        else {
                            this.selectedRanges.splice(rangeIndex + 1, 0, {
                                beginIndex: index + 1,
                                endIndex: selectionRange.endIndex
                            });
                            selectionRange.endIndex = index - 1;
                        }
                        // Shrinking may have created an empty range, we need to remove it.
                        if (selectionRange.beginIndex > selectionRange.endIndex) {
                            this.selectedRanges.splice(rangeIndex, 1);
                        }
                        this.selectedCount--;
                        updatedRanges = true;
                        break;
                    }
                }
                index++;
            }
        }
        if (updatedRanges) {
            return { beginIndex: beginIndex, endIndex: endIndex };
        }
    };
    Selection.prototype.clearSelectedRanges = function () {
        if (!this.lockCount && this.selectedRanges.length > 0) {
            // Save the current selection ranges for notification.
            var selectedRanges = __spreadArrays(this.selectedRanges);
            // Reset the selection to an empty selection.
            this.selectedRanges = [];
            this.selectedCount = 0;
            return selectedRanges;
        }
    };
    return Selection;
}(ObservableValue));
function indexWithinRanges(index, ranges) {
    if (ranges) {
        for (var _i = 0, ranges_1 = ranges; _i < ranges_1.length; _i++) {
            var range = ranges_1[_i];
            if (index >= range.beginIndex && index <= range.endIndex) {
                return true;
            }
        }
    }
    return false;
}
function adjustRanges(index, adjustCount, ranges) {
    var adjustedRanges = [];
    for (var rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {
        var range = ranges[rangeIndex];
        // If the added items are before the range shift it down.
        if (index <= range.beginIndex) {
            // If this adjustment will create a continuous range with the previous range
            // we merge the ranges.
            if (rangeIndex > 0 && range.beginIndex + adjustCount === ranges[rangeIndex - 1].endIndex + 1) {
                ranges[rangeIndex - 1].endIndex = range.endIndex + adjustCount;
                ranges.splice(rangeIndex--, 1);
                adjustedRanges.push(ranges[rangeIndex]);
            }
            else {
                range.beginIndex += adjustCount;
                range.endIndex += adjustCount;
                adjustedRanges.push(range);
            }
        }
        else if (index > range.beginIndex && index <= range.endIndex) {
            // Create the new split selection range.
            var splitRange = {
                beginIndex: index + adjustCount,
                endIndex: range.endIndex + adjustCount
            };
            ranges.splice(++rangeIndex, 0, splitRange);
            adjustedRanges.push(splitRange);
            // If the added items are in the middle of range we need to split the range.
            range.endIndex = index - 1;
            adjustedRanges.push(range);
        }
    }
    return adjustedRanges;
}

var ListSelection = /** @class */ (function (_super) {
    __extends(ListSelection, _super);
    function ListSelection(options) {
        var _this = _super.call(this, typeof options === "boolean" || options === undefined
            ? options
            : {
                alwaysMerge: options.alwaysMerge,
                multiSelect: options.multiSelect,
                unselectableRanges: options.unselectableRanges,
                selectedRanges: options.selectedRanges
            }) || this;
        _this.selectOnFocus = true;
        if (typeof options !== "boolean" && options !== undefined) {
            _this.selectOnFocus = options.selectOnFocus === undefined ? true : options.selectOnFocus;
        }
        return _this;
    }
    return ListSelection;
}(Selection));
/** @class */ ((function (_super) {
    __extends(FilteredListSelection, _super);
    function FilteredListSelection(selection) {
        var _this = _super.call(this, {
            alwaysMerge: selection.alwaysMerge,
            multiSelect: selection.multiSelect,
            unselectableRanges: selection.unselectableRanges,
            selectedRanges: selection.value,
            selectOnFocus: selection.selectOnFocus
        }) || this;
        _this.filteredIndexMap = [];
        _this.updateFilteredSelection = function (filteredIndexMap, multiSelect) {
            if (multiSelect === void 0) { multiSelect = _this.selection.multiSelect; }
            if (filteredIndexMap.length === 0) {
                _this.value = __spreadArrays(_this.selection.value);
                _this.unselectableRanges = __spreadArrays(_this.selection.unselectableRanges);
            }
            else {
                var newSelection_1 = new Selection(multiSelect);
                filteredIndexMap.map(function (mappedIndex, index) {
                    if (_this.selection.selected(mappedIndex)) {
                        newSelection_1.select(index, 1, true, multiSelect);
                    }
                    if (!_this.selection.selectable(mappedIndex)) {
                        newSelection_1.addUnselectable(index);
                    }
                });
                _this.value = __spreadArrays(newSelection_1.value);
                _this.unselectableRanges = __spreadArrays(newSelection_1.unselectableRanges);
            }
            _this.filteredIndexMap = filteredIndexMap;
        };
        _this.selectionChanged = function (value, action) {
            switch (action) {
                case "addUnselectable":
                    for (var rangeIndex = 0; rangeIndex < value.length; rangeIndex++) {
                        for (var unselectableIndex = value[rangeIndex].beginIndex; unselectableIndex <= value[rangeIndex].endIndex; unselectableIndex++) {
                            var index = _this.filteredIndexMap.length > 0 ? _this.filteredIndexMap.indexOf(unselectableIndex) : unselectableIndex;
                            if (_this.selectable(index)) {
                                _this.addUnselectable(index, 1);
                            }
                        }
                    }
                    break;
                case "removeUnselectable":
                    for (var rangeIndex = 0; rangeIndex < value.length; rangeIndex++) {
                        for (var unselectableIndex = value[rangeIndex].beginIndex; unselectableIndex <= value[rangeIndex].endIndex; unselectableIndex++) {
                            var index = _this.filteredIndexMap.length > 0 ? _this.filteredIndexMap.indexOf(unselectableIndex) : unselectableIndex;
                            if (!_this.selectable(index)) {
                                _this.removeUnselectable(index, 1);
                            }
                        }
                    }
                    break;
                case "setUnselectable":
                case "set":
                    _this.updateFilteredSelection(_this.filteredIndexMap);
                    break;
                case "select":
                    for (var rangeIndex = 0; rangeIndex < value.length; rangeIndex++) {
                        for (var selectionIndex = value[rangeIndex].beginIndex; selectionIndex <= value[rangeIndex].endIndex; selectionIndex++) {
                            var index = _this.filteredIndexMap.length > 0 ? _this.filteredIndexMap.indexOf(selectionIndex) : selectionIndex;
                            if (index > -1 && !_this.selected(index)) {
                                _this.select(index, 1, true);
                            }
                        }
                    }
                    break;
                case "unselect":
                    for (var rangeIndex = 0; rangeIndex < value.length; rangeIndex++) {
                        for (var selectionIndex = value[rangeIndex].beginIndex; selectionIndex <= value[rangeIndex].endIndex; selectionIndex++) {
                            var index = _this.filteredIndexMap.length > 0 ? _this.filteredIndexMap.indexOf(selectionIndex) : selectionIndex;
                            if (_this.selected(index)) {
                                _this.unselect(index, 1);
                            }
                        }
                    }
                    break;
            }
        };
        _this.selection = selection;
        return _this;
    }
    FilteredListSelection.prototype.select = function (index, count, merge, multiSelect) {
        _super.prototype.select.call(this, index, count, merge, multiSelect);
        if (this.filteredIndexMap.length > 0) {
            if (!merge) {
                this.clear();
            }
            count = count || 1;
            for (var i = 0; i < count; i++) {
                this.selection.select(this.filteredIndexMap[index + i], 1, true, multiSelect);
            }
        }
        else {
            this.selection.select(index, count, merge, multiSelect);
        }
    };
    FilteredListSelection.prototype.unselect = function (index, count) {
        _super.prototype.unselect.call(this, index, count);
        if (this.filteredIndexMap.length > 0) {
            count = count || 1;
            for (var i = 0; i < count; i++) {
                this.selection.unselect(this.filteredIndexMap[index + i], 1);
            }
        }
        else {
            this.selection.unselect(index, count);
        }
    };
    FilteredListSelection.prototype.clear = function () {
        _super.prototype.clear.call(this);
        if (this.filteredIndexMap.length > 0) {
            for (var i = 0; i < this.filteredIndexMap.length; i++) {
                this.selection.unselect(this.filteredIndexMap[i]);
            }
        }
        else {
            this.selection.clear();
        }
    };
    return FilteredListSelection;
})(ListSelection));

/**
 * Standard menu item types that are rendered through the menu.
 */
var MenuItemType;
(function (MenuItemType) {
    /**
     * This uses the standard five column menu item.
     */
    MenuItemType[MenuItemType["Normal"] = 0] = "Normal";
    /**
     * This will render a divider line between the previous and next item.
     * A divider will only appear if the previous and next item are non-dividers.
     * Consecutive dividers will be merged to a single divider.
     */
    MenuItemType[MenuItemType["Divider"] = 1] = "Divider";
    /**
     * A special menu item that shows a header styled menu item in the PrimaryText column.
     */
    MenuItemType[MenuItemType["Header"] = 2] = "Header";
})(MenuItemType || (MenuItemType = {}));
/**
 * Indicates what type of menu cell is being rendered. A menu is represented by
 * five columns. If any menu item in the menu uses the column the column will be
 * shown in all items. If no menu item uses the column, the column will not be
 * visible.
 */
var MenuCell;
(function (MenuCell) {
    /**
     * The state column is used to represent the state of the menu item. This is
     * usually either a read-only or read-write checkbox.
     */
    MenuCell[MenuCell["State"] = 0] = "State";
    /**
     * This is an Icon prefix used to represent the menu item.
     */
    MenuCell[MenuCell["Icon"] = 1] = "Icon";
    /**
     * Primary text that describes the menu item. Often this will be the only
     * column that has a value.
     */
    MenuCell[MenuCell["PrimaryText"] = 2] = "PrimaryText";
    /**
     * Secondary text is a column that is generally used to represent things
     * like hot-keys/accelerators.
     */
    MenuCell[MenuCell["SecondaryText"] = 3] = "SecondaryText";
    /**
     * Action column is used to give the user a way to represent a secondary
     * way to interact with the menu. This may be things like the submenu icon
     * or some other ui the user can independantly interact with.
     */
    MenuCell[MenuCell["Action"] = 4] = "Action";
})(MenuCell || (MenuCell = {}));

/**
 * Arrange the items into groups and put separators between them and headings above them as needed.
 *
 * @param items Menu items with optional order and groupKey properties
 * @param groupInfo Optional list of menu groups
 */
function groupMenuItems(items, groupInfo) {
    var groupMap = {};
    var maxGroupRank = 0;
    var ungroupedItems = [];
    var groups = groupInfo || [];
    // gather known groups
    if (groups.length > 0) {
        maxGroupRank = groups.reduce(function (max, g) { return (g.rank || 0 > max ? g.rank : max); }, 0) || 0;
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var g = groups_1[_i];
            groupMap[g.key] = {
                key: g.key,
                rank: g.rank === undefined ? ++maxGroupRank : g.rank,
                items: []
            };
        }
    }
    // put all menu items in groups
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var i = items_1[_a];
        if (i.groupKey) {
            if (groupMap[i.groupKey]) {
                groupMap[i.groupKey].items.push(i);
            }
            else {
                groupMap[i.groupKey] = {
                    key: i.groupKey,
                    rank: ++maxGroupRank,
                    items: [i]
                };
            }
        }
        else {
            ungroupedItems.push(i);
        }
    }
    // sort the groups
    var groupList = Object.keys(groupMap).map(function (n) { return groupMap[n]; });
    groupList.sort(function (a, b) { return (a.rank || Number.MAX_VALUE) - (b.rank || Number.MAX_VALUE); });
    // add ungrouped items to end of group list
    groupList.push({
        key: "ungrouped",
        rank: ++maxGroupRank,
        items: ungroupedItems
    });
    // remove dividers from the beginning and end of each group
    groupList.forEach(function (g) {
        var array = g.items;
        while (array.length > 0 && array[0].itemType === MenuItemType.Divider) {
            array.shift();
        }
        while (array.length > 0 && array[array.length - 1].itemType === MenuItemType.Divider) {
            array.pop();
        }
    });
    // merge the groups into the final array
    items = [];
    var first = true;
    for (var _b = 0, groupList_1 = groupList; _b < groupList_1.length; _b++) {
        var g = groupList_1[_b];
        if (g.items.length === 0) {
            continue;
        }
        // add the separator or header for the top of the group
        if (!first) {
            items.push({
                id: "divider_" + g.key,
                itemType: MenuItemType.Divider
            });
        }
        if (first) {
            first = false;
        }
        items = items.concat(g.items);
    }
    return items;
}
var MenuItemProvider = /** @class */ (function (_super) {
    __extends(MenuItemProvider, _super);
    function MenuItemProvider(menuItems, menuGroups) {
        var _this = _super.call(this, menuItems) || this;
        _this.positions = [];
        var derivedItems = [];
        // Process the set of menu items.
        if (menuItems) {
            var shouldGroupMenuItems = false;
            var shouldSortMenuItems = false;
            var lastItemType = MenuItemType.Divider;
            var dividerItem = void 0;
            for (var _i = 0, menuItems_1 = menuItems; _i < menuItems_1.length; _i++) {
                var menuItem = menuItems_1[_i];
                // Don't allow multiple dividers to render next to each other.
                if (menuItem.itemType === MenuItemType.Divider) {
                    if (menuItem.itemType === lastItemType) {
                        continue;
                    }
                    dividerItem = menuItem;
                }
                else {
                    if (dividerItem) {
                        derivedItems.push(dividerItem);
                        dividerItem = undefined;
                    }
                    derivedItems.push(menuItem);
                }
                lastItemType = menuItem.itemType || MenuItemType.Normal;
                // If the item is ranked or grouped we need to sort and group them.
                shouldGroupMenuItems = !!menuItem.groupKey || shouldGroupMenuItems;
                shouldSortMenuItems = menuItem.rank >= 0 || shouldSortMenuItems;
            }
            if (shouldSortMenuItems) {
                derivedItems.sort(function (a, b) {
                    var aRank = a.rank || Number.MAX_VALUE;
                    var bRank = b.rank || Number.MAX_VALUE;
                    return aRank - bRank;
                });
            }
            if (shouldGroupMenuItems) {
                derivedItems = groupMenuItems(derivedItems, menuGroups);
            }
        }
        // Update the items to be the derived items.
        _this.items = derivedItems;
        return _this;
    }
    // Custom getCount to support excluding the decorative items from the count.
    MenuItemProvider.prototype.getCount = function () {
        if (this.count === undefined) {
            this.count = 0;
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var menuItem = _a[_i];
                if (menuItem.itemType === MenuItemType.Divider || menuItem.itemType === MenuItemType.Header) {
                    this.positions.push(-1);
                }
                else {
                    this.positions.push(++this.count);
                }
            }
        }
        return this.count;
    };
    MenuItemProvider.prototype.getItem = function (index) {
        return this.items[index];
    };
    MenuItemProvider.prototype.getPosition = function (index) {
        if (!this.positions.length) {
            this.getCount();
        }
        return this.positions[index];
    };
    return MenuItemProvider;
}(ArrayItemProvider));
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        var _this = _super.call(this, props) || this;
        _this.containerElement = react.createRef();
        _this.expandItem = function (menuItem, expanded) {
            if (!menuItem && _this.state.expandedIndex.value !== -1) {
                menuItem = _this.itemProvider.getItem(_this.state.expandedIndex.value);
            }
            if (menuItem && menuItem.subMenuProps) {
                for (var index = 0; index < _this.itemProvider.length; index++) {
                    if (menuItem === _this.itemProvider.getItem(index)) {
                        if (expanded) {
                            _this.state.expandedIndex.value = index;
                        }
                        else {
                            _this.state.expandedIndex.value = -1;
                        }
                        break;
                    }
                }
            }
        };
        _this.focus = function () {
            if (_this.containerElement.current) {
                _this.containerElement.current.focus();
            }
        };
        _this.getParent = function () {
            return _this.props.parentMenu;
        };
        _this.onActivate = function (menuItem, event) {
            if (_this.props.onActivate) {
                _this.props.onActivate(menuItem, event);
            }
        };
        _this.renderMenuItem = function (index, menuItem, details) {
            var onFocusItem = details.onFocusItem;
            var menuItemDetails = {
                expandedIndex: _this.state.expandedIndex,
                menu: _this,
                menuProps: _this.props,
                onActivate: _this.onActivate,
                onFocusItem: onFocusItem,
                position: _this.itemProvider.getPosition(index),
                setSize: _this.itemProvider.getCount()
            };
            if (menuItem.renderMenuItem) {
                return menuItem.renderMenuItem(index, menuItem, menuItemDetails);
            }
            var key = menuItem.id;
            switch (menuItem.itemType) {
                case MenuItemType.Divider:
                    return MenuDivider(index, menuItem);
                case MenuItemType.Header:
                    return MenuHeader(index, menuItem);
                default:
                    return react.createElement(MenuItem, { key: key, index: index, menuItem: menuItem, details: menuItemDetails });
            }
        };
        _this.state = {
            expandedIndex: new ObservableValue(-1)
        };
        return _this;
    }
    Menu.prototype.render = function () {
        var _this = this;
        return (react.createElement(Observer, { items: this.props.items }, function (props) {
            _this.itemProvider = new MenuItemProvider(props.items, _this.props.groups);
            return _this.renderList();
        }));
    };
    Menu.prototype.renderList = function () {
        return (react.createElement("div", { className: "bolt-menu-container no-outline", ref: this.containerElement, tabIndex: -1 }, this.itemProvider.length > 0 && (react.createElement(react.Fragment, null,
            react.createElement("div", { className: "bolt-menu-spacer", onMouseDown: preventDefault }),
            react.createElement(List, { ariaLabel: this.props.ariaLabel, className: css(this.props.className, "bolt-menu"), columnCount: 7, focuszoneProps: null, id: this.props.id, itemProvider: this.itemProvider, renderRow: this.renderMenuItem, role: "menu", virtualize: false }),
            react.createElement("div", { className: "bolt-menu-spacer", onMouseDown: preventDefault })))));
    };
    return Menu;
}(react.Component));
function MenuDivider(index, menuItem) {
    return (react.createElement("tr", { "aria-hidden": "true", className: css(menuItem.className, "bolt-menuitem-row bolt-list-row bolt-menuitem-divider"), key: menuItem.id || "divider-" + index, onMouseDown: preventDefault },
        react.createElement("td", { className: "bolt-menuitem-cell bolt-list-cell" }),
        react.createElement("td", { className: "bolt-menuitem-cell bolt-list-cell bolt-menuitem-divider-column", colSpan: 5 },
            react.createElement("div", { className: "bolt-menuitem-divider-content" })),
        react.createElement("td", { className: "bolt-menuitem-cell bolt-list-cell" })));
}
function MenuHeader(index, menuItem) {
    return (react.createElement("tr", { "aria-level": 1, className: css(menuItem.className, "bolt-menuitem-row bolt-list-row bolt-menuitem-header"), key: menuItem.id || "header-" + index, onMouseDown: preventDefault, role: "heading" },
        react.createElement("td", { className: "bolt-menuitem-cell bolt-list-cell" }),
        react.createElement("td", { className: "bolt-menuitem-cell bolt-list-cell", colSpan: 3 },
            react.createElement("div", { className: "bolt-menuitem-cell-content bolt-menuitem-cell-text" }, menuItem.text)),
        react.createElement("td", { className: "bolt-menuitem-cell bolt-list-cell", colSpan: 3 })));
}
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.localKeyStroke = false;
        _this.expanded = false;
        _this.element = react.createRef();
        _this.handleClick = function (event) {
            var menuItem = _this.props.menuItem;
            if (menuItem.disabled) {
                event.preventDefault();
            }
            else if (!_this.expanded) {
                var ownerResponse = void 0;
                // If the menu owner supplied a handler, we will get feedback from them before doing
                // default processing on the menu item.
                if (menuItem.onActivate) {
                    ownerResponse = menuItem.onActivate(menuItem, event);
                }
                // If the owner specifically returned true, we will not perform any defaults.
                if (!ownerResponse) {
                    if (!menuItem.href) {
                        event.preventDefault();
                    }
                    // For menus with sub-menus we will expand it on activation. For other menu items
                    // they are executed.
                    if (menuItem.subMenuProps) {
                        _this.props.details.menu.expandItem(menuItem, true);
                    }
                    else if (menuItem.href) {
                        _this.props.details.onActivate(menuItem, event);
                    }
                    else if (menuItem.checked === undefined || menuItem.readonly) {
                        _this.props.details.onActivate(menuItem, event);
                    }
                }
            }
        };
        // If the click handler doesn't return false explicitly close dismiss the menu.
        _this.onClick = function (event) {
            if (!event.defaultPrevented) {
                _this.handleClick(event);
            }
        };
        _this.onDismissSubMenu = function (dismissAll) {
            if (!dismissAll && _this.element.current) {
                _this.props.details.menu.expandItem(_this.props.menuItem, false);
            }
        };
        _this.onExpandedChange = function (expandedIndex) {
            return (_this.expanded && expandedIndex !== _this.props.index) || (!_this.expanded && expandedIndex === _this.props.index);
        };
        _this.onFocus = function (event) {
            if (_this.element.current === document.activeElement) {
                _this.props.details.onFocusItem(_this.props.index, event);
            }
        };
        // Handle the keydown to expand the menu.
        _this.onKeyDown = function (event) {
            _this.localKeyStroke = true;
            if (!event.defaultPrevented) {
                var menuItem = _this.props.menuItem;
                if (event.which === KeyCode.tab || event.which === KeyCode.space) {
                    event.preventDefault();
                }
                else if (event.which === KeyCode.rightArrow && menuItem.subMenuProps) {
                    event.preventDefault();
                    _this.props.details.menu.expandItem(menuItem, true);
                }
            }
        };
        // Translate the space and enter keys into onClick event for a menuItem.
        _this.onKeyUp = function (event) {
            // If we get focus while a key is down we will get the keyup. We dont want
            // to process this key, it needs to originate from us.
            if (!_this.localKeyStroke) {
                return;
            }
            if (!event.defaultPrevented) {
                if (event.which === KeyCode.enter || event.which === KeyCode.space) {
                    _this.handleClick(event);
                }
            }
        };
        _this.onMouseDown = function (event) {
            if (!event.defaultPrevented) {
                var menuItem = _this.props.menuItem;
                if (menuItem.disabled || _this.props.details.expandedIndex.value === _this.props.index) {
                    event.preventDefault();
                }
            }
        };
        // If you hover over a menu with a submenu we will open it after a short delay
        // or stop the closing timeout.
        _this.onMouseEnter = function () {
            if (!_this.props.menuItem.disabled) {
                _this.props.details.menu.expandItem(_this.props.menuItem, true);
                setFocusVisible(false);
            }
        };
        // If you leave the menu item and sub-menu we will close the menu after a short delay
        // or stop the open timeout.
        _this.onMouseLeave = function () {
            _this.onDismissSubMenu(false);
        };
        return _this;
    }
    MenuItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, index = _a.index, menuItem = _a.menuItem, details = _a.details;
        var menu = details.menu, position = details.position, setSize = details.setSize;
        var checked = menuItem.checked, className = menuItem.className, disabled = menuItem.disabled, href = menuItem.href, iconProps = menuItem.iconProps, readonly = menuItem.readonly, secondaryText = menuItem.secondaryText, subMenuProps = menuItem.subMenuProps, target = menuItem.target;
        var id = menuItem.id, rel = menuItem.rel, text = menuItem.text;
        // If this is a link menu item we will use an anchor otherwise a plain div.
        var CellType = href ? "div" : "td";
        var RowType = href ? "a" : "tr";
        // If the menu item is a link is targetting an external window or tab and no explicit rel
        // attribute was supplied we will set noopener.
        if (href && target && !rel) {
            rel = "noopener";
        }
        return (react.createElement(Observer, { checked: checked, expandedIndex: { observableValue: this.props.details.expandedIndex, filter: this.onExpandedChange } }, function (props) {
            _this.expanded = props.expandedIndex === index;
            return (react.createElement(MouseWithin, { enterDelay: 250, leaveDelay: 250, onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave }, function (mouseWithinEvents) { return (react.createElement(FocusZoneContext.Consumer, null, function (rowContext) { return (react.createElement(FocusWithin, { onFocus: _this.onFocus }, function (focusStatus) { return (react.createElement(FocusZone, { direction: FocusZoneDirection.Horizontal },
                react.createElement(RowType, { "aria-checked": props.checked === true || undefined, "aria-controls": _this.expanded && subMenuProps ? getSafeId(subMenuProps.id) : undefined, "aria-disabled": disabled ? "true" : undefined, "aria-expanded": subMenuProps ? _this.expanded : undefined, "aria-haspopup": subMenuProps ? true : undefined, "aria-posinset": position, "aria-setsize": setSize, className: css(className, "bolt-menuitem-row bolt-list-row bolt-menuitem-row-normal cursor-pointer", disabled && "disabled", _this.expanded && "expanded", focusStatus.hasFocus && "focused"), "data-focuszone": disabled ? undefined : rowContext.focuszoneId, href: href, id: getSafeId(id), role: props.checked !== undefined ? "menuitemcheckbox" : "menuitem", onBlur: focusStatus.onBlur, onClick: _this.onClick, onFocus: focusStatus.onFocus, onKeyDown: _this.onKeyDown, onKeyUp: _this.onKeyUp, onMouseDown: _this.onMouseDown, onMouseEnter: mouseWithinEvents.onMouseEnter, onMouseLeave: mouseWithinEvents.onMouseLeave, ref: _this.element, rel: rel, tabIndex: disabled ? undefined : -1, target: target },
                    react.createElement(CellType, { className: "bolt-menuitem-cell bolt-list-cell" },
                        react.createElement("div", { className: "bolt-menuitem-cell-content flex-row" })),
                    react.createElement(CellType, { className: "bolt-menuitem-cell bolt-list-cell" }, props.checked !== undefined &&
                        ((menuItem.renderMenuCell &&
                            menuItem.renderMenuCell(MenuCell.State, menuItem, details)) || (react.createElement("div", { className: "bolt-menuitem-cell-content bolt-menuitem-cell-state flex-row" }, readonly === true ? (Icon({
                            className: css(!props.checked && "invisible"),
                            iconName: "CheckMark"
                        })) : (react.createElement(Checkbox, { checked: props.checked, disabled: disabled, excludeFocusZone: true, excludeTabStop: true, onChange: _this.onClick })))))),
                    react.createElement(CellType, { className: "bolt-menuitem-cell bolt-list-cell" }, (menuItem.renderMenuCell && menuItem.renderMenuCell(MenuCell.Icon, menuItem, details)) ||
                        (iconProps && (react.createElement("div", { className: "bolt-menuitem-cell-content bolt-menuitem-cell-icon flex-row" }, Icon(iconProps))))),
                    react.createElement(CellType, { className: "bolt-menuitem-cell bolt-list-cell" }, (menuItem.renderMenuCell &&
                        menuItem.renderMenuCell(MenuCell.PrimaryText, menuItem, details)) || (react.createElement("div", { id: getSafeId(id + "-text"), className: "bolt-menuitem-cell-content bolt-menuitem-cell-text flex-row" }, text ? (react.createElement(Tooltip, { overflowOnly: true, text: text },
                        react.createElement("div", { className: "text-ellipsis" }, text))) : (react.createElement("div", null, "\u00A0"))))),
                    react.createElement(CellType, { className: "bolt-menuitem-cell bolt-list-cell" }, (menuItem.renderMenuCell &&
                        menuItem.renderMenuCell(MenuCell.SecondaryText, menuItem, details)) ||
                        (secondaryText && (react.createElement("div", { className: "bolt-menuitem-cell-content bolt-menuitem-cell-secondary flex-row" }, secondaryText)))),
                    react.createElement(CellType, { className: "bolt-menuitem-cell bolt-list-cell" }, (menuItem.renderMenuCell &&
                        menuItem.renderMenuCell(MenuCell.Action, menuItem, details)) ||
                        (subMenuProps && (react.createElement("div", { className: "bolt-menuitem-cell-content bolt-menuitem-cell-submenu flex-row" },
                            Icon({ iconName: "ChevronRightMed", size: IconSize.small }),
                            _this.expanded && _this.element.current && (react.createElement(ContextualMenu, { anchorElement: _this.element.current, anchorOffset: { horizontal: 0, vertical: -8 }, anchorOrigin: { horizontal: Location.end, vertical: Location.start }, subMenu: true, menuOrigin: { horizontal: Location.start, vertical: Location.start }, menuProps: subMenuProps, onActivate: _this.props.details.onActivate, onDismiss: _this.onDismissSubMenu, parentMenu: menu })))))),
                    react.createElement(CellType, { className: "bolt-menuitem-cell bolt-list-cell" },
                        react.createElement("div", { className: "bolt-menuitem-cell-content flex-row" }))))); })); })); }));
        }));
    };
    return MenuItem;
}(react.Component));
var ContextualMenu = /** @class */ (function (_super) {
    __extends(ContextualMenu, _super);
    function ContextualMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDismiss = function () {
            if (_this.props.onDismiss) {
                _this.props.onDismiss(false);
            }
        };
        _this.onKeyDown = function (event) {
            if (!event.defaultPrevented) {
                if (event.which === KeyCode.escape || event.which === KeyCode.tab || (event.which === KeyCode.leftArrow && _this.props.subMenu)) {
                    event.preventDefault();
                    if (_this.props.onDismiss) {
                        _this.props.onDismiss(false);
                    }
                }
            }
        };
        _this.onActivate = function (menuItem, event) {
            if (_this.props.menuProps.onActivate) {
                _this.props.menuProps.onActivate(menuItem, event);
            }
            if (_this.props.onActivate) {
                _this.props.onActivate(menuItem, event);
            }
            if (_this.props.onDismiss) {
                _this.props.onDismiss(true);
            }
        };
        _this.preprocessKeyStroke = function (event) {
            if (isArrowKey(event)) {
                return FocusZoneKeyStroke.IgnoreParents;
            }
            return FocusZoneKeyStroke.IgnoreNone;
        };
        return _this;
    }
    ContextualMenu.prototype.render = function () {
        var defaultActiveElement = ".bolt-menu-container";
        // Determine which element should be the first to get focus.
        // Headers may be the first row and they wont take focus.
        var items = ObservableLike.getValue(this.props.menuProps.items);
        for (var menuIndex = 0; menuIndex < items.length; menuIndex++) {
            if (items[menuIndex].itemType === MenuItemType.Normal || items[menuIndex].itemType === undefined) {
                var menuItemId = items[menuIndex].id;
                if (!menuItemId || items[menuIndex].disabled) {
                    continue;
                }
                defaultActiveElement = getSafeIdSelector(menuItemId);
                break;
            }
        }
        return (react.createElement(Callout, { anchorElement: this.props.anchorElement, anchorOffset: this.props.anchorOffset, anchorOrigin: this.props.anchorOrigin, anchorPoint: this.props.anchorPoint, blurDismiss: true, calloutOrigin: this.props.menuOrigin, className: this.props.className, contentClassName: css("bolt-contextual-menu flex-column custom-scrollbar depth-8", this.props.subMenu && "bolt-contextual-submenu"), contentShadow: true, onDismiss: this.onDismiss, fixedLayout: this.props.fixedLayout, focuszoneProps: {
                defaultActiveElement: defaultActiveElement,
                direction: FocusZoneDirection.Vertical,
                focusOnMount: true,
                preprocessKeyStroke: this.preprocessKeyStroke
            }, id: this.props.menuProps.id + "-callout", portalProps: { className: "bolt-menu-portal" } },
            react.createElement("div", { className: "bolt-contextualmenu-container", onKeyDown: this.onKeyDown },
                react.createElement(Menu, __assign({}, this.props.menuProps, { onActivate: this.onActivate, parentMenu: this.props.parentMenu })))));
    };
    return ContextualMenu;
}(react.Component));

var buttonId = 1;
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(props) {
        var _this = _super.call(this, props) || this;
        _this.dropdownButton = react.createRef();
        _this.renderMenu = function (dropdown, dropdownId, anchorElement, anchorOffset, anchorOrigin, anchorPoint, dropdownOrigin) {
            return (react.createElement(ContextualMenu, { anchorElement: anchorElement, anchorOffset: _this.props.contextualMenuProps.anchorOffset || anchorOffset, anchorOrigin: _this.props.contextualMenuProps.anchorOrigin || anchorOrigin, anchorPoint: _this.props.contextualMenuProps.anchorPoint || anchorPoint, fixedLayout: _this.props.contextualMenuProps.fixedLayout, menuOrigin: _this.props.contextualMenuProps.menuOrigin || dropdownOrigin, menuProps: _this.props.contextualMenuProps.menuProps, className: _this.props.contextualMenuProps.className, onActivate: function (menuItem, event) {
                    var contextualMenuProps = _this.props.contextualMenuProps;
                    if (contextualMenuProps.onActivate) {
                        contextualMenuProps.onActivate(menuItem, event);
                    }
                    dropdown.collapse();
                }, onDismiss: dropdown.collapse }));
        };
        _this.state = {
            id: _this.props.id || "menu-button-" + buttonId++
        };
        return _this;
    }
    MenuButton.prototype.render = function () {
        var _a = this.props, contextualMenuProps = _a.contextualMenuProps, hideDropdownIcon = _a.hideDropdownIcon;
        return (react.createElement(ExpandableButton, __assign({}, __assign(__assign({}, this.props), { menuProps: undefined }), { anchorElement: contextualMenuProps.anchorElement, anchorOffset: contextualMenuProps.anchorOffset, anchorOrigin: contextualMenuProps.anchorOrigin, anchorPoint: contextualMenuProps.anchorPoint, dropdownId: contextualMenuProps.menuProps.id, dropdownOrigin: contextualMenuProps.menuOrigin, hideDropdownIcon: hideDropdownIcon, id: this.state.id, ref: this.dropdownButton, renderCallout: this.renderMenu }), this.props.children));
    };
    MenuButton.prototype.focus = function () {
        if (this.dropdownButton.current) {
            this.dropdownButton.current.focus();
        }
    };
    return MenuButton;
}(react.Component));

var MoreButton = /** @class */ (function (_super) {
    __extends(MoreButton, _super);
    function MoreButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menuButton = react.createRef();
        return _this;
    }
    MoreButton.prototype.render = function () {
        return (react.createElement(MenuButton, __assign({ ariaLabel: MoreActions, hideDropdownIcon: true, iconProps: { iconName: "MoreVertical" }, ref: this.menuButton, subtle: true, tooltipProps: { text: MoreActions } }, this.props)));
    };
    MoreButton.prototype.focus = function () {
        if (this.menuButton.current) {
            this.menuButton.current.focus();
        }
    };
    return MoreButton;
}(react.Component));

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

function getFilterItem(onActivate, hasChanges, important) {
    if (important === void 0) { important = true; }
    return {
        ariaLabel: Filter,
        iconProps: {
            iconName: hasChanges ? "FilterSolid" : "Filter"
        },
        id: "filter",
        important: important,
        onActivate: onActivate,
        subtle: true,
        tooltipProps: { text: Filter }
    };
}

var headerCommandBarId = 1;
var HeaderCommandBar = /** @class */ (function (_super) {
    __extends(HeaderCommandBar, _super);
    function HeaderCommandBar(props) {
        var _this = _super.call(this, props) || this;
        _this.moreButtonRef = react.createRef();
        _this.buttonRefs = {};
        _this.moreButtonId = props.moreButtonId || "header-command-bar-menu-button" + headerCommandBarId++;
        return _this;
    }
    HeaderCommandBar.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        this.buttonRefs = {};
        var buttonItems = [];
        var overflowItems = [];
        // Anything with important: true will be rendered as a button
        // Anything with important: false will be rendered in overflow
        // If there are less than 3 important items, items from the front of
        // the list will be rendered as button until we have 3.
        // The rest will be rendered in overflow.
        var importantCount = items.filter(function (item) { return item.important === true; }).length;
        var spaceRemainingForUnimporantItems = 3 - importantCount;
        var previousSeparator;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.itemType === MenuItemType.Divider) {
                previousSeparator = item;
            }
            else {
                var itemsToAddTo = void 0;
                if (item.important) {
                    item.iconProps && !item.text ? true : false;
                    itemsToAddTo = buttonItems;
                }
                else if (spaceRemainingForUnimporantItems > 0 && item.important === undefined) {
                    spaceRemainingForUnimporantItems--;
                    item.iconProps && !item.text ? true : false;
                    itemsToAddTo = buttonItems;
                }
                else {
                    itemsToAddTo = overflowItems;
                }
                if (previousSeparator && itemsToAddTo.length) {
                    itemsToAddTo.push(previousSeparator);
                }
                itemsToAddTo.push(item);
                previousSeparator = undefined;
            }
        }
        var setSize = buttonItems.length + (overflowItems.length > 0 ? 1 : 0);
        var isMenuBar = !buttonItems.length || buttonItems[0].role !== "button" ? true : false;
        var showOverflowMenuButton = overflowItems.length > 0;
        if (showOverflowMenuButton) {
            this.buttonRefs[this.moreButtonId] = this.moreButtonRef;
        }
        var buttons = (react.createElement(react.Fragment, null,
            buttonItems.map(function (value, index) {
                var id = value.id;
                if (value.itemType === MenuItemType.Divider) {
                    return react.createElement("div", { className: "bolt-header-command-item-separator", key: id });
                }
                var buttonProps = {
                    ariaChecked: ObservableLike.getValue(value.checked),
                    ariaLabel: value.ariaLabel,
                    ariaPosInSet: isMenuBar ? index + 1 : undefined,
                    ariaSetSize: isMenuBar ? setSize : undefined,
                    ariaRoleDescription: "button",
                    className: css(value.className, "bolt-header-command-item-button"),
                    disabled: value.disabled,
                    href: value.href,
                    iconProps: value.iconProps,
                    id: id,
                    primary: value.isPrimary,
                    role: value.role || "menuitem",
                    subtle: value.subtle,
                    target: value.target,
                    text: value.text,
                    tooltipProps: value.tooltipProps
                };
                var TagName = Button;
                var ref = react.createRef();
                _this.buttonRefs[id] = ref;
                if (value.subMenuProps) {
                    buttonProps.contextualMenuProps = { menuProps: value.subMenuProps };
                    buttonProps.hideDropdownIcon = value.hideDropdownIcon;
                    TagName = MenuButton;
                }
                else {
                    buttonProps.onClick = function (e) { return value.onActivate && value.onActivate(value, e); };
                }
                return react.createElement(TagName, __assign({}, buttonProps, { key: id, ref: ref }));
            }),
            showOverflowMenuButton && (react.createElement(MoreButton, { ariaPosInSet: buttonItems.length + 1, ariaSetSize: setSize, className: "bolt-header-command-item-button", contextualMenuProps: {
                    menuProps: { id: "header-submenu", items: new ObservableArray(overflowItems) },
                    className: this.props.overflowClassName
                }, id: this.moreButtonId, role: "menuitem", ref: this.moreButtonRef, subtle: false }))));
        // We will use a role of "menubar", unless the first item has a role of button.
        // This will be the case the close button in Panel Headers.
        if (items.length > 0) {
            var defaultElement = buttonItems.find(function (element) { return !element.disabled; });
            return (react.createElement(CustomHeaderCommandBar, { className: this.props.className, focusGroupProps: { defaultElementId: defaultElement ? defaultElement.id : this.moreButtonId }, lastItemIsIconButton: true, role: isMenuBar ? "menubar" : undefined }, buttons));
        }
        return null;
    };
    HeaderCommandBar.prototype.focus = function (options) {
        var ref = this.buttonRefs[options.commandBarItemId];
        if (ref && ref.current) {
            ref.current.focus();
        }
    };
    return HeaderCommandBar;
}(react.Component));
/** @class */ ((function (_super) {
    __extends(HeaderCommandBarWithFilter, _super);
    function HeaderCommandBarWithFilter(props) {
        var _this = _super.call(this, props) || this;
        _this.headerCommandBarRef = react.createRef();
        _this.onFilterClicked = function () {
            _this.props.filterToggled.value = !_this.props.filterToggled.value;
        };
        _this.onFilterChanged = function () {
            var hasChanges = _this.props.filter.hasChangesToReset();
            if (hasChanges !== _this.state.filterHasChanges) {
                _this.setState({
                    filterHasChanges: hasChanges
                });
            }
        };
        _this.state = { filterHasChanges: _this.props.filter.hasChangesToReset() };
        return _this;
    }
    HeaderCommandBarWithFilter.prototype.componentDidMount = function () {
        this.props.filter.subscribe(this.onFilterChanged, FILTER_CHANGE_EVENT);
    };
    HeaderCommandBarWithFilter.prototype.componentWillUnmount = function () {
        this.props.filter.unsubscribe(this.onFilterChanged, FILTER_CHANGE_EVENT);
    };
    HeaderCommandBarWithFilter.prototype.render = function () {
        var items = this.props.items ? __spreadArrays(this.props.items) : [];
        items.push(getFilterItem(this.onFilterClicked, this.state.filterHasChanges));
        return react.createElement(HeaderCommandBar, __assign({}, this.props, { items: items, ref: this.headerCommandBarRef }));
    };
    HeaderCommandBarWithFilter.prototype.focus = function (options) {
        if (this.headerCommandBarRef.current) {
            this.headerCommandBarRef.current.focus(options);
        }
    };
    return HeaderCommandBarWithFilter;
})(react.Component));

var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.breakpointIndex = 0;
        _this.headerCommandBarRef = react.createRef();
        _this.onBreakPoint = function (index, breakpoint) {
            _this.breakpointIndex = index;
            // This is making sure that command bar items are made visible after getting notified
            // for the exact breakpoint. Otherwise, there is flickering from default to current breakpoint.
            // If there are no breakpoints specified, actions are rendered at first place.
            _this.commandBarClassName.value = css(_this.props.commandBarClassName, "flex-self-start");
        };
        _this.commandBarClassName = new ObservableValue(css(props.commandBarClassName, "flex-self-start", !!props.headerBreakpoints && "invisible"));
        return _this;
    }
    Header.prototype.render = function () {
        var _this = this;
        return (react.createElement(TabProviderContext.Consumer, null, function (tabProviderContext) {
            var _a = _this.props, backButtonProps = _a.backButtonProps, className = _a.className, contentClassName = _a.contentClassName, commandBarMoreButtonId = _a.commandBarMoreButtonId, description = _a.description, descriptionClassName = _a.descriptionClassName, descriptionId = _a.descriptionId, headerBreakpoints = _a.headerBreakpoints, title = _a.title, titleAriaLevel = _a.titleAriaLevel, titleClassName = _a.titleClassName, titleIconProps = _a.titleIconProps, titleId = _a.titleId, titleSize = _a.titleSize;
            var commandBarItems = _this.props.commandBarItems || tabProviderContext.commandBarItems;
            var commandBarComponent = undefined;
            if (commandBarItems) {
                commandBarComponent = (react.createElement(Observer, { items: commandBarItems, className: _this.commandBarClassName }, function (props) {
                    return (react.createElement(HeaderCommandBar, { className: props.className, items: _this.getUpdatedCommandBarItems(props.items), moreButtonId: commandBarMoreButtonId, ref: _this.headerCommandBarRef }));
                }));
            }
            return (react.createElement(react.Fragment, null,
                headerBreakpoints && (react.createElement(Breakpoint, { breakpoints: headerBreakpoints.map(function (hbp) { return hbp.breakpoint; }), onBreakpoint: _this.onBreakPoint })),
                react.createElement(CustomHeader, { className: css(className, commandBarItems && commandBarItems.length > 0 && "bolt-header-with-commandbar", backButtonProps && "bolt-header-with-back-button"), separator: _this.props.separator },
                    backButtonProps && react.createElement(HeaderBackButton, { buttonProps: backButtonProps }),
                    react.createElement("div", { className: css(contentClassName, "bolt-header-content-area flex-row flex-grow flex-self-stretch") },
                        titleIconProps && react.createElement(HeaderIcon, { iconProps: titleIconProps, titleSize: titleSize }),
                        react.createElement(HeaderTitleArea, null,
                            react.createElement(HeaderTitleRow, null, title && (react.createElement(HeaderTitle, { ariaLevel: titleAriaLevel, className: titleClassName, id: titleId, titleSize: titleSize }, title))),
                            description && (react.createElement(HeaderDescription, { className: descriptionClassName, id: descriptionId }, description)),
                            _this.props.children),
                        commandBarComponent))));
        }));
    };
    Header.prototype.focus = function (options) {
        if (this.headerCommandBarRef.current) {
            this.headerCommandBarRef.current.focus(options);
        }
    };
    Header.prototype.getUpdatedCommandBarItems = function (sourceCommandBarItems) {
        var headerBreakpoints = this.props.headerBreakpoints;
        var breakpoint = headerBreakpoints ? headerBreakpoints[Math.max(0, this.breakpointIndex)] : null;
        if (breakpoint) {
            var _a = breakpoint.commandBarItems, commandBarItems = _a === void 0 ? [] : _a;
            // Update if there are actions changing their look for this breakpoint
            if (commandBarItems.length > 0) {
                // Convert actions to a map to access later quickly
                var commandBarItemsMap_1 = {};
                commandBarItems.forEach(function (item) { return (commandBarItemsMap_1[item.id] = item); });
                var targetCommandBarItems = [];
                for (var _i = 0, sourceCommandBarItems_1 = sourceCommandBarItems; _i < sourceCommandBarItems_1.length; _i++) {
                    var commandBarItem = sourceCommandBarItems_1[_i];
                    var changedItem = commandBarItemsMap_1[commandBarItem.id];
                    if (changedItem) {
                        // Update command bar item with the specified properties
                        targetCommandBarItems.push(__assign(__assign({}, commandBarItem), changedItem));
                    }
                    else {
                        // If there is no change requested, use the same item
                        targetCommandBarItems.push(__assign({}, commandBarItem));
                    }
                }
                return targetCommandBarItems;
            }
        }
        return sourceCommandBarItems;
    };
    return Header;
}(react.Component));

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

var CardFooter = function (props) {
    return (react.createElement(SurfaceContext.Consumer, null, function (surfaceContext) { return (react.createElement("div", { className: css(props.className, "bolt-card-footer flex-row flex-noshrink", surfaceContext.horizontalClassName) }, props.children)); }));
};

export { Card, CardContent, CardFooter, CustomCard };
