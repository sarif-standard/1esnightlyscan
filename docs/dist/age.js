import dayjs from "../web_modules/dayjs.js";
import relativeTime from "../web_modules/dayjs/plugin/relativeTime.js";
import timezone from "../web_modules/dayjs/plugin/timezone.js";
import utc from "../web_modules/dayjs/plugin/utc.js";
import React from "../web_modules/react.js";
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);
const age = (() => {
  const local = dayjs();
  const pacific = local.tz("America/Los_Angeles");
  const pacificMidnight = pacific.startOf("day");
  const pacificNoon = pacificMidnight.add(12, "hour");
  return pacific >= pacificNoon ? pacificNoon.from(pacific) : pacificMidnight.from(pacific);
})();
export function Age() {
  return /* @__PURE__ */ React.createElement("span", null, "Current as of ", age);
}
