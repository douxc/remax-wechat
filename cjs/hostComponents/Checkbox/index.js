"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html
 */
exports.Checkbox = (0, runtime_1.createHostComponent)('checkbox');
exports.Checkbox.defaultProps = {
    disabled: false,
    checked: false,
    color: '#09bb07',
};
