import { mediaQueries } from 'src/styles';
import styled from 'styled-components';

export const Hobbies = styled.div`
  width: 100%;
  max-width: fit-content;
  order: 2;

  ${mediaQueries.lg} {
    order: 0;
    max-width: fit-content;
  }
`;
