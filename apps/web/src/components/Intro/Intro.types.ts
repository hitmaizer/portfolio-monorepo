import { ReactNode } from 'react';

import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface IntroProps
  extends SpaceProps,
    FlexboxProps,
    LayoutProps,
    GridGapProps {
  children?: ReactNode;
}
