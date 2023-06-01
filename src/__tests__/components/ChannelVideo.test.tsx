import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ChannelVideo } from '../../hostComponents';

describe('ChannelVideo', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <ChannelVideo
        feedId='123'
        finderUserName='test'
        feedToken='token'
        autoplay='true'
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
