import { mediaQueries } from 'src/styles';
import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

export const Section = styled.section`
  ${flexbox}
  ${space}
  ${layout}
  ${gridGap}

  ${mediaQueries.lg} {
    flex-direction: row;
    gap: 32px;
  }
`;
