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
import {Ago} from "../_snowpack/pkg/azure-devops-ui/Ago.js";
import {Button} from "../_snowpack/pkg/azure-devops-ui/Button.js";
import {Card} from "../_snowpack/pkg/azure-devops-ui/Card.js";
import {Page} from "../_snowpack/pkg/azure-devops-ui/Page.js";
import {Pill, PillSize} from "../_snowpack/pkg/azure-devops-ui/Pill.js";
import {SurfaceBackground, SurfaceContext} from "../_snowpack/pkg/azure-devops-ui/Surface.js";
import {TextField} from "../_snowpack/pkg/azure-devops-ui/TextField.js";
import {copyToClipboard} from "../_snowpack/pkg/azure-devops-ui/Utils/ClipboardUtils.js";
import {VssPersona} from "../_snowpack/pkg/azure-devops-ui/VssPersona.js";
import {observable, runInAction} from "../_snowpack/pkg/mobx.js";
import {observer} from "../_snowpack/pkg/mobx-react.js";
import * as React from "../_snowpack/pkg/react.js";
import {Component} from "../_snowpack/pkg/react.js";
import {Comment} from "./comment.js";
import {CommentEditor2} from "./commentEditor2.js";
import {roleMap, voteMap} from "./discussion.js";
function Meter(props) {
  const {value, maxValue} = props;
  return value ? /* @__PURE__ */ React.createElement("div", {
    className: "meter margin-top-8",
    style: {width: `${value / maxValue * 100}%`}
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "meter margin-top-8 meter-empty"
  });
}
function PersonaStack(props) {
  const {names} = props;
  const personas = names.slice(0, 3).map((name, i) => /* @__PURE__ */ React.createElement(VssPersona, {
    key: i,
    displayName: name,
    size: "extra-extra-small",
    className: `personaStacking zIndex-${2 - i}`
  }));
  const moreThanThree = names.slice(3);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, personas, !!moreThanThree.length && /* @__PURE__ */ React.createElement(Pill, {
    size: PillSize.compact,
    className: "margin-left-4"
  }, "+", moreThanThree.length));
}
export let Discussion2 = class extends Component {
  constructor(props) {
    super(props);
    this.commentBeingEditedUser = void 0;
    const {store, user} = this.props;
    store.onLoad = () => {
      const userAlreadyLeftAComment = store.comments.some((comment) => comment.who === user);
      if (!userAlreadyLeftAComment) {
        const comment = JSON.parse(JSON.stringify(new Comment(user, new Date().toISOString(), [], [], "")));
        store.comments.push(comment);
        runInAction(() => this.commentBeingEditedUser = user);
      }
    };
  }
  render() {
    const {store, user} = this.props;
    if (!store.secretHash)
      return null;
    const {commentBeingEditedUser} = this;
    const sorted = store.comments.slice().sort((a, b) => new Date(b.when).getTime() - new Date(a.when).getTime());
    {
      const i = sorted.findIndex((comment) => comment.who === user);
      if (i > -1)
        sorted.splice(0, 0, ...sorted.splice(i, 1));
    }
    const voteCounts = new Map([...voteMap.keys()].map((key) => [key, []]));
    store.comments.forEach((comment) => {
      comment.votes.forEach((vote) => {
        voteCounts.get(vote).push(comment.who);
      });
    });
    const voteItems = [...voteCounts.entries()].map(([id, names]) => ({id, names}));
    voteItems.sort((a, b) => b.names.length - a.names.length);
    const maxCount = voteItems.reduce((max, curr) => Math.max(max, curr.names.length), 1);
    return /* @__PURE__ */ React.createElement(SurfaceContext.Provider, {
      value: {background: SurfaceBackground.neutral}
    }, /* @__PURE__ */ React.createElement(Page, {
      className: "discussion2 rhythm-vertical-16"
    }, /* @__PURE__ */ React.createElement(Card, {
      className: "padding-vertical-8-important",
      contentProps: {className: "rhythm-vertical-16"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex-row flex-center rhythm-horizontal-8"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "font-weight-semibold"
    }, "Secret Hash"), /* @__PURE__ */ React.createElement("div", {
      className: "flex-row flex-center flex-grow"
    }, /* @__PURE__ */ React.createElement(TextField, {
      value: store.secretHash,
      containerClassName: "flex-grow",
      readOnly: true
    }), /* @__PURE__ */ React.createElement(Button, {
      iconProps: {iconName: "Copy"},
      subtle: true,
      onClick: () => copyToClipboard(store.secretHash ?? ""),
      tooltipProps: {text: "Copy to clipboard"}
    }))), voteItems.map((voteItem) => {
      if (!voteItem.names.length)
        return null;
      return /* @__PURE__ */ React.createElement("div", {
        key: voteItem.id,
        className: "flex-column"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "flex-row rhythm-horizontal-4"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "flex-grow text-ellipsis"
      }, voteMap.get(voteItem.id)), /* @__PURE__ */ React.createElement("div", {
        className: "flex-row flex-center"
      }, /* @__PURE__ */ React.createElement(PersonaStack, {
        names: voteItem.names
      }))), /* @__PURE__ */ React.createElement(Meter, {
        value: voteItem.names.length,
        maxValue: maxCount
      }));
    })), sorted.map((comment, i) => /* @__PURE__ */ React.createElement(Card, {
      key: i,
      titleProps: {
        text: /* @__PURE__ */ React.createElement("span", {
          className: "flex-row rhythm-horizontal-8"
        }, /* @__PURE__ */ React.createElement(VssPersona, {
          key: i,
          displayName: comment.who,
          size: "small"
        }), /* @__PURE__ */ React.createElement("span", {
          className: "flex-column justify-center rhythm-vertical-4"
        }, /* @__PURE__ */ React.createElement("span", {
          className: "flex-row body-m rhythm-horizontal-8 "
        }, /* @__PURE__ */ React.createElement("span", {
          className: "text-ellipsis"
        }, comment.who), /* @__PURE__ */ React.createElement(Ago, {
          date: new Date(comment.when),
          className: "secondary-text"
        }))))
      },
      headerCommandBarItems: comment.who === user && commentBeingEditedUser !== comment.who ? [
        {
          id: "edit",
          iconProps: {iconName: "Edit"},
          disabled: commentBeingEditedUser === comment.who,
          onActivate: () => void (this.commentBeingEditedUser = comment.who),
          subtle: true
        }
      ] : void 0,
      contentProps: {className: "rhythm-vertical-8"}
    }, commentBeingEditedUser === comment.who ? /* @__PURE__ */ React.createElement(CommentEditor2, {
      comment,
      onCancel: () => {
        this.commentBeingEditedUser = void 0;
      },
      onUpdate: (role, vote, text) => {
        runInAction(() => {
          comment.when = new Date().toISOString();
          comment.roles = role;
          comment.votes = vote;
          comment.text = text;
        });
        this.commentBeingEditedUser = void 0;
      }
    }) : /* @__PURE__ */ React.createElement(React.Fragment, null, !!comment.roles.length && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Role", comment.roles.length > 1 ? "s" : "", ":"), " ", comment.roles.map((role) => roleMap.get(role)).join(" ")), !!comment.votes.length && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Observation", comment.votes.length > 1 ? "s" : "", ":"), " ", comment.votes.map((vote) => voteMap.get(vote)).join(" ")), !!comment.text && /* @__PURE__ */ React.createElement("div", {
      className: "margin-top-12"
    }, /* @__PURE__ */ React.createElement("strong", null, "Comments:"), " ", comment.text), !comment.roles.length && !comment.votes.length && !comment.text && /* @__PURE__ */ React.createElement("div", {
      className: "secondary-text text-center"
    }, "Viewed this live secret report"))))));
  }
};
__decorate([
  observable
], Discussion2.prototype, "commentBeingEditedUser", 2);
Discussion2 = __decorate([
  observer
], Discussion2);
