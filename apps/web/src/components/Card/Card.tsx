import React from 'react';

import * as S from './Card.styles';
import { CardProps } from './Card.types';

const Card = ({ children }: CardProps) => {
  return <S.Card>{children}</S.Card>;
};

export default Card;
