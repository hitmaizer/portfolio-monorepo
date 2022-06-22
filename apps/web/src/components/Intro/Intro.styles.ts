import { Envelope, Phone } from '@styled-icons/boxicons-solid';
import { rem } from 'polished';
import { mediaQueries } from 'src/styles';
import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { IntroProps } from './Intro.types';

export const Intro = styled.div`
  width: 100%;
`;

export const EmailIcon = styled(Envelope)`
  width: ${rem('24px')};
  color: ${({ theme }) => theme.text};
`;

export const PhoneIcon = styled(Phone)`
  width: ${rem('24px')};
  color: ${({ theme }) => theme.text};
`;

export const IntroStack = styled.div<IntroProps>`
  ${layout}
  ${space}
  ${flexbox}
  ${gridGap}

  ${mediaQueries.lg} {
    flex-direction: row;
  }
`;
