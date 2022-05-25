import { HeadingElement } from 'src/styles';
import {
  LayoutProps,
  SpaceProps,
  ResponsiveValue,
  TextAlignProps,
} from 'styled-system';

export interface HeadingProps extends LayoutProps, SpaceProps, TextAlignProps {
  as?: HeadingElement;
  size?: ResponsiveValue<'lg' | 'xl' | '2xl' | '3xl' | '4xl'>;
  strong?: boolean;
  color?: string;
  children?: React.ReactNode;
  oxygen?: boolean;
  subtitle?: boolean;
}

export type StyledHeadingProps = Pick<HeadingProps, 'oxygen'>;
