import Certifications from '@components/Certifications';
import Filter from '@components/Filter';
import Hobbies from '@components/Hobbies';
import { Homepage } from '@components/Homepage/Homepage.styles';
import Intro from '@components/Intro';
import Socials from '@components/Socials';
import Works from '@components/Works';
import type { NextPage } from 'next';

import { Stack } from '@components';

const Home: NextPage = () => {
  return (
    <Homepage>
      <Stack display="flex" vertical gridGap="32px">
        <Stack
          display="flex"
          justifyContent="space-between"
          gridGap="32px"
          mt="32px"
        >
          <Intro />
          <Socials />
        </Stack>
        <Stack display="flex" justifyContent="space-between" gridGap="32px">
          <Hobbies />
          <Certifications />
        </Stack>
        <Filter />
        <Works id="works" />
      </Stack>
    </Homepage>
  );
};

export default Home;
