import { rem } from 'polished';
import { mediaQueries } from 'src/styles';
import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { HomepageProps } from './Homepage.types';

export const Homepage = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.body};
  padding: ${rem('16px')};
  ${mediaQueries.lg} {
    margin-top: 0;
    padding: ${rem('32px')};
  }
`;

export const HomeStack = styled.div<HomepageProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}

  ${mediaQueries.lg} {
    gap: ${rem('32px')};
  }
`;
