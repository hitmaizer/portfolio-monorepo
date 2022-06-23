import { ReactNode } from 'react';

import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface DetailCardProps
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    GridGapProps {
  children?: ReactNode;
  code?: string;
  link?: string | null;
  demo?: string;
  image?: string;
  title?: string;
  description?: string;
  category?: string;
}
