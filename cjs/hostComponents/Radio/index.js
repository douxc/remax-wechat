"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio.html
 */
exports.Radio = (0, runtime_1.createHostComponent)('radio');
exports.Radio.defaultProps = {
    checked: false,
    disabled: false,
    color: '#09BB07',
};
