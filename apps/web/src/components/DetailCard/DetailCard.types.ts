import { ReactNode } from 'react';

export interface DetailCardProps {
  children?: ReactNode;
  code?: string;
  link?: string | null;
  demo?: string;
}
