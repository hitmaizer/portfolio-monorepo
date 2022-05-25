import { ReactNode } from 'react';

export interface WorkCardProps {
  children?: ReactNode;
  imgSrc?: string;
  title?: string;
  category?: string;
  description?: string;
  demo?: string;
  code?: string;
  link?: string | null;
}
