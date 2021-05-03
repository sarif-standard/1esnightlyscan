import { _ as __extends, c as ObservableLike, a as __assign, O as ObservableValue } from './Observable-24aa1084.js';
import './core-1947a0ef.js';
import { r as react } from './index-abdc4d2d.js';
import { E as ExpandableButton } from './ExpandableButton-4f9f7aa8.js';
import { M as MouseWithin, F as FocusZoneContext, d as FocusWithin, b as FocusZone, c as FocusZoneDirection, T as Tooltip, L as Location, C as Callout, e as FocusZoneKeyStroke } from './Tooltip-69aedae2.js';
import { C as Checkbox } from './Checkbox-0ff5fc25.js';
import { I as Icon, a as IconSize } from './Icon.Props-be292e60.js';
import { L as List } from './ListSelection-ad148c9e.js';
import { p as preventDefault, c as css, g as getSafeId, f as getSafeIdSelector, K as KeyCode, e as setFocusVisible, h as isArrowKey } from './Util-e30cbaf3.js';
import { O as Observer, A as ArrayItemProvider } from './SelectionObserver-a72f3be5.js';
import { M as MoreActions } from './Resources.Widgets-1363c6a9.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Menu/Menu.css */
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
__snowpack__injectStyle(".bolt-contextual-menu {\n  border-radius: 4px;\n  max-width: 320px;\n  overflow-x: hidden;\n  overflow-y: auto; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-contextual-menu {\n      border: 1px solid; } }\n\n@media screen and (max-width: 600px) {\n  .bolt-contextual-submenu {\n    min-width: 200px; } }\n\n.overflow .bolt-contextual-menu {\n  overflow-y: scroll; }\n\n.bolt-menu {\n  border-collapse: separate;\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  display: table;\n  table-layout: auto;\n  font-size: 0.875rem; }\n\n.bolt-menuitem-row {\n  background-color: transparent;\n  border-radius: 3px;\n  color: inherit;\n  display: table-row;\n  outline: none;\n  overflow: hidden;\n  text-decoration: none;\n  white-space: nowrap; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-menuitem-row {\n      border: 1px solid transparent; } }\n  .bolt-menuitem-row.focused {\n    background-color: transparent;\n    outline: none; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-menuitem-row.focused {\n        border-color: windowtext; } }\n  .bolt-menuitem-row:hover, .bolt-menuitem-row.expanded {\n    background-color: rgba(0, 0, 0, 0.04);\n    background-color: var(--palette-black-alpha-4,rgba(0, 0, 0, 0.04)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-menuitem-row.expanded {\n      border-color: windowtext; }\n    .bolt-menuitem-row:hover {\n      border-color: highlight; } }\n  .bolt-menuitem-row.disabled {\n    color: rgba(0, 0, 0, .38);\n    color: var(--text-disabled-color,rgba(0, 0, 0, .38)); }\n    .bolt-menuitem-row.disabled:hover {\n      background-color: transparent; }\n\n.bolt-focus-visible .bolt-menuitem-row.focused {\n  animation: focus-shadow-pulse-inset 4s ease-in-out infinite;\n  background-color: rgba(0, 0, 0, 0.04);\n  background-color: var(--palette-black-alpha-4,rgba(0, 0, 0, 0.04));\n  outline: none; }\n\na.bolt-menuitem-row:not(.ms-Button),\na.bolt-menuitem-row:not(.ms-Button):visited,\na.bolt-menuitem-row:not(.ms-Button):hover {\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  text-decoration: none; }\n  @media screen and (-ms-high-contrast: active) {\n    a.bolt-menuitem-row:not(.ms-Button),\n    a.bolt-menuitem-row:not(.ms-Button):visited,\n    a.bolt-menuitem-row:not(.ms-Button):hover {\n      color: windowtext; } }\n\n@media screen and (-ms-high-contrast: active) {\n  a.bolt-menuitem-row .bolt-list-cell {\n    border-color: transparent; } }\n\n@media screen and (-ms-high-contrast: active) {\n  a.bolt-menuitem-row:hover .bolt-list-cell {\n    border-color: highlight; } }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-focus-visible a.bolt-menuitem-row:focus .bolt-list-cell {\n    border-color: highlight; } }\n\n.bolt-menuitem-header {\n  font-weight: 600; }\n\n.bolt-menuitem-divider:hover,\n.bolt-menuitem-header:hover {\n  background-color: transparent; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-menuitem-divider:hover,\n    .bolt-menuitem-header:hover {\n      border: 1px solid transparent; } }\n\n.bolt-menuitem-cell {\n  padding: 0;\n  vertical-align: middle; }\n  .bolt-menuitem-cell:first-child .bolt-menuitem-cell-content {\n    padding-right: 0px; }\n  .bolt-menuitem-cell:last-child .bolt-menuitem-cell-content {\n    padding-left: 0px; }\n\n.bolt-menuitem-cell-content {\n  justify-content: center;\n  padding: 6px; }\n\n.bolt-menuitem-cell-text {\n  justify-content: flex-start;\n  max-width: 225px;\n  min-width: 180px; }\n\n.bolt-menuitem-cell-secondary {\n  color: rgba(0, 0, 0, .55);\n  color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n\n.bolt-menuitem-divider-content {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20));\n  height: 1px;\n  margin: 6px 6px;\n  padding: 0px; }\n\n.bolt-menu-spacer {\n  padding: 4px; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Menu/MenuButton.css */
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
__snowpack__injectStyle$1("/**\r\n * Dropdown button styles\r\n */\n.bolt-dropdown-button {\n  display: inline-flex; }\n\n.bolt-dropdown-button .icon-right {\n  font-size: 0.75rem;\n  padding-left: 10px; }\n");

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

export { MenuItemType as M, MoreButton as a, MenuButton as b };
