import node from '../node';
describe('node', function () {
    it('meta', function () {
        var meta = node().meta;
        expect(meta.ejs).toBeDefined();
        expect(meta.template).toMatchInlineSnapshot("\n{\n  \"extension\": \".wxml\",\n  \"src\": \"src\",\n  \"tag\": \"import\",\n}\n");
        expect(meta.style).toMatchInlineSnapshot("\".wxss\"");
        expect(meta.jsHelper).toMatchInlineSnapshot("\n{\n  \"extension\": \".wxs\",\n  \"src\": \"src\",\n  \"tag\": \"wxs\",\n}\n");
    });
});
