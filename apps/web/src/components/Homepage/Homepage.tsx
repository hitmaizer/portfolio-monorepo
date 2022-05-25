import React from 'react';

import * as S from './Homepage.styles';
import { HomepageProps } from './Homepage.types';

const Homepage = ({ children, ...rest }: HomepageProps) => {
  return <S.Homepage {...rest}>{children}</S.Homepage>;
};

export default Homepage;
