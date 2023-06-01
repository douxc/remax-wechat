import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { GridView } from '../../hostComponents';

describe('GridView', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<GridView type='aligned' />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
