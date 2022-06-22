import Certifications from '@components/Certifications';
import Header from '@components/Header';
import Hobbies from '@components/Hobbies';
import { Homepage, HomeStack } from '@components/Homepage/Homepage.styles';
import Intro from '@components/Intro';
import Section from '@components/Section';
import Socials from '@components/Socials';
import Works from '@components/Works';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = ({ works }: any) => {
  return (
    <Homepage>
      <HomeStack display="flex" flexDirection="column" gridGap="16px">
        <Header
          display="flex"
          justifyContent="space-between"
          gridGap="16px"
          flexDirection="column"
        >
          <Intro />
          <Socials />
        </Header>
        <Section
          display="flex"
          justifyContent="space-between"
          gridGap="16px"
          flexDirection="column"
        >
          <Hobbies />
          <Certifications />
        </Section>
        <Works id="works" worksData={works.data} />
      </HomeStack>
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
