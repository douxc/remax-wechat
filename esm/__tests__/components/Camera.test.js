import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Camera } from '../../hostComponents';
describe('Camera', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(Camera, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
