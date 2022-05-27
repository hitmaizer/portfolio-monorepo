import React from 'react';

import * as S from './Loading.styles';
import { LoadingProps } from './Loading.types';

const Loading = ({ children, ...rest }: LoadingProps) => {
  return (
    <S.Loading
      {...rest}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <S.Bouncer>
        <S.Ball />
        <S.Ball />
        <S.Ball />
        <S.Ball />
      </S.Bouncer>
      {children}
    </S.Loading>
  );
};

export default Loading;
