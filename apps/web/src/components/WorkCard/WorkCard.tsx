import React from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import Card from '@components/Card';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import Text from '@components/Text';
import Link from 'next/link';
import { rem } from 'polished';

import * as S from './WorkCard.styles';
import { WorkCardProps } from './WorkCard.types';

const WorkCard = ({
  children,
  imgSrc,
  title,
  category,
  description,
  slug,
  ...rest
}: WorkCardProps) => {
  return (
    <S.WorkCard {...rest}>
      <Card>
        <Link href={`work/${slug}`}>
          <Stack display="flex" vertical gridGap={rem('16px')}>
            <Box width="100%" height="25vh" position="relative">
              <S.StyledImage
                src={imgSrc!}
                width="100%"
                height="100%"
                layout="fill"
              />
            </Box>
            <Heading subtitle>{`# ${category}`}</Heading>
            <Heading fontWeight="bold" size="lg">
              {title}
            </Heading>
            <Text minHeight="500px" card>{`${description!.substring(
              0,
              130
            )} ...`}</Text>
            <Button primary>See More</Button>

            {children}
          </Stack>
        </Link>
      </Card>
    </S.WorkCard>
  );
};

export default WorkCard;
