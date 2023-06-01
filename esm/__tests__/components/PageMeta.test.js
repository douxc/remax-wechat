import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { PageMeta } from '../../hostComponents';
describe('PageMeta', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(PageMeta, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
