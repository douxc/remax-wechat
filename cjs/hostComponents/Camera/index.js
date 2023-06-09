"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/camera.html
 */
exports.Camera = (0, runtime_1.createHostComponent)('camera');
exports.Camera.defaultProps = {
    mode: 'normal',
    resolution: 'medium',
    devicePosition: 'back',
    flash: 'auto',
    frameSize: 'medium',
};
