import React from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import Card from '@components/Card';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import Text from '@components/Text';

import * as S from './WorkCard.styles';
import { WorkCardProps } from './WorkCard.types';

const WorkCard = ({
  children,
  imgSrc,
  title,
  category,
  description,
  code,
  link,
  demo,
  ...rest
}: WorkCardProps) => {
  return (
    <S.WorkCard {...rest}>
      <Card>
        <Stack display="flex" vertical gridGap="16px">
          <Box width="395px" height="200px" position="relative">
            <S.StyledImage
              src={imgSrc!}
              width="100%"
              height="100%"
              layout="fill"
            />
          </Box>
          <Heading subtitle>{`# ${category}`}</Heading>
          <Heading fontWeight="bold" size="xl">
            {title}
          </Heading>
          <Text minHeight="500px">{`${description!.substring(
            0,
            130
          )} ...`}</Text>
          {link !== null ? (
            <Button primary>See More</Button>
          ) : (
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
          )}

          {children}
        </Stack>
      </Card>
    </S.WorkCard>
  );
};

export default WorkCard;
