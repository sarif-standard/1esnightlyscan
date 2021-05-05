import {Button} from "../_snowpack/pkg/azure-devops-ui/Button.js";
import {TextField} from "../_snowpack/pkg/azure-devops-ui/TextField.js";
import * as React from "../_snowpack/pkg/react.js";
import {useState} from "../_snowpack/pkg/react.js";
import {roleItems, voteItems} from "./discussion.js";
import {MultipleDropdown} from "./multipleDropdown.js";
import {Checkbox} from "../_snowpack/pkg/azure-devops-ui/Checkbox.js";
export function CommentEditor2(props) {
  const [roles, setRoles] = useState(props.comment.roles);
  const [votes, setVotes] = useState(props.comment.votes);
  const [text, setText] = useState(props.comment.text);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex-column margin-bottom-8 rhythm-vertical-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "secondary-text"
  }, "Please check all that apply"), roleItems.map(({id, text: text2}) => /* @__PURE__ */ React.createElement(Checkbox, {
    key: id,
    label: text2,
    checked: roles.includes(id),
    onChange: (_event, checked) => {
      if (checked) {
        if (!roles.includes(id))
          setRoles([...roles, id]);
      } else {
        setRoles(roles.filter((v) => v !== id));
      }
    }
  }))), /* @__PURE__ */ React.createElement("div", null, "Observations"), /* @__PURE__ */ React.createElement(MultipleDropdown, {
    className: "margin-bottom-8",
    items: voteItems,
    values: Array.isArray(votes) ? votes : [],
    onChange: (values) => setVotes(values)
  }), /* @__PURE__ */ React.createElement("div", null, "Comments"), /* @__PURE__ */ React.createElement(TextField, {
    ariaLabel: "Write a comment...",
    placeholder: "Write a comment...",
    value: text,
    onChange: (_e, newValue) => setText(newValue),
    multiline: true,
    rows: 5
  }), /* @__PURE__ */ React.createElement("div", {
    className: "margin-top-8 flex-row justify-end rhythm-horizontal-8"
  }, /* @__PURE__ */ React.createElement(Button, {
    text: "Cancel",
    onClick: () => props.onCancel()
  }), /* @__PURE__ */ React.createElement(Button, {
    text: "Done",
    primary: true,
    className: "margin-right-8",
    onClick: () => props.onUpdate(roles, votes, text)
  })));
}
