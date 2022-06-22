import { ReactNode } from 'react';

import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface HeaderProps
  extends SpaceProps,
    FlexboxProps,
    LayoutProps,
    GridGapProps {
  children?: ReactNode;
}
