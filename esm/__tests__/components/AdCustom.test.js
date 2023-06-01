import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { AdCustom } from '../../hostComponents';
describe('AdCustom', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(AdCustom, { unitId: "id" }));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
