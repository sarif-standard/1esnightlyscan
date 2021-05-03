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
import {observable} from "../web_modules/mobx.js";
import {deepObserve} from "../web_modules/mobx-utils.js";
export class DiscussionStore {
  constructor(instance, secretHash) {
    this.instance = instance;
    this.secretHash = secretHash;
    this.comments = [];
    if (!secretHash)
      return;
    (async () => {
      const headers = await this.getHeaders();
      const response = await fetch(`https://1esnightlyscandiscussion.azurewebsites.net/discussions/${secretHash}`, {headers});
      this.comments = await response.json();
      deepObserve(this.comments, () => this.publish());
      this.onLoad?.();
    })();
  }
  async publish() {
    if (!this.secretHash)
      return;
    const headers = await this.getHeaders();
    headers.append("Content-Type", "application/json");
    await fetch(`https://1esnightlyscandiscussion.azurewebsites.net/discussions/${this.secretHash}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(this.comments)
    });
  }
  async getHeaders() {
    const {instance} = this;
    const headers = new Headers();
    const {accessToken: funcToken} = await instance.acquireTokenSilent({
      account: instance.getAllAccounts()[0],
      scopes: ["api://ecd84172-7f45-4175-b1c2-f50301d8d705/Comments.ReadWrite"]
    });
    headers.append("Authorization", `Bearer ${funcToken}`);
    return headers;
  }
}
__decorate([
  observable
], DiscussionStore.prototype, "comments", 2);
