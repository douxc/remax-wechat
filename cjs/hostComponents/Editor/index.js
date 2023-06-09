"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/editor.html
 */
exports.Editor = (0, runtime_1.createHostComponent)('editor');
exports.Editor.defaultProps = {
    readOnly: false,
    showImgSize: false,
    showImgToolbar: false,
    showImgResize: false,
};
