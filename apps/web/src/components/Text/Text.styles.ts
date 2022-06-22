import { rem } from 'polished';
import styled, { css } from 'styled-components';
import { color, fontWeight, space, style, typography } from 'styled-system';

import { TextProps } from './Text.types';
import { size } from './Text.variants';

const textTransform = style({
  key: 'textTransform',
  cssProperty: 'textTransform',
  prop: 'textTransform',
});

export const Text = styled.p<TextProps>`
  ${size}
  ${color}
  ${typography}
  ${space}
  ${textTransform}
  ${fontWeight}
  font-family: ${({ theme }) => theme.prompt};
  font-weight: 300;
  line-height: ${rem('32px')};
  font-size: ${rem('18px')};
  max-width: ${rem('730px')};

  ${({ card }) =>
    card &&
    css`
      min-height: ${rem('100px')};
    `}
  b {
    color: ${({ theme }) => theme.primaryBlue};
    font-weight: 600;
  }
`;
