"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoipRoom = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * 多人音视频对话。需用户授权 scope.camera、scope.record。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html
 */
exports.VoipRoom = (0, runtime_1.createHostComponent)('voip-room');
exports.VoipRoom.defaultProps = {
    mode: 'camera',
    devicePosition: 'front',
};
