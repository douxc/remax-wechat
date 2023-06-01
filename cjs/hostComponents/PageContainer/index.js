"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContainer = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html
 */
exports.PageContainer = (0, runtime_1.createHostComponent)('page-container');
exports.PageContainer.defaultProps = {
    show: false,
    duration: 300,
    zIndex: 100,
    overlay: true,
    position: 'bottom',
    round: false,
    closeOnSlideDown: false,
};
