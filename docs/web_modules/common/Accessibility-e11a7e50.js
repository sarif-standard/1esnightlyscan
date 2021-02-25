/**
 * Maximum number of messages to have in the containers that announce() uses.
 */
var MaxAnnounceChildren = 1;
/**
 * Maximum number of containers for announce() to have per assertiveness level.
 */
var MaxAnnounceContainers = 10;
/**
 * ID of the container for the announce() containers.
 */
var ParentContainerId = "utils-accessibility-announce";
var nextId = 0;
/**
 * Gets the parent container for all the announce containers.
 */
function getAnnounceContainer() {
    var container = document.getElementById(ParentContainerId);
    if (!container) {
        container = document.createElement("div");
        container.id = ParentContainerId;
        container.classList.add("visually-hidden");
        document.body.appendChild(container);
    }
    return container;
}
/**
 * Causes screen readers to read the given message.
 * @param message
 * @param assertive if true, the screen reader will read the announcement immediately, instead of waiting for "the next graceful opportunity"
 */
function announce(message, assertive, pause) {
    if (assertive === void 0) { assertive = false; }
    if (pause === void 0) { pause = 100; }
    if (!message) {
        return;
    }
    var assertiveness = assertive ? "assertive" : "polite";
    var parentContainer = getAnnounceContainer();
    var containerList = parentContainer.getElementsByClassName(assertiveness);
    var container = (containerList.length > 0 ? containerList[containerList.length - 1] : null);
    if (!container || container.childElementCount >= MaxAnnounceChildren) {
        container = document.createElement("div");
        container.id = ParentContainerId + nextId++;
        container.setAttribute("aria-live", assertiveness);
        container.classList.add(assertiveness);
        container.setAttribute("aria-relevant", "additions");
        parentContainer.appendChild(container);
        // getElementsByClassName() returns a live list so the new container is already in this list
        if (containerList.length > MaxAnnounceContainers) {
            // remove old containers
            parentContainer.removeChild(containerList[0]);
        }
        window.setTimeout(function () {
            // live regions get announced on update not create, so wait a bit and then update
            announce(message, assertive);
        }, pause);
    }
    else {
        var child = document.createElement("p");
        child.textContent = message;
        container.appendChild(child);
        // toggling the visibility like this seems to help Edge
        container.style.visibility = "hidden";
        container.style.visibility = "visible";
    }
}

export { announce as a };
