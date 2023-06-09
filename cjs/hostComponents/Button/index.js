"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/button.html
 * https://q.qq.com/wiki/develop/miniprogram/component/form/button.html
 */
exports.Button = (0, runtime_1.createHostComponent)('button');
exports.Button.defaultProps = {
    hoverClassName: 'button-hover',
    hoverStartTime: 20,
    hoverStayTime: 70,
};
