import React from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import Card from '@components/Card';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import Text from '@components/Text';
import { StyledImage } from '@components/WorkCard/WorkCard.styles';
import Link from 'next/link';
import { rem } from 'polished';

import * as S from './DetailCard.styles';
import { DetailCardProps } from './DetailCard.types';

const DetailCard = ({
  children,
  demo,
  code,
  link,
  image,
  title,
  description,
  category,
  ...rest
}: DetailCardProps) => {
  return (
    <S.DetailCard {...rest}>
      <Card>
        <S.CardFlex display="flex" gridGap={rem('32px')} alignItems="center">
          <Box width="100%" height="80vh" position="relative">
            <StyledImage
              src={image!}
              width="100%"
              height="100%"
              layout="fill"
            />
          </Box>
          <Stack display="flex" vertical gridGap={rem('16px')}>
            <Heading subtitle>{`# ${category}`}</Heading>
            <Heading fontWeight="bold" size="xl">
              {title}
            </Heading>
            <Text maxWidth={rem('200px')}>{`${description!}`}</Text>
            {link == null ? (
              <>
                <Stack display="flex" gridGap={rem('8px')}>
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
                  <a href={link} target="_blank" rel="noreferrer">
                    See More
                  </a>
                </Button>
              </>
            )}
            <Heading oxygen fontWeight="bold" size="lg" mt={rem('16px')}>
              <Link href="/#works" passHref>
                Back to Works
              </Link>
            </Heading>
            {children}
          </Stack>
        </S.CardFlex>
      </Card>
    </S.DetailCard>
  );
};

export default DetailCard;
