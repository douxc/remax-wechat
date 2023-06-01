import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { VoipRoom } from '../../hostComponents';
describe('VoipRoom', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(VoipRoom, { openId: "openId" }));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
