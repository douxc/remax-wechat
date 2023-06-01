import * as React from 'react';

import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

interface GridViewProps extends BaseProps {
  /**
   * 布局方式
   * aligned - 每行高度由同一行中最大高度子节点决定
   * masonry - 瀑布流，根据子元素高度自动布局
   *
   * default: aligned
   */
  type: 'aligned' | 'masonry';
  /**
   * 交叉轴元素数量
   *
   * default: 2
   */
  crossAxisCount?: number;
  /**
   * 交叉轴元素最大范围
   *
   * default: 0
   */
  maxCrossAxisExtent?: number;
  /**
   * 主轴方向间隔
   *
   * default: 0
   */
  mainAxisGap?: number;
  /**
   * 交叉轴方向间隔
   *
   * default: 0
   */
  crossAxisGap?: number;
}

export const GridView: React.ComponentType<GridViewProps> =
  createHostComponent<GridViewProps>('grid-view');
