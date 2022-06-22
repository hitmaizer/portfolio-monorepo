import Image from 'next/image';
import { rem } from 'polished';
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
  border-radius: ${rem('8px')};
`;
