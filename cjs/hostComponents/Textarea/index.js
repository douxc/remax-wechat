"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html
 */
exports.Textarea = (0, runtime_1.createHostComponent)('textarea');
exports.Textarea.defaultProps = {
    placeholderClassName: 'textarea-placeholder',
    disabled: false,
    maxlength: 140,
    autoFocus: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: -1,
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    holdKeyboard: false,
    disableDefaultPadding: false,
};
