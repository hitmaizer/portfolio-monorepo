import styled, { css } from 'styled-components';
import { color, space, textAlign, typography, variant } from 'styled-system';

import { StyledHeadingProps } from './Heading.types';

const size = variant({
  prop: 'size',
  variants: {
    lg: {
      fontSize: [2, 3],
      letterSpacing: '-0.01em',
    },
    xl: {
      fontSize: [3, 4],
      letterSpacing: '-0.019em',
    },
    '2xl': {
      fontSize: [4, 5],
      letterSpacing: '-0.021em',
    },
    '3xl': {
      fontSize: [5, 6],
      letterSpacing: '-0.022em',
    },
    '4xl': {
      fontSize: [6, 7],
      letterSpacing: '-0.022em',
    },
  },
});

export const Heading = styled.h1<StyledHeadingProps>`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  max-width: 940px;
  color: ${({ theme }) => theme.text};

  ${textAlign}
  ${typography}
  ${space}
  ${size}
  ${color}

  ${({ oxygen }) =>
    oxygen &&
    css`
      font-family: ${({ theme }) => theme.fonts.oxygen};
      color: ${({ theme }) => theme.primaryBlue};
    `}
`;
