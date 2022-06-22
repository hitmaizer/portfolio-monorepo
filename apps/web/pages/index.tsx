import Certifications from '@components/Certifications';
import Header from '@components/Header';
import Hobbies from '@components/Hobbies';
import { Homepage } from '@components/Homepage/Homepage.styles';
import Intro from '@components/Intro';
import Section from '@components/Section';
import Socials from '@components/Socials';
import Works from '@components/Works';
import type { GetStaticProps, NextPage } from 'next';

import { Stack } from '@components';

const Home: NextPage = ({ works }: any) => {
  return (
    <Homepage>
      <Stack display="flex" vertical gridGap="32px">
        <Header
          display="flex"
          justifyContent="space-between"
          gridGap="32px"
          mt="32px"
          flexDirection="column"
        >
          <Intro />
          <Socials />
        </Header>
        <Section
          display="flex"
          justifyContent="space-between"
          gridGap="32px"
          flexDirection="column"
        >
          <Hobbies />
          <Certifications />
        </Section>
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
      revalidate: 43200,
    },
  };
};

export default Home;
