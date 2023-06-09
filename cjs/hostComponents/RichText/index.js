"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichText = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html
 */
exports.RichText = (0, runtime_1.createHostComponent)('rich-text');
exports.RichText.defaultProps = {
    nodes: [],
};
