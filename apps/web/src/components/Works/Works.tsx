import React, { useState, useEffect } from 'react';

import Grid from '@components/Grid';
import Loading from '@components/Loading';
import WorkCard from '@components/WorkCard';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from 'src/redux/error';
import { setLoading } from 'src/redux/loading';
import { RootState } from 'src/redux/store';

import * as S from './Works.styles';
import { WorkObj, WorksProps } from './Works.types';

const Works = ({ children, ...rest }: WorksProps) => {
  const [displayWorks, setDisplayWorks] = useState<WorkObj[]>([]);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const error = useSelector((state: RootState) => state.error.error);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      const request = await axios
        .get(
          'https://portfolio-monorepo.herokuapp.com/api/all-works?populate=*'
        )
        .then((res) => setDisplayWorks(res.data?.data))
        .catch((err) => dispatch(setError(err)))
        .finally(() => dispatch(setLoading(false)));
      return request;
    }
    fetchData();
  }, []);
  return (
    <S.Works {...rest}>
      {loading === false && (
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
      )}
      {loading && <Loading />}
      {error && <p>{error}</p>}
    </S.Works>
  );
};

export default Works;
