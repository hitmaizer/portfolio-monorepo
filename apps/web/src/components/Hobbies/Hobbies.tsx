import React from 'react';

import Card from '@components/Card';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import Text from '@components/Text';
import Image from 'next/image';

import * as S from './Hobbies.styles';
import { HobbiesProps } from './Hobbies.types';

const Hobbies = ({ children, ...rest }: HobbiesProps) => {
  return (
    <S.Hobbies {...rest}>
      <Card>
        <Stack display="flex" vertical>
          <Heading fontWeight="bold" size="2xl">
            Hobbies
          </Heading>
          <Image src="/gaming-light.svg" width="240px" height="324px" />
          <Heading oxygen size="lg" mt={4} fontWeight="bold">
            Gaming
          </Heading>
          <Text mt={2}>Certified videogamer since the 90&apos;s.</Text>
          <Image src="/music-light.svg" width="240px" height="324px" />
          <Heading oxygen size="lg" mt={4} fontWeight="bold">
            Music
          </Heading>
          <Text mt={2}>
            Can&apos;t imagine life without music.
            <br /> I&apos;ve worked on several music projects, both as an artist
            and as a music label co-owner.
          </Text>
          <Image src="/sports-light.svg" width="240px" height="324px" />
          <Heading oxygen size="lg" mt={4} fontWeight="bold">
            Sports
          </Heading>
          <Text mt={2}>
            Sports lover. Love watching pretty much every sport!
          </Text>
          <Image src="/watching-light.svg" width="240px" height="324px" />
          <Heading oxygen size="lg" mt={4} fontWeight="bold">
            Series and movies
          </Heading>
          <Text mt={2}>
            Watching series and movies is one of the best ways to rest the mind.
          </Text>
          {children}
        </Stack>
      </Card>
    </S.Hobbies>
  );
};

export default Hobbies;
