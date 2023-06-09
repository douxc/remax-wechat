"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivePlayer = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html
 */
exports.LivePlayer = (0, runtime_1.createHostComponent)('live-player');
exports.LivePlayer.defaultProps = {
    mode: 'live',
    autoplay: false,
    muted: false,
    orientation: 'vertical',
    objectFit: 'contain',
    backgroundMute: false,
    minCache: 1,
    maxCache: 3,
    soundMode: 'speaker',
    autoPauseIfNavigate: true,
    autoPauseIfOpenNative: true,
};
