import { rem } from 'polished';
import { mediaQueries } from 'src/styles';
import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { DetailCardProps } from './DetailCard.types';

export const DetailCard = styled.div`
  padding: ${rem('64px')};
  background-color: ${({ theme }) => theme.body};
  min-height: 100vh;
  width: 100%;
`;

export const CardFlex = styled.div<DetailCardProps>`
  ${flexbox}
  ${space}
  ${layout}
  ${gridGap}

  flex-direction: column;

  ${mediaQueries.lg} {
    flex-direction: row;
  }
`;
