function darken(color, darkenFactor) {
    var darkenMultiplier = 1 - darkenFactor;
    return {
        red: color.red * darkenMultiplier,
        green: color.green * darkenMultiplier,
        blue: color.blue * darkenMultiplier
    };
}
function getColorString(color) {
    return "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
}
function isDark(color) {
    var luminance = color.red * 0.299 + color.green * 0.587 + color.blue * 0.114;
    return luminance <= 128;
}

export { darken as d, getColorString as g, isDark as i };
