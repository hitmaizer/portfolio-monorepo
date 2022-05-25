import { Homepage } from '@components/Homepage/Homepage.styles';
import Intro from '@components/Intro';
import Socials from '@components/Socials';
import type { NextPage } from 'next';

import { Grid } from '@components';

const Home: NextPage = () => {
  return (
    <Homepage>
      <Grid>
        <Intro />
        <Socials />
      </Grid>
    </Homepage>
  );
};

export default Home;
