import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Input } from '../../hostComponents';
describe('Input', function () {
    it('render correctly', function () {
        var tree = TestRenderer.create(React.createElement(Input, { value: "", type: "text" })).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('render placeholderStyle as inline style', function () {
        var color = '#ffffff';
        var component = TestRenderer.create(React.createElement(Input, { placeholderStyle: { color: color } }));
        var instance = component.root.findByType('input');
        expect(instance.props.placeholderStyle).toEqual({
            color: color,
        });
    });
});
