"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollView = void 0;
var runtime_1 = require("@remax/runtime");
exports.ScrollView = (0, runtime_1.createHostComponent)('scroll-view');
exports.ScrollView.defaultProps = {
    upperThreshold: 50,
    lowerThreshold: 50,
    scrollX: false,
    scrollY: false,
    scrollWithAnimation: false,
    enableBackToTop: false,
    enableFlex: false,
    scrollAnchoring: false,
    refresherEnabled: false,
    refresherThreshold: 45,
    refresherDefaultStyle: 'black',
    refresherBackground: '#fff',
    refresherTriggered: false,
    enhanced: false,
    bounces: true,
    showScrollbar: true,
    pagingEnabled: false,
    fastDeceleration: false,
};
