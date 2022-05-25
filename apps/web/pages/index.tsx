import { Homepage } from '@components/Homepage/Homepage.styles';
import Intro from '@components/Intro';
import type { NextPage } from 'next';

import { Grid } from '@components';

const Home: NextPage = () => {
  return (
    <Homepage>
      <Grid>
        <Intro />
      </Grid>
    </Homepage>
  );
};

export default Home;
