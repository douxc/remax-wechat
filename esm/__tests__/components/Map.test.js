import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Map } from '../../hostComponents';
describe('Map', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(Map, { latitude: 0, longitude: 0 }));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
