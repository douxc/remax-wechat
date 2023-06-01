import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ShareElement } from '../../hostComponents';
describe('ShareElement', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(ShareElement, { key: "key" }));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
