"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/form.html
 */
exports.Form = (0, runtime_1.createHostComponent)('form');
exports.Form.defaultProps = {
    reportSubmit: false,
    reportSubmitTimeout: 0,
};
