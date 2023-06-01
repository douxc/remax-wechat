import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { MatchMedia } from '../../hostComponents';
describe('MatchMedia', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(MatchMedia, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
