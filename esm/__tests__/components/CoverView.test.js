import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { CoverView } from '../../hostComponents';
describe('CoverView', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(CoverView, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
