import { Email, Phone } from '@styled-icons/material-outlined';
import styled from 'styled-components';

export const Intro = styled.div`
  width: 100%;
`;

export const EmailIcon = styled(Email)`
  width: 24px;
  color: ${({ theme }) => theme.text};
`;

export const PhoneIcon = styled(Phone)`
  width: 24px;
  color: ${({ theme }) => theme.text};
`;
