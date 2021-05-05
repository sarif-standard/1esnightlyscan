import { O as ObservableValue, _ as __extends, a as __assign, c as ObservableLike, b as __spreadArrays, e as __rest, d as ObservableArray } from '../common/Observable-063af883.js';
import '../common/core-4c1f1367.js';
import { r as react } from '../common/index-abdc4d2d.js';
import { M as MouseWithin, d as FocusWithin, P as Portal, f as TimerManagement, F as FocusZoneContext, b as FocusZone, c as FocusZoneDirection, T as Tooltip, e as FocusZoneKeyStroke, C as Callout, g as ContentSize, L as Location } from '../common/Tooltip-bfc7063c.js';
import { a as announce } from '../common/Accessibility-e11a7e50.js';
import { f as format } from '../common/String-19e5561c.js';
import { L as List, E as EventDispatch, g as getDefaultLinkProps, r as renderListCell, F as FilteredListSelection, a as ListSelection, c as compareSelectionRanges } from '../common/ListSelection-50fc8f5c.js';
import { c as css, p as preventDefault, K as KeyCode, M as Mouse, g as getSafeId, f as getSafeIdSelector, k as arrayEquals } from '../common/Util-e30cbaf3.js';
import { I as Icon, a as IconSize } from '../common/Icon.Props-050e98eb.js';
import { O as Observer, A as ArrayItemProvider, I as ItemsObserver, g as getItemsValue, S as SelectionObserver } from '../common/SelectionObserver-458393aa.js';
import { S as Spinner, a as SpinnerSize } from '../common/Spinner-c08d8aa2.js';
import { B as Button, a as Expandable, E as ExpandableButton } from '../common/ExpandableButton-778bbe51.js';
import '../common/MoreButton-5bbaae90.js';
import { C as Checkbox, T as TriStateCheckbox } from '../common/Checkbox-cfa17752.js';
import { S as SelectRowLabel, a as SelectAllRowsLabel, A as AllRowsUnselectedMessage, b as AllRowsSelectedMessage, E as EmptyColumnHeaderLabel, C as ColumnSizerLabel, c as ClickableRowAnnouncementWithSize, d as RowAnnouncementWithSize, e as ClickableRowAnnouncement, f as RowAnnouncement } from '../common/Resources.Widgets-1363c6a9.js';
import { I as Intersection } from '../common/Intersection-ecdadb98.js';
import { g as getTabIndex } from '../common/Focus-dd57f317.js';
import { B as Breakpoint, a as ScreenSizeConditional, F as FILTER_CHANGE_EVENT } from '../common/Filter-c4d98be1.js';
import { D as DropdownSelection } from '../common/DropdownSelection-5435289b.js';
import { T as TextField, a as TextFieldFocusTreatmentBehavior } from '../common/TextFieldWithMessage-bb22c647.js';
import '../common/process-2545f00a.js';
import '../common/_commonjsHelpers-4f955397.js';
import '../common/index-2be6b7dd.js';
import '../common/Surface-9548ad22.js';
import '../common/Resources.Core-6b4f8906.js';
import '../common/Screen-9c158c22.js';
import '../common/FormItem-ff5b1db2.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Dropdown/Dropdown.css */
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
__snowpack__injectStyle(".bolt-dropdown {\n  border-radius: 4px;\n  padding-top: 8px; }\n  .bolt-dropdown .bolt-list-row.selected .bolt-list-cell:first-child {\n    border-left: 0px none transparent; }\n\n.bolt-dropdown-list-box-container {\n  max-height: 270px;\n  padding-bottom: 8px; }\n\n.bolt-dropdown .bolt-dropdown-list-box-container {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.bolt-dropdown-filter.bolt-textfield {\n  background: rgba(0, 0, 0, 0.06);\n  background: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06));\n  border-radius: 2px;\n  border-color: transparent; }\n  .bolt-dropdown-filter.bolt-textfield .bolt-textfield-input {\n    background: transparent; }\n\n.bolt-dropdown-filter-container {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 8px; }\n\n.bolt-actions-container {\n  border-top: 1px solid;\n  border-top-color: rgba(0, 0, 0, 0.06);\n  border-top-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06));\n  padding: 8px;\n  align-items: flex-start; }\n\n.bolt-dropdown-no-items {\n  padding: 6px 10px;\n  color: rgba(0, 0, 0, .55);\n  color: var(--text-secondary-color,rgba(0, 0, 0, .55));\n  text-align: center; }\n\n.bolt-focus-visible .bolt-dropdown .bolt-table-row.focused {\n  outline: none;\n  animation: focus-shadow-pulse-inset 4s ease-in-out infinite;\n  box-shadow: inset 0 0 0 3px rgba(0, 120, 212, 0.23), inset 0 0 0 1px rgba(0, 120, 212, 1);\n  box-shadow: inset 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)), inset 0 0 0 1px var(--focus-border-color,rgba(0, 120, 212, 1)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-dropdown .bolt-table-row.focused {\n      animation: none; } }\n\n_::-webkit-full-page-media,\n_:future,\n:root .bolt-focus-visible .bolt-dropdown .bolt-table-row.focused {\n  outline-style: auto; }\n\n.bolt-dropdown-action-right-button {\n  margin: 8px 4px 0px 0px;\n  align-self: flex-end; }\n\n.bolt-dropdown-expandable-textfield-input {\n  text-align: left;\n  min-width: 0; }\n\n.bolt-dropdown-expandable-textfield-input::-moz-focus-inner {\n  border: 0; }\n\n.bolt-dropdown-expandable-textfield-input.bolt-textfield-input {\n  background-color: transparent; }\n\n.bolt-dropdown-expandable-button-label {\n  text-align: left; }\n\n.bolt-dropdown-filter-bar-item {\n  max-width: 100%; }\n  .bolt-dropdown-filter-bar-item .bolt-button {\n    max-width: 100%; }\n\n.bolt-dropdown-filter-bar-item .bolt-dropdown-expandable-button-label {\n  max-width: 340px;\n  font-weight: normal; }\n  .bolt-dropdown-filter-bar-item .bolt-dropdown-expandable-button-label .bolt-dropdown-filter-bar-item-selected-text {\n    color: rgba(0, 0, 0, .9);\n    color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-dropdown-filter-bar-item .bolt-dropdown-expandable-button-label .bolt-dropdown-filter-bar-item-selected-text {\n        color: windowText; } }\n\n.bolt-dropdown-filter-bar-item-selected-text {\n  font-weight: 600; }\n\n.bolt-dropdown-filter-bar-item-placeholder {\n  white-space: pre; }\n\n.bolt-dropdown-filter-bar-item .bolt-button {\n  background: transparent;\n  color: rgba(0, 0, 0, .55);\n  color: var(--text-secondary-color,rgba(0, 0, 0, .55)); }\n  .bolt-dropdown-filter-bar-item .bolt-button.active {\n    color: rgba(0, 0, 0, .9);\n    color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n\n.bolt-dropdown-pivot.bolt-button.subtle {\n  font-weight: normal; }\n  .bolt-dropdown-pivot.bolt-button.subtle:hover {\n    background: transparent; }\n\n.bolt-dropdown-pivot-selected {\n  border-bottom: 2px solid rgba(0, 120, 212, 1);\n  border-bottom: 2px solid var(--communication-background,rgba(0, 120, 212, 1));\n  font-weight: 600; }\n\n.bolt-dropdown-header {\n  padding: 0 4px 4px 12px; }\n\n.bolt-dropdown-header-text {\n  padding: 6px 0; }\n\n.bolt-dropdown-header-container {\n  border-bottom: 1px solid;\n  border-bottom-color: rgba(0, 0, 0, 0.06);\n  border-bottom-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n\n.bolt-dropdown-expandable-text-field:not(.disabled) {\n  cursor: pointer; }\n  .bolt-dropdown-expandable-text-field:not(.disabled) .bolt-dropdown-expandable-textfield-input {\n    cursor: pointer; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/ListBox/ListBox.css */
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
__snowpack__injectStyle$1(".bolt-list-box-multi-select-row.bolt-list-row.selected {\n  background: transparent; }\n  .bolt-list-box-multi-select-row.bolt-list-row.selected:hover {\n    background: rgba(0, 0, 0, .02);\n    background: var(--component-grid-row-hover-color,rgba(0, 0, 0, .02)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-list-box-multi-select-row.bolt-list-row.selected {\n      background: transparent; } }\n\n.bolt-list-box-header-row {\n  font-weight: 600;\n  cursor: text; }\n  .bolt-list-box-header-row.bolt-list-row:hover {\n    background: transparent; }\n\n.bolt-list-box-text .bolt-table-cell-content {\n  padding: 5px 0; }\n\n.bolt-list-box-text-single-select.bolt-list-cell {\n  padding: 0 12px; }\n\n.bolt-list-box-text-multi-select {\n  padding-right: 12px; }\n\n.bolt-list-box-divider-multi-select {\n  padding-left: 12px; }\n\n.bolt-list-box-divider-row,\n.bolt-list-box-loading-row {\n  cursor: text; }\n  .bolt-list-box-divider-row.bolt-list-row:hover,\n  .bolt-list-box-loading-row.bolt-list-row:hover {\n    background: transparent; }\n\n.bolt-list-box-divider {\n  margin-bottom: 1px;\n  background-color: rgba(0, 0, 0, 0.10);\n  background-color: var(--palette-black-alpha-10,rgba(0, 0, 0, 0.10));\n  height: 1px; }\n\n.bolt-focus-visible .bolt-table.bolt-list-box .bolt-list-row:focus .bolt-list-cell {\n  border-color: transparent; }\n\n.bolt-list-box-loading {\n  padding: 8px 0px; }\n  .bolt-list-box-loading .bolt-spinner {\n    flex-direction: row; }\n  .bolt-list-box-loading .bolt-spinner-circle {\n    margin-right: 10px; }\n  .bolt-list-box-loading .bolt-spinner-label {\n    margin-top: 0px; }\n\n.bolt-list-box-item-disabled {\n  color: rgba(0, 0, 0, .38);\n  color: var(--text-disabled-color,rgba(0, 0, 0, .38)); }\n\n.bolt-list-row.bolt-list-box-item-disabled:hover {\n  background: transparent;\n  cursor: text; }\n\n.bolt-list-box-cell-container {\n  width: 100%; }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-focus-visible .bolt-list-box-row:focus {\n    font-weight: bold;\n    color: highlight; }\n    .bolt-focus-visible .bolt-list-box-row:focus .bolt-table-cell-select,\n    .bolt-focus-visible .bolt-list-box-row:focus .bolt-list-box-text:not(.bolt-list-box-text-multi-select) {\n      border-left: 2px solid highlight; }\n    .bolt-focus-visible .bolt-list-box-row:focus .bolt-list-box-text {\n      border-right: 2px solid highlight; } }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-list-box-row .bolt-table-cell-select,\n  .bolt-list-box-row .bolt-list-box-text:not(.bolt-list-box-text-multi-select) {\n    border-left: 2px solid transparent; }\n  .bolt-list-box-row .bolt-list-box-text {\n    border-right: 2px solid transparent; } }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-list-box {\n    border: 1px solid windowText; } }\n");

var AnnounceFilterCleared = "Filter selection cleared";
var AnnounceFilterResultCount = "Showing {0} filtered items.";
var AnnounceFinishedLoadingItems = "Finished loading items";
var AnnounceItemCount = "Showing {0} items.";
var AnnounceLoadingItems = "Loading items";
var ClearText = "Clear text";
var Close = "Close";
var DropdownCalloutRoleDescription = "Expanded dropdown";
var DropdownClearActionText = "Clear";
var DropdownExpandableRoleDescription = "Dropdown";
var HeaderAriaLabel = "Header {0}";
var ListboxAriaLabel = "Listbox";
var Loading = "Loading...";
var NoFilterResults = "No items matched the supplied filter";
var SearchAriaLabel = "Search";
var Searching = "Searching...";

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Table/Table.css */
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
__snowpack__injectStyle$2(".bolt-table-header-cell {\n  outline: none;\n  padding: 0;\n  border-bottom: 1px solid rgba(234, 234, 234, 1);\n  border-bottom: 1px solid var(--component-grid-cell-bottom-border-color,rgba(234, 234, 234, 1)); }\n\n.bolt-table-header-border {\n  border-bottom: 1px solid rgba(234, 234, 234, 1);\n  border-bottom: 1px solid var(--component-grid-cell-bottom-border-color,rgba(234, 234, 234, 1)); }\n\n.bolt-table-header-cell-content {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, .55);\n  color: var(--text-secondary-color,rgba(0, 0, 0, .55));\n  font-weight: 600;\n  margin: 7px 0px;\n  outline: none;\n  padding: 0.375rem 0.6875rem;\n  position: relative;\n  text-align: left; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-table-header-cell-content {\n      border-color: transparent; } }\n\n.bolt-table-header-cell-actionable > .bolt-table-header-cell-content {\n  cursor: pointer; }\n  .bolt-table-header-cell-actionable > .bolt-table-header-cell-content:hover {\n    background-color: rgba(0, 0, 0, .02);\n    background-color: var(--component-grid-row-hover-color,rgba(0, 0, 0, .02)); }\n\n.bolt-focus-visible .bolt-table-header-cell-actionable:focus > .bolt-table-header-cell-content {\n  background-color: rgba(222, 236, 249, 1);\n  background-color: var(--component-grid-selected-row-color,rgba(222, 236, 249, 1)); }\n\n.bolt-table-header-cell-empty:hover {\n  background-color: inherit; }\n\n.bolt-table-header-sort-icon {\n  padding: 0 4px; }\n\n.bolt-table-header-sizer {\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  top: 0px; }\n\n.bolt-table-header-row.focused .bolt-table-cell-content-reveal,\n.bolt-table-header-row:hover .bolt-table-cell-content-reveal,\n.bolt-table-row.focused .bolt-table-cell-content-reveal,\n.bolt-table-row:hover .bolt-table-cell-content-reveal {\n  visibility: visible; }\n\n.bolt-table-two-line-cell-item {\n  padding: 1px; }\n  .bolt-table-two-line-cell-item .bolt-table-link:focus {\n    animation: focus-shadow-pulse-inset 4s ease-in-out infinite;\n    box-shadow: inset 0 0 0 3px rgba(0, 120, 212, 0.23), inset 0 0 0 1px rgba(0, 120, 212, 1);\n    box-shadow: inset 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)), inset 0 0 0 1px var(--focus-border-color,rgba(0, 120, 212, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-table-two-line-cell-item .bolt-table-link:focus {\n        animation: none; } }\n\n.bolt-table-two-line-cell-icon {\n  margin-right: 12px; }\n\n.bolt-table-cell-compact {\n  padding: 0px; }\n\n.bolt-table-show-lines .bolt-table-row:not(.first-row) .bolt-table-cell {\n  border-top: 1px solid rgba(234, 234, 234, 1);\n  border-top: 1px solid var(--component-grid-cell-bottom-border-color,rgba(234, 234, 234, 1)); }\n\n.bolt-table-cell-primary {\n  font-weight: 600; }\n\n.bolt-table-cell-tertiary {\n  color: rgba(0, 0, 0, 0.55);\n  /* @TODO: What color to use for a light color. */ }\n\n.justify-cell-start .bolt-list-cell-child {\n  justify-content: flex-start; }\n\n.justify-cell-end .bolt-list-cell-child {\n  justify-content: flex-end; }\n\n.bolt-table-cell-content {\n  padding: 0.5625rem 0.75rem; }\n  .bolt-table-cell-content .bolt-list-cell-child:not(:last-child) {\n    margin-right: 4px; }\n  .bolt-table-cell-content .bolt-list-cell-text {\n    flex-grow: 1;\n    overflow: hidden; }\n\n.bolt-table-cell-content-with-link {\n  padding: 0.375rem 0.375rem; }\n\n.bolt-table-cell-content-with-inline-link {\n  padding: 0.375rem 0.5rem; }\n\n.bolt-table-cell-content-with-button {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem; }\n\n.bolt-table-inline-link-left-padding {\n  padding-left: 0.25rem; }\n\n.bolt-table-inline-link-right-padding {\n  padding-right: 0.25rem; }\n\n.bolt-table-link.bolt-link {\n  padding: 0.1875rem 0.375rem;\n  text-decoration: none;\n  color: inherit;\n  border-radius: 4px; }\n  .bolt-table-link.bolt-link:focus, .bolt-table-link.bolt-link:active {\n    outline: none; }\n  .bolt-table-link.bolt-link:hover {\n    color: rgba(0, 90, 158, 1);\n    color: var(--communication-foreground,rgba(0, 90, 158, 1));\n    background-color: rgba(0, 0, 0, 0.06);\n    background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n\n.bolt-table-inline-link.bolt-table-link {\n  padding: 0.1875rem 0.25rem; }\n\n.bolt-table-cell-content-reveal {\n  visibility: hidden; }\n  @media screen and (max-width: 600px) {\n    .bolt-table-cell-content-reveal {\n      visibility: visible; } }\n\n.bolt-table-cell-select .bolt-table-header-cell-content:hover {\n  background-color: inherit; }\n\n.bolt-table-cell-select {\n  padding: 2px 0px 0px 0px;\n  font-weight: normal; }\n\n.bolt-table-spacer-cell {\n  z-index: 1; }\n\n.bolt-gripper-container {\n  margin-left: 5px;\n  width: 0.625rem;\n  cursor: move;\n  /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab; }\n\n.bolt-gripper {\n  background-image: url(\"data:image/svg+xml;utf8,<svg width='6' height='20' viewBox='0 0 6 20' fill='black' opacity='0.3' xmlns='http://www.w3.org/2000/svg'><circle cx='1' cy='7' r='1'/><circle cx='1' cy='13' r='1'/><circle cx='1' cy='19' r='1'/><circle cx='5' cy='7' r='1'/><circle cx='1' cy='1' r='1'/><circle cx='5' cy='1' r='1'/><circle cx='5' cy='13' r='1'/><circle cx='5' cy='19' r='1'/></svg>\");\n  height: 1.25rem;\n  width: 0.625rem; }\n\n.bolt-focus-visible .bolt-table-header-cell:focus > .bolt-table-header-cell-content {\n  animation: ms-focus-shadow-pulse 4s ease-in-out infinite;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23);\n  box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23));\n  border-color: rgba(0, 120, 212, 1);\n  border-color: var(--communication-background,rgba(0, 120, 212, 1));\n  z-index: 1; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-table-header-cell:focus > .bolt-table-header-cell-content {\n      animation: none; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-table-header-cell:focus > .bolt-table-header-cell-content {\n      border-color: highlight;\n      forced-color-adjust: none;\n      background: transparent;\n      color: windowtext; } }\n\n.bolt-focus-visible .bolt-table .bolt-list-row:focus .bolt-list-cell {\n  border-color: rgba(0, 120, 212, 1);\n  border-color: var(--component-grid-focus-border-color,rgba(0, 120, 212, 1)); }\n\n.bolt-focus-visible .bolt-table-link:focus {\n  color: rgba(0, 90, 158, 1);\n  color: var(--communication-foreground,rgba(0, 90, 158, 1));\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n\n.bolt-focus-visible .bolt-table-header-sizer:focus {\n  border: 1px solid rgba(0, 120, 212, 1);\n  border: 1px solid var(--communication-background,rgba(0, 120, 212, 1)); }\n");

/**
 * TableColumnLayout is used to define the general shape of the data for a given
 * column. One of the purposes of this is an animation when the rows are loaded
 * asynchronously.
 *
 * If the caller wants non-standard shapes a custom loading row function will need
 * to be implemented. For any columns that fit the standard shapes the exported
 * functions can be used.
 */
var TableColumnLayout;
(function (TableColumnLayout) {
    /**
     * If a column is noted as none, when an asynchronous row is loaded no
     * animation will be added to this column.
     */
    TableColumnLayout[TableColumnLayout["none"] = 0] = "none";
    /**
     * The row uses a single line of text. This is the default for a column that
     * doesnt explicitly define a column layout
     */
    TableColumnLayout[TableColumnLayout["singleLine"] = 1] = "singleLine";
    /**
     * The row uses a single line of text with a small prefix.
     */
    TableColumnLayout[TableColumnLayout["singleLinePrefix"] = 2] = "singleLinePrefix";
    /**
     * The row uses two lines of text.
     */
    TableColumnLayout[TableColumnLayout["twoLine"] = 3] = "twoLine";
    /**
     * The row uses two lines of text with a large prefex.
     */
    TableColumnLayout[TableColumnLayout["twoLinePrefix"] = 4] = "twoLinePrefix";
})(TableColumnLayout || (TableColumnLayout = {}));
/**
 * The ColumnStyles effect how the values for the column should be rendered.
 */
var TableColumnStyle;
(function (TableColumnStyle) {
    /**
     * Secondary colums should be rendered normally.
     */
    TableColumnStyle[TableColumnStyle["Secondary"] = 1] = "Secondary";
    /**
     * Primary columns should be rendered with emphasis.
     */
    TableColumnStyle[TableColumnStyle["Primary"] = 2] = "Primary";
    /**
     * Tertiary columns should be rendered de-emphasized.
     */
    TableColumnStyle[TableColumnStyle["Tertiary"] = 3] = "Tertiary";
})(TableColumnStyle || (TableColumnStyle = {}));
/**
 * Sorting order for columns
 */
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["ascending"] = 0] = "ascending";
    SortOrder[SortOrder["descending"] = 1] = "descending";
})(SortOrder || (SortOrder = {}));
/**
 * Justification of the content within a column
 */
var ColumnJustification;
(function (ColumnJustification) {
    ColumnJustification[ColumnJustification["Left"] = 0] = "Left";
    ColumnJustification[ColumnJustification["Right"] = 1] = "Right";
})(ColumnJustification || (ColumnJustification = {}));
/**
 * An IMeasurementStyle is used to represent a fixed size. The fixed size may be
 * based on a number of base measurement values.
 */
var IMeasurementStyle;
(function (IMeasurementStyle) {
    /**
     * Pixels represented by the 'px' css measurement.
     */
    IMeasurementStyle[IMeasurementStyle["Pixel"] = 0] = "Pixel";
    /**
     * RootEMs represented by the 'rem' css measurement.
     */
    IMeasurementStyle[IMeasurementStyle["REM"] = 1] = "REM";
})(IMeasurementStyle || (IMeasurementStyle = {}));

/**
 * Standard widths for the more column
 */
var ColumnMoreWidths;
(function (ColumnMoreWidths) {
    ColumnMoreWidths[ColumnMoreWidths["compact"] = 2] = "compact";
    ColumnMoreWidths[ColumnMoreWidths["default"] = 2.625] = "default";
})(ColumnMoreWidths || (ColumnMoreWidths = {}));

/**
 * ColumnSelect is used to render additional selection ui for a given row.
 *
 * This renders a fixed width column that contains a checkbox in the header
 * as well as each row that represents the selection state of the row. It
 * also allows the user to change the selection state. The header checkbox
 * is used to set the state of all rows in the table to the same state.
 *
 */
var ColumnSelect = /** @class */ (function () {
    function ColumnSelect() {
        var _this = this;
        this.columnSelectBehavior = {
            initialize: function (props) {
                _this.ariaHidden = props.tableProps.role === "menu";
                _this.itemProvider = props.tableProps.itemProvider;
                _this.selection = props.tableProps.selection;
                _this.onSelect = props.tableProps.onSelect;
            },
            componentDidMount: function (props) {
                _this.componentDidMount(props);
            },
            componentDidUpdate: function (props) {
                _this.componentDidUpdate(props);
            },
            componentWillUnmount: function () {
                _this.componentWillUnmount();
            }
        };
        this.allSelected = new ObservableValue(false);
        this.columnLayout = TableColumnLayout.none;
        this.id = "_select";
        this.width = 2.5;
        this.widthStyle = IMeasurementStyle.REM;
        this.behaviors = [this.columnSelectBehavior];
        this.renderCell = function (rowIndex, columnIndex, listColumn) {
            var selection = _this.selection;
            var selected = selection && selection.selected(rowIndex);
            var selectable = selection && selection.selectable(rowIndex);
            return (react.createElement("td", { "aria-colindex": columnIndex + 1, "aria-hidden": _this.ariaHidden, className: css("bolt-table-cell-select bolt-table-cell bolt-list-cell", "col-" + columnIndex), "data-column-index": columnIndex, key: "col-select", onClick: preventDefault, onDoubleClick: preventDefault, onMouseDown: function (event) {
                    _this.updateSelection(event, rowIndex);
                    event.preventDefault();
                }, onKeyDown: function (event) {
                    if (event.which === KeyCode.space) {
                        _this.updateSelection(event, rowIndex);
                        event.preventDefault();
                    }
                } },
                react.createElement("div", { className: "flex-row justify-center" },
                    react.createElement("span", { className: "flex-row-inline" },
                        react.createElement(Checkbox, { ariaLabel: SelectRowLabel, checked: !!selected, excludeTabStop: true, disabled: !selectable })))));
        };
        this.renderHeaderCell = function (columnIndex, listColumn, focuszoneId) {
            return (react.createElement("th", { "aria-colindex": columnIndex + 1, className: css("bolt-table-cell-select bolt-table-header-cell", "col-header-" + columnIndex), "data-column-index": columnIndex, key: "col-select" },
                react.createElement("div", { className: "flex-row" },
                    react.createElement(Observer, { allSelected: _this.allSelected }, function (props) {
                        var _a = _this, itemProvider = _a.itemProvider, selection = _a.selection;
                        // Get the total number of items within the list.
                        var itemCount = itemProvider && itemProvider.length;
                        return (react.createElement("div", { className: "flex-row flex-grow justify-center" }, selection && selection.multiSelect && itemCount !== -1 && (react.createElement(TriStateCheckbox, { ariaLabel: SelectAllRowsLabel, checked: props.allSelected, focuszoneId: focuszoneId, onChange: _this.onChangeHeader }))));
                    }))));
        };
        this.onChangeHeader = function (event) {
            var _a = _this, itemProvider = _a.itemProvider, onSelect = _a.onSelect, selection = _a.selection;
            // toggle select all
            if (selection) {
                if (_this.allSelected.value !== false) {
                    selection.clear();
                    announce(AllRowsUnselectedMessage, true);
                }
                else {
                    selection.select(0, itemProvider && itemProvider.length);
                    announce(AllRowsSelectedMessage, true);
                }
            }
            if (onSelect && itemProvider) {
                for (var i = 0; i < itemProvider.length; i++) {
                    onSelect(event, _this.getListRow(i));
                }
            }
        };
        this.onSelectionChange = function () {
            var _a = _this, itemProvider = _a.itemProvider, selection = _a.selection;
            if (selection) {
                var selectedCount = selection.selectedCount;
                var itemCount = itemProvider && itemProvider.length - selection.unselectableCount;
                if (selectedCount > 0) {
                    if (selectedCount === itemCount) {
                        _this.allSelected.value = true;
                    }
                    else {
                        _this.allSelected.value = undefined;
                    }
                }
                else {
                    _this.allSelected.value = false;
                }
            }
        };
        this.updateSelection = function (event, rowIndex) {
            var _a = _this, onSelect = _a.onSelect, selection = _a.selection;
            if (selection) {
                if (selection.selected(rowIndex)) {
                    selection.unselect(rowIndex);
                }
                else {
                    selection.select(rowIndex, 1, true);
                }
            }
            if (onSelect) {
                var listRow = _this.getListRow(rowIndex);
                onSelect(event, listRow);
            }
        };
        this.getListRow = function (rowIndex) {
            return { data: _this.itemProvider ? _this.itemProvider.value[rowIndex] : {}, index: rowIndex };
        };
    }
    ColumnSelect.prototype.componentDidMount = function (props) {
        var _a = this, itemProvider = _a.itemProvider, selection = _a.selection;
        // We need to know about changes to the selection to manage the selectAll state.
        if (selection) {
            selection.subscribe(this.onSelectionChange);
            this.onSelectionChange();
        }
        if (itemProvider && itemProvider.subscribe) {
            itemProvider.subscribe(this.onSelectionChange);
        }
    };
    ColumnSelect.prototype.componentDidUpdate = function (props) {
        var selection = this.selection;
        if (selection !== props.tableProps.selection) {
            if (selection) {
                selection.unsubscribe(this.onSelectionChange);
            }
            selection = props.tableProps.selection;
            this.selection = selection;
            if (selection) {
                selection.subscribe(this.onSelectionChange);
            }
        }
        if (selection) {
            this.onSelectionChange();
        }
        if (this.itemProvider !== props.tableProps.itemProvider) {
            if (this.itemProvider && this.itemProvider.unsubscribe) {
                this.itemProvider.unsubscribe(this.onSelectionChange);
            }
            this.itemProvider = props.tableProps.itemProvider;
            if (this.itemProvider && this.itemProvider.subscribe) {
                this.itemProvider.subscribe(this.onSelectionChange);
            }
        }
    };
    ColumnSelect.prototype.componentWillUnmount = function () {
        var selection = this.selection;
        if (selection) {
            selection.unsubscribe(this.onSelectionChange);
        }
        if (this.itemProvider && this.itemProvider.unsubscribe) {
            this.itemProvider.unsubscribe(this.onSelectionChange);
        }
    };
    return ColumnSelect;
}());

/**
 * The DragAndDropGripper is meant to be rendered inside of the
 * spacer column of a table, to indicate an item can be dragged in a table.
 */
var DragAndDropGripper = /** @class */ (function (_super) {
    __extends(DragAndDropGripper, _super);
    function DragAndDropGripper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragAndDropGripper.prototype.render = function () {
        return (react.createElement("div", { className: "bolt-gripper-container bolt-table-cell-content-reveal" },
            react.createElement("div", { className: "bolt-gripper" })));
    };
    return DragAndDropGripper;
}(react.Component));

var FocusOrMouseWithin = /** @class */ (function (_super) {
    __extends(FocusOrMouseWithin, _super);
    function FocusOrMouseWithin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mouseWithinRef = react.createRef();
        _this.focusWithinRef = react.createRef();
        _this.hasFocus = function () {
            return !!_this.focusWithinRef.current && _this.focusWithinRef.current.hasFocus();
        };
        _this.hasMouse = function () {
            return !!_this.mouseWithinRef.current && _this.mouseWithinRef.current.hasMouse();
        };
        return _this;
    }
    FocusOrMouseWithin.prototype.render = function () {
        var _this = this;
        var _a = this.props, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onFocus = _a.onFocus, onBlur = _a.onBlur;
        var children;
        return (react.createElement(MouseWithin, { ref: this.mouseWithinRef, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, function (mouseWithinStatus) {
            if (typeof _this.props.children === "function") {
                children = function (props) {
                    return _this.props.children(__assign(__assign({}, props), mouseWithinStatus));
                };
            }
            else {
                var child = react.Children.only(_this.props.children);
                children = react.cloneElement(child, __assign(__assign({}, child.props), mouseWithinStatus), child.props.children);
            }
            return (react.createElement(FocusWithin, { onFocus: onFocus, onBlur: onBlur, ref: _this.focusWithinRef }, children));
        }));
    };
    return FocusOrMouseWithin;
}(react.Component));

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Sizer/Sizer.css */
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
__snowpack__injectStyle$3(".bolt-sizer {\n  outline-width: 0;\n  user-select: none;\n  z-index: 1; }\n\n.bolt-focus-visible .bolt-sizer {\n  outline-width: 1px; }\n\n.bolt-sizer-column {\n  cursor: ns-resize;\n  padding: 2px 0; }\n\n.bolt-sizer-column.divider::before {\n  background-color: rgba( 234, 234, 234 ,  1 );\n  background-color: rgba( var(--palette-neutral-8,234, 234, 234) ,  1 );\n  content: \"\";\n  height: 1px; }\n\n.bolt-sizer-row {\n  cursor: ew-resize;\n  padding: 0 2px; }\n\n.bolt-sizer-row.divider::before {\n  background-color: rgba( 234, 234, 234 ,  1 );\n  background-color: rgba( var(--palette-neutral-8,234, 234, 234) ,  1 );\n  content: \"\";\n  width: 1px; }\n\n.bolt-sizer-portal {\n  background-color: transparent;\n  pointer-events: auto;\n  z-index: 100; }\n\n.bolt-sizer-portal-column {\n  cursor: ns-resize; }\n\n.bolt-sizer-portal-row {\n  cursor: ew-resize; }\n");

/**
 * The orientiation of a the Sizer defines whether or not it is being used
 * in a row or column of components. This is used to determine if the
 * component is sizing on the X axis (horizontally) or Y axis (vertically).
 */
var Orientation;
(function (Orientation) {
    /**
     * Sizes on the X axis, left - right.
     */
    Orientation[Orientation["row"] = 0] = "row";
    /**
     * Sizes on the Y axis top - bottom.
     */
    Orientation[Orientation["column"] = 1] = "column";
})(Orientation || (Orientation = {}));
/**
 * Position should be defined as where the Sized component being managed
 * by the Sizer is in relationship. If the Sized component comes after
 * the Sizer is should be set to Far, otherwise Near.
 */
var Position;
(function (Position) {
    /**
     * The Sized component appears before the Sizer.
     */
    Position[Position["near"] = 0] = "near";
    /**
     * The Sized component appears after the Sizer.
     */
    Position[Position["far"] = 1] = "far";
})(Position || (Position = {}));

var Sizer = /** @class */ (function (_super) {
    __extends(Sizer, _super);
    function Sizer(props) {
        var _this = _super.call(this, props) || this;
        _this.lastLocation = -1;
        _this.timerManagement = new TimerManagement();
        _this.state = { showPortal: false };
        _this.onMouseCapture = function (event) {
            // Recompute the size and update the lastLocation based on the amount changed.
            _this.lastLocation += _this.updateSize(event, _this.getMouseLocation(event) - _this.lastLocation);
            // Remove the portal now that we are no longer sizing.
            if (event.type === "mouseup") {
                _this.setState({ showPortal: false });
                // If the user wanted to know when the sizing was complete, we will notify
                // the now that sizing is complete.
                _this.onSizeEnd();
            }
        };
        _this.onKeyDown = function (event) {
            if (!event.defaultPrevented) {
                var orientation_1 = _this.props.orientation;
                var sizeChange = void 0;
                if (orientation_1 === Orientation.row) {
                    if (event.which === KeyCode.leftArrow) {
                        sizeChange = _this.updateSize(event.nativeEvent, -1);
                    }
                    else if (event.which === KeyCode.rightArrow) {
                        sizeChange = _this.updateSize(event.nativeEvent, 1);
                    }
                }
                else {
                    if (event.which === KeyCode.upArrow) {
                        sizeChange = _this.updateSize(event.nativeEvent, -1);
                    }
                    else if (event.which === KeyCode.downArrow) {
                        sizeChange = _this.updateSize(event.nativeEvent, 1);
                    }
                }
                // If we changed the size, we will prevent the default and start a
                // timer to end the sizing operation. Since there is no gesture to
                // start and complete with the keyboard.
                if (sizeChange) {
                    event.preventDefault();
                    _this.debouncedEnd();
                }
            }
        };
        _this.onSizeEnd = function () {
            if (_this.props.onSizeEnd) {
                _this.props.onSizeEnd(_this.props.id);
            }
        };
        _this.onMouseDown = function (event) {
            if (!event.defaultPrevented) {
                _this.lastLocation = _this.getMouseLocation(event.nativeEvent);
                // Capture the mouse, this will let us size the column even when the mouse moves
                // outside our element.
                Mouse.setCapture(_this.onMouseCapture);
                // Show the portal that keeps our sizing actions for effecting the other elements.
                _this.setState({ showPortal: true });
                // Don't let the event set focus or start a mouse selection.
                event.preventDefault();
            }
        };
        _this.debouncedEnd = _this.timerManagement.debounce(_this.onSizeEnd, 500, { trailing: true });
        return _this;
    }
    Sizer.prototype.render = function () {
        var divider = this.props.divider;
        return (react.createElement("div", { "aria-label": this.props.ariaLabel, "aria-valuemin": this.props.minSize, "aria-valuemax": this.props.maxSize, "aria-valuenow": ObservableLike.getValue(this.props.size), className: css(this.props.className, "bolt-sizer", this.props.orientation === Orientation.row ? "bolt-sizer-row flex-row" : "bolt-sizer-column flex-column", divider && "divider"), id: this.props.id, onKeyDown: this.onKeyDown, onMouseDown: this.onMouseDown, role: "separator", tabIndex: this.props.tabIndex }, this.state.showPortal && (react.createElement(Portal, { className: css("bolt-sizer-portal", this.props.orientation === Orientation.row ? "bolt-sizer-portal-row" : "bolt-sizer-portal-column") },
            react.createElement("div", null)))));
    };
    Sizer.prototype.componentWillUnmount = function () {
        Mouse.releaseCapture(this.onMouseCapture);
        this.timerManagement.dispose();
    };
    Sizer.prototype.getMouseLocation = function (event) {
        return this.props.orientation === Orientation.row ? event.pageX : event.pageY;
    };
    Sizer.prototype.updateSize = function (event, sizeChange) {
        // Compute the udpated size of the Sized element.
        var currentSize = ObservableLike.getValue(this.props.size);
        var multiplier = this.props.position === Position.far ? -1 : 1;
        var updatedSize = Math.floor(Math.min(this.props.maxSize, Math.max(this.props.minSize, currentSize + sizeChange * multiplier)));
        // Notify the caller of the updated size.
        this.props.onSize(event, updatedSize, this.props.id);
        // @TODO: accessibility - need to annouce the updated size.
        // console.log("currentSize = " + currentSize + " updateSize = " + updatedSize);
        return (updatedSize - currentSize) * multiplier;
    };
    Sizer.defaultProps = {
        divider: true,
        maxSize: 10000,
        minSize: 100
    };
    return Sizer;
}(react.Component));

function TableBreakpoint(props) {
    var breakpoints = [];
    var onBreakpoint = function (breakpointIndex, breakpoint) {
        var columnWidths = props.breakpoints[Math.max(0, breakpointIndex)].columnWidths;
        for (var index = 0; index < columnWidths.length; index++) {
            if (ObservableLike.isObservable(props.columnWidths[index])) {
                props.columnWidths[index].value = columnWidths[index];
            }
        }
        // Notify the owner if the responsive udpate property was supplied.
        if (props.onBreakpoint) {
            props.onBreakpoint(breakpointIndex, breakpoint);
        }
    };
    // Compute the breakpoints from the table definition.
    for (var index = 0; index < props.breakpoints.length; index++) {
        breakpoints.push(props.breakpoints[index].breakpoint);
    }
    // Compute the set of breakpoints needed for the responsive columns.
    return react.createElement(Breakpoint, { breakpoints: breakpoints, onBreakpoint: onBreakpoint });
}

/**
 * ColumnFill is used to fill the remaining space in the parent element with an
 * empty column. This column can be used anywhere in the column order. Columns
 * that appear after this will be pushed to the right.
 */
var ColumnFill = {
    columnLayout: TableColumnLayout.none,
    id: "_fill",
    renderCell: function (rowIndex, columnIndex) {
        return (react.createElement("td", { key: "col-fill", "aria-colindex": columnIndex + 1, "aria-hidden": true, className: css("bolt-table-cell bolt-list-cell", "col-" + columnIndex), "data-column-index": columnIndex, role: "presentation" }));
    },
    renderHeaderCell: function (columnIndex, tableColumn) {
        return (react.createElement("th", { key: "col-fill", "aria-hidden": true, className: css(tableColumn.headerClassName, "bolt-table-header-cell bolt-table-header-cell-empty", "col-header-" + columnIndex), "data-column-index": columnIndex, role: "presentation" }));
    },
    width: -100
};
/**
 * The Table is a multi-column List component with an optional header.
 */
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        // Reference to the underlying list interface.
        _this.list = react.createRef();
        _this.onBreakpoint = function () {
            var visibleColumnsKey = _this.props.tableBreakpoints
                ? getVisibleColumnsAndIndices(_this.props.columns)
                    .map(function (_a) {
                    var originalIndex = _a.originalIndex;
                    return originalIndex;
                })
                    .join(",")
                : "";
            // If any column has toggled its visibility, we have to re-render.
            if (_this.state.renderInvisible || _this.state.visibleColumnsKey !== visibleColumnsKey) {
                _this.setState({ renderInvisible: false, visibleColumnsKey: visibleColumnsKey });
            }
        };
        _this.onColumnsChanged = function () {
            _this.forceUpdate();
            return false;
        };
        _this.renderHeader = function () {
            var _a = _this.props, columns = _a.columns, showHeader = _a.showHeader, renderHeader = _a.renderHeader, spacerWidth = _a.spacerWidth;
            var widths = [];
            var proportionalTotal = 0;
            // Determine the percentage for proportionally sized columns.
            for (var columnIndex = 0; columnIndex < columns.length; columnIndex++) {
                var width = ObservableLike.getValue(columns[columnIndex].width);
                if (width < 0) {
                    proportionalTotal += width;
                }
            }
            // Compute the width of all columns based on the fixed/proportional values
            for (var columnIndex = 0; columnIndex < columns.length; columnIndex++) {
                var width = ObservableLike.getValue(columns[columnIndex].width);
                widths[columnIndex] = width >= 0 ? width : -((width / proportionalTotal) * 100);
            }
            var header = null;
            // 0 is a valid ScreenSize, so we have strict inequality checking here
            if (showHeader !== false) {
                header = renderHeader ? renderHeader(columns) : react.createElement(TableHeader, { tableColumns: columns });
            }
            if (typeof showHeader === "function") {
                header = react.createElement(ScreenSizeConditional, { condition: function (screenSize) { return showHeader(screenSize); } }, header);
            }
            return (react.createElement(react.Fragment, null,
                react.createElement("colgroup", null,
                    react.createElement("col", { "aria-hidden": "true", key: "col-group-left-spacer", style: { width: spacerWidth === 0 ? spacerWidth + "%" : spacerWidth + "px" } }),
                    getVisibleColumnsAndIndices(columns).map(function (_a) {
                        var column = _a.column, originalIndex = _a.originalIndex;
                        var _b = column.widthStyle, widthStyle = _b === void 0 ? IMeasurementStyle.Pixel : _b;
                        return (react.createElement(Observer, { key: "col-group-" + originalIndex, width: {
                                filter: _this.onColumnsChanged,
                                observableValue: column.width
                            } }, function () { return (react.createElement("col", { style: {
                                width: Math.abs(widths[originalIndex]) +
                                    (widths[originalIndex] < 0 ? "%" : widthStyle === IMeasurementStyle.Pixel ? "px" : "rem")
                            } })); }));
                    }),
                    react.createElement("col", { "aria-hidden": "true", key: "col-group-right-spacer", style: { width: spacerWidth === 0 ? spacerWidth + "%" : spacerWidth + "px" } })),
                header));
        };
        _this.renderLoadingRow = function (rowIndex, details) {
            var _a;
            var _b = _this.props, columns = _b.columns, renderLoadingRow = _b.renderLoadingRow;
            var rowDetails = {
                ariaBusy: true,
                ariaRowOffset: details.ariaRowOffset,
                data: details.data,
                eventDispatch: _this.state.eventDispatch,
                excludeTabStop: (_a = _this.props.excludeTabStop) !== null && _a !== void 0 ? _a : details.excludeTabStop,
                itemProvider: _this.props.itemProvider,
                listProps: details.listProps,
                onFocusItem: details.onFocusItem,
                renderSpacer: _this.props.renderSpacer,
                selection: _this.props.selection,
                singleClickActivation: _this.props.onActivate && _this.props.singleClickActivation
            };
            // If a custom row loading animation is available use it.
            if (renderLoadingRow) {
                return renderLoadingRow(rowIndex, rowDetails);
            }
            return react.createElement(TableLoadingRow, { columns: columns, details: rowDetails, rowIndex: rowIndex });
        };
        _this.renderRow = function (rowIndex, item, details) {
            var _a;
            var rowDetails = {
                selectableText: details.selectableText,
                ariaRowOffset: details.ariaRowOffset,
                eventDispatch: _this.state.eventDispatch,
                data: details.data,
                excludeTabStop: (_a = _this.props.excludeTabStop) !== null && _a !== void 0 ? _a : details.excludeTabStop,
                itemProvider: _this.props.itemProvider,
                listProps: details.listProps,
                onFocusItem: details.onFocusItem,
                renderSpacer: _this.props.renderSpacer,
                selection: _this.props.selection,
                singleClickActivation: _this.props.onActivate && _this.props.singleClickActivation
            };
            // First determine if the item supplied a custom row rendering function, if not
            // attempt to use the global row rendering function.
            var renderRow = item.renderRow || _this.props.renderRow;
            if (renderRow) {
                return renderRow(rowIndex, item, rowDetails);
            }
            // If no custom row renderer is available use the default row renderer.
            return (react.createElement(TableRow, { details: rowDetails, index: rowIndex, linkProps: item.linkProps }, renderColumns(rowIndex, _this.props.columns, item, rowDetails)));
        };
        _this.state = {
            columnBehaviors: [],
            eventDispatch: props.eventDispatch || new EventDispatch(),
            renderInvisible: !!props.tableBreakpoints,
            visibleColumnsKey: "",
            tableBehaviors: [],
            tableWidth: ""
        };
        // Initialize any column behaviors.
        for (var columnIndex = 0; columnIndex < props.columns.length; columnIndex++) {
            var tableColumn = props.columns[columnIndex];
            if (tableColumn.behaviors) {
                for (var _i = 0, _a = tableColumn.behaviors; _i < _a.length; _i++) {
                    var behavior = _a[_i];
                    if (behavior && behavior.initialize) {
                        behavior.initialize({ tableProps: props, columnIndex: columnIndex }, {}, _this.state.eventDispatch);
                    }
                }
            }
        }
        // Initialize the supplied behaviors.
        if (props.behaviors) {
            for (var _b = 0, _c = props.behaviors; _b < _c.length; _b++) {
                var behavior = _c[_b];
                if (behavior.initialize) {
                    behavior.initialize(props, _this, _this.state.eventDispatch);
                }
            }
        }
        return _this;
    }
    Table.getDerivedStateFromProps = function (props, state) {
        var tableBehaviors = [];
        var columnBehaviors = [];
        // Build the set of behaviors columns have attached to them
        for (var columnIndex = 0; columnIndex < props.columns.length; columnIndex++) {
            var tableColumn = props.columns[columnIndex];
            if (tableColumn.behaviors) {
                for (var _i = 0, _a = tableColumn.behaviors; _i < _a.length; _i++) {
                    var behavior = _a[_i];
                    columnBehaviors.push(behavior);
                }
            }
        }
        // Build the set of behaviors the table has attached to it
        if (props.behaviors) {
            tableBehaviors.splice.apply(tableBehaviors, __spreadArrays([tableBehaviors.length, 0], props.behaviors));
        }
        return {
            columnBehaviors: columnBehaviors,
            tableBehaviors: tableBehaviors
        };
    };
    Table.prototype.render = function () {
        var _a = this.state, eventDispatch = _a.eventDispatch, renderInvisible = _a.renderInvisible, visibleColumnsKey = _a.visibleColumnsKey;
        var _b = this.props, selectableText = _b.selectableText, className = _b.className, columns = _b.columns, containerClassName = _b.containerClassName, enforceSingleSelect = _b.enforceSingleSelect, focuszoneProps = _b.focuszoneProps, showLines = _b.showLines, id = _b.id, itemProvider = _b.itemProvider, maxHeight = _b.maxHeight, onActivate = _b.onActivate, onFocus = _b.onFocus, onSelect = _b.onSelect, pageSize = _b.pageSize, role = _b.role, rowHeight = _b.rowHeight, scrollable = _b.scrollable, selection = _b.selection, singleClickActivation = _b.singleClickActivation, selectRowOnClick = _b.selectRowOnClick, tableBreakpoints = _b.tableBreakpoints, virtualize = _b.virtualize;
        var columnWidths = [];
        var spacerWidth = (this.props.spacerWidth || 0) * 2;
        var tableMaxWidth = spacerWidth;
        var tableMinWidth = spacerWidth;
        var tableWidth = spacerWidth;
        var hasBoundedColumn = false;
        var hasUnboundedColumn = false;
        var fill = false;
        var columnCount = 0;
        var columnFillCount = 0;
        // Compute the table size based on the current column definition. Size the sizes
        // are observable, we need to recompute each render to ensure we have the
        // proper values.
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            var maxWidth = column.maxWidth, minWidth = column.minWidth, _c = column.widthStyle, widthStyle = _c === void 0 ? IMeasurementStyle.Pixel : _c;
            var width = ObservableLike.getValue(column.width);
            // Add the column width the set of available columnWidths.
            columnWidths.push(column.width);
            if (width < 0) {
                // This is a variable width columnn so we will fill the container.
                fill = true;
                // Update the min/max width of the table based on the supplied value.
                // We use a minumum width of 100px if one isnt specified.
                tableMinWidth += minWidth ? minWidth : 0;
                // If all variable width columns have a maxWidth, let the table fill the available
                // space, but set the table's max width to the sum of the column widths/maxWidths.
                if (maxWidth) {
                    hasBoundedColumn = true;
                    tableMaxWidth += maxWidth;
                }
                else {
                    // If there are any variable width columns without maxWidth, let the table
                    // fill the available space with no maxWidth.
                    hasUnboundedColumn = true;
                }
                columnCount++;
            }
            else if (width > 0) {
                if (widthStyle === IMeasurementStyle.Pixel) {
                    tableWidth += width;
                    tableMinWidth += width;
                    tableMaxWidth += width;
                }
                else {
                    // @NOTE: For now we are going to estimate a rem = 16px which is the default.
                    //  We could attempt to measure this if an exact measurement is really important.
                    tableWidth += width * 16;
                    tableMinWidth += width * 16;
                    tableMaxWidth += width * 16;
                }
                columnCount++;
            }
            if (column.id === "_fill") {
                columnFillCount++;
            }
        }
        var listProps = {
            selectableText: selectableText,
            ariaColumnCount: columnCount - columnFillCount,
            ariaLabel: this.props.ariaLabel,
            ariaRowOffset: this.props.showHeader ? 1 : 0,
            className: css(className, "bolt-table", showLines && "bolt-table-show-lines"),
            columnCount: columnCount + 2,
            enforceSingleSelect: enforceSingleSelect,
            eventDispatch: eventDispatch,
            focuszoneProps: focuszoneProps,
            id: id,
            itemProvider: itemProvider,
            maxWidth: hasBoundedColumn && !hasUnboundedColumn ? tableMaxWidth + "px" : undefined,
            maxHeight: maxHeight,
            minWidth: tableMinWidth !== tableWidth ? tableMinWidth + "px" : undefined,
            onActivate: onActivate,
            onFocus: onFocus,
            onSelect: onSelect,
            pageSize: pageSize,
            renderHeader: this.renderHeader,
            renderLoadingRow: this.renderLoadingRow,
            renderRow: this.renderRow,
            role: role,
            rowHeight: rowHeight,
            selection: selection,
            selectRowOnClick: selectRowOnClick,
            singleClickActivation: singleClickActivation,
            virtualize: virtualize,
            width: fill ? "100%" : tableWidth + "px"
        };
        var firstActionableHeaderIndex = getActionableIndex(columns);
        if (firstActionableHeaderIndex >= 0) {
            // If the header is tabbable, the rows do not need to be since they are
            // in the focus zone.
            listProps.defaultTabbableRow = -1;
        }
        var table = (react.createElement("div", { className: css(containerClassName, "bolt-table-container flex-grow", renderInvisible && "invisible", scrollable && "v-scroll-auto", tableBreakpoints && "h-scroll-hidden") },
            tableBreakpoints ? (react.createElement(TableBreakpoint, { columnWidths: columnWidths, onBreakpoint: this.onBreakpoint, breakpoints: tableBreakpoints })) : undefined,
            react.createElement(List, __assign({}, listProps, { key: visibleColumnsKey, ref: this.list }))));
        if (scrollable) {
            table = react.createElement(Intersection, null, table);
        }
        return table;
    };
    Table.prototype.componentDidMount = function () {
        // Mount any of the attached tableBehaviors.
        for (var _i = 0, _a = this.state.tableBehaviors; _i < _a.length; _i++) {
            var behavior = _a[_i];
            if (behavior.componentDidMount) {
                behavior.componentDidMount(this.props);
            }
        }
        for (var _b = 0, _c = this.state.columnBehaviors; _b < _c.length; _b++) {
            var behavior = _c[_b];
            if (behavior.componentDidMount) {
                behavior.componentDidMount({ tableProps: this.props });
            }
        }
    };
    Table.prototype.componentDidUpdate = function () {
        // Update any of the attached tableBehaviors.
        for (var _i = 0, _a = this.state.tableBehaviors; _i < _a.length; _i++) {
            var behavior = _a[_i];
            if (behavior.componentDidUpdate) {
                behavior.componentDidUpdate(this.props);
            }
        }
        for (var _b = 0, _c = this.state.columnBehaviors; _b < _c.length; _b++) {
            var behavior = _c[_b];
            if (behavior.componentDidUpdate) {
                behavior.componentDidUpdate({ tableProps: this.props });
            }
        }
    };
    Table.prototype.componentWillUnmount = function () {
        // Unmount any of the attached tableBehaviors.
        for (var _i = 0, _a = this.state.tableBehaviors; _i < _a.length; _i++) {
            var behavior = _a[_i];
            if (behavior.componentWillUnmount) {
                behavior.componentWillUnmount();
            }
        }
        for (var _b = 0, _c = this.state.columnBehaviors; _b < _c.length; _b++) {
            var behavior = _c[_b];
            if (behavior.componentDidUpdate) {
                behavior.componentDidUpdate({ tableProps: this.props });
            }
        }
    };
    Table.prototype.addOverlay = function (id, rowIndex, render, zIndex) {
        if (zIndex === void 0) { zIndex = 0; }
        if (this.list.current) {
            return this.list.current.addOverlay(id, rowIndex, render, zIndex);
        }
    };
    Table.prototype.removeOverlay = function (id) {
        if (this.list.current) {
            return this.list.current.removeOverlay(id);
        }
    };
    Table.prototype.focusRow = function (rowIndex, direction) {
        if (direction === void 0) { direction = 1; }
        if (this.list.current) {
            return this.list.current.focusRow(rowIndex, direction);
        }
        else {
            return Promise.resolve();
        }
    };
    Table.prototype.getFocusIndex = function () {
        if (this.list.current) {
            return this.list.current.getFocusIndex();
        }
        return -1;
    };
    Table.prototype.getStats = function () {
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
    Table.prototype.scrollIntoView = function (rowIndex, options) {
        if (this.list.current) {
            return this.list.current.scrollIntoView(rowIndex, options);
        }
    };
    Table.defaultProps = {
        role: "grid",
        selectRowOnClick: true,
        showHeader: true,
        showLines: true,
        singleClickActivation: true,
        spacerWidth: 8
    };
    return Table;
}(react.Component));
function renderColumns(rowIndex, columns, item, details) {
    return getVisibleColumnsAndIndices(columns).map(function (_a, columnIndex) {
        var column = _a.column;
        return column.renderCell(rowIndex, columnIndex, column, item, rowIndex + (details.ariaRowOffset ? details.ariaRowOffset : 1));
    });
}
function getVisibleColumnsAndIndices(columns) {
    return columns.map(function (column, index) { return ({ column: column, originalIndex: index }); }).filter(function (_a) {
        var column = _a.column;
        return ObservableLike.getValue(column.width);
    });
}
function getActionableIndex(columns) {
    return columns.findIndex(function (column) { return ObservableLike.getValue(column.width) !== 0 && ((column.behaviors && column.behaviors.length > 0) || !!column.sortProps); });
}
var TableHeader = /** @class */ (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableHeader.prototype.render = function () {
        var _this = this;
        var firstActionableIndex = getActionableIndex(this.props.tableColumns);
        return (react.createElement(FocusZoneContext.Consumer, null, function (rowContext) {
            return (react.createElement(FocusZone, { direction: FocusZoneDirection.Horizontal },
                react.createElement("thead", null,
                    react.createElement(FocusWithin, null, function (focusStatus) {
                        return (react.createElement("tr", { "aria-rowindex": 1, className: css("bolt-table-header-row", focusStatus.hasFocus && "focused"), "data-row-index": -1, onBlur: focusStatus.onBlur, onFocus: focusStatus.onFocus },
                            react.createElement("th", { "aria-hidden": "true", key: "left-spacer", role: "presentation", className: "bolt-table-header-border" }),
                            getVisibleColumnsAndIndices(_this.props.tableColumns).map(function (_a, columnIndex) {
                                var column = _a.column, originalIndex = _a.originalIndex;
                                if (column.renderHeaderCell) {
                                    return column.renderHeaderCell(columnIndex, column, rowContext.focuszoneId, originalIndex === firstActionableIndex);
                                }
                                else if (column.iconProps || column.name) {
                                    return (react.createElement(TableHeaderCell, { key: "col-header-" + columnIndex, column: column, columnIndex: columnIndex, focuszoneId: rowContext.focuszoneId, isFirstActionableHeader: originalIndex === firstActionableIndex },
                                        react.createElement(Tooltip, { overflowOnly: true, text: column.name },
                                            react.createElement("div", { className: "bolt-table-header-cell-text text-ellipsis body-s" },
                                                column.iconProps && Icon(column.iconProps),
                                                react.createElement("span", null, column.name)))));
                                }
                                else {
                                    return (react.createElement("th", { "aria-colindex": columnIndex + 1, "aria-label": column.ariaLabel || EmptyColumnHeaderLabel, "aria-readonly": "true", className: "bolt-table-header-border", key: "col-header-" + columnIndex }));
                                }
                            }),
                            react.createElement("th", { "aria-hidden": "true", key: "right-spacer", role: "presentation", className: "bolt-table-header-border" })));
                    }))));
        }));
    };
    return TableHeader;
}(react.Component));
var boltTableHeaderCellCount = 0;
var TableHeaderCell = /** @class */ (function (_super) {
    __extends(TableHeaderCell, _super);
    function TableHeaderCell(props) {
        var _this = _super.call(this, props) || this;
        _this.element = react.createRef();
        _this.state = { measuredWidth: 0 };
        _this.onSize = function (event, updatedSize) {
            var column = _this.props.column;
            // Ensure we havent had our column definition updated and onSize removed.
            if (column.onSize) {
                column.onSize(event, _this.props.columnIndex, updatedSize, column);
            }
        };
        _this.headerCellId = boltTableHeaderCellCount++;
        return _this;
    }
    TableHeaderCell.prototype.render = function () {
        var _this = this;
        var _a = this.props, column = _a.column, columnIndex = _a.columnIndex, focuszoneId = _a.focuszoneId, isFirstActionableHeader = _a.isFirstActionableHeader;
        var sizer;
        if (column.onSize) {
            sizer = (react.createElement(Observer, { width: column.width }, function (props) {
                // If we are sizable we will either use the supplied width (desired), or the
                // measured width if we are a proportional column.
                var width = props.width;
                if (width < 0) {
                    width = _this.state.measuredWidth;
                }
                return (react.createElement(Sizer, { ariaLabel: format(ColumnSizerLabel, column.name), className: "bolt-table-header-sizer", divider: false, maxSize: column.maxWidth, minSize: column.minWidth, onSize: _this.onSize, onSizeEnd: _this.props.column.onSizeEnd, orientation: Orientation.row, position: Position.near, size: width, tabIndex: 0 }));
            }));
        }
        return (react.createElement(FocusZoneContext.Consumer, null, function (cellContext) {
            var actionable = (column.behaviors && column.behaviors.length > 0) || !!column.sortProps;
            var _a = column.sortProps, sortProps = _a === void 0 ? {} : _a;
            var sortIcon = column.sortProps && sortProps.sortOrder !== undefined
                ? Icon({
                    className: "bolt-table-header-sort-icon body-s",
                    iconName: sortProps.sortOrder === SortOrder.ascending ? "SortUp" : "SortDown"
                })
                : null;
            var justificationClassName;
            if (column.justification === ColumnJustification.Left) {
                justificationClassName = "justify-start";
            }
            else if (column.justification === ColumnJustification.Right) {
                justificationClassName = "justify-end";
            }
            var colIndex = columnIndex + 1;
            var childId = getSafeId("th-col-content-" + _this.headerCellId);
            return (react.createElement("th", { "aria-colindex": colIndex, "aria-labelledby": childId, "aria-readonly": "true", "aria-sort": sortProps.sortOrder !== undefined
                    ? sortProps.sortOrder === SortOrder.ascending
                        ? "ascending"
                        : "descending"
                    : undefined, className: css(column.headerClassName, "bolt-table-header-cell", "col-header-" + columnIndex, actionable && "bolt-table-header-cell-actionable"), "data-column-index": columnIndex, "data-focuszone": actionable && css(isFirstActionableHeader && focuszoneId, cellContext.focuszoneId), ref: _this.element, tabIndex: actionable ? (isFirstActionableHeader ? 0 : -1) : -1 },
                react.createElement("div", { className: css("bolt-table-header-cell-content flex-row", justificationClassName) },
                    sizer,
                    column.justification === ColumnJustification.Right && sortIcon,
                    react.createElement("div", { id: childId, className: "scroll-hidden" }, _this.props.children),
                    column.justification !== ColumnJustification.Right && sortIcon)));
        }));
    };
    TableHeaderCell.prototype.componentDidMount = function () {
        this.updateMeasuredWidth();
    };
    TableHeaderCell.prototype.componentDidUpdate = function () {
        this.updateMeasuredWidth();
    };
    TableHeaderCell.prototype.updateMeasuredWidth = function () {
        var column = this.props.column;
        if (column.onSize && this.element.current && ObservableLike.getValue(column.width) < 0) {
            var measuredWidth = this.element.current.getBoundingClientRect().width;
            if (measuredWidth !== this.state.measuredWidth) {
                this.setState({ measuredWidth: measuredWidth });
            }
        }
    };
    return TableHeaderCell;
}(react.Component));
function TableRow(props) {
    var onFocus = function (event) {
        var _a;
        props.details.onFocusItem(props.index, event);
        var rowNumber = (_a = props.details.ariaPosInSet) !== null && _a !== void 0 ? _a : props.index + ariaRowOffset;
        if (props.details.ariaSetSize) {
            if (props.linkProps) {
                announce(format(ClickableRowAnnouncementWithSize, rowNumber), true);
            }
            else {
                announce(format(RowAnnouncementWithSize, rowNumber, props.details.ariaSetSize), true);
            }
        }
        else {
            if (props.linkProps) {
                announce(format(ClickableRowAnnouncement, rowNumber), true);
            }
            else {
                announce(format(RowAnnouncement, rowNumber), true);
            }
        }
    };
    var postprocessKeyStroke = function (event) {
        if (!event.defaultPrevented) {
            if (event.which === KeyCode.leftArrow && rowElement.current) {
                rowElement.current.focus();
                event.preventDefault();
            }
        }
        return FocusZoneKeyStroke.IgnoreNone;
    };
    var rowElement = react.useState(function () { return react.createRef(); })[0];
    var details = props.details, index = props.index, linkProps = props.linkProps;
    var selectableText = details.selectableText, ariaLabel = details.ariaLabel, ariaBusy = details.ariaBusy, ariaDescribedBy = details.ariaDescribedBy, ariaPosInSet = details.ariaPosInSet, ariaRowOffset = details.ariaRowOffset, ariaSetSize = details.ariaSetSize, excludeFocusZone = details.excludeFocusZone, id = details.id, renderSpacer = details.renderSpacer, role = details.role, selection = details.selection, singleClickActivation = details.singleClickActivation;
    var ariaChecked;
    var ariaSelected;
    if (role === "menuitemcheckbox") {
        ariaChecked = selection && selection.selected(index);
    }
    else {
        ariaSelected = selection && selection.selected(index);
    }
    var rowElem = (react.createElement(FocusOrMouseWithin, { onFocus: onFocus }, function (focusOrMouseWithinStatus) {
        return (react.createElement(FocusZoneContext.Consumer, null, function (rowContext) {
            var rowProps = {
                "aria-busy": ariaBusy,
                "aria-checked": ariaChecked,
                "aria-describedby": ariaDescribedBy,
                "aria-label": ariaLabel,
                "aria-rowindex": role === "menuitemcheckbox" || role === "option" ? undefined : index + ariaRowOffset,
                "aria-posinset": ariaPosInSet === null ? undefined : ariaPosInSet,
                "aria-selected": ariaSelected,
                "aria-setsize": ariaSetSize === null ? undefined : ariaSetSize,
                className: css(props.className, "bolt-table-row bolt-list-row", index === 0 && "first-row", focusOrMouseWithinStatus.hasFocus && "focused", selection && selection.selected(index) && "selected", singleClickActivation && "single-click-activation", linkProps && "v-align-middle", selectableText && "selectable-text"),
                "data-focuszone": excludeFocusZone || (selection && !selection.selectable(index)) ? undefined : rowContext.focuszoneId,
                "data-row-index": props.index,
                id: getSafeId(id),
                role: role || "row",
                tabIndex: getTabIndex(details),
                onBlur: focusOrMouseWithinStatus.onBlur,
                onFocus: focusOrMouseWithinStatus.onFocus,
                onMouseEnter: focusOrMouseWithinStatus.onMouseEnter,
                onMouseLeave: focusOrMouseWithinStatus.onMouseLeave,
                ref: rowElement
            };
            var rowChildren = [
                react.createElement("td", { "aria-hidden": "true", key: "left-spacer", className: "bolt-table-cell-compact bolt-table-cell bolt-list-cell bolt-table-spacer-cell", role: "presentation" }, renderSpacer && renderSpacer(index, true)),
                props.children,
                react.createElement("td", { "aria-hidden": "true", key: "right-spacer", className: "bolt-table-cell-compact bolt-table-cell bolt-list-cell bolt-table-spacer-cell", role: "presentation" }, renderSpacer && renderSpacer(index, false))
            ];
            return (react.createElement(FocusZone, { direction: FocusZoneDirection.Horizontal, postprocessKeyStroke: postprocessKeyStroke }, linkProps ? (react.createElement("a", __assign({}, getDefaultLinkProps(linkProps), rowProps), rowChildren)) : (react.createElement("tr", __assign({}, rowProps), rowChildren))));
        }));
    }));
    if (details.tooltipProps) {
        return react.createElement(Tooltip, __assign({}, details.tooltipProps), rowElem);
    }
    return rowElem;
}
function TableLoadingRow(props) {
    return (
    // Return the default row loading animation.
    react.createElement(TableRow, { className: "bolt-list-row-loading", details: props.details, index: props.rowIndex }, getVisibleColumnsAndIndices(props.columns).map(function (_a, columnIndex) {
        var column = _a.column;
        return SimpleTableCell({ columnIndex: columnIndex, children: renderLoadingCell(column.columnLayout) });
    })));
}
function TableCell(props) {
    var ariaLabel = props.ariaLabel, ariaRowIndex = props.ariaRowIndex, className = props.className, colspan = props.colspan, columnIndex = props.columnIndex, tableColumn = props.tableColumn;
    var justificationClassName;
    if (tableColumn) {
        if (tableColumn.justification === ColumnJustification.Left) {
            justificationClassName = "justify-cell-start";
        }
        else if (tableColumn.justification === ColumnJustification.Right) {
            justificationClassName = "justify-cell-end";
        }
    }
    return (react.createElement("td", { "aria-colindex": columnIndex + 1, "aria-label": ariaLabel, "aria-readonly": tableColumn && tableColumn.readonly, "aria-rowindex": ariaRowIndex, className: css(className, tableColumn && tableColumn.className, "bolt-table-cell bolt-list-cell", justificationClassName), colSpan: colspan, "data-column-index": columnIndex, key: "col-" + columnIndex, role: "gridcell" }, props.children));
}
function SimpleTableCell(props) {
    var children = react.createElement("div", { className: css(props.contentClassName, "bolt-table-cell-content flex-row flex-center") }, props.children);
    return TableCell({
        ariaLabel: props.ariaLabel,
        ariaRowIndex: props.ariaRowIndex,
        children: children,
        className: props.className,
        colspan: props.colspan,
        columnIndex: props.columnIndex,
        tableColumn: props.tableColumn
    });
}
function renderEmptyCell(rowIndex, columnIndex) {
    return react.createElement(TableCell, { columnIndex: columnIndex, key: columnIndex });
}
function getVariableLength() {
    return Math.random() * 80 + 20 + "%";
}
function renderLoadingCell(columnLayout) {
    if (columnLayout === TableColumnLayout.singleLine || columnLayout === undefined) {
        return (react.createElement("div", { className: "shimmer shimmer-line", style: { width: getVariableLength() } }, "\u00A0"));
    }
    else if (columnLayout === TableColumnLayout.singleLinePrefix) {
        return (react.createElement(react.Fragment, null,
            react.createElement("div", { className: "shimmer shimmer-circle-small flex-noshrink" }),
            react.createElement("div", { className: "shimmer shimmer-line", style: { width: getVariableLength() } }, "\u00A0")));
    }
    else if (columnLayout === TableColumnLayout.twoLine) {
        return (react.createElement("div", { className: "flex-column flex-grow" },
            react.createElement("div", { className: "bolt-table-two-line-cell-item shimmer shimmer-line", style: { width: getVariableLength() } }, "\u00A0"),
            react.createElement("div", { className: "bolt-table-two-line-cell-item shimmer shimmer-line", style: { width: getVariableLength() } }, "\u00A0")));
    }
    else if (columnLayout === TableColumnLayout.twoLinePrefix) {
        return (react.createElement(react.Fragment, null,
            react.createElement("div", { className: "shimmer shimmer-circle-large flex-noshrink" }),
            react.createElement("div", { className: "flex-column flex-grow" },
                react.createElement("div", { className: "bolt-table-two-line-cell-item shimmer shimmer-line", style: { width: getVariableLength() } }, "\u00A0"),
                react.createElement("div", { className: "bolt-table-two-line-cell-item shimmer shimmer-line", style: { width: getVariableLength() } }, "\u00A0"))));
    }
    return null;
}

var ListBoxItemType;
(function (ListBoxItemType) {
    ListBoxItemType[ListBoxItemType["Row"] = 1] = "Row";
    ListBoxItemType[ListBoxItemType["Header"] = 2] = "Header";
    ListBoxItemType[ListBoxItemType["Divider"] = 3] = "Divider";
    ListBoxItemType[ListBoxItemType["Loading"] = 4] = "Loading";
})(ListBoxItemType || (ListBoxItemType = {}));

var DefaultListBoxWidth = -100;
var ListBox = /** @class */ (function (_super) {
    __extends(ListBox, _super);
    function ListBox(props) {
        var _this = _super.call(this, props) || this;
        _this.tabbableIndex = -1;
        _this.positions = [];
        _this.count = 0;
        _this.table = react.createRef();
        _this.getItemWidth = function () {
            var width = _this.props.width;
            return _this.multiSelect && width && width > 0
                ? width - 40 /* TODO: Remove this, 40 is only correct with default font-size */
                : width;
        };
        _this.loadingChanged = function () {
            if (ObservableLike.getValue(_this.props.loading)) {
                announce(AnnounceLoadingItems);
            }
            else {
                announce(AnnounceFinishedLoadingItems);
                var itemCount = _this.props.items.length;
                announce(format(itemCount > 0 ? format(AnnounceItemCount, itemCount) : NoFilterResults), true);
            }
            return true;
        };
        _this.searchingChanged = function () {
            if (ObservableLike.getValue(_this.props.searching)) {
                announce(Searching);
            }
            else if (ObservableLike.getValue(_this.props.searching) === false) {
                var resultCount = _this.props.items.length;
                announce(resultCount > 0 ? format(AnnounceFilterResultCount, resultCount) : NoFilterResults, true);
            }
            return true;
        };
        _this.onItemsChanged = function () {
            var items = getListBoxItemsValue(_this.wrappedItems || _this.props.items);
            _this.tabbableIndex = -1;
            _this.positions = [];
            _this.count = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var itemValue = ObservableLike.getValue(item);
                if (itemValue && !listBoxItemSelectable(itemValue)) {
                    _this.positions.push(-1);
                }
                else {
                    if (_this.tabbableIndex === -1 && _this.selection.selectable(_this.positions.length)) {
                        _this.tabbableIndex = _this.positions.length;
                    }
                    _this.positions.push(++_this.count);
                }
            }
            return true;
        };
        _this.onActivate = function (event, tableRow) {
            if (_this.props.onActivate) {
                _this.props.onActivate(event, tableRow.data);
            }
        };
        _this.onSelect = function (event, tableRow) {
            if (_this.props.onSelect) {
                _this.props.onSelect(event, tableRow.data);
            }
        };
        _this.renderListBoxRow = function (index, item, details) {
            var _a = _this.props, excludeFocusZone = _a.excludeFocusZone, excludeTabStop = _a.excludeTabStop;
            var items = getListBoxItemsValue(_this.wrappedItems || _this.props.items);
            var ariaDescribedBy = index > 0 && items[index - 1].type === ListBoxItemType.Header ? "header-" + items[index - 1].id : details.ariaDescribedBy;
            var focusable = !excludeFocusZone && _this.selection.selectable(index);
            var rowDetails = __assign(__assign({ tooltipProps: { text: item.text, overflowOnly: true, overflowDetected: overflowDetected } }, details), { ariaDescribedBy: ariaDescribedBy, ariaPosInSet: _this.positions[index] >= 0 ? _this.positions[index] : null, ariaSetSize: _this.positions[index] >= 0 ? _this.count : null, excludeTabStop: excludeTabStop || _this.tabbableIndex !== index, excludeFocusZone: !focusable, id: item.id, singleClickActivation: false, role: item.type === ListBoxItemType.Header || item.type === ListBoxItemType.Divider ? "row" : "option" });
            return (react.createElement(Observer, { key: item.id || index, item: item }, function () { return (react.createElement(TableRow, { key: item.id || index, index: index, details: rowDetails, className: css("bolt-list-box-row", item.type === ListBoxItemType.Header && "bolt-list-box-header-row", item.type === ListBoxItemType.Divider && "bolt-list-box-divider-row", item.type === ListBoxItemType.Loading && "bolt-list-box-loading-row", _this.multiSelect && "bolt-list-box-multi-select-row", item.type !== ListBoxItemType.Header && item.type !== ListBoxItemType.Divider && "cursor-pointer", item.disabled && "bolt-list-box-item-disabled") }, _this.columns.map(function (tableColumn, columnIndex) {
                if (_this.multiSelect && columnIndex === 0) {
                    if (item.type === ListBoxItemType.Divider || item.type === ListBoxItemType.Loading) {
                        return null;
                    }
                    else if (item.type === ListBoxItemType.Header) {
                        return renderEmptyCell(index, columnIndex);
                    }
                }
                return tableColumn.renderCell(index, columnIndex, tableColumn, item);
            }))); }));
        };
        _this.renderListBoxCell = function (rowIndex, columnIndex, tableColumn, tableItem) {
            return renderListBoxCell(rowIndex, columnIndex, tableColumn, tableItem, _this.multiSelect);
        };
        var _a = _this.props, selection = _a.selection, renderItem = _a.renderItem, items = _a.items;
        _this.selection = selection || new DropdownSelection();
        _this.columns = [];
        _this.multiSelect = _this.props.enforceSingleSelect ? false : _this.selection.multiSelect;
        if (_this.multiSelect && _this.props.showChecksColumn !== false) {
            _this.columns.push(new ColumnSelect());
        }
        else if (!_this.multiSelect && _this.props.showChecksColumn === true) {
            _this.columns.push({
                id: "column-check",
                width: 24,
                renderCell: function (rowIndex, columnIndex) { return (react.createElement(SimpleTableCell, { columnIndex: columnIndex, key: "column-check" },
                    react.createElement(Icon, { className: css(!_this.selection.selected(rowIndex) && "invisible"), iconName: "CheckMark" }))); },
                readonly: true
            });
        }
        _this.columns.push({
            id: "text",
            width: _this.getItemWidth(),
            renderCell: renderItem || _this.renderListBoxCell,
            className: css("bolt-list-box-text", _this.multiSelect ? "bolt-list-box-text-multi-select" : "bolt-list-box-text-single-select"),
            readonly: true
        });
        // string items are wrapped once here.  Only use a string array in the simple case where the items are not changing.
        _this.wrappedItems = wrapListBoxItems(items);
        _this.onItemsChanged();
        return _this;
    }
    ListBox.prototype.componentDidUpdate = function () {
        if (this.props.didUpdate) {
            this.props.didUpdate();
        }
    };
    ListBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, ariaLabel = _a.ariaLabel, className = _a.className, containerClassName = _a.containerClassName, enforceSingleSelect = _a.enforceSingleSelect, focuszoneProps = _a.focuszoneProps, getUnselectableRanges = _a.getUnselectableRanges, items = _a.items, loading = _a.loading, searching = _a.searching, searchResultsLoadingText = _a.searchResultsLoadingText, showItemsWhileSearching = _a.showItemsWhileSearching, width = _a.width;
        var itemsObservable = { observableValue: items, filter: this.onItemsChanged };
        var itemProvider = this.wrappedItems
            ? new ArrayItemProvider(this.wrappedItems)
            : Array.isArray(items)
                ? new ArrayItemProvider(items)
                : items;
        this.columns[this.columns.length - 1].width = this.getItemWidth();
        return (react.createElement(ItemsObserver, { getUnselectableRanges: getUnselectableRanges, items: items, selection: this.selection },
            react.createElement(Observer, { items: itemsObservable, loading: { observableValue: loading || false, filter: this.loadingChanged }, searching: { observableValue: searching || false, filter: this.searchingChanged } }, function (props) {
                if (props.searching && !showItemsWhileSearching) {
                    return (react.createElement("div", { className: "bolt-list-box-loading", style: { width: width } },
                        react.createElement(Spinner, { size: SpinnerSize.medium, label: searchResultsLoadingText || Searching })));
                }
                return (react.createElement(Table, { ariaLabel: ariaLabel || ListboxAriaLabel, className: css(className, "bolt-list-box"), columns: _this.columns, containerClassName: containerClassName, enforceSingleSelect: enforceSingleSelect, focuszoneProps: focuszoneProps, itemProvider: itemProvider, onActivate: _this.onActivate, onSelect: _this.onSelect, renderRow: _this.renderListBoxRow, ref: _this.table, role: "listbox", scrollable: true, singleClickActivation: false, selection: _this.selection, showHeader: false, showLines: false, spacerWidth: 0 }));
            })));
    };
    ListBox.prototype.scrollIntoView = function (rowIndex, options) {
        if (this.table.current) {
            return this.table.current.scrollIntoView(rowIndex, options);
        }
    };
    ListBox.defaultProps = {
        getUnselectableRanges: getUnselectableRanges,
        width: DefaultListBoxWidth
    };
    return ListBox;
}(react.Component));
function renderListBoxCell(rowIndex, columnIndex, tableColumn, tableItem, multiSelect) {
    if (tableItem.render) {
        return tableItem.render(rowIndex, columnIndex, tableColumn, tableItem);
    }
    if (tableItem.type === ListBoxItemType.Divider) {
        return (react.createElement(SimpleTableCell, { className: css(tableColumn.className, tableItem.className, multiSelect && "bolt-list-box-divider-multi-select"), columnIndex: columnIndex, colspan: multiSelect ? 2 : 1, key: tableItem.id, tableColumn: tableColumn },
            react.createElement("div", { className: "bolt-list-box-divider flex-grow" })));
    }
    else if (tableItem.type === ListBoxItemType.Loading) {
        return react.createElement(LoadingCell, { columnIndex: columnIndex, key: tableItem.id, tableColumn: tableColumn, tableItem: tableItem });
    }
    return (react.createElement(SimpleTableCell, { className: css(tableColumn.className, tableItem.className, tableItem.type === ListBoxItemType.Header && "bolt-list-box-header"), columnIndex: columnIndex, key: tableItem.id, tableColumn: tableColumn },
        react.createElement("div", { id: tableItem.type === ListBoxItemType.Header ? "header-" + tableItem.id : undefined, "aria-label": tableItem.type === ListBoxItemType.Header ? format(HeaderAriaLabel, tableItem.text) : undefined, className: "bolt-list-box-cell-container" }, tableItem && renderListCell(tableItem, false))));
}
function overflowDetected(anchorElement) {
    var overflowElement = anchorElement.querySelector(".text-ellipsis");
    if (overflowElement) {
        return overflowElement.scrollWidth > Math.ceil(overflowElement.offsetWidth);
    }
    return false;
}
/**
 * Retrieve a list of unselectable ranges based on a itemSelectable function.
 * @param items the set of items
 * @param itemSelectable A function that returns false when an items is not selectable.
 *        Defaults to checking that the item type is not header or divider.
 */
function getUnselectableRanges(items, itemSelectable) {
    if (itemSelectable === void 0) { itemSelectable = listBoxItemSelectable; }
    var ranges = [];
    var beginIndex = -1;
    for (var index = 0; index < items.length; index++) {
        if (!itemSelectable(items[index]) && beginIndex < 0) {
            beginIndex = index;
        }
        else if (itemSelectable(items[index]) && beginIndex >= 0) {
            ranges.push({ beginIndex: beginIndex, endIndex: index - 1 });
            beginIndex = -1;
        }
    }
    if (beginIndex >= 0) {
        ranges.push({ beginIndex: beginIndex, endIndex: items.length - 1 });
    }
    return ranges;
}
/**
 * Return whether a ListBoxItem can be selected or not.
 * @param item the ListBoxItem to evaluate
 */
function listBoxItemSelectable(item) {
    return item.type !== ListBoxItemType.Header && item.type !== ListBoxItemType.Divider && item.type !== ListBoxItemType.Loading && !item.disabled;
}
/**
 * When items is a string[], wrap each item in a ListBoxItem.  Otherwise, do nothing.
 * @param items the items prop
 */
function wrapListBoxItems(items) {
    if (Array.isArray(items) && items.length && typeof items[0] === "string") {
        return items.map(function (item) {
            return { id: item, text: item };
        });
    }
}
/**
 * Helper to get the value of the items prop.  If items is a string[], it should first be wrapped using wrapListBoxItems.
 * If it's an itemProvider, .value will be called on the provider.
 * @param items the items prop.  If items was provided as a string[], it should first be wrapped using wrapListBoxItems.
 */
function getListBoxItemsValue(items) {
    return getItemsValue(items);
}
var LoadingCell = /** @class */ (function (_super) {
    __extends(LoadingCell, _super);
    function LoadingCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingCell.prototype.componentDidMount = function () {
        if (this.props.onMount) {
            this.props.onMount();
        }
    };
    LoadingCell.prototype.render = function () {
        var _a = this.props, columnIndex = _a.columnIndex, tableColumn = _a.tableColumn, tableItem = _a.tableItem;
        return (react.createElement(SimpleTableCell, { className: css(tableColumn.className, tableItem.className), columnIndex: columnIndex, colspan: 2, contentClassName: "justify-center", key: columnIndex, tableColumn: tableColumn },
            react.createElement("div", { className: "bolt-list-box-loading" },
                react.createElement(Spinner, { size: SpinnerSize.medium, label: Loading }))));
    };
    return LoadingCell;
}(react.Component));

var ItemsForFilter = 10;
var DefaultWidth = 256;
// This should match the total horizontal padding on bolt-dropdown-filter-container
var FilterBarPadding = 16;
// This should match the width + margin of the textfield search icon
var FilterBarIconWidth = 27;
function DropdownCallout(props) {
    return react.createElement(DropdownCalloutComponent, __assign({}, props));
}
var DropdownCalloutComponent = /** @class */ (function (_super) {
    __extends(DropdownCalloutComponent, _super);
    function DropdownCalloutComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.callout = react.createRef();
        _this.calloutContent = react.createRef();
        _this.filterBox = react.createRef();
        _this.initFocusElement = react.createRef();
        _this.updateLayout = function () {
            // Allow the new items to draw before updating the layout.
            setTimeout(function () {
                if (_this.callout.current) {
                    _this.callout.current.updateLayout();
                }
            }, 0);
            return true;
        };
        _this.onMouseDown = function (event) {
            if (_this.props.ignoreMouseDown) {
                if (event.target.tagName !== "INPUT") {
                    preventDefault(event);
                }
            }
        };
        _this.listBoxDidUpdate = function () {
            _this.getScrollWidth();
        };
        _this.getScrollWidth = function () {
            window.requestAnimationFrame(function () {
                if (_this.calloutContent.current) {
                    var widthChange = _this.calloutContent.current.offsetWidth - _this.props.width;
                    // A 1 pixel change in the width may change the total width by 2 pixels if there are two scroll bars.
                    // Only rerender when a scrollbar is appearing or being removed which should be > 1 pixel change.
                    if (Math.abs(widthChange) > 1) {
                        _this.setState({ scrollBarWidth: widthChange + _this.state.scrollBarWidth });
                    }
                }
            });
        };
        _this.state = { scrollBarWidth: 0 };
        return _this;
    }
    DropdownCalloutComponent.prototype.componentDidMount = function () {
        this.getScrollWidth();
    };
    DropdownCalloutComponent.prototype.focus = function () {
        if (this.filterBox.current) {
            this.filterBox.current.focus();
        }
        else if (this.initFocusElement.current) {
            this.initFocusElement.current.focus();
        }
    };
    DropdownCalloutComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, actions = _a.actions, anchorElement = _a.anchorElement, anchorOffset = _a.anchorOffset, anchorOrigin = _a.anchorOrigin, anchorPoint = _a.anchorPoint, ariaLabel = _a.ariaLabel, _b = _a.blurDismiss, blurDismiss = _b === void 0 ? true : _b, calloutContentClassName = _a.calloutContentClassName, containerClassName = _a.containerClassName, contentLocation = _a.contentLocation, dropdownOrigin = _a.dropdownOrigin, enforceSingleSelect = _a.enforceSingleSelect, excludeFocusZone = _a.excludeFocusZone, excludeTabStop = _a.excludeTabStop, filteredItems = _a.filteredItems, filteredNoResultsText = _a.filteredNoResultsText, filteredResultsLoadingText = _a.filteredResultsLoadingText, filterPlaceholderText = _a.filterPlaceholderText, filterText = _a.filterText, focusOnMount = _a.focusOnMount, getUnselectableRanges = _a.getUnselectableRanges, id = _a.id, items = _a.items, lightDismiss = _a.lightDismiss, listBoxClassName = _a.listBoxClassName, listBoxRef = _a.listBoxRef, loading = _a.loading, onActivate = _a.onActivate, onFilterKeyDown = _a.onFilterKeyDown, onFilterTextChanged = _a.onFilterTextChanged, onSelect = _a.onSelect, renderBeforeContent = _a.renderBeforeContent, renderItem = _a.renderItem, searching = _a.searching, selection = _a.selection, showCloseButton = _a.showCloseButton, showFilterBox = _a.showFilterBox, showItemsWhileSearching = _a.showItemsWhileSearching, title = _a.title, updateFilteredItems = _a.updateFilteredItems, userFilteredItems = _a.userFilteredItems;
        var _c = this.props.width, width = _c === void 0 ? DefaultWidth : _c;
        if (width > 0) {
            width -= this.state.scrollBarWidth;
        }
        var textFieldId = "bolt-dropdown-textfield-" + id;
        var clearInput = function () {
            filterText.value = "";
            if (onFilterTextChanged) {
                onFilterTextChanged(null, "");
            }
            if (updateFilteredItems) {
                updateFilteredItems();
            }
        };
        var onDismiss = function () {
            if (_this.props.onDismiss) {
                _this.props.onDismiss();
            }
            clearInput();
        };
        return (react.createElement(Callout, { anchorElement: anchorElement, anchorOffset: anchorOffset, anchorOrigin: anchorOrigin, anchorPoint: anchorPoint, blurDismiss: blurDismiss, calloutOrigin: dropdownOrigin, contentClassName: css(calloutContentClassName, "bolt-dropdown flex-column custom-scrollbar v-scroll-auto h-scroll-hidden"), contentLocation: contentLocation, contentRef: this.calloutContent, contentShadow: true, contentSize: ContentSize.Auto, escDismiss: true, id: id, lightDismiss: lightDismiss, focuszoneProps: {
                postprocessKeyStroke: function (event) {
                    // dismiss the callout on tab key instead of letting the
                    // browser handle the tab key, since with React.portals it
                    // will move to the body, instead of the next tabbable element after
                    // the dropdown.
                    if (event.which === KeyCode.tab && !event.defaultPrevented) {
                        event.preventDefault();
                        onDismiss();
                        return FocusZoneKeyStroke.IgnoreAll;
                    }
                    return FocusZoneKeyStroke.IgnoreNone;
                }
            }, onDismiss: onDismiss, ref: this.callout },
            react.createElement(FocusZone, { circularNavigation: true, defaultActiveElement: showFilterBox || (showFilterBox === undefined && items.length > ItemsForFilter)
                    ? getSafeIdSelector(textFieldId)
                    : ".bolt-dropdown-init-focus", direction: FocusZoneDirection.Vertical, focusOnMount: focusOnMount !== undefined ? focusOnMount : true },
                react.createElement("div", { className: "bolt-dropdown-container no-outline", onMouseDown: this.onMouseDown, onKeyDown: onFilterKeyDown, style: { width: width >= 0 ? width : undefined } },
                    react.createElement("div", { "aria-hidden": "true", "aria-roledescription": DropdownCalloutRoleDescription, className: "bolt-dropdown-init-focus no-outline", tabIndex: !excludeTabStop ? -1 : undefined, ref: this.initFocusElement, role: "listbox" }),
                    react.createElement(Observer, { items: { observableValue: items, filter: this.updateLayout } }, function () {
                        var shouldShowFilterBox = showFilterBox === undefined ? items.length > ItemsForFilter : showFilterBox;
                        return shouldShowFilterBox || title || showCloseButton ? (react.createElement("div", { className: "bolt-dropdown-header-container" },
                            (title || showCloseButton) && (react.createElement("div", { className: "bolt-dropdown-header flex-row flex-center" },
                                react.createElement("div", { className: "bolt-dropdown-header-text flex-grow font-weight-semibold" }, title),
                                showCloseButton && (react.createElement(Button, { className: "bolt-dropdown-header-button", ariaLabel: Close, iconProps: { iconName: "Cancel" }, onClick: onDismiss, subtle: true })))),
                            shouldShowFilterBox && (react.createElement("div", { key: "bolt-dropdown-filter-container", className: "bolt-dropdown-filter-container" },
                                react.createElement(Observer, { filterText: filterText }, function (props) {
                                    return (react.createElement(TextField, { key: "bolt-dropdown-filter", ariaLabel: SearchAriaLabel, className: "bolt-dropdown-filter", excludeTabStop: true, inputId: textFieldId, onChange: onFilterTextChanged, placeholder: filterPlaceholderText, prefixIconProps: { iconName: "Search" }, ref: _this.filterBox, value: filterText, maxWidth: _this.props.width - FilterBarPadding - FilterBarIconWidth, suffixIconProps: props.filterText.length > 0
                                            ? {
                                                ariaLabel: ClearText,
                                                iconName: "ChromeClose",
                                                onClick: clearInput,
                                                size: IconSize.small,
                                                tooltipProps: {
                                                    text: ClearText
                                                }
                                            }
                                            : undefined }));
                                }))))) : null;
                    }),
                    renderBeforeContent && renderBeforeContent(),
                    react.createElement(Observer, { filteredItems: filteredItems, filteredNoResultsText: filteredNoResultsText, listBoxItems: { observableValue: items, filter: updateFilteredItems }, userFilteredItems: { observableValue: userFilteredItems, filter: updateFilteredItems } }, function (props) {
                        var noItemsElement = null;
                        var noItemsText = "";
                        if (((filteredItems && filteredItems.length === 0) || items.length === 0) && !searching) {
                            noItemsText =
                                filterText.value === ""
                                    ? _this.props.noItemsText
                                    : format(props.filteredNoResultsText || NoFilterResults, filterText.value);
                            if (noItemsText) {
                                noItemsElement = react.createElement("div", { className: "bolt-dropdown-no-items" }, noItemsText);
                            }
                        }
                        return (react.createElement(react.Fragment, null,
                            noItemsElement,
                            react.createElement(ListBox, { ariaLabel: ariaLabel, className: listBoxClassName, containerClassName: css("bolt-dropdown-list-box-container", containerClassName), didUpdate: _this.listBoxDidUpdate, enforceSingleSelect: enforceSingleSelect, excludeFocusZone: excludeFocusZone, excludeTabStop: true, searchResultsLoadingText: filteredResultsLoadingText, focuszoneProps: null, getUnselectableRanges: getUnselectableRanges, items: filteredItems ? filteredItems.value : items, loading: loading, onActivate: onActivate, onSelect: onSelect, renderItem: renderItem, ref: listBoxRef, searching: searching, selection: selection, showChecksColumn: true, showItemsWhileSearching: showItemsWhileSearching })));
                    }),
                    react.createElement(Observer, { actions: actions }, function (props) {
                        var actions = _this.props.actions;
                        return actions && actions.length ? (react.createElement("div", { className: "bolt-actions-container flex-column" }, ObservableLike.getValue(actions).map(function (actionProps, index) { return (react.createElement(Button, __assign({ key: actionProps.id || index, subtle: true, excludeTabStop: true }, actionProps))); }))) : null;
                    })))));
    };
    DropdownCalloutComponent.defaultProps = {
        width: DefaultWidth,
        ignoreMouseDown: true
    };
    return DropdownCalloutComponent;
}(react.Component));

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/ExpandableTextField/ExpandableTextField.css */
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
__snowpack__injectStyle$4(".bolt-expandable-textfield-icon:not(.disabled) {\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n");

var textFieldId = 1;
var ExpandableTextField = /** @class */ (function (_super) {
    __extends(ExpandableTextField, _super);
    function ExpandableTextField(props) {
        var _this = _super.call(this, props) || this;
        _this.textFieldElement = react.createRef();
        _this.expandable = react.createRef();
        _this.collapse = function () {
            if (_this.expandable.current) {
                _this.expandable.current.collapse();
            }
        };
        _this.expand = function () {
            if (_this.expandable.current) {
                _this.expandable.current.expand();
            }
        };
        _this.renderCallout = function () {
            return _this.props.renderCallout(_this, _this.dropdownId, _this.props.anchorElement
                ? _this.props.anchorElement
                : !_this.props.anchorPoint
                    ? _this.containerElement.current
                        ? _this.containerElement.current
                        : undefined
                    : undefined, _this.props.anchorOffset || { horizontal: 0, vertical: 0 }, _this.props.anchorOrigin || { horizontal: Location.end, vertical: Location.end }, _this.props.anchorPoint, _this.props.dropdownOrigin || { horizontal: Location.end, vertical: Location.start });
        };
        _this.dropdownId = props.dropdownId || "dropdown-" + textFieldId++;
        _this.containerElement = props.containerRef || react.createRef();
        return _this;
    }
    ExpandableTextField.prototype.render = function () {
        var _this = this;
        return (react.createElement(Expandable, { disabled: this.props.disabled, expandKey: this.props.expandKey, onCollapse: this.props.onCollapse, onExpand: this.props.onExpand, renderCallout: this.renderCallout, ref: this.expandable }, function (expandableProps) {
            return (react.createElement(FocusWithin, { onFocus: _this.props.onFocus, onBlur: _this.props.onBlur }, function (focusStatus) { return (react.createElement("div", { className: css(_this.props.className, "bolt-expandable-textfield"), onBlur: function () {
                    if (_this.props.blurDismiss) {
                        _this.collapse();
                    }
                    focusStatus.onBlur && focusStatus.onBlur();
                }, onFocus: function (event) {
                    focusStatus.onFocus && focusStatus.onFocus(event);
                    // If the top-level component recieves focus, set focus to the text field.
                    if (event.target === _this.containerElement.current) {
                        _this.focus();
                    }
                }, onMouseDown: expandableProps.onMouseDown, onKeyDown: expandableProps.onKeyDown, ref: _this.containerElement, role: _this.props.editable ? "combobox" : undefined, "aria-expanded": _this.props.editable ? expandableProps.expanded : undefined, tabIndex: -1 },
                react.createElement(TextField, __assign({ ariaHasPopup: "dialog" }, _this.props, { ariaActiveDescendant: expandableProps.expanded ? _this.props.ariaActiveDescendant : undefined, role: _this.props.editable ? "textbox" : undefined, ariaExpanded: !_this.props.editable ? expandableProps.expanded : undefined, ariaControls: expandableProps.expanded ? _this.dropdownId : undefined, className: "", onClick: expandableProps.onClick, ref: _this.textFieldElement, suffixIconProps: !_this.props.hideDropdownIcon
                        ? {
                            key: "dropdown-icon",
                            className: css("bolt-expandable-textfield-icon icon-right", _this.props.disabled && "disabled"),
                            iconName: "ChevronDownMed",
                            onClick: expandableProps.onClick,
                            size: IconSize.small
                        }
                        : undefined })))); }));
        }));
    };
    ExpandableTextField.prototype.focus = function () {
        if (this.textFieldElement.current) {
            this.textFieldElement.current.focus();
        }
    };
    ExpandableTextField.prototype.select = function () {
        if (this.textFieldElement.current) {
            this.textFieldElement.current.select();
        }
    };
    ExpandableTextField.defaultProps = {
        expandKey: [KeyCode.downArrow, KeyCode.enter]
    };
    return ExpandableTextField;
}(react.Component));

function DropdownExpandableTextField(props) {
    var _a;
    var editable = props.editable, expandableRef = props.expandableRef, items = props.items, inputClassName = props.inputClassName, renderSelectedItems = props.renderSelectedItems, selection = props.selection, _b = props.showPrefix, showPrefix = _b === void 0 ? true : _b, rest = __rest(props, ["editable", "expandableRef", "items", "inputClassName", "renderSelectedItems", "selection", "showPrefix"]);
    var prefixIconProps;
    var text;
    if (!editable) {
        text = props.placeholder;
        if (selection.selectedCount > 0) {
            text = renderSelectedItems(selection, items);
        }
    }
    // If only a single item is selected and the item has an icon we will show it as a prefix icon.
    if (showPrefix && selection.selectedCount === 1) {
        prefixIconProps = (_a = items[selection.value[0].beginIndex]) === null || _a === void 0 ? void 0 : _a.iconProps;
    }
    return (react.createElement(ExpandableTextField, __assign({ ariaHasPopup: "menu", ariaRoleDescription: !editable ? DropdownExpandableRoleDescription : undefined, autoComplete: editable, ariaAutoComplete: editable ? "list" : undefined, focusTreatment: editable ? TextFieldFocusTreatmentBehavior.all : TextFieldFocusTreatmentBehavior.keyboardOnly, inputType: !editable ? "button" : undefined, editable: editable, ref: expandableRef, value: text }, rest, { className: css(props.className, "bolt-dropdown-expandable-text-field", rest.disabled && "disabled"), inputClassName: css(inputClassName, "bolt-dropdown-expandable-textfield-input text-ellipsis"), onClick: function (event) { return expandableRef.current && expandableRef.current.expand(); }, prefixIconProps: props.prefixIconProps || prefixIconProps, tooltipProps: __assign({ text: text, overflowOnly: true, overflowDetected: overflowDetected$1 }, props.tooltipProps) })));
}
function overflowDetected$1(anchorElement) {
    var _a = anchorElement.style, wordBreak = _a.wordBreak, whiteSpace = _a.whiteSpace;
    var height = anchorElement.clientHeight;
    anchorElement.style.wordBreak = "break-all";
    anchorElement.style.whiteSpace = "normal";
    var heightChanged = height < anchorElement.clientHeight;
    anchorElement.style.wordBreak = wordBreak;
    anchorElement.style.whiteSpace = whiteSpace;
    return heightChanged;
}

var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.expandable = react.createRef();
        _this.expandableContainer = react.createRef();
        _this.filterText = new ObservableValue("");
        _this.collapse = function () {
            if (_this.expandable.current) {
                _this.expandable.current.collapse();
            }
        };
        _this.expand = function () {
            if (_this.expandable.current) {
                _this.expandable.current.expand();
            }
        };
        _this.onDismiss = function () {
            if (_this.expandable.current) {
                _this.expandable.current.collapse();
            }
        };
        _this.onExpand = function () {
            if (_this.props.onExpand) {
                _this.props.onExpand();
            }
            _this.updateFilteredItems();
            _this.state.expanded.value = true;
        };
        _this.onCollapse = function () {
            if (_this.props.onCollapse) {
                _this.props.onCollapse();
            }
            _this.state.expanded.value = false;
        };
        _this.onActivate = function (event, item) {
            if (!event.defaultPrevented && event.type === "keydown") {
                var multiSelect = _this.props.enforceSingleSelect ? false : _this.state.filteredSelection.multiSelect;
                if (multiSelect) {
                    _this.state.filteredSelection.toggle(_this.state.filteredItems.value.indexOf(item), _this.state.filteredSelection.alwaysMerge, multiSelect);
                }
                else {
                    _this.state.filteredSelection.select(_this.state.filteredItems.value.indexOf(item), 1, _this.state.filteredSelection.alwaysMerge, multiSelect);
                }
                _this.onSelect(event, item);
            }
        };
        _this.onFilterTextChanged = function (e, newValue) {
            _this.filterText.value = newValue;
            _this.debouncedUpdateFilteredItems();
        };
        _this.onSelect = function (event, item) {
            var _a = _this.props, dismissOnSelect = _a.dismissOnSelect, onSelect = _a.onSelect;
            var selection = _this.parentSelection;
            if (onSelect) {
                onSelect(event, item);
            }
            if (dismissOnSelect !== undefined ? dismissOnSelect : selection.value.length > 0 && !(_this.props.enforceSingleSelect ? false : selection.multiSelect) && !selection.selectOnFocus) {
                _this.onDismiss();
            }
        };
        _this.selectionChanged = function (value, action) {
            _this.state.filteredSelection.selectionChanged(value, action);
            return true;
        };
        _this.renderCallout = function (dropdown, dropdownId, anchorElement, anchorOffset, anchorOrigin, anchorPoint, dropdownOrigin) {
            var _a = _this.props, actions = _a.actions, calloutContentClassName = _a.calloutContentClassName, containerClassName = _a.containerClassName, filterPlaceholderText = _a.filterPlaceholderText, filteredNoResultsText = _a.filteredNoResultsText, getUnselectableRanges = _a.getUnselectableRanges, items = _a.items, loading = _a.loading, noItemsText = _a.noItemsText, renderItem = _a.renderItem, searching = _a.searching, showFilterBox = _a.showFilterBox, showItemsWhileSearching = _a.showItemsWhileSearching, userFilteredItems = _a.userFilteredItems;
            var width = _this.props.width;
            if (width === undefined && _this.expandableContainer.current) {
                width = Math.max(_this.expandableContainer.current.clientWidth, 100);
            }
            var _b = _this.state, filteredItems = _b.filteredItems, filterText = _b.filterText, filteredSelection = _b.filteredSelection;
            var calloutProps = {
                actions: actions,
                anchorElement: anchorElement,
                anchorOffset: anchorOffset,
                anchorOrigin: anchorOrigin,
                anchorPoint: anchorPoint,
                calloutContentClassName: calloutContentClassName,
                containerClassName: containerClassName,
                dropdownOrigin: dropdownOrigin,
                filteredItems: filteredItems,
                filteredNoResultsText: filteredNoResultsText,
                selection: filteredSelection,
                filterPlaceholderText: filterPlaceholderText,
                filterText: filterText,
                getUnselectableRanges: getUnselectableRanges,
                id: dropdownId,
                items: items,
                loading: loading,
                noItemsText: noItemsText,
                onActivate: _this.onActivate,
                onFilterTextChanged: _this.onFilterTextChanged,
                onDismiss: _this.onDismiss,
                onSelect: _this.onSelect,
                renderItem: renderItem,
                searching: searching,
                showItemsWhileSearching: showItemsWhileSearching,
                showFilterBox: showFilterBox,
                updateFilteredItems: _this.updateFilteredItems,
                userFilteredItems: userFilteredItems,
                width: width
            };
            return _this.props.renderCallout(calloutProps);
        };
        _this.updateFilteredItems = function () {
            updateFilteredItems(_this.props, _this.state);
            return true;
        };
        _this.debouncedUpdateFilteredItems = function () {
            updateFilteredItems(_this.props, _this.state);
        };
        _this.parentSelection = props.selection || new DropdownSelection();
        // string items are wrapped once here.  Only use a string array in the simple case where the items are not changing.
        var wrappedItems = wrapListBoxItems(props.items);
        var itemsValue = getListBoxItemsValue(wrappedItems || props.items);
        _this.timerManagement = new TimerManagement();
        _this.state = {
            expanded: new ObservableValue(false),
            filteredItems: new ObservableArray(__spreadArrays(itemsValue)),
            filteredSelection: new FilteredListSelection(_this.parentSelection),
            filterText: _this.filterText,
            props: props,
            wrappedItems: wrappedItems
        };
        return _this;
    }
    Dropdown.getDerivedStateFromProps = function (props, state) {
        if (props.userFilteredItems !== state.props.userFilteredItems || props.items !== state.props.items) {
            updateFilteredItems(props, state);
        }
        return __assign(__assign({}, state), { props: props, wrappedItems: wrapListBoxItems(props.items) });
    };
    Dropdown.prototype.componentDidMount = function () {
        if (this.props.filterThrottleWait) {
            this.debouncedUpdateFilteredItems = this.timerManagement.debounce(this.debouncedUpdateFilteredItems, this.props.filterThrottleWait);
        }
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, ariaLabel = _a.ariaLabel, className = _a.className, disabled = _a.disabled, enforceSingleSelect = _a.enforceSingleSelect, excludeTabStop = _a.excludeTabStop, items = _a.items, placeholder = _a.placeholder, renderExpandable = _a.renderExpandable, renderSelectedItems = _a.renderSelectedItems;
        var selectionObservable = { observableValue: this.parentSelection, filter: this.selectionChanged };
        return (react.createElement(ItemsObserver, { getUnselectableRanges: this.props.getUnselectableRanges, items: items, selection: this.parentSelection },
            react.createElement(Observer, { selection: selectionObservable }, function () {
                return renderExpandable({
                    ariaLabel: ariaLabel,
                    className: css(className, "bolt-dropdown-expandable"),
                    containerRef: _this.expandableContainer,
                    disabled: disabled,
                    enforceSingleSelect: enforceSingleSelect,
                    excludeTabStop: excludeTabStop,
                    placeholder: placeholder,
                    onCollapse: _this.onCollapse,
                    onExpand: _this.onExpand,
                    expandableRef: _this.expandable,
                    renderCallout: _this.renderCallout,
                    items: getListBoxItemsValue(_this.state.wrappedItems || items),
                    renderSelectedItems: renderSelectedItems,
                    selection: _this.parentSelection
                });
            })));
    };
    Dropdown.prototype.focus = function () {
        if (this.expandable.current) {
            this.expandable.current.focus();
        }
    };
    Dropdown.defaultProps = {
        filterByText: true,
        filterItem: filterItemByText,
        getUnselectableRanges: getUnselectableRanges,
        renderCallout: DropdownCallout,
        renderExpandable: DropdownExpandableTextField,
        renderSelectedItems: renderDropdownSelectedItemText
    };
    return Dropdown;
}(react.Component));
function filterItemByText(filterText, item) {
    if (item.text && item.type !== ListBoxItemType.Header && item.type !== ListBoxItemType.Divider && item.type !== ListBoxItemType.Loading) {
        return item.text.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    }
    return false;
}
function renderDropdownSelectedItemText(selection, items) {
    var firstSelectedItem = items[selection.value[0].beginIndex];
    var text = (firstSelectedItem && firstSelectedItem.text) || "";
    if (selection.selectedCount > 1) {
        text = text + " (+" + (selection.selectedCount - 1) + ")";
    }
    return text;
}
function updateFilteredItems(props, state) {
    var filteredSelection = state.filteredSelection, filterText = state.filterText;
    var filteredIndexMap = [];
    var items = getListBoxItemsValue(state.wrappedItems || props.items);
    var filteredItems = items;
    if (props.userFilteredItems) {
        filteredItems = getItemsValue(props.userFilteredItems);
        var userFilteredItemsIndexMap = props.userFilteredItemsIndexMap && props.userFilteredItemsIndexMap.value;
        if (userFilteredItemsIndexMap) {
            filteredIndexMap = userFilteredItemsIndexMap;
        }
        else {
            var _loop_1 = function (filteredIndex) {
                var index = items.findIndex(function (listItem) { return listItem.id === filteredItems[filteredIndex].id; });
                filteredIndexMap.push(index);
            };
            for (var filteredIndex = 0; filteredIndex < props.userFilteredItems.length; filteredIndex++) {
                _loop_1(filteredIndex);
            }
        }
    }
    if (props.filterByText && filterText.value) {
        var filterItemsResults = filterItems(filteredItems, filterText.value, filteredIndexMap, props.filterItem);
        filteredItems = filterItemsResults.filteredItems;
        filteredIndexMap = filterItemsResults.filteredIndexMap;
    }
    // Remove the first item if it's a divider
    while (filteredItems.length && filteredItems[0].type === ListBoxItemType.Divider) {
        filteredItems.shift();
        filteredIndexMap.shift();
    }
    if (!ObservableLike.getValue(props.searching) && !ObservableLike.getValue(props.loading) && state.expanded.value) {
        if (filterText.value) {
            var noResultsText = NoFilterResults;
            if (props.filteredNoResultsText) {
                noResultsText = ObservableLike.getValue(props.filteredNoResultsText);
            }
            announce(filteredItems.length > 0 ? format(AnnounceFilterResultCount, filteredItems.length) : noResultsText, true);
        }
        else if (filteredItems.length === 0 && props.noItemsText) {
            announce(props.noItemsText, true);
        }
        else if (filteredItems.length > 0) {
            announce(format(AnnounceItemCount, filteredItems.length));
        }
    }
    filteredSelection.updateFilteredSelection(filteredIndexMap, props.enforceSingleSelect ? false : undefined);
    state.filteredItems.value = filteredItems;
    return true;
}
function filterItems(items, filterTextValue, currentFilteredIndexMap, filterItem) {
    if (currentFilteredIndexMap === void 0) { currentFilteredIndexMap = []; }
    if (filterItem === void 0) { filterItem = filterItemByText; }
    var filteredItems = [];
    var filteredIndexMap = [];
    var filterMatches = [];
    if (filterTextValue) {
        var lastHeader = void 0;
        var lastHeaderIndex = -1;
        var lastDivider = void 0;
        var lastDividerIndex = -1;
        for (var i = 0, l = items.length; i < l; i++) {
            var item = items[i];
            var itemIndex = currentFilteredIndexMap.length ? currentFilteredIndexMap[i] : i;
            // Add Dividers and Headers only if they have an item from their group showing.
            if (item.type === ListBoxItemType.Header) {
                lastHeader = item;
                lastHeaderIndex = itemIndex;
            }
            else if (item.type === ListBoxItemType.Divider) {
                lastDivider = item;
                lastDividerIndex = itemIndex;
            }
            else {
                var filterResults = filterItem(filterTextValue, item, items);
                if (filterResults || item.type === ListBoxItemType.Loading) {
                    // Add any divider, then header for this group
                    if (lastDivider && lastDivider.groupId === item.groupId) {
                        filteredItems.push(lastDivider);
                        filteredIndexMap.push(lastDividerIndex);
                        lastDivider = undefined;
                    }
                    if (lastHeader && lastHeader.groupId === item.groupId) {
                        filteredItems.push(lastHeader);
                        filteredIndexMap.push(lastHeaderIndex);
                        lastHeader = undefined;
                    }
                    filteredItems.push(item);
                    filteredIndexMap.push(itemIndex);
                    filterMatches.push(Array.isArray(filterResults) ? filterResults : []);
                }
            }
        }
    }
    return { filteredItems: filteredItems, filteredIndexMap: filteredIndexMap, filterMatches: filterMatches };
}

function DropdownExpandableButton(props) {
    var expandableRef = props.expandableRef, items = props.items, placeholder = props.placeholder, renderSelectedItems = props.renderSelectedItems, selection = props.selection, tooltipProps = props.tooltipProps, rest = __rest(props, ["expandableRef", "items", "placeholder", "renderSelectedItems", "selection", "tooltipProps"]);
    var text = placeholder;
    if (selection.selectedCount > 0) {
        text = renderSelectedItems(selection, items);
    }
    return (react.createElement(ExpandableButton, __assign({ ref: expandableRef }, rest, { tooltipProps: __assign({ overflowOnly: true, overflowDetected: overflowDetected$2 }, props.tooltipProps) }),
        react.createElement("div", { className: "bolt-dropdown-expandable-button-label justify-start flex-grow text-ellipsis" },
            props.children,
            text)));
}
function overflowDetected$2(anchorElement) {
    var overflowElement = anchorElement.querySelector(".bolt-dropdown-expandable-button-label");
    if (overflowElement) {
        return overflowElement.scrollWidth > Math.ceil(overflowElement.offsetWidth);
    }
    return false;
}

var FilterBarItem = /** @class */ (function (_super) {
    __extends(FilterBarItem, _super);
    function FilterBarItem(props) {
        var _this = _super.call(this, props) || this;
        _this._onFilterChanged = function (changedState) {
            if (changedState.hasOwnProperty(_this.props.filterItemKey)) {
                _this.onFilterChanged(changedState[_this.props.filterItemKey]);
            }
        };
        _this._setFilterValue = function (filterState) {
            if (_this.props.filter) {
                _this.props.filter.setFilterItemState(_this.props.filterItemKey, filterState);
            }
        };
        _this.timerManagement = new TimerManagement();
        return _this;
    }
    FilterBarItem.prototype.UNSAFE_componentWillMount = function () {
        if (this.props.filter) {
            var itemState = this.props.filter.getFilterItemState(this.props.filterItemKey);
            this.setState({ value: itemState && itemState.value, operator: itemState && itemState.operator });
            var throttleWait = this.getThrottleWait();
            if (throttleWait) {
                this.throttledSetFilterValue = this.timerManagement.debounce(this._setFilterValue, throttleWait, { leading: false, trailing: true });
            }
            else {
                this.throttledSetFilterValue = this._setFilterValue;
            }
        }
    };
    /**
     * Setting state when component state is different from filter item state
     * Needed for handling scenarios when filter object's setState method is called with suppressChangeEvent=true
     * In such cases, FILTER_CHANGE_EVENT is not triggered and thus component state is not updated
     * And then on re-rendering component renders with old state.
     * @param nextProps
     */
    FilterBarItem.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.filter) {
            var itemState = nextProps.filter.getFilterItemState(nextProps.filterItemKey);
            // If we are throttling the changes from the filter item's state, there is a chance that the props are out of sync with the state.
            // Therefore, we only want to react to new changes in props if we are not throttling or if the setKey for the component has changed
            // (indicating we want to completely reset state, reacting to the props)
            if (this.props.setKey !== nextProps.setKey ||
                (this.getThrottleWait() === 0 &&
                    !nextProps.filter.filterItemStatesAreEqual(nextProps.filterItemKey, itemState, this.state))) {
                this.setState({ value: itemState && itemState.value, operator: itemState && itemState.operator });
            }
        }
    };
    FilterBarItem.prototype.componentDidMount = function () {
        this.props.filter && this.props.filter.subscribe(this._onFilterChanged, FILTER_CHANGE_EVENT);
    };
    FilterBarItem.prototype.componentWillUnmount = function () {
        this.props.filter && this.props.filter.unsubscribe(this._onFilterChanged, FILTER_CHANGE_EVENT);
        this.timerManagement.dispose();
    };
    FilterBarItem.prototype.onFilterChanged = function (filterState) {
        this.setState({
            value: filterState && filterState.value,
            operator: filterState && filterState.operator
        });
    };
    FilterBarItem.prototype.getThrottleWait = function () {
        return 0;
    };
    FilterBarItem.prototype.setFilterValue = function (filterState) {
        if (this.getThrottleWait()) {
            this.setState({
                value: filterState && filterState.value,
                operator: filterState && filterState.operator
            });
        }
        this.throttledSetFilterValue(filterState);
    };
    return FilterBarItem;
}(react.Component));

function updateFilterToSelection(values, items, filter, filterItemKey) {
    var selectedValues = [];
    for (var rangeIndex = 0; rangeIndex < values.length; rangeIndex++) {
        for (var i = values[rangeIndex].beginIndex; i <= values[rangeIndex].endIndex; i++) {
            selectedValues.push(items[i].data !== undefined ? items[i].data : items[i].id);
        }
    }
    var currentState = filter.getFilterItemState(filterItemKey);
    var changesToSet = false;
    if (currentState) {
        changesToSet = !arrayEquals(currentState.value, selectedValues) && (selectedValues.length || currentState.value);
    }
    else {
        changesToSet = !!selectedValues.length;
    }
    if (changesToSet) {
        if (filterItemKey === "keyword") {
            filter.setFilterItemState(filterItemKey, { value: selectedValues[0] });
        }
        else {
            filter.setFilterItemState(filterItemKey, { value: selectedValues, operator: currentState === null || currentState === void 0 ? void 0 : currentState.operator });
        }
    }
}

var DropdownFilterBarItemWidth = 256;
var DropdownFilterBarItem = /** @class */ (function (_super) {
    __extends(DropdownFilterBarItem, _super);
    function DropdownFilterBarItem(props) {
        var _this = _super.call(this, props) || this;
        _this.dropdown = react.createRef();
        _this.componentDidMount = function () {
            var _a;
            _super.prototype.componentDidMount.call(_this);
            if (_this.props.filter) {
                var filterState = (_a = _this.props.filter) === null || _a === void 0 ? void 0 : _a.getFilterItemState(_this.props.filterItemKey);
                _this.onFilterChanged(filterState);
            }
        };
        _this.selectDefaultFilterItem = function () {
            if (_this.props.filter) {
                var filterState_1 = _this.props.filter.getFilterItemState(_this.props.filterItemKey);
                if (filterState_1 && filterState_1.value) {
                    var items = getListBoxItemsValue(_this.wrappedItems || _this.props.items);
                    var newSelection = new ListSelection(_this.selection.multiSelect);
                    var _loop_1 = function (i) {
                        var index = items.findIndex(function (item) { return item.id === filterState_1.value[i] || item.data === filterState_1.value[i]; });
                        if (index > -1) {
                            newSelection.select(index, 1, true);
                        }
                    };
                    for (var i = 0; i < filterState_1.value.length; i++) {
                        _loop_1(i);
                    }
                    _this.selection.value = newSelection.value;
                }
            }
        };
        _this.onFilterChanged = function (filterState) {
            _super.prototype.onFilterChanged.call(_this, filterState);
            var items = getListBoxItemsValue(_this.wrappedItems || _this.props.items);
            if (filterState && filterState.value) {
                var newSelection = new ListSelection(_this.selection.multiSelect);
                var _loop_2 = function (i) {
                    var index = items.findIndex(function (item) { return item.id === filterState.value[i] || item.data === filterState.value[i]; }); // || item.id === filterState.value[i].id);
                    if (index > -1) {
                        newSelection.select(index, 1, true);
                    }
                };
                for (var i = 0; i < filterState.value.length; i++) {
                    _loop_2(i);
                }
                var selectionDifference = compareSelectionRanges(_this.selection.value, newSelection.value);
                if (selectionDifference.length) {
                    _this.selection.value = newSelection.value;
                }
            }
            else {
                _this.selection.clear();
            }
        };
        _this.onSelectionChanged = function (values) {
            var items = getListBoxItemsValue(_this.wrappedItems || _this.props.items);
            if (_this.props.filter) {
                updateFilterToSelection(values, items, _this.props.filter, _this.props.filterItemKey);
            }
            return true;
        };
        _this.renderExpandableButton = function (expandableProps) {
            var _a = _this.props, className = _a.className, renderExpandable = _a.renderExpandable;
            var expandableButtonProps = __assign(__assign({}, expandableProps), { className: css(className, "bolt-dropdown-filter-bar-item"), subtle: true, renderSelectedItems: _this.renderSelectedItems });
            if (renderExpandable) {
                return renderExpandable(expandableButtonProps);
            }
            return react.createElement(DropdownExpandableButton, __assign({}, expandableButtonProps));
        };
        _this.onClearClick = function () {
            _this.selection.clear();
            announce(AnnounceFilterCleared);
        };
        _this.renderSelectedItems = function (selection, items) {
            var selectedText = items[selection.value[0].beginIndex].text || "";
            if (selection.selectedCount > 1) {
                selectedText = selectedText + " (+" + (selection.selectedCount - 1) + ")";
            }
            var selectedTextSpan = react.createElement("span", { className: "bolt-dropdown-filter-bar-item-selected-text" }, selectedText);
            return _this.props.showPlaceholderAsLabel ? (react.createElement(react.Fragment, null,
                react.createElement("span", { className: "bolt-dropdown-filter-bar-item-placeholder" }, _this.props.placeholder + ": "),
                selectedTextSpan)) : (selectedTextSpan);
        };
        // string items are wrapped once here.  Only use a string array in the simple case where the items are not changing.
        _this.wrappedItems = wrapListBoxItems(props.items);
        _this.selection = props.selection || new DropdownSelection();
        // Select the default items from the filter.
        _this.selectDefaultFilterItem();
        return _this;
    }
    DropdownFilterBarItem.prototype.focus = function () {
        if (this.dropdown.current) {
            this.dropdown.current.focus();
        }
    };
    DropdownFilterBarItem.prototype.render = function () {
        var _this = this;
        return (react.createElement(SelectionObserver, { selection: this.selection, onSelectionChanged: this.onSelectionChanged }, function () {
            var actionsFromProps = ObservableLike.getValue(_this.props.actions || []);
            var actions = __spreadArrays(actionsFromProps);
            if (!_this.props.hideClearAction) {
                actions.push({
                    className: "bolt-dropdown-action-right-button",
                    disabled: _this.selection.selectedCount === 0,
                    iconProps: { iconName: "Clear" },
                    text: DropdownClearActionText,
                    onClick: _this.onClearClick
                });
            }
            return (react.createElement(Observer, { dropdownItems: { observableValue: _this.props.items, filter: _this.selectDefaultFilterItem } }, function () { return (react.createElement(Dropdown, __assign({ renderExpandable: _this.renderExpandableButton, width: DropdownFilterBarItemWidth }, _this.props, { actions: actions, selection: _this.selection, ref: _this.dropdown }))); }));
        }));
    };
    return DropdownFilterBarItem;
}(FilterBarItem));

export { Dropdown };
