import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { FunctionalPageNavigator } from '../../hostComponents';
describe('FunctionalPageNavigator', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(FunctionalPageNavigator, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
