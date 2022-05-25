import { mediaQueries } from 'src/styles';
import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.sm} {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 32px;
    max-width: 1440px;
  }
`;
