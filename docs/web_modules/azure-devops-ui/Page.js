import { _ as __extends, S as SurfaceContext, n as SurfaceBackground, j as ObservableArray } from '../common/Icon.Props-aa4785d7.js';
import { a as css } from '../common/Util-c5aac4ed.js';
import { r as react } from '../common/index-abdc4d2d.js';
import { I as Intersection, c as TabProvider, d as TabGroupProvider } from '../common/TabContent-218b1663.js';
import '../common/index-2be6b7dd.js';
import '../common/_commonjsHelpers-4f955397.js';
import '../common/ExpandableButton-0197ca49.js';
import '../common/Accessibility-e11a7e50.js';
import '../common/Focus-eab5ece8.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Page/Page.css */
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
__snowpack__injectStyle(".bolt-page > .bolt-tabbar {\n  padding: 0 32px 0 24px; }\n  @media screen and (max-width: 600px) {\n    .bolt-page > .bolt-tabbar {\n      padding-left: 12px;\n      padding-right: 20px; } }\n\n.bolt-page > .bolt-header {\n  padding-top: 24px;\n  padding-bottom: 0px;\n  margin-left: 12px;\n  margin-right: 12px;\n  z-index: 3; }\n  @media screen and (max-width: 600px) {\n    .bolt-page > .bolt-header {\n      padding-top: 16px;\n      margin-left: 0;\n      margin-right: 0; } }\n  .bolt-page > .bolt-header .bolt-header-commandbar-no-right-padding {\n    padding-right: 4px; }\n    @media screen and (max-width: 600px) {\n      .bolt-page > .bolt-header .bolt-header-commandbar-no-right-padding {\n        padding-right: 0; } }\n\n.bolt-page > .vss-FilterBar {\n  margin-left: 32px;\n  margin-right: 32px; }\n\n.bolt-page .page-content {\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-bottom: 16px; }\n  @media screen and (max-width: 600px) {\n    .bolt-page .page-content {\n      padding-left: 0;\n      padding-right: 0; } }\n\n.bolt-page .page-content-top {\n  padding-top: 16px; }\n\n.bolt-page .page-content-bottom {\n  padding-bottom: 16px; }\n\n.bolt-page .page-content-left {\n  padding-left: 32px; }\n  @media screen and (max-width: 600px) {\n    .bolt-page .page-content-left {\n      padding-left: 0; } }\n\n.bolt-page .page-content-right {\n  padding-right: 32px; }\n  @media screen and (max-width: 600px) {\n    .bolt-page .page-content-right {\n      padding-right: 0; } }\n\n.bolt-page-grey {\n  background-color: rgba( 248, 248, 248 ,  1 );\n  background-color: rgba( var(--palette-neutral-2,248, 248, 248) ,  1 ); }\n\n.bolt-page-white {\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--background-color,rgba(255, 255, 255, 1)); }\n");

var Orientation;
(function (Orientation) {
    Orientation[Orientation["Vertical"] = 0] = "Vertical";
    Orientation[Orientation["Horizontal"] = 1] = "Horizontal";
})(Orientation || (Orientation = {}));

/**
 * Component for stitching together the various components that make a up a page.
 * Renders all children in a column-based flexbox.
 * If passed an observable selected tab id and contributed tab providers, will
 * wrap with a TabProvider component to provide context to consuming children.
 */
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        var _this = this;
        var _a = this.props, tabProviders = _a.tabProviders, selectedTabId = _a.selectedTabId, tabGroups = _a.tabGroups, _b = _a.orientation, orientation = _b === void 0 ? Orientation.Vertical : _b, scrollableContainerRef = _a.scrollableContainerRef;
        var orientationClass = orientation === Orientation.Vertical ? "flex-column" : "flex-row";
        var page = (react.createElement(SurfaceContext.Consumer, null, function (surfaceContext) { return (react.createElement(Intersection, null,
            react.createElement("div", { ref: scrollableContainerRef, className: css(_this.props.className, "bolt-page v-scroll-auto", orientationClass, surfaceContext.background === SurfaceBackground.neutral && "bolt-page-grey") }, _this.props.children))); }));
        if (selectedTabId) {
            page = (react.createElement(TabProvider, { providers: tabProviders || new ObservableArray([]), selectedTabId: selectedTabId }, page));
        }
        if (tabGroups) {
            page = react.createElement(TabGroupProvider, { providers: tabGroups }, page);
        }
        return page;
    };
    return Page;
}(react.Component));

export { Page };
