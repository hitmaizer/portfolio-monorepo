import React from 'react';

import { ParsedUrlQuery } from 'querystring';

import DetailCard from '@components/DetailCard';
import Loading from '@components/Loading';
import { WorkObj } from '@components/Works/Works.types';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Work {
  work: {
    id: number;
    slug: string;
    title: string;
    details: {
      id: number;
      category: string;
      demo: string;
      code: string;
      link: string | null;
      description: string;
    };
    image: {
      data: {
        url: string;
      };
    };
  };
}

const Details = ({ work }: Work) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <Loading />;
  }

  return (
    <DetailCard
      demo={work.details.demo}
      code={work.details.code}
      link={work.details.link}
      image={work.image.data.url}
      title={work.title}
      description={work.details.description}
      category={work.details.category}
    />
  );
};

export default Details;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const res = await axios.get(
    `https://portfolio-monorepo.herokuapp.com/api/all-works/${slug}?populate=*`
  );
  const data = await res.data;
  return {
    props: {
      work: data.data,
    },
    revalidate: 18000,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://portfolio-monorepo.herokuapp.com/api/all-works?populate=*'
  );
  const data = await response.json();
  const paths = data.data.map((work: WorkObj) => {
    return { params: { slug: work.slug } };
  });
  return {
    paths,
    fallback: true,
  };
};
