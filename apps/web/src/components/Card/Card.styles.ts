import { rem } from 'polished';
import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

export const Card = styled.div`
  ${layout}
  ${space}
  ${flexbox}
  
  gap: ${rem('16px')};
  padding: ${rem('32px')};
  width: 100%;
  height: 100%;
  border-radius: ${rem('12px')};
  background-color: ${({ theme }) => theme.cardBg};
`;
