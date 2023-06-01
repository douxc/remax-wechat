import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface CanvasProps extends BaseProps {
  /** 指定 canvas 类型，当前仅支持 webgl 2.7.0 */
  type?: string;
  /** canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性 1.0.0 */
  canvasId?: string;
  /** 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 1.0.0 */
  disableScroll?: boolean;
  /** 当发生错误时触发 error 事件，detail = {errMsg} 1.0.0  */
  onError?: (event: GenericEvent) => any;
}

/**
 * 画布。2.9.0 起支持一套新 Canvas 2D 接口（需指定 type 属性），同时支持同层渲染，原有接口不再维护。旧版本可参考 旧版画布迁移指南 进行迁移。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
 */
export const Canvas: React.ComponentType<CanvasProps> =
  createHostComponent<CanvasProps>('canvas');

Canvas.defaultProps = {
  disableScroll: false,
};
