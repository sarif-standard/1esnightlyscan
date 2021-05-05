import './core-4c1f1367.js';
import { r as react } from './index-abdc4d2d.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Surface/Surface.css */
function __snowpack__injectStyle(css) {
  const headEl = document.head || document.getElementsByTagName('head')[0];
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  if (styleEl.styleSheet) {
    styleEl.styleSheet.cssText = css;
  } else {
    styleEl.appendChild(document.createTextNode(css));
  }
  headEl.appendChild(styleEl);
}
__snowpack__injectStyle(".bolt-condensed-horizontal-spacing {\n  padding-left: 16px;\n  padding-right: 16px; }\n\n.bolt-default-horizontal-spacing {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.bolt-relaxed-horizontal-spacing {\n  padding-left: 32px;\n  padding-right: 32px; }\n");

/**
 * Defines how spacing should be applied to the children of a container.
 */
var Spacing;
(function (Spacing) {
    Spacing[Spacing["condensed"] = 0] = "condensed";
    Spacing[Spacing["default"] = 1] = "default";
    Spacing[Spacing["relaxed"] = 2] = "relaxed";
})(Spacing || (Spacing = {}));
var SurfaceBackground;
(function (SurfaceBackground) {
    SurfaceBackground[SurfaceBackground["normal"] = 0] = "normal";
    SurfaceBackground[SurfaceBackground["neutral"] = 1] = "neutral";
    SurfaceBackground[SurfaceBackground["callout"] = 2] = "callout";
})(SurfaceBackground || (SurfaceBackground = {}));

var SurfaceContext = react.createContext({
    background: SurfaceBackground.normal,
    horizontalClassName: undefined,
    spacing: undefined,
    verticalClassName: undefined
});
var Surface = function (props) {
    return (react.createElement(SurfaceContext.Provider, { value: {
            background: props.background,
            horizontalClassName: getHorizontalSpacingClassName(props.spacing),
            spacing: props.spacing
        } }, props.children));
};
function getHorizontalSpacingClassName(spacing) {
    if (spacing !== undefined) {
        return horizontalSpacingClassNames[spacing];
    }
    return undefined;
}
var horizontalSpacingClassNames = [
    "bolt-condensed-horizontal-spacing",
    "bolt-default-horizontal-spacing",
    "bolt-relaxed-horizontal-spacing"
];

export { SurfaceContext as S, SurfaceBackground as a, Surface as b, Spacing as c };
