import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { LivePusher } from '../../hostComponents';
describe('LivePusher', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(LivePusher, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
