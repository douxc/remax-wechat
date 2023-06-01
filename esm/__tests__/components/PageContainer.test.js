import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { PageContainer } from '../../hostComponents';
describe('PageContainer', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(PageContainer, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
