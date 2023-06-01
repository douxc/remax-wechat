import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { NavigationBar } from '../../hostComponents';
describe('NavigationBar', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(NavigationBar, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
