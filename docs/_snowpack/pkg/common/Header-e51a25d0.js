import { _ as __extends, a as __assign, c as ObservableLike, d as ObservableArray, b as __spreadArrays, O as ObservableValue } from './Observable-063af883.js';
import './core-4c1f1367.js';
import { r as react } from './index-abdc4d2d.js';
import { S as SurfaceContext, c as Spacing } from './Surface-9548ad22.js';
import { c as css, g as getSafeId } from './Util-e30cbaf3.js';
import { S as ScreenSize } from './Screen-9c158c22.js';
import { B as Button } from './ExpandableButton-778bbe51.js';
import { a as IconSize, I as Icon } from './Icon.Props-050e98eb.js';
import { T as Tooltip, b as FocusZone, c as FocusZoneDirection } from './Tooltip-bfc7063c.js';
import { S as ScreenSizeObserver, F as FILTER_CHANGE_EVENT, B as Breakpoint } from './Filter-c4d98be1.js';
import { M as MenuItemType, a as MoreButton, b as MenuButton } from './MoreButton-5bbaae90.js';
import { O as Observer } from './SelectionObserver-458393aa.js';
import { T as TabProviderContext } from './TabContent-0e8129a0.js';
import './Pill-ed46bf0c.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Header/Header.css */
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
__snowpack__injectStyle(".bolt-header-no-spacing-defined {\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-right: 20px; }\n\n.bolt-header-condensed {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.bolt-header-default {\n  padding-top: 16px;\n  padding-bottom: 16px; }\n\n.bolt-header-relaxed {\n  padding-top: 24px;\n  padding-bottom: 24px; }\n\n.bolt-header-with-commandbar.bolt-header-condensed {\n  padding-right: 12px; }\n\n.bolt-header-with-commandbar.bolt-header-default {\n  padding-right: 16px; }\n\n.bolt-header-with-commandbar.bolt-header-relaxed {\n  padding-right: 28px; }\n\n.bolt-header-with-commandbar {\n  padding-right: 16px; }\n  @media screen and (max-width: 600px) {\n    .bolt-header-with-commandbar {\n      padding-right: 20px; } }\n\n.bolt-header-with-back-button {\n  padding-left: 16px; }\n  @media screen and (max-width: 600px) {\n    .bolt-header-with-back-button {\n      flex-direction: column;\n      padding-left: 20px; } }\n\n.bolt-header-content-area {\n  min-width: 0px; }\n\n.bolt-header-title {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  margin-right: 8px; }\n  .bolt-header-title.l {\n    padding-top: 0px;\n    padding-bottom: 0px; }\n  .bolt-header-title.s {\n    padding-top: 6px;\n    padding-bottom: 6px; }\n  @media screen and (max-width: 600px) {\n    .bolt-header-title {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; } }\n\n.bolt-header-icon {\n  font-size: 1rem;\n  margin-right: 8px;\n  margin-top: 8px; }\n  .bolt-header-icon.l {\n    margin-top: 10px; }\n  .bolt-header-icon.s {\n    margin-top: 6px; }\n\n.bolt-header-separator {\n  height: 1px;\n  background-color: rgba( 244, 244, 244 ,  1 );\n  background-color: rgba( var(--palette-neutral-4,244, 244, 244) ,  1 ); }\n\n.bolt-button.bolt-header-back-button {\n  background-color: transparent;\n  font-size: 1rem;\n  margin-right: 8px; }\n  @media screen and (max-width: 600px) {\n    .bolt-button.bolt-header-back-button {\n      padding: 0px; }\n      .bolt-button.bolt-header-back-button .bolt-button-text {\n        font-size: 0.75rem;\n        color: rgba(0, 0, 0, .55);\n        color: var(--text-secondary-color,rgba(0, 0, 0, .55));\n        font-weight: normal; } }\n");

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

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/HeaderCommandBar/HeaderCommandBar.css */
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
__snowpack__injectStyle$1(".bolt-header-commandbar {\n  margin-left: 16px;\n  padding-right: 4px; }\n\n.bolt-header-command-item-button .bolt-button.icon-only {\n  padding: 8px; }\n\n.bolt-header-commandbar-no-right-padding {\n  padding-right: 0px; }\n\n.bolt-header-command-item-separator {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20));\n  width: 1px;\n  margin: 4px 8px; }\n");

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
var HeaderCommandBarWithFilter = /** @class */ (function (_super) {
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
}(react.Component));

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

export { Header as H };
