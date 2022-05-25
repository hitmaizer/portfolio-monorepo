import styled from 'styled-components';
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
  line-height: 32px;
  font-size: 18px;
  max-width: 730px;
  b {
    color: ${({ theme }) => theme.primaryBlue};
    font-weight: 600;
  }
`;
