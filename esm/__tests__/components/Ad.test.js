import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Ad } from '../../hostComponents';
describe('Ad', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(Ad, { unitId: "id" }));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
