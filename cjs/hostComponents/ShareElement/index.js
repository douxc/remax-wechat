"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareElement = void 0;
var runtime_1 = require("@remax/runtime");
/** @see https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html */
exports.ShareElement = (0, runtime_1.createHostComponent)('share-element');
exports.ShareElement.defaultProps = {
    transform: false,
    duration: 300,
    easingFunction: 'ease-out',
};
