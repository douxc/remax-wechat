"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/progress.html
 */
exports.Progress = (0, runtime_1.createHostComponent)('progress');
exports.Progress.defaultProps = {
    showInfo: false,
    borderRadius: 0,
    fontSize: 16,
    strokeWidth: 6,
    color: '#09BB07',
    activeColor: '#09BB07',
    backgroundColor: '#EBEBEB',
    active: false,
    activeMode: 'backwards',
    duration: 30,
};
