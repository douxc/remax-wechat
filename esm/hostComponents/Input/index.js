import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */
export var Input = createHostComponent('input');
Input.defaultProps = {
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
