import {Dropdown} from "../web_modules/azure-devops-ui/Dropdown.js";
import {DropdownMultiSelection} from "../web_modules/azure-devops-ui/Utilities/DropdownSelection.js";
import * as React from "../web_modules/react.js";
import {Component} from "../web_modules/react.js";
export class MultipleDropdown extends Component {
  constructor() {
    super(...arguments);
    this.selection = new DropdownMultiSelection();
  }
  render() {
    const {selection} = this;
    const {className, placeholder, items, values, onChange} = this.props;
    items.forEach((item, i) => {
      if (values.includes(item.id)) {
        selection.select(i, 1, true);
      } else {
        selection.unselect(i);
      }
    });
    return /* @__PURE__ */ React.createElement(Dropdown, {
      className,
      placeholder,
      items,
      selection,
      onSelect: () => {
        const values2 = items.filter((_item, i) => selection.selected(i)).map((item) => item.id);
        onChange?.(values2);
      }
    });
  }
}
