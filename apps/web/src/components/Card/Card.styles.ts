import styled from 'styled-components';

export const Card = styled.div`
  gap: 16px;
  padding: 32px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.cardBg};
`;
