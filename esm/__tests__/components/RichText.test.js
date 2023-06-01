import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { RichText } from '../../hostComponents';
describe('RichText', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(RichText, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
