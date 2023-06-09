"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html
 */
exports.Navigator = (0, runtime_1.createHostComponent)('navigator');
exports.Navigator.defaultProps = {
    target: 'self',
    openType: 'navigate',
    delta: 1,
    hoverClassName: 'navigator-hover',
    hoverStopPropagation: false,
    hoverStartTime: 50,
    hoverStayTime: 600,
};
