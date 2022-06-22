import React from 'react';

import * as S from './Header.styles';
import { HeaderProps } from './Header.types';

const Header = ({ children, ...rest }: HeaderProps) => {
  return <S.Header {...rest}>{children}</S.Header>;
};

export default Header;
