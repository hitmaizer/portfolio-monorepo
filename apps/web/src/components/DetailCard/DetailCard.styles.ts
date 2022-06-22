import { rem } from 'polished';
import styled from 'styled-components';

export const DetailCard = styled.div`
  padding: ${rem('64px')};
  background-color: ${({ theme }) => theme.body};
  min-height: 100vh;
  width: 100%;
`;
