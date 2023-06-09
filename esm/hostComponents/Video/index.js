var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
var hostComponentName = 'video';
var VideoRender = function (props, ref) {
    var children = props.children, restProps = __rest(props, ["children"]);
    var videoProps = __assign(__assign({}, restProps), { ref: ref });
    return React.createElement(hostComponentName, videoProps, children);
};
/**
 * video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高
 * https://developers.weixin.qq.com/miniprogram/dev/component/video.html
 */
var RemaxVideo = React.forwardRef(VideoRender);
RemaxVideo.defaultProps = {
    controls: true,
    danmuBtn: false,
    enableDanmu: false,
    autoplay: false,
    loop: false,
    muted: false,
    initialTime: 0,
    pageGesture: false,
    showProgress: true,
    showFullscreenBtn: true,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    enableProgressGesture: true,
    objectFit: 'contain',
    showMuteBtn: false,
    playBtnPosition: 'bottom',
    enablePlayGesture: false,
    autoPauseIfNavigate: true,
    autoPauseIfOpenNative: true,
    vslideGesture: false,
    vslideGestureInFullscreen: true,
    showCastingButton: false,
    pictureInPictureShowProgress: false,
    enableAutoRotation: false,
    showScreenLockButton: false,
    showSnapshotButton: false,
    showBackgroundPlaybackButton: false,
};
export var Video = createHostComponent(hostComponentName, RemaxVideo);
