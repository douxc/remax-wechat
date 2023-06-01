import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Video } from '../../hostComponents';
describe('Video', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(Video, { src: "video-src" }));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
