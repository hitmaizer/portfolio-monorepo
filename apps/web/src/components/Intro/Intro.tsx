import React from 'react';

import Card from '@components/Card';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import Text from '@components/Text';
import Image from 'next/image';
import { rem } from 'polished';

import * as S from './Intro.styles';
import { IntroProps } from './Intro.types';

const Intro = ({ children, ...rest }: IntroProps) => {
  return (
    <>
      <S.Intro {...rest}>
        <Card>
          <S.IntroStack
            display="flex"
            alignItems="center"
            gridGap={rem('32px')}
            flexDirection="column"
          >
            <Image src="/avatar-light.svg" width="200px" height="270px" />
            <Stack display="flex" vertical gridGap={rem('32px')}>
              <Stack
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack display="flex" vertical gridGap={rem('8px')}>
                  <Heading fontWeight="bold" size="2xl">
                    José Alves
                  </Heading>
                  <Heading oxygen fontWeight="bold" size="lg">
                    Front End Developer
                  </Heading>
                </Stack>
                <Stack display="flex" vertical gridGap={rem('8px')}>
                  <Stack
                    display="flex"
                    alignItems="center"
                    gridGap={rem('8px')}
                  >
                    <S.EmailIcon />
                    <Heading oxygen fontWeight="bold" size="lg">
                      jose.sousalves@gmail.com
                    </Heading>
                  </Stack>
                  <Stack
                    display="flex"
                    alignItems="center"
                    gridGap={rem('8px')}
                  >
                    <S.PhoneIcon />
                    <Heading oxygen fontWeight="bold" size="lg">
                      (+351) 91 102 340 5
                    </Heading>
                  </Stack>
                </Stack>
              </Stack>
              <Text>
                Self-taught developer, who is willing to learn and create
                outstanding UI. <br />
                On this page you will be able to get to know some of my work a
                bit better.
              </Text>
            </Stack>
            {children}
          </S.IntroStack>
        </Card>
      </S.Intro>
    </>
  );
};

export default Intro;
