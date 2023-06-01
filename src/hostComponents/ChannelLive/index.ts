import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export interface ChannelLiveProps extends BaseProps {
  /** 视频 feedId */
  feedId: string;
  /** 视频号 id，以“sph”开头的id，可在视频号助手获取。视频号必须与当前小程序相同主体。 */
  finderUserName: string;
}
/**
 * 基础库 2.29.0 开始支持
 * https://developers.weixin.qq.com/miniprogram/dev/component/channel-live.html
 */
export const ChannelLive: React.ComponentType<ChannelLiveProps> =
  createHostComponent<ChannelLiveProps>('channel-live');
