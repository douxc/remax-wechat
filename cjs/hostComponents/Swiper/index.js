"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swiper = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html
 */
exports.Swiper = (0, runtime_1.createHostComponent)('swiper');
exports.Swiper.defaultProps = {
    indicatorDots: false,
    indicatorColor: 'rgba(0, 0, 0, .3)',
    indicatorActiveColor: '#000000',
    autoplay: false,
    current: 0,
    interval: 5000,
    duration: 500,
    circular: false,
    vertical: false,
    previousMargin: '0px',
    nextMargin: '0px',
    displayMultipleItems: 1,
    skipHiddenItemLayout: false,
    easingFunction: 'default',
    snapToEdge: false,
};
