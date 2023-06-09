"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */
exports.Input = (0, runtime_1.createHostComponent)('input');
exports.Input.defaultProps = {
    type: 'text',
    password: false,
    placeholderClassName: 'input-placeholder',
    disabled: false,
    cursorSpacing: 0,
    autoFocus: false,
    focus: false,
    alwaysEmbed: false,
    confirmType: 'done',
    confirmHold: false,
    maxlength: 140,
    selectionEnd: -1,
    selectionStart: -1,
    adjustPosition: true,
    holdKeyboard: false,
};
