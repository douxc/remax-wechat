import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface ChannelVideoProps extends BaseProps {
  /** 仅视频号视频与小程序同主体时生效。若内嵌非同主体视频，请使用 feed-token。 */
  feedId: string;
  /** 视频号 id，以“sph”开头的id，可在视频号助手获取。 */
  finderUserName: string;
  /** 仅内嵌小程序非同主体视频号视频时使用，获取方式参考本指引。 */
  feedToken: string;
  /** 是否自动播放。仅视频号视频与小程序同主体时支持设置为 true。 */
  autoplay: string;
  /** 是否循环播放 */
  loop?: boolean;
  /** 是否静音播放 */
  muted?: boolean;
  /** 当视频大小与 video 容器大小不一致时，视频的表现形式 */
  objectFit?: boolean | 'contain' | 'cover' | 'fill';
  onError?: (e: GenericEvent) => void;
}

/**
 * 基础库 2.25.1 开始支持
 * 小程序内嵌视频号视频组件，支持在小程序中播放视频号视频，并无弹窗跳转至视频号
 * https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html
 */
export const ChannelVideo: React.ComponentType<ChannelVideoProps> =
  createHostComponent<ChannelVideoProps>('channel-video');

ChannelVideo.defaultProps = {
  loop: false,
  muted: false,
  objectFit: 'contain',
};
