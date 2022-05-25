import React from 'react';

import Button from '@components/Button';
import Card from '@components/Card';
import Heading from '@components/Heading';
import Stack from '@components/Stack';

import * as S from './Socials.styles';
import { SocialsProps } from './Socials.types';

const Socials = ({ children, ...rest }: SocialsProps) => {
  return (
    <S.Socials {...rest}>
      <Card>
        <Stack
          display="flex"
          vertical
          gridGap="24px"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Heading fontWeight="medium" size="2xl">
            Follow my socials!
          </Heading>
          <Stack
            display="flex"
            alignItems="center"
            gridGap="8px"
            placeContent="center"
          >
            <a
              href="https://github.com/hitmaizer"
              target="_blank"
              rel="noreferrer"
            >
              <S.GithubLogo />
            </a>
            <a
              href="https://www.linkedin.com/in/hitmaizer/"
              target="_blank"
              rel="noreferrer"
            >
              <S.LinkedinLogo />
            </a>
            <a
              href="https://dribbble.com/hitmaizer"
              target="_blank"
              rel="noreferrer"
            >
              <S.DribbbleLogo />
            </a>
            <a
              href="https://twitter.com/josesousalves"
              target="_blank"
              rel="noreferrer"
            >
              <S.TwitterLogo />
            </a>
          </Stack>
          <Button primary>Let&apos;s see some works!</Button>
        </Stack>
      </Card>
      {children}
    </S.Socials>
  );
};

export default Socials;
