import { _ as __extends, a as __assign } from '../common/Observable-24aa1084.js';
import '../common/core-1947a0ef.js';
import { r as react } from '../common/index-abdc4d2d.js';
import { f as format } from '../common/String-19e5561c.js';
import { D as DayAtTimeFormat, J as JustNow, A as AgoMinutes, a as AgoHours, Y as Yesterday, T as Today } from '../common/Resources.Core-6b4f8906.js';
import { T as Tooltip } from '../common/Tooltip-69aedae2.js';
import { c as css } from '../common/Util-e30cbaf3.js';
import '../common/process-2545f00a.js';
import '../common/_commonjsHelpers-4f955397.js';
import '../common/index-2be6b7dd.js';
import '../common/SelectionObserver-a72f3be5.js';
import '../common/Surface-779be6fe.js';

var millisecond = 1;
var second = millisecond * 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
/**
 * Enum for formats of ago representations of time.
 * @readonly
 * @enum {number}
 */
var AgoFormat;
(function (AgoFormat) {
    /** The compact representation of time in ago format. */
    AgoFormat[AgoFormat["Compact"] = 0] = "Compact";
    /** The extended representation time in ago fromat. */
    AgoFormat[AgoFormat["Extended"] = 1] = "Extended";
})(AgoFormat || (AgoFormat = {}));
var agoFormatters = {};
/**
 * Generate a string indicating how long ago the date is.
 *
 * @param date The Date object to format
 * @param agoFormat The required format
 * @param now The Dateobject of reference time
 * @param locale The current locale
 * @return A friendly string
 */
function ago(date, agoFormat, now, locale) {
    var agoFormatter = agoFormatters[locale || ""];
    if (!agoFormatter) {
        agoFormatters[locale || ""] = agoFormatter = {};
    }
    if (!now) {
        now = new Date();
    }
    if (!agoFormat) {
        agoFormat = AgoFormat.Compact;
    }
    // Getting the difference in milliseconds between now and the specified date
    var diff = now.getTime() - date.getTime();
    var result = "";
    if (diff < 2 * minute) {
        result = JustNow;
    }
    else if (agoFormat === AgoFormat.Compact) {
        if (diff < 59 * minute) {
            result = format(AgoMinutes, Math.round(diff / minute));
        }
        else if (now.getDate() === date.getDate() && now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear()) {
            result = format(AgoHours, Math.round(diff / hour));
        }
        else if (diff < week && now.getDay() !== date.getDay()) {
            var yesterday = new Date();
            yesterday.setDate(now.getDate() - 1);
            if (date.getDate() === yesterday.getDate()) {
                result = Yesterday;
            }
            else {
                var options = { weekday: "long" };
                result = date.toLocaleString(locale, options);
            }
        }
        else if (now.getFullYear() === date.getFullYear()) {
            agoFormatter.ctShortFormat = agoFormatter.ctShortFormat || new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" });
            result = agoFormatter.ctShortFormat.format(date);
        }
        else {
            agoFormatter.ctLongFormat =
                agoFormatter.ctLongFormat || new Intl.DateTimeFormat(locale, { month: "short", year: "numeric", day: "numeric" });
            result = agoFormatter.ctLongFormat.format(date);
        }
    }
    else if (agoFormat === AgoFormat.Extended) {
        var dayPart = "";
        if (now.getDate() === date.getDate() && now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear()) {
            dayPart = Today;
        }
        else if (diff < week && now.getDay() !== date.getDay()) {
            var yesterday = new Date();
            yesterday.setDate(now.getDate() - 1);
            if (date.getDate() === yesterday.getDate()) {
                dayPart = Yesterday;
            }
            else {
                agoFormatter.exWeekFormat = agoFormatter.exWeekFormat || new Intl.DateTimeFormat(locale, { weekday: "short" });
                dayPart = agoFormatter.exWeekFormat.format(date);
            }
        }
        else if (now.getFullYear() === date.getFullYear()) {
            agoFormatter.exMonthFormat = agoFormatter.exMonthFormat || new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" });
            dayPart = agoFormatter.exMonthFormat.format(date);
        }
        else {
            agoFormatter.exYearFormat =
                agoFormatter.exYearFormat || new Intl.DateTimeFormat(locale, { month: "short", year: "numeric", day: "numeric" });
            dayPart = agoFormatter.exYearFormat.format(date);
        }
        agoFormatter.timeFormat = agoFormatter.timeFormat || new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "numeric" });
        var timePart = agoFormatter.timeFormat.format(date);
        result = format(DayAtTimeFormat, dayPart, timePart);
    }
    if (!result) {
        result = date.toString();
    }
    return result;
}
/**
 * Enum for formats of log representation of time.
 * @readonly
 * @enum {number}
 */
var LogType;
(function (LogType) {
    /** The ISO representation of time. */
    LogType[LogType["Full"] = 0] = "Full";
    /** The date, time and timezone representation of time. */
    LogType[LogType["Date"] = 1] = "Date";
    /** The time and timezone representation of time. */
    LogType[LogType["Local"] = 2] = "Local";
})(LogType || (LogType = {}));
var tooltipFormatters = {};
/**
 * Returns string representation for date to be used as a tooltip for ago and duration.
 *
 * @param date The Date object to format
 * @param locale The current locale
 * @return A string representation of date in requested format
 */
function tooltipString(date, locale) {
    var tooltipFormatter = tooltipFormatters[locale || ""];
    if (!tooltipFormatter) {
        tooltipFormatters[locale || ""] = tooltipFormatter = {};
    }
    // Ensure our formatters are initialized, we lazy initialize them to avoid
    // the startup time. These can be expensive (few milliseconds).
    tooltipFormatter.dayFormat = tooltipFormatter.dayFormat || new Intl.DateTimeFormat(locale, { month: "short", year: "numeric", day: "numeric" });
    tooltipFormatter.timeFormat =
        tooltipFormatter.timeFormat || new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "numeric", timeZoneName: "short" });
    // Return the formatted date/time.
    return format(DayAtTimeFormat, tooltipFormatter.dayFormat.format(date), tooltipFormatter.timeFormat.format(date));
}

var Time = /** @class */ (function (_super) {
    __extends(Time, _super);
    function Time(props) {
        var _this = _super.call(this, props) || this;
        _this.timerId = 0;
        _this.state = {
            output: ""
        };
        return _this;
    }
    Time.getDerivedStateFromProps = function (props) {
        return { output: props.getTimeString() };
    };
    Time.prototype.render = function () {
        var props = {
            "aria-hidden": this.props.ariaHidden,
            className: css(this.props.className, "bolt-time-item white-space-nowrap")
        };
        var TagName = "span";
        if (this.props.dateTime) {
            TagName = "time";
            props.dateTime = this.props.dateTime.toISOString();
        }
        var content = (react.createElement("span", { className: "text-ellipsis", "aria-label": this.state.output + " " + (this.props.ariaLabel || ""), tabIndex: this.props.tabIndex },
            react.createElement(TagName, __assign({}, props), this.state.output)));
        if (this.props.tooltipProps) {
            content = react.createElement(Tooltip, __assign({}, this.props.tooltipProps), content);
        }
        return content;
    };
    Time.prototype.componentDidUpdate = function (prevProps) {
        this.cancelNextRefresh();
        this.setNextRefresh();
    };
    Time.prototype.componentDidMount = function () {
        this.setNextRefresh();
    };
    Time.prototype.componentWillUnmount = function () {
        this.cancelNextRefresh();
    };
    Time.prototype.cancelNextRefresh = function () {
        if (this.timerId) {
            window.clearTimeout(this.timerId);
            this.timerId = 0;
        }
    };
    Time.prototype.setNextRefresh = function () {
        var _this = this;
        var t = this.props.getNextInterval();
        if (t !== -1) {
            this.timerId = window.setTimeout(function () {
                _this.setState({
                    output: _this.props.getTimeString()
                });
            }, t);
        }
    };
    return Time;
}(react.Component));

var Ago = /** @class */ (function (_super) {
    __extends(Ago, _super);
    function Ago(props) {
        var _this = _super.call(this, props) || this;
        _this.getTimeString = function () {
            return ago(_this.props.date, _this.props.format);
        };
        /**
         * Returns time in milliseconds for next refresh.
         *
         * @return A number indicating time to refresh in milliseconds
         */
        _this.getNextInterval = function () {
            return Ago.agoNextInterval(_this.props.date, _this.props.format);
        };
        _this.state = {
            tooltipProps: {}
        };
        return _this;
    }
    Ago.getDerivedStateFromProps = function (props) {
        var tooltipProps = props.tooltipProps === undefined
            ? {
                renderContent: function () {
                    return tooltipString(props.date);
                }
            }
            : props.tooltipProps;
        return { tooltipProps: tooltipProps };
    };
    Ago.prototype.render = function () {
        return (react.createElement(Time, { ariaLabel: this.props.ariaLabel ? this.props.ariaLabel : tooltipString(this.props.date), className: this.props.className, dateTime: this.props.date, getNextInterval: this.getNextInterval, getTimeString: this.getTimeString, tabIndex: this.props.tabIndex, tooltipProps: this.state.tooltipProps }));
    };
    /**
     * Returns time in milliseconds for next refresh.
     *
     * @return A number indicating time to refresh in milliseconds
     */
    Ago.agoNextInterval = function (date, format, now) {
        if (!now) {
            now = new Date();
        }
        if (!format) {
            format = AgoFormat.Compact;
        }
        // Getting the difference in seconds between now and the specified date
        var diff = now.getTime() - date.getTime();
        var interval;
        if (diff < 2 * minute) {
            interval = 2 * minute - diff;
        }
        else if (diff < 59 * minute && format === AgoFormat.Compact) {
            interval = minute - (diff % minute);
        }
        else if (now.toDateString() === date.toDateString() && format === AgoFormat.Compact) {
            interval = hour - (diff % hour);
        }
        else if ((format === AgoFormat.Extended && now.toDateString() === date.toDateString()) ||
            (diff < week && now.getDay() !== date.getDay())) {
            var tomorrow = new Date(now);
            tomorrow.setDate(now.getDate() + 1);
            tomorrow.setHours(0, 0, 0);
            interval = tomorrow.getTime() - now.getTime();
        }
        else if (now.getFullYear() === date.getFullYear()) {
            var nextYear = new Date(now.getFullYear() + 1, 0, 1);
            interval = nextYear.getTime() - now.getTime();
        }
        if (!interval || interval > week) {
            interval = -1;
        }
        return interval;
    };
    return Ago;
}(react.Component));

export { Ago };
