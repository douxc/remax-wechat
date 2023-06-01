"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __importDefault(require("../node"));
describe('node', function () {
    it('meta', function () {
        var meta = (0, node_1.default)().meta;
        expect(meta.ejs).toBeDefined();
        expect(meta.template).toMatchInlineSnapshot("\n{\n  \"extension\": \".wxml\",\n  \"src\": \"src\",\n  \"tag\": \"import\",\n}\n");
        expect(meta.style).toMatchInlineSnapshot("\".wxss\"");
        expect(meta.jsHelper).toMatchInlineSnapshot("\n{\n  \"extension\": \".wxs\",\n  \"src\": \"src\",\n  \"tag\": \"wxs\",\n}\n");
    });
});
