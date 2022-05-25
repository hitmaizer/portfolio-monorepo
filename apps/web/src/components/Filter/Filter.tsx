import React from 'react';

import Button from '@components/Button';
import Card from '@components/Card';
import Stack from '@components/Stack';

import * as S from './Filter.styles';
import { FilterProps } from './Filter.types';

const Filter = ({ children, ...rest }: FilterProps) => {
  return (
    <S.Filter {...rest}>
      <Card>
        <Stack display="flex" alignItems="center" gridGap="16px">
          <Button filterBtn selected>
            All
          </Button>
          <Button filterBtn>React</Button>
          <Button filterBtn>Web</Button>
          <Button filterBtn>UI</Button>
          <Button filterBtn>Other</Button>
        </Stack>
      </Card>
      {children}
    </S.Filter>
  );
};

export default Filter;
