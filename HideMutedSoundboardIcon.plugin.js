/**
 * @name HideSoundboardMutedIcon
 * @author SharpChedda
 * @description Hides the new muted soundboard icons that appear in calls.
 * @version 1.0.1
 */

module.exports = class HideSoundboardMutedIcon {
    start() {
        const styleId = "HideSoundboardMutedIcon";
        const pathPrefix = "M3.86 8.86c1.78-1.78 5.75-.7";

        BdApi.DOM.removeStyle(styleId);

        const css = `
            [class*="titleIcon"]:has(path[d^="${pathPrefix}"]),
            [data-call-tile] svg:has(path[d^="${pathPrefix}"]),
            div[class*="statusContainer"]:has(path[d^="${pathPrefix}"]) {
                display: none !important;
            }

            [class*="callAvatarMaskContainer"]:has(path[d^="${pathPrefix}"]) foreignObject {
                mask: none !important;
                -webkit-mask: none !important;
            }

            [class*="overlayBottom"]:has([class*="idle"]) [class*="experimentOverlayTitle"]:has(path[d^="${pathPrefix}"]):has(> :only-child),
            [class*="overlayBottom"]:has([class*="idle"]) [class*="experimentOverlayTitle"]:has(path[d^="${pathPrefix}"]):has(> :nth-child(2):last-child) {
                opacity: 0 !important;
                pointer-events: none !important;
            }
        `;

        BdApi.DOM.addStyle(styleId, css);
    }

    stop() {
        BdApi.DOM.removeStyle("HideSoundboardMutedIcon");
    }
};
