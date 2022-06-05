import Certifications from '@components/Certifications';
import Hobbies from '@components/Hobbies';
import { Homepage } from '@components/Homepage/Homepage.styles';
import Intro from '@components/Intro';
import Socials from '@components/Socials';
import Works from '@components/Works';
import type { GetStaticProps, NextPage } from 'next';

import { Stack } from '@components';

const Home: NextPage = ({ works }: any) => {
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
        <Works id="works" worksData={works.data} />
      </Stack>
    </Homepage>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch(
    'https://portfolio-monorepo.herokuapp.com/api/all-works?populate=*'
  );
  const works = await request.json();
  return {
    props: {
      works,
    },
  };
};

export default Home;
