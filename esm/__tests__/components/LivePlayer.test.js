import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { LivePlayer } from '../../hostComponents';
describe('LivePlayer', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(LivePlayer, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
