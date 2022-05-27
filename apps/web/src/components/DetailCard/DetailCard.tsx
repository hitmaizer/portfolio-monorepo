import React from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import Card from '@components/Card';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import Text from '@components/Text';
import { StyledImage } from '@components/WorkCard/WorkCard.styles';
import Link from 'next/link';

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
        <Stack display="flex" gridGap="32px" alignItems="center">
          <Box width="50%" height="500px" position="relative">
            <StyledImage
              src={image!}
              width="100%"
              height="100%"
              layout="fill"
            />
          </Box>
          <Stack display="flex" vertical gridGap="16px">
            <Heading subtitle>{`# ${category}`}</Heading>
            <Heading fontWeight="bold" size="xl">
              {title}
            </Heading>
            <Text maxWidth="200px">{`${description!}`}</Text>
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
            <Heading oxygen fontWeight="bold" size="lg" mt="32px">
              <Link href="/#works" passHref>
                Back to Works
              </Link>
            </Heading>
            {children}
          </Stack>
        </Stack>
      </Card>
    </S.DetailCard>
  );
};

export default DetailCard;
