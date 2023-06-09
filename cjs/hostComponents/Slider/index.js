"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/slider.html
 */
exports.Slider = (0, runtime_1.createHostComponent)('slider');
exports.Slider.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    value: 0,
    color: '#e9e9e9',
    selectedColor: '#1aad19',
    activeColor: '#1aad19',
    backgroundColor: '#e9e9e9',
    blockSize: 28,
    blockColor: '#ffffff',
    showValue: false,
};
