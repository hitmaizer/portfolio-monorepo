import React from 'react';

import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({
  children,
  outline,
  primary,
  filterBtn,
  selected,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button
      selected={selected}
      outline={outline}
      primary={primary}
      filterBtn={filterBtn}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button;
