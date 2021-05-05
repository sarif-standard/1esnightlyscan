import dayjs from "../_snowpack/pkg/dayjs.js";
import relativeTime from "../_snowpack/pkg/dayjs/plugin/relativeTime.js";
import timezone from "../_snowpack/pkg/dayjs/plugin/timezone.js";
import utc from "../_snowpack/pkg/dayjs/plugin/utc.js";
import React from "../_snowpack/pkg/react.js";
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
