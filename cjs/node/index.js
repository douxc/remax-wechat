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
var path = __importStar(require("path"));
var node_1 = __importDefault(require("../hostComponents/node"));
var EJS_TPL_ROOT = path.join(__dirname, '../../templates');
var plugin = function () {
    return {
        meta: {
            global: 'wx',
            template: {
                extension: '.wxml',
                tag: 'import',
                src: 'src',
            },
            style: '.wxss',
            jsHelper: {
                extension: '.wxs',
                tag: 'wxs',
                src: 'src',
            },
            ejs: {
                base: path.join(EJS_TPL_ROOT, 'base.ejs'),
                page: path.join(EJS_TPL_ROOT, 'page.ejs'),
            },
        },
        hostComponents: node_1.default,
        skipHostComponents: ['swiper-item'],
    };
};
exports.default = plugin;
