import React from 'react';

import Heading from '@components/Heading';
import Stack from '@components/Stack';

import * as S from './Intro.styles';
import { IntroProps } from './Intro.types';

const Intro = ({ children, ...rest }: IntroProps) => {
  return (
    <>
      <S.Intro {...rest}>
        <Stack display="flex" vertical>
          <Stack display="flex">
            <Stack display="flex" vertical>
              <Heading>José Alves</Heading>
            </Stack>
          </Stack>
        </Stack>
        {children}
      </S.Intro>
    </>
  );
};

export default Intro;
