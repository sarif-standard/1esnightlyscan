import { _ as __extends } from './Observable-063af883.js';
import { a as ListSelection } from './ListSelection-50fc8f5c.js';
import './core-4c1f1367.js';
import './Util-e30cbaf3.js';
import './index-abdc4d2d.js';
import './Icon.Props-050e98eb.js';
import './Tooltip-bfc7063c.js';

var DropdownSelection = /** @class */ (function (_super) {
    __extends(DropdownSelection, _super);
    function DropdownSelection() {
        return _super.call(this, { selectOnFocus: false }) || this;
    }
    return DropdownSelection;
}(ListSelection));
var DropdownMultiSelection = /** @class */ (function (_super) {
    __extends(DropdownMultiSelection, _super);
    function DropdownMultiSelection() {
        return _super.call(this, { alwaysMerge: true, multiSelect: true, selectOnFocus: false }) || this;
    }
    return DropdownMultiSelection;
}(ListSelection));

export { DropdownSelection as D, DropdownMultiSelection as a };
