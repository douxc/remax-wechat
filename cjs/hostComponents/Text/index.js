"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/text.html
 */
exports.Text = (0, runtime_1.createHostComponent)('text');
exports.Text.defaultProps = {
    selectable: false,
    userSelect: false,
    decode: false,
};
