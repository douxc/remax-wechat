"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/image.html
 */
exports.Image = (0, runtime_1.createHostComponent)('image');
exports.Image.defaultProps = {
    mode: 'scaleToFill',
    webp: false,
    lazyLoad: false,
    showMenuByLongpress: false,
};
