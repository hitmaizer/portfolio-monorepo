import React from 'react';

import Grid from '@components/Grid';
import Loading from '@components/Loading';
import WorkCard from '@components/WorkCard';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import * as S from './Works.styles';
import { WorkObj, WorksProps } from './Works.types';

const Works = ({ children, worksData, ...rest }: WorksProps) => {
  const loading = useSelector((state: RootState) => state.loading.loading);
  const error = useSelector((state: RootState) => state.error.error);

  return (
    <S.Works {...rest}>
      {loading === false && (
        <Grid>
          {worksData.map((work: WorkObj) => (
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
