import { ReactNode } from 'react';

import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface CardProps extends SpaceProps, FlexboxProps, LayoutProps {
  children?: ReactNode;
}
