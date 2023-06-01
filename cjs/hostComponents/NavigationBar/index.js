"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationBar = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * 页面导航条配置节点，用于指定导航栏的一些属性。只能是 page-meta 组件内的第一个节点，需要配合它一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html
 */
exports.NavigationBar = (0, runtime_1.createHostComponent)('navigation-bar');
exports.NavigationBar.defaultProps = {
    loading: false,
    colorAnimationDuration: 0,
    colorAnimationTimingFunc: 'linear',
};
