import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { MovableArea } from '../../hostComponents';
describe('MovableArea', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(MovableArea, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
