import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { OfficialAccount } from '../../hostComponents';
describe('OfficialAccount', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(OfficialAccount, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
