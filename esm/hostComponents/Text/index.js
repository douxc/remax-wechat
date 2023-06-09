import { createHostComponent } from '@remax/runtime';
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/text.html
 */
export var Text = createHostComponent('text');
Text.defaultProps = {
    selectable: false,
    userSelect: false,
    decode: false,
};
