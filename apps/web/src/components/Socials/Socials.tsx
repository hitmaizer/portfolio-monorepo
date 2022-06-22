import React from 'react';

import Button from '@components/Button';
import Card from '@components/Card';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import { rem } from 'polished';

import * as S from './Socials.styles';
import { SocialsProps } from './Socials.types';

const Socials = ({ children, ...rest }: SocialsProps) => {
  return (
    <S.Socials {...rest}>
      <Card>
        <Stack
          display="flex"
          vertical
          gridGap={rem('24px')}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Heading fontWeight="medium" size="xl">
            Follow my socials!
          </Heading>
          <Stack
            display="flex"
            alignItems="center"
            gridGap={rem('8px')}
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
          <Button primary>
            <a href="#works">Let&apos;s see some works!</a>
          </Button>
        </Stack>
      </Card>
      {children}
    </S.Socials>
  );
};

export default Socials;
