import Hobbies from '@components/Hobbies';
import { Homepage } from '@components/Homepage/Homepage.styles';
import Intro from '@components/Intro';
import Socials from '@components/Socials';
import type { NextPage } from 'next';

import { Stack } from '@components';

const Home: NextPage = () => {
  return (
    <Homepage>
      <Stack
        display="flex"
        justifyContent="space-between"
        gridGap="32px"
        mt="32px"
      >
        <Intro />
        <Socials />
      </Stack>
      <Stack mt="32px">
        <Hobbies />
      </Stack>
    </Homepage>
  );
};

export default Home;
