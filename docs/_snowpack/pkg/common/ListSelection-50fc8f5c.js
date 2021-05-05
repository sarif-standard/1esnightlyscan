import { _ as __extends, a as __assign, c as ObservableLike, O as ObservableValue, d as ObservableArray, b as __spreadArrays } from './Observable-063af883.js';
import './core-4c1f1367.js';
import { r as react } from './index-abdc4d2d.js';
import { b as FocusZone, c as FocusZoneDirection, d as FocusWithin, F as FocusZoneContext, T as Tooltip, a as FocusGroupContext } from './Tooltip-bfc7063c.js';
import { a as IntersectionContext, I as Intersection } from './Intersection-ecdadb98.js';
import { O as Observer } from './SelectionObserver-458393aa.js';
import { c as css, g as getSafeId, K as KeyCode, j as eventTargetContainsNode } from './Util-e30cbaf3.js';
import { I as Icon } from './Icon.Props-050e98eb.js';
import { g as getTabIndex } from './Focus-dd57f317.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/List/List.css */
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
__snowpack__injectStyle(".bolt-list {\n  border-spacing: 0 0;\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  cursor: default;\n  display: table;\n  table-layout: fixed;\n  user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  /* IE11: Limit the width of the list to prevent it from growing out of control */ }\n  @media screen and (min-width: 0\\0) {\n    .bolt-list {\n      max-width: 100vw; } }\n\n.bolt-list.bolt-list {\n  border-collapse: separate; }\n\n.bolt-fixed-height-list-row {\n  width: 100%; }\n\n.bolt-list-row {\n  color: inherit;\n  display: table-row;\n  outline: none;\n  text-decoration: none;\n  transition: background 80ms linear; }\n  .bolt-list-row:hover {\n    background-color: rgba(0, 0, 0, .02);\n    background-color: var(--component-grid-row-hover-color,rgba(0, 0, 0, .02)); }\n    .bolt-list-row:hover .bolt-list-cell-content-reveal {\n      visibility: visible; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-list-row:hover {\n        background: Highlight;\n        forced-color-adjust: none; }\n        .bolt-list-row:hover td {\n          forced-color-adjust: auto; } }\n  .bolt-list-row.focused .bolt-list-cell-content-reveal {\n    visibility: visible; }\n  .bolt-list-row.selected {\n    background-color: rgba(222, 236, 249, 1);\n    background-color: var(--component-grid-selected-row-color,rgba(222, 236, 249, 1));\n    outline: none; }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-list-row.selected {\n        background: Highlight;\n        forced-color-adjust: none; }\n        .bolt-list-row.selected td {\n          forced-color-adjust: auto; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-list-row.selected .bolt-button.bolt-focus-treatment:focus,\n      .bolt-list-row.selected .bolt-checkbox.bolt-focus-treatment:focus .bolt-checkmark {\n        border-color: Background; } }\n    .bolt-list-row.selected .bolt-list-cell:first-child {\n      border-left: 2px solid rgba(0, 120, 212, 1);\n      border-left: 2px solid var(--component-grid-focus-border-color,rgba(0, 120, 212, 1)); }\n  .bolt-list-row:hover.selected {\n    background-color: rgba(222, 236, 249, 1);\n    background-color: var(--component-grid-action-selected-cell-hover-color,rgba(222, 236, 249, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-list-row:hover.selected {\n        background-color: Highlight; } }\n  .bolt-list-row.single-click-activation {\n    cursor: pointer; }\n\n.bolt-list-row-no-hover:hover {\n  background-color: initial; }\n\n.bolt-list-row-loading:hover {\n  background-color: initial;\n  cursor: default; }\n\n.bolt-list-cell {\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  color: inherit;\n  display: table-cell;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  white-space: nowrap; }\n  .bolt-list-cell:first-child {\n    border-left: 2px solid transparent; }\n  .bolt-list-cell:last-child {\n    border-right: 1px solid transparent; }\n\n.bolt-list-cell-content-reveal {\n  visibility: hidden; }\n\n.bolt-list-cell-spacer {\n  padding: 0; }\n\n.bolt-list-cell-text {\n  overflow: hidden; }\n\n.bolt-focus-visible .bolt-list-row:focus .bolt-list-cell {\n  border-color: rgba(0, 120, 212, 1);\n  border-color: var(--component-grid-focus-border-color,rgba(0, 120, 212, 1)); }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-focus-visible .bolt-list-row:focus {\n    forced-color-adjust: none;\n    border-color: highlight; } }\n\n@media screen and (-ms-high-contrast: black-on-white) {\n  .bolt-focus-visible .bolt-list-row:focus {\n    outline: 3px double highlight;\n    outline-offset: 1px; } }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-focus-visible .bolt-list-row:focus {\n    forced-color-adjust: none; }\n    .bolt-focus-visible .bolt-list-row:focus a {\n      forced-color-adjust: auto; }\n    .bolt-focus-visible .bolt-list-row:focus > td > * {\n      forced-color-adjust: auto; } }\n\n.bolt-list-row-marked .bolt-list-cell:first-child {\n  border-left:  2px solid;\n  border-left-color: rgba( 43, 136, 216 ,  1 );\n  border-left-color: rgba( var(--palette-primary-tint-10,43, 136, 216) ,  1 ); }\n\n.bolt-list-overlay-container {\n  width: 100%; }\n\n.bolt-list-overlay {\n  pointer-events: none;\n  width: 100%; }\n\n.bolt-list-drag-source-item {\n  background-color: rgba(255, 255, 255, 0.40);\n  background-color: var(--component-grid-drag-source-color,rgba(255, 255, 255, 0.40)); }\n\n.bolt-drag-image-portal {\n  z-index: 100; }\n\n.bolt-drag-image {\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--callout-background-color,rgba(255, 255, 255, 1));\n  height: 40px;\n  width: 320px;\n  padding: 0px 8px; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/List/ListDropIndicator.css */
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
__snowpack__injectStyle$1(".bolt-list-drop-indicator-circle {\n  background-color: rgba( 43, 136, 216 ,  1 );\n  background-color: rgba( var(--palette-primary-tint-10,43, 136, 216) ,  1 );\n  border-radius: 50%;\n  height: 9px;\n  width: 9px; }\n  .bolt-list-drop-indicator-circle.top {\n    top: -4px; }\n  .bolt-list-drop-indicator-circle.bottom {\n    bottom: -4px; }\n\n.bolt-list-drop-indicator-line {\n  background-color: rgba( 199, 224, 244 ,  1 );\n  background-color: rgba( var(--palette-primary-tint-20,199, 224, 244) ,  1 );\n  height: 3px;\n  right: 0px; }\n  .bolt-list-drop-indicator-line.top {\n    top: -1px; }\n  .bolt-list-drop-indicator-line.bottom {\n    bottom: -1px; }\n\n.bolt-list-tree-drop-target {\n  border: 1px solid rgba(0, 120, 212, 1);\n  border: 1px solid var(--component-grid-focus-border-color,rgba(0, 120, 212, 1)); }\n");

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
var FixedHeightList = /** @class */ (function (_super) {
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
        var pageSize = this.props.pageSize;
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
        var _a = this.state, focusRows = _a.focusRows, renderedRows = _a.renderedRows, firstMaterialized = _a.firstMaterialized, lastMaterialized = _a.lastMaterialized, rowHeight = _a.rowHeight, rowProportion = _a.rowProportion, rows = _a.rows;
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
}(react.Component));
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
__snowpack__injectStyle$2(".bolt-link {\n  border-radius: 2px;\n  color: rgba(0, 90, 158, 1);\n  color: var(--communication-foreground,rgba(0, 90, 158, 1));\n  cursor: pointer;\n  outline: transparent;\n  text-decoration: none;\n  transition: color 80ms cubic-bezier(0.165, 0.84, 0.44, 1), background 80ms linear; }\n  .bolt-link:hover {\n    color: rgba( 0, 69, 120 ,  1 );\n    color: rgba( var(--palette-primary-shade-30,0, 69, 120) ,  1 ); }\n  .bolt-focus-visible .bolt-link:focus {\n    animation: ms-focus-shadow-with-border-pulse 4s ease-in-out infinite;\n    box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23), 0 0 0 1px rgba(0, 120, 212, 1);\n    box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)), 0 0 0 1px var(--focus-border-color,rgba(0, 120, 212, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-link:focus {\n        animation: none; } }\n  .bolt-link.subtle {\n    border-radius: 4px;\n    color: inherit;\n    padding: 3px 6px; }\n    .bolt-link.subtle:hover {\n      color: rgba(0, 90, 158, 1);\n      color: var(--communication-foreground,rgba(0, 90, 158, 1));\n      background-color: rgba(0, 0, 0, 0.06);\n      background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n  .bolt-link.disabled {\n    cursor: default; }\n\n.bolt-focus-visible .bolt-link.subtle:focus {\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06));\n  color: rgba(0, 90, 158, 1);\n  color: var(--communication-foreground,rgba(0, 90, 158, 1));\n  outline: none; }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-focus-visible .bolt-link:focus {\n    outline: 1px solid highlight !important; } }\n");

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
var SimpleList = /** @class */ (function (_super) {
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
}(react.Component));
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
/**
 * return an array describing the difference of two sets of selection ranges.  Postive values in the array are indices in second
 * that are not in first.  Negative values in the array are indices that are in first that are not in second.
 * @param firstRanges the first set of values to use in the comparison.
 * @param secondRanges the second set of values to use in the comparison.
 */
function compareSelectionRanges(firstRanges, secondRanges) {
    var difference = [];
    for (var rangeIndex = 0; rangeIndex < firstRanges.length; rangeIndex++) {
        var range = firstRanges[rangeIndex];
        for (var selectionIndex = range.beginIndex; selectionIndex <= range.endIndex; selectionIndex++) {
            if (!indexWithinRanges(selectionIndex, secondRanges)) {
                difference.push(selectionIndex * -1);
            }
        }
    }
    for (var rangeIndex = 0; rangeIndex < secondRanges.length; rangeIndex++) {
        var range = secondRanges[rangeIndex];
        for (var selectionIndex = range.beginIndex; selectionIndex <= range.endIndex; selectionIndex++) {
            if (!indexWithinRanges(selectionIndex, firstRanges)) {
                difference.push(selectionIndex);
            }
        }
    }
    return difference;
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
var FilteredListSelection = /** @class */ (function (_super) {
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
}(ListSelection));

export { EventDispatch as E, FilteredListSelection as F, List as L, ListSelection as a, compareSelectionRanges as c, getDefaultLinkProps as g, renderListCell as r };
