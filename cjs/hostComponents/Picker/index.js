"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picker = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker.html
 */
exports.Picker = (0, runtime_1.createHostComponent)('picker');
exports.Picker.defaultProps = {
    mode: 'selector',
    disabled: false,
    // FIXME: value 的值与 mode 类型变化
    // value: 0,
    range: [],
    fields: 'day',
};
