"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
 */
exports.Canvas = (0, runtime_1.createHostComponent)('canvas');
exports.Canvas.defaultProps = {
    disableScroll: false,
};
