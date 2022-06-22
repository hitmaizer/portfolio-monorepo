import { rem } from 'polished';
import { mediaQueries } from 'src/styles';
import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { CertificationsProps } from './Certifications.types';

export const Certifications = styled.div`
  width: 100%;
`;

export const CertificateBox = styled.div<CertificationsProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${gridGap}
  min-width: fit-content;

  ${mediaQueries.lg} {
    min-width: ${rem('650px')};
  }
`;
