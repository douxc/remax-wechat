"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ad = void 0;
var runtime_1 = require("@remax/runtime");
exports.Ad = (0, runtime_1.createHostComponent)('ad');
exports.Ad.defaultProps = {
    adType: 'banner',
    adTheme: 'white',
};
