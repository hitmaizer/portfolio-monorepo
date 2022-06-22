import { ReactNode } from 'react';

import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface SectionProps
  extends FlexboxProps,
    LayoutProps,
    SpaceProps,
    GridGapProps {
  children?: ReactNode;
}
