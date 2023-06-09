"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovableArea = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html
 */
exports.MovableArea = (0, runtime_1.createHostComponent)('movable-area');
exports.MovableArea.defaultProps = {
    scaleArea: false,
};
