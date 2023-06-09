"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/switch.html
 */
exports.Switch = (0, runtime_1.createHostComponent)('switch');
exports.Switch.defaultProps = {
    checked: false,
    disabled: false,
    type: 'switch',
    color: '#04BE02',
};
