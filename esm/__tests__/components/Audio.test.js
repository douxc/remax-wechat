import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Audio } from '../../hostComponents';
describe('Audio', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(Audio, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
