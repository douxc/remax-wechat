"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovableView = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html
 */
exports.MovableView = (0, runtime_1.createHostComponent)('movable-view');
exports.MovableView.defaultProps = {
    direction: 'none',
    inertia: false,
    outOfBounds: false,
    damping: 20,
    friction: 2,
    disabled: false,
    scale: false,
    scaleMin: 0,
    scaleMax: 10,
    scaleValue: 1,
    animation: true,
};
