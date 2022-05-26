import React from 'react';

import Button from '@components/Button';
import Card from '@components/Card';
import Stack from '@components/Stack';

import * as S from './DetailCard.styles';
import { DetailCardProps } from './DetailCard.types';

const DetailCard = ({
  children,
  demo,
  code,
  link,
  ...rest
}: DetailCardProps) => {
  return (
    <S.DetailCard {...rest}>
      <Card>
        {link == null ? (
          <>
            <Stack display="flex" gridGap="8px">
              <Button primary>
                <a href={demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              </Button>
              <Button outline>
                <a href={code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <Button primary>
              <a href={link!} target="_blank" rel="noreferrer">
                See More
              </a>
            </Button>
          </>
        )}
        {children}
      </Card>
    </S.DetailCard>
  );
};

export default DetailCard;
