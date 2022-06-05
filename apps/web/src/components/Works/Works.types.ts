import { ReactNode } from 'react';

export interface WorksProps {
  children?: ReactNode;
  id?: string;
  worksData: WorkObj[];
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

export interface WorkProp {
  work: {
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
  };
}
