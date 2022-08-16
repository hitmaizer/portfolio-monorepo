import { rem } from 'polished';
import { mediaQueries } from 'src/styles';
import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem('16px')};

  ${mediaQueries.md} {
    display: grid;
    grid-template-columns: repeat(auto, auto);
    gap: ${rem('32px')};
  }

  ${mediaQueries.lg} {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: ${rem('32px')};
    max-width: ${rem('1440px')};
  }

  ${mediaQueries.xl} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${rem('32px')};
    max-width: ${rem('1440px')};
  }
`;
