var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {Ago} from "../web_modules/azure-devops-ui/Ago.js";
import {CardContent, CustomCard} from "../web_modules/azure-devops-ui/Card.js";
import {ObservableValue} from "../web_modules/azure-devops-ui/Core/Observable.js";
import {FormItem} from "../web_modules/azure-devops-ui/FormItem.js";
import {Header} from "../web_modules/azure-devops-ui/Header.js";
import {Icon} from "../web_modules/azure-devops-ui/Icon.js";
import {MoreButton} from "../web_modules/azure-devops-ui/Menu.js";
import {TextField} from "../web_modules/azure-devops-ui/TextField.js";
import {VssPersona} from "../web_modules/azure-devops-ui/VssPersona.js";
import {observable, runInAction} from "../web_modules/mobx.js";
import {observer} from "../web_modules/mobx-react.js";
import * as React from "../web_modules/react.js";
import {Component, useState} from "../web_modules/react.js";
import {CommentEditor} from "./commentEditor.js";
import {Comment} from "./comment.js";
export const roleMap = new Map([
  ["assistant", "I am providing security assistance."],
  ["exposer", "My team exposed the live secret."],
  ["consumer", "My team owns the compromised asset."],
  ["helper", `I'm helping to remove the exposure.`],
  ["tracker", "My team is tracking this response effort."]
]);
export const voteMap = new Map([
  ["falsePositive", "This finding not actually a live secret."],
  ["noOwner", `We can't identify anybody who can invalidate this live secret.`],
  ["thirdParty", "This live secret is owned by a 3rd party (not Microsoft)."],
  ["fix", "We should definitely fix this issue."],
  ["exception", "We should request an exception."]
]);
export const roleItems = [...roleMap.entries()].map(([id, text]) => ({id, text}));
export const voteItems = [...voteMap.entries()].map(([id, text]) => ({id, text}));
function pluralize(text, list) {
  return list.length > 1 ? `${text}s` : text;
}
function TruncatedText(props) {
  const maxLength = 80;
  const {text} = props;
  const [seeMore, setSeeMore] = useState(false);
  return text.length < maxLength || seeMore ? /* @__PURE__ */ React.createElement(React.Fragment, null, text) : /* @__PURE__ */ React.createElement(React.Fragment, null, text.substring(0, maxLength), /* @__PURE__ */ React.createElement("span", {
    className: "seeMore",
    onClick: () => setSeeMore(true)
  }, " \u2026 See More"));
}
export let Discussion = class extends Component {
  constructor() {
    super(...arguments);
    this.isEditing = void 0;
    this.newCommentText = new ObservableValue("");
    this.newCommentError = new ObservableValue(false);
  }
  render() {
    const {isEditing} = this;
    const {store, user} = this.props;
    if (!store.secretHash)
      return null;
    const userHasCommented = !!store.comments.find((comment) => comment.who === user);
    const sorted = store.comments.slice().sort((a, b) => new Date(b.when).getTime() - new Date(a.when).getTime());
    return /* @__PURE__ */ React.createElement("div", {
      className: "bolt-page v-scroll-auto flex-column bolt-page-grey",
      style: {flex: "0 0 500px", padding: 32, paddingLeft: 8}
    }, /* @__PURE__ */ React.createElement(CustomCard, {
      className: "bolt-card-with-header flex-grow bolt-card-white"
    }, /* @__PURE__ */ React.createElement(Header, {
      title: "Opinions"
    }), /* @__PURE__ */ React.createElement(CardContent, {
      className: "discussion"
    }, sorted.map((comment, i) => {
      const {who, when, roles, votes, text} = comment;
      return /* @__PURE__ */ React.createElement("div", {
        className: "comment flex-row flex-start",
        key: i
      }, /* @__PURE__ */ React.createElement(VssPersona, {
        size: "small"
      }), /* @__PURE__ */ React.createElement("div", {
        className: "flex-column flex-grow scroll-hidden"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "flex-row margin-bottom-8"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "primary-text text-ellipsis commentPerson"
      }, who), /* @__PURE__ */ React.createElement("div", {
        className: "secondary-text"
      }, /* @__PURE__ */ React.createElement(Ago, {
        date: new Date(when)
      }))), isEditing === comment ? /* @__PURE__ */ React.createElement(CommentEditor, {
        role: roles,
        vote: votes,
        text,
        onCancel: () => {
          this.isEditing = void 0;
        },
        onUpdate: (role, vote, text2) => {
          runInAction(() => {
            comment.roles = role;
            comment.votes = vote;
            comment.text = text2;
          });
          this.isEditing = void 0;
        }
      }) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
        style: {lineHeight: 1.5},
        className: "margin-bottom-8"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "inline-flex-row flex-center"
      }, /* @__PURE__ */ React.createElement(Icon, {
        iconName: "Org",
        className: "margin-right-4"
      }), pluralize("Role", roles), ":"), /* @__PURE__ */ React.createElement("span", {
        className: "secondary-text"
      }, " ", roles.map((r) => roleMap.get(r)).join(" "))), /* @__PURE__ */ React.createElement("div", {
        style: {lineHeight: 1.5},
        className: "margin-bottom-8"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "inline-flex-row flex-center"
      }, /* @__PURE__ */ React.createElement(Icon, {
        iconName: "MultiSelect",
        className: "margin-right-4"
      }), pluralize("Opinion", votes), ":"), /* @__PURE__ */ React.createElement("span", {
        className: "secondary-text"
      }, " ", votes.map((v) => voteMap.get(v)).join(" "))), /* @__PURE__ */ React.createElement("div", {
        className: "",
        style: {lineHeight: 1.5}
      }, /* @__PURE__ */ React.createElement(TruncatedText, {
        text
      })))), isEditing !== comment && /* @__PURE__ */ React.createElement(MoreButton, {
        contextualMenuProps: {
          menuProps: {id: "more-menu", items: [
            {
              iconProps: {iconName: "Edit"},
              id: "edit",
              text: "Edit",
              disabled: isEditing !== void 0,
              onActivate: () => void (this.isEditing = comment)
            },
            {
              iconProps: {iconName: "Delete"},
              id: "delete",
              text: "Delete",
              onActivate: () => void store.comments.splice(i, 1)
            }
          ]}
        }
      }));
    }), !userHasCommented && /* @__PURE__ */ React.createElement("div", {
      className: "flex-row",
      style: {marginTop: 8}
    }, /* @__PURE__ */ React.createElement(VssPersona, {
      size: "small"
    }), /* @__PURE__ */ React.createElement(FormItem, {
      error: this.newCommentError,
      className: "flex-grow"
    }, /* @__PURE__ */ React.createElement(TextField, {
      ariaLabel: "Write a comment...",
      placeholder: "Write a comment...",
      value: this.newCommentText,
      onChange: (e, newValue) => {
        this.newCommentText.value = newValue;
        this.newCommentError.value = !this.newCommentText.value;
      },
      onKeyPress: (e) => {
        if (e.key !== "Enter")
          return;
        e.preventDefault();
        store.comments.push(new Comment(user, new Date().toISOString(), [], [], this.newCommentText.value));
        this.newCommentText.value = "";
      },
      multiline: true,
      rows: 4
    }))))));
  }
};
__decorate([
  observable
], Discussion.prototype, "isEditing", 2);
Discussion = __decorate([
  observer
], Discussion);
