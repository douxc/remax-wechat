import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { View } from '../../hostComponents';
describe('View', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(View, { className: "class" }, "view"));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
