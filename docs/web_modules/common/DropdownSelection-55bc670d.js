import { _ as __extends } from './Observable-24aa1084.js';
import { a as ListSelection } from './ListSelection-ad148c9e.js';
import './core-1947a0ef.js';
import './Util-e30cbaf3.js';
import './index-abdc4d2d.js';
import './Icon.Props-be292e60.js';
import './Tooltip-69aedae2.js';

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
