import { rem } from 'polished';
import { mediaQueries } from 'src/styles';
import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem('16px')};

  ${mediaQueries.sm} {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: ${rem('32px')};
    max-width: ${rem('1440px')};
  }
`;
