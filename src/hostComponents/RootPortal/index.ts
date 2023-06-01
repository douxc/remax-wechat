import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

interface RootPortalProps extends BaseProps {
  /**
   * 是否从页面中脱离出来
   *
   * 2.26.1
   *
   * default: true
   */
  enable?: boolean;
}

export const RootPortal: React.ComponentType<RootPortalProps> =
  createHostComponent<RootPortalProps>('root-portal');
