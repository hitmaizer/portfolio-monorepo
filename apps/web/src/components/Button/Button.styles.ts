import { mediaQueries } from 'src/styles';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  font-family: ${(theme) => theme.theme.fonts.font};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 6px 18px;
  cursor: pointer;
  transition: all 1ms ease-out;
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
      border: none;
      background-color: ${(theme) => theme.theme.colors.primaryBlue};
      a,
      a:visited,
      a:hover,
      a:active {
        color: ${(theme) => theme.theme.colors.btnText};
        &: hover {
          color: ${(theme) => theme.theme.colors.btnText};
        }
      }
      &:hover {
        background-color: ${(theme) => theme.theme.colors.darkenBlue};
        color: ${(theme) => theme.theme.colors.btnText};
      }
    `}
  ${({ outline }) =>
    outline &&
    css`
      border: 2px solid ${(theme) => theme.theme.colors.primaryBlue};
      background: transparent;
      a,
      a:visited,
      a:hover,
      a:active {
        color: ${(theme) => theme.theme.colors.primaryBlue};
      }
      &:hover {
        background: ${(theme) => theme.theme.colors.darkenBlue};
        color: ${(theme) => theme.theme.colors.btnText};
        border: 2px solid ${(theme) => theme.theme.colors.darkenBlue};
        a {
          color: ${(theme) => theme.theme.colors.btnText};
        }
      }
    `}
  ${({ filterBtn }) =>
    filterBtn &&
    css`
      border: 1px solid ${(theme) => theme.theme.colors.cardTitle1};
      background: transparent;
      color: ${(theme) => theme.theme.colors.cardTitle1};
      &:hover {
        transform: translateY(0%);
      }
    `}
`;
