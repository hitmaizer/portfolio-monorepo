import React, { useState, useEffect } from 'react';

import Grid from '@components/Grid';
import WorkCard from '@components/WorkCard';
import axios from 'axios';

import * as S from './Works.styles';
import { WorkObj, WorksProps } from './Works.types';

const Works = ({ children, ...rest }: WorksProps) => {
  const [displayWorks, setDisplayWorks] = useState<WorkObj[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await axios
        .get(
          'https://portfolio-monorepo.herokuapp.com/api/all-works?populate=*'
        )
        .then((res) => setDisplayWorks(res.data?.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
      return request;
    }
    fetchData();
  }, []);
  return (
    <S.Works {...rest}>
      <Grid>
        {displayWorks.map((work: WorkObj) => (
          <WorkCard
            key={work.id}
            imgSrc={work.image.data.url}
            description={work.details.description}
            title={work.title}
            category={work.details.category}
            code={work.details.code}
            demo={work.details.demo}
            link={work.details.link}
            slug={work.slug}
          />
        ))}
        {children}
      </Grid>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </S.Works>
  );
};

export default Works;
