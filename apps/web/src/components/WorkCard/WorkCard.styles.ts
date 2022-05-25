import Image from 'next/image';
import styled from 'styled-components';

export const WorkCard = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  transition: box-shadow 300ms ease;
  &:hover {
    box-shadow: ${({ theme }) => theme.dropShadow};
  }
`;

export const StyledImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`;
