import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Swiper } from '../../hostComponents';
describe('Swiper', function () {
    it('render correctly', function () {
        var testRenderer = TestRenderer.create(React.createElement(Swiper, null));
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
    it('change correctly', function () {
        var handleChange = jest.fn();
        var component = TestRenderer.create(React.createElement(Swiper, { onChange: handleChange, current: 0 }));
        var instance = component.root.findByType('swiper');
        expect(instance.props.current).toBe(0);
        var event = {
            detail: {
                current: 1,
            },
        };
        instance.props.onChange(event);
        expect(handleChange).toBeCalledWith(event);
    });
});
