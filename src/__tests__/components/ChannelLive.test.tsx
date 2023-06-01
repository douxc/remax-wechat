import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ChannelLive } from '../../hostComponents';

describe('ChannelLive', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <ChannelLive feedId='123' finderUserName='test' />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
