import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Textarea } from '../../hostComponents';
describe('TextArea', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(Textarea, { className: "class", value: "" }));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
