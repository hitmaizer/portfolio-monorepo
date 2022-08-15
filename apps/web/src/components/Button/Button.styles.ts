import { rem } from 'polished';
import { mediaQueries } from 'src/styles';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  border-radius: ${rem('8px')};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 400;
  font-size: ${rem('18px')};
  line-height: ${rem('22px')};
  padding: ${rem('6px')} ${rem('18px')};
  cursor: pointer;
  transition: all 300ms ease;
  max-height: ${rem('46px')};
  ${mediaQueries.sm} {
    padding: ${rem('12px')} ${rem('32px')};
  }

  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.btnText};
      border: none;
      background-color: ${({ theme }) => theme.primaryBlue};
      a,
      a:visited,
      a:hover,
      a:active {
        color: ${({ theme }) => theme.btnText};
        &: hover {
          color: ${({ theme }) => theme.btnText};
        }
      }
      &:hover {
        background-color: ${({ theme }) => theme.darkenBlue};
        color: ${({ theme }) => theme.btnText};
      }
    `}
  ${({ outline }) =>
    outline &&
    css`
      border: ${rem('2px')} solid ${({ theme }) => theme.primaryBlue};
      background: transparent;
      color: ${({ theme }) => theme.primaryBlue};
      a {
        font-weight: 600;
        transition: all 300ms ease;
      }
      a,
      a:visited,
      a:hover,
      a:active {
        color: ${({ theme }) => theme.primaryBlue};
      }
      &:hover {
        background: ${({ theme }) => theme.darkenBlue};
        color: ${({ theme }) => theme.btnText};
        border: ${rem('2px')} solid ${({ theme }) => theme.darkenBlue};
        a {
          color: ${({ theme }) => theme.btnText};
        }
      }
    `}
  ${({ filterBtn }) =>
    filterBtn &&
    css`
      border: ${rem('1px')} solid ${({ theme }) => theme.cardTitle1};
      background: transparent;
      color: ${({ theme }) => theme.cardTitle1};
    `}

    ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.primaryBlue};
      border: ${rem('1px')} solid ${({ theme }) => theme.primaryBlue};
      color: ${({ theme }) => theme.btnText};
    `}
`;
