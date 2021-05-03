function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
export default {
  get download() {
    return getParam("download") != null;
  },
  get filterKeywords() {
    return getParam("filterKeywords") ?? "";
  },
  get mockRepoEnabled() {
    const value = getParam("mockRepoEnabled");
    if (value === "true")
      return true;
    if (value === "false")
      return false;
    return void 0;
  },
  get mockZeroResults() {
    const value = getParam("mockZeroResults");
    if (value === "")
      return true;
    return void 0;
  },
  get mockSomeResults() {
    const value = getParam("mockSomeResults");
    if (value === "")
      return true;
    return void 0;
  },
  get repo() {
    return getParam("repo");
  },
  get repository() {
    return getParam("repository");
  },
  get secretHash() {
    return getParam("secretHash") ?? void 0;
  }
};
