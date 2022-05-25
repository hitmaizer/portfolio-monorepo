import { ReactNode } from 'react';

export interface WorksProps {
  children?: ReactNode;
  id?: string;
}

export interface WorkObj {
  id: number;
  slug: string;
  title: string;
  details: {
    id: number;
    category: string;
    demo: string;
    code: string;
    link: string | null;
    description: string;
  };
  image: {
    data: {
      url: string;
    };
  };
}
