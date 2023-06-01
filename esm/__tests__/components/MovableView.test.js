import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { MovableView } from '../../hostComponents';
describe('MovableView', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(MovableView, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
