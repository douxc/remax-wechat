"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/view.html
 */
exports.View = (0, runtime_1.createHostComponent)('view');
exports.View.defaultProps = {
    hoverClassName: 'none',
    hoverStopPropagation: false,
    hoverStartTime: 50,
    hoverStayTime: 400,
};
