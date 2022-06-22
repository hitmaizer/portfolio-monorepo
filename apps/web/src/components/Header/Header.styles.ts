import { mediaQueries } from 'src/styles';
import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

export const Header = styled.header`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}

  ${mediaQueries.lg} {
    flex-direction: row;
  }
`;
