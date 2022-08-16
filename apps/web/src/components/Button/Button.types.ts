import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  outline?: boolean;
  primary?: boolean;
  filterBtn?: boolean;
  selected?: boolean;
  onClick?: () => void;
}
