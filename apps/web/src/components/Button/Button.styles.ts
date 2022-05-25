import { mediaQueries } from 'src/styles';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding: 6px 18px;
  cursor: pointer;
  transition: all 300ms ease;
  max-height: 46px;
  ${mediaQueries.sm} {
    padding: 12px 32px;
  }
  &:hover {
    transform: translateY(-3%);
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
      border: 2px solid ${({ theme }) => theme.primaryBlue};
      background: transparent;
      a,
      a:visited,
      a:hover,
      a:active {
        color: ${({ theme }) => theme.primaryBlue};
      }
      &:hover {
        background: ${({ theme }) => theme.darkenBlue};
        color: ${({ theme }) => theme.btnText};
        border: 2px solid ${({ theme }) => theme.darkenBlue};
        a {
          color: ${({ theme }) => theme.btnText};
        }
      }
    `}
  ${({ filterBtn }) =>
    filterBtn &&
    css`
      border: 1px solid ${({ theme }) => theme.cardTitle1};
      background: transparent;
      color: ${({ theme }) => theme.cardTitle1};
      &:hover {
        transform: translateY(0%);
      }
    `}
`;
