import {Button} from "../_snowpack/pkg/azure-devops-ui/Button.js";
import {TextField} from "../_snowpack/pkg/azure-devops-ui/TextField.js";
import * as React from "../_snowpack/pkg/react.js";
import {useState} from "../_snowpack/pkg/react.js";
import {roleItems, voteItems} from "./discussion.js";
import {MultipleDropdown} from "./multipleDropdown.js";
export function CommentEditor(props) {
  const [role, setRole] = useState(props.role);
  const [vote, setVote] = useState(props.vote);
  const [text, setText] = useState(props.text);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MultipleDropdown, {
    className: "margin-bottom-8",
    placeholder: "Role",
    items: roleItems,
    values: Array.isArray(role) ? role : [],
    onChange: (values) => setRole(values)
  }), /* @__PURE__ */ React.createElement(MultipleDropdown, {
    className: "margin-bottom-8",
    placeholder: "Opinion",
    items: voteItems,
    values: Array.isArray(vote) ? vote : [],
    onChange: (values) => setVote(values)
  }), /* @__PURE__ */ React.createElement(TextField, {
    ariaLabel: "Write a comment...",
    placeholder: "Write a comment...",
    value: text,
    onChange: (_e, newValue) => setText(newValue),
    multiline: true,
    rows: 5
  }), /* @__PURE__ */ React.createElement("div", {
    className: "margin-top-8 flex-row justify-end"
  }, /* @__PURE__ */ React.createElement(Button, {
    text: "Cancel",
    onClick: () => props.onCancel()
  }), " ", /* @__PURE__ */ React.createElement(Button, {
    text: "Update",
    primary: true,
    className: "margin-right-8",
    onClick: () => props.onUpdate(role, vote, text)
  })));
}
