"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var hostComponents_1 = require("../../hostComponents");
describe('Swiper', function () {
    it('render correctly', function () {
        var testRenderer = react_test_renderer_1.default.create(React.createElement(hostComponents_1.Swiper, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
    it('change correctly', function () {
        var handleChange = jest.fn();
        var component = react_test_renderer_1.default.create(React.createElement(hostComponents_1.Swiper, { onChange: handleChange, current: 0 }));
        var instance = component.root.findByType('swiper');
        expect(instance.props.current).toBe(0);
        var event = {
            detail: {
                current: 1,
            },
        };
        instance.props.onChange(event);
        expect(handleChange).toBeCalledWith(event);
    });
});
