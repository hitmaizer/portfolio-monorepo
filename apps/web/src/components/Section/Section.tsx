import React from 'react';

import * as S from './Section.styles';
import { SectionProps } from './Section.types';

const Section = ({ children, ...rest }: SectionProps) => {
  return <S.Section {...rest}>{children}</S.Section>;
};

export default Section;
