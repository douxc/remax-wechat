import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { OpenData } from '../../hostComponents';
describe('OpenData', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(OpenData, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
