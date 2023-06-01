import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { KeyboardAccessory } from '../../hostComponents';
describe('KeyboardAccessory', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(KeyboardAccessory, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
