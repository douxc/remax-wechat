"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
var runtime_1 = require("@remax/runtime");
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/map.html
 */
exports.Map = (0, runtime_1.createHostComponent)('map');
exports.Map.defaultProps = {
    scale: 16,
    minScale: 3,
    maxScale: 20,
    showLocation: false,
    layerStyle: 1,
    rotate: 0,
    enable3D: false,
    showCompass: false,
    showScale: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    enableSatellite: false,
    enableTraffic: false,
    setting: {},
};
