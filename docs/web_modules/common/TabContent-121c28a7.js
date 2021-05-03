import { a as __assign, _ as __extends, b as __spreadArrays, c as ObservableLike, d as ObservableArray } from './Observable-24aa1084.js';
import './core-1947a0ef.js';
import { r as react } from './index-abdc4d2d.js';
import { S as ScreenSize, a as ScreenContext } from './Screen-d33ca090.js';
import { O as Observer } from './SelectionObserver-a72f3be5.js';
import { S as SurfaceContext, a as SurfaceBackground } from './Surface-779be6fe.js';
import { c as css, g as getSafeId, K as KeyCode } from './Util-e30cbaf3.js';
import { T as Tooltip, a as FocusGroupContext, F as FocusZoneContext, c as FocusZoneDirection, b as FocusZone } from './Tooltip-69aedae2.js';
import { I as Icon } from './Icon.Props-be292e60.js';
import { f as format } from './String-19e5561c.js';
import { F as FriendlyNumberThousandsFormat, b as FriendlyNumberMillionsFormat, c as FriendlyNumberBillionsFormat } from './Resources.Core-6b4f8906.js';
import { P as Pill, a as PillSize } from './Pill-1fe5d4a3.js';

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

export { TabProviderContext as T, TabProvider as a, TabGroupProvider as b };
