import { _ as __extends, a as __assign } from '../common/Observable-24aa1084.js';
import '../common/core-1947a0ef.js';
import { r as react } from '../common/index-abdc4d2d.js';
import { I as Icon } from '../common/Icon.Props-be292e60.js';
import { T as Tooltip } from '../common/Tooltip-69aedae2.js';
import { c as css, K as KeyCode } from '../common/Util-e30cbaf3.js';
import { g as getColorString } from '../common/Color-c39ec9d4.js';
import '../common/process-2545f00a.js';
import '../common/_commonjsHelpers-4f955397.js';
import '../common/index-2be6b7dd.js';
import '../common/SelectionObserver-a72f3be5.js';
import '../common/Surface-779be6fe.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/VssPersona/VssPersona.css */
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
__snowpack__injectStyle(".vss-Persona .vss-Persona-content {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  color: white;\n  background-color: rgba( 166, 166, 166 ,  1 );\n  background-color: rgba( var(--palette-neutral-30,166, 166, 166) ,  1 );\n  user-select: none; }\n  .vss-Persona .vss-Persona-content.using-image {\n    object-fit: cover;\n    background-color: transparent; }\n  .vss-Persona .vss-Persona-content.extra-extra-small {\n    font-size: 0.6875rem;\n    line-height: 15px; }\n  .vss-Persona .vss-Persona-content.extra-small {\n    font-size: 0.6875rem;\n    line-height: 17px; }\n  .vss-Persona .vss-Persona-content.extra-small-plus {\n    font-size: 0.6875rem;\n    line-height: 19px; }\n  .vss-Persona .vss-Persona-content.small {\n    font-size: 0.6875rem;\n    line-height: 24px; }\n  .vss-Persona .vss-Persona-content.small-plus {\n    font-size: 0.875rem;\n    line-height: 27px; }\n  .vss-Persona .vss-Persona-content.medium {\n    font-size: 0.875rem;\n    line-height: 31px; }\n  .vss-Persona .vss-Persona-content.medium-plus {\n    font-size: 0.875rem;\n    line-height: 39px; }\n  .vss-Persona .vss-Persona-content.large {\n    font-size: 17px;\n    line-height: 46px; }\n  .vss-Persona .vss-Persona-content.extra-large {\n    font-size: 1.75rem;\n    line-height: 70px; }\n  .vss-Persona .vss-Persona-content.extra-extra-large {\n    font-size: 2.5rem;\n    line-height: 98px; }\n\n.vss-Persona.extra-extra-small {\n  width: 16px;\n  height: 16px; }\n\n.vss-Persona.extra-small {\n  width: 18px;\n  height: 18px; }\n\n.vss-Persona.extra-small-plus {\n  width: 20px;\n  height: 20px; }\n\n.vss-Persona.small {\n  width: 24px;\n  height: 24px; }\n\n.vss-Persona.small-plus {\n  width: 28px;\n  height: 28px; }\n\n.vss-Persona.medium {\n  width: 32px;\n  height: 32px; }\n\n.vss-Persona.medium-plus {\n  width: 40px;\n  height: 40px; }\n\n.vss-Persona.large {\n  width: 48px;\n  height: 48px; }\n\n.vss-Persona.extra-large {\n  width: 72px;\n  height: 72px; }\n\n.vss-Persona.extra-extra-large {\n  width: 100px;\n  height: 100px; }\n");

var PERSONA_COLOR_BLUE = { red: 45, green: 137, blue: 239 };
var PERSONA_COLOR_PALETTE = [
    { red: 153, green: 180, blue: 51 },
    { red: 107, green: 165, blue: 231 },
    { red: 231, green: 115, blue: 189 },
    { red: 0, green: 140, blue: 0 },
    { red: 30, green: 113, blue: 69 },
    { red: 255, green: 0, blue: 151 },
    { red: 126, green: 56, blue: 120 },
    { red: 96, green: 60, blue: 186 },
    { red: 116, green: 133, blue: 202 },
    { red: 0, green: 171, blue: 169 },
    PERSONA_COLOR_BLUE,
    { red: 43, green: 87, blue: 151 },
    { red: 218, green: 83, blue: 44 },
    { red: 185, green: 29, blue: 71 } // Dark Red
];
// Char.IsLetter ranges
var LETTERS = [
    "[\u0030-\u0039]",
    "[\u0041-\u005A]",
    "[\u0400-\u042F]",
    "[\u0061-\u007A]",
    "[\u03AC-\u03CE]",
    "[\u01C5]",
    "[\u1FFC]",
    "[\u02B0-\u02C1]",
    "[\u1D2C-\u1D61]",
    "[\u05D0-\u05EA]",
    "[\u0621-\u063A]",
    "[\u4E00-\u9FC3]",
    "[\u00C0-\u00FF]",
    "[\u0100-\u017F]",
    "[\u0180-\u024F]" // LATIN-1 EXTENDED-B
];
var LETTERS_REGEX = LETTERS.join("|");
function getInitialsColorFromName(displayName) {
    if (!displayName) {
        return PERSONA_COLOR_BLUE;
    }
    var hashCode = 0;
    for (var i = displayName.length - 1; i >= 0; i--) {
        var ch = displayName.charCodeAt(i);
        var shift = i % 8;
        // tslint:disable-next-line:no-bitwise
        hashCode ^= (ch << shift) + (ch >> (8 - shift));
    }
    return PERSONA_COLOR_PALETTE[hashCode % PERSONA_COLOR_PALETTE.length];
}
function getInitialsFromName(displayName) {
    if (!displayName) {
        return "";
    }
    var segments = displayName.split(" ").filter(function (x) { return x !== ""; });
    if (segments.length === 0) {
        return "";
    }
    var firstNameInitial = "";
    var lastNameInitial = "";
    segments.forEach(function (segment) {
        if (segment[0].match(LETTERS_REGEX)) {
            if (firstNameInitial.length === 0) {
                firstNameInitial = segment[0];
            }
            else {
                lastNameInitial = segment[0];
            }
        }
    });
    return firstNameInitial.concat(lastNameInitial).toUpperCase();
}

/**
 * Renders a user's profile/identity/avatar image.
 */
var VssPersona = /** @class */ (function (_super) {
    __extends(VssPersona, _super);
    function VssPersona(props) {
        var _this = _super.call(this, props) || this;
        _this.setTargetElement = function (element) {
            _this.targetElement = element;
        };
        _this.onImageError = function (event) {
            if (_this.props.showInitialsOnImageError) {
                _this.setState({ imageError: true });
            }
            else if (_this.props.onImageError) {
                _this.props.onImageError(event);
            }
        };
        _this.handleKeyDown = function (e) {
            if (e.keyCode === KeyCode.enter || e.keyCode === KeyCode.space) {
                _this.showPersonaCard();
            }
        };
        _this.showPersonaCard = function () {
            if (!_this.props.suppressPersonaCard) {
                _this.setState({ showPersonaCard: true });
            }
        };
        _this.hidePersonaCard = function () {
            _this.setState({ showPersonaCard: false });
        };
        _this.state = {
            imageError: false,
            showPersonaCard: false,
            imageUrlVal: _this._getImageUrl(props)
        };
        return _this;
    }
    VssPersona.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        this.setState({
            showPersonaCard: false,
            imageUrlVal: this._getImageUrl(nextProps)
        });
    };
    VssPersona.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!nextProps.identityDetailsProvider && (this.props.imageUrl !== nextProps.imageUrl || this.props.displayName !== nextProps.displayName)) {
            return true;
        }
        else if (!this.props.identityDetailsProvider && !nextProps.identityDetailsProvider) {
            return false;
        }
        else if (!this.props.identityDetailsProvider || !nextProps.identityDetailsProvider) {
            return true;
        }
        return (this.props.size !== nextProps.size ||
            this.props.cssClass !== nextProps.cssClass ||
            this.props.identityDetailsProvider !== nextProps.identityDetailsProvider ||
            this.state.showPersonaCard !== nextState.showPersonaCard);
    };
    VssPersona.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, identityDetailsProvider = _a.identityDetailsProvider, _b = _a.size, size = _b === void 0 ? "medium" : _b, _c = _a.imgAltText, imgAltText = _c === void 0 ? "" : _c, imageUrl = _a.imageUrl, displayName = _a.displayName;
        var imageUrlVal = !identityDetailsProvider ? imageUrl : this.state.imageUrlVal;
        // Set the focus and aria-expand attributes based on props passed
        var additionalAttributes = {};
        if (this.props.dataIsFocusable) {
            additionalAttributes["data-is-focusable"] = true;
        }
        if (this.props.isTabStop) {
            additionalAttributes["tabIndex"] = 0;
        }
        // Setting the aria related properties and user action delegates unless we supress persona card or persona card isnt't provided
        if (!this.props.suppressPersonaCard && this.props.identityDetailsProvider && this.props.identityDetailsProvider.onRenderPersonaCard) {
            additionalAttributes["aria-expanded"] = this.state.showPersonaCard;
            additionalAttributes["onKeyDown"] = this.handleKeyDown;
            additionalAttributes["onClick"] = this.showPersonaCard;
            additionalAttributes["role"] = "button";
        }
        var displayNameVal = !identityDetailsProvider ? displayName : identityDetailsProvider.getDisplayName();
        if (ariaLabel) {
            additionalAttributes["aria-label"] = ariaLabel;
        }
        else if (displayNameVal) {
            additionalAttributes["aria-label"] = displayNameVal;
        }
        else {
            additionalAttributes["aria-hidden"] = "true";
        }
        var backgroundColor = displayNameVal === undefined ? undefined : getInitialsColorFromName(displayNameVal);
        var imageElement = imageUrlVal !== undefined && !this.state.imageError ? (react.createElement("img", { className: "vss-Persona-content using-image", src: imageUrlVal, alt: imgAltText, onError: this.onImageError })) : (react.createElement("div", { className: css("vss-Persona-content", size), style: backgroundColor && { background: getColorString(backgroundColor) } }, displayNameVal ? react.createElement("span", null, getInitialsFromName(displayNameVal)) : react.createElement(Icon, { iconName: "Contact" })));
        // Getting the reference to the div around the image because the Callout within PersonaCard has positioning problems in some cases when passing in img element as the target
        return (react.createElement(react.Fragment, null,
            react.createElement(Tooltip, { text: displayName, showOnFocus: true },
                react.createElement("div", __assign({ className: css("vss-Persona flex-noshrink", this.props.className, this.props.cssClass, size), ref: this.setTargetElement }, additionalAttributes), imageElement)),
            !this.props.suppressPersonaCard &&
                this.state.showPersonaCard &&
                identityDetailsProvider &&
                identityDetailsProvider.onRenderPersonaCard &&
                identityDetailsProvider.onRenderPersonaCard(this.targetElement, this.hidePersonaCard)));
    };
    /**
     * Resolve the URL for the profile image.
     * @param props
     */
    VssPersona.prototype._getImageUrl = function (props) {
        var identityDetailsProvider = props.identityDetailsProvider, _a = props.size, size = _a === void 0 ? "medium" : _a;
        var sizePx = this._getSize(size);
        return identityDetailsProvider && identityDetailsProvider.getIdentityImageUrl(sizePx);
    };
    /**
     * Get the size in pixels for the given css class.
     * @param size
     */
    VssPersona.prototype._getSize = function (size) {
        switch (size) {
            case "extra-extra-small":
                return 16;
            case "extra-small":
                return 18;
            case "extra-small-plus":
                return 20;
            case "small":
                return 24;
            case "small-plus":
                return 28;
            case "medium":
                return 32;
            case "medium-plus":
                return 40;
            default:
            case "large":
                return 48;
            case "extra-large":
                return 72;
            case "extra-extra-large":
                return 100;
        }
    };
    return VssPersona;
}(react.Component));

export { VssPersona };
