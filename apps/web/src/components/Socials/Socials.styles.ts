import {
  Twitter,
  Linkedin,
  Github,
  Dribbble,
} from '@styled-icons/boxicons-logos';
import styled from 'styled-components';

export const Socials = styled.div`
  width: 100%;
`;

export const TwitterLogo = styled(Twitter)`
  width: 40px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: color 300ms ease;
  &:hover,
  a {
    color: #1da1f2;
  }
`;

export const LinkedinLogo = styled(Linkedin)`
  width: 40px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: color 300ms ease;
  &:hover,
  a {
    color: #0e76a8;
  }
`;

export const GithubLogo = styled(Github)`
  width: 40px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: color 300ms ease;
  &:hover,
  a {
    color: #171515;
  }
`;

export const DribbbleLogo = styled(Dribbble)`
  width: 40px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: color 300ms ease;
  &:hover,
  a {
    color: #ea4c89;
  }
`;
