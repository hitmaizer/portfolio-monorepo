import { rem } from 'polished';
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

  min-width: ${rem('650px')};
`;
