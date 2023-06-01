import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Editor } from '../../hostComponents';
describe('Editor', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(Editor, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
