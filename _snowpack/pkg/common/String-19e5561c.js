/**
 * Generate a string using a format string and arguments.
 *
 * @param format Format string
 * @param args Arguments to use as replacements
 */
function format(format) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return _stringFormat(false, format, args);
}
function _stringFormat(useLocale, format, args) {
    var result = "";
    for (var i = 0;;) {
        var open_1 = format.indexOf("{", i);
        var close_1 = format.indexOf("}", i);
        if (open_1 < 0 && close_1 < 0) {
            result += format.slice(i);
            break;
        }
        if (close_1 > 0 && (close_1 < open_1 || open_1 < 0)) {
            if (format.charAt(close_1 + 1) !== "}") {
                throw new Error("The format string contains an unmatched opening or closing brace.");
            }
            result += format.slice(i, close_1 + 1);
            i = close_1 + 2;
            continue;
        }
        result += format.slice(i, open_1);
        i = open_1 + 1;
        if (format.charAt(i) === "{") {
            result += "{";
            i++;
            continue;
        }
        if (close_1 < 0) {
            throw new Error("The format string contains an unmatched opening or closing brace.");
        }
        var brace = format.substring(i, close_1);
        var colonIndex = brace.indexOf(":");
        var argNumber = parseInt(colonIndex < 0 ? brace : brace.substring(0, colonIndex), 10);
        if (isNaN(argNumber)) {
            throw new Error("The format string is invalid.");
        }
        var argFormat = colonIndex < 0 ? "" : brace.substring(colonIndex + 1);
        var arg = args[argNumber];
        if (typeof arg === "undefined" || arg === null) {
            arg = "";
        }
        if (arg.toFormattedString) {
            result += arg.toFormattedString(argFormat);
        }
        else if (arg instanceof Date) {
            result += dateToString(arg, useLocale);
        }
        else if (arg.format) {
            result += arg.format(argFormat);
        }
        else {
            result += arg.toString();
        }
        i = close_1 + 1;
    }
    return result;
}
var localeFormatters = ("Intl" in window) ? {
    date: new Intl.DateTimeFormat(),
    dateTime: new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })
} : {};
/**
 * Converts a date to a string, optionally using the locale formatter
 *
 * @param value date to convert to a string
 * @param useLocale use the locale formatter when converting to a string
 */
function dateToString(value, useLocale) {
    var localeKey = typeof useLocale === "string" ? useLocale : "dateTime";
    if (useLocale) {
        var formatter = localeFormatters[localeKey];
        if (!formatter) {
            {
                formatter = localeFormatters["dateTime"];
            }
        }
        return formatter.format(value);
    }
    else {
        return value.toString();
    }
}

export { format as f };
