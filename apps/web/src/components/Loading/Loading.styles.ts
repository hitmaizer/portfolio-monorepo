import { rem } from 'polished';
import styled, { keyframes } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import { LoadingProps } from './Loading.types';

const bouncer = keyframes`
  from { transform: translateY(0) }
  to { transform: translateY(-25px) }
`;

export const Loading = styled.div<LoadingProps>`
  ${layout}
  ${flexbox}
  ${space}
  width: 100%;
  min-height: ${rem('300px')};
`;

export const Bouncer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: ${rem('100px')};
  height: ${rem('100px')};
  animation: ${bouncer} 0.6s 0.1s ease infinite alternate;
  & > *:nth-child(1) {
    animation: ${bouncer} 0.6s 0.1s ease infinite alternate;
    opacity: 1;
  }
  & > *:nth-child(2) {
    animation: ${bouncer} 0.4s 0.1s ease infinite alternate;
    opacity: 0.8;
  }
  & > *:nth-child(3) {
    animation: ${bouncer} 0.4s 0.2s ease infinite alternate;
    opacity: 0.6;
  }
  & > *:nth-child(4) {
    animation: ${bouncer} 0.4s 0.3s ease infinite alternate;
    opacity: 0.4;
  }
`;

export const Ball = styled.div`
  width: ${rem('20px')};
  height: ${rem('20px')};
  background-color: ${({ theme }) => theme.primaryBlue};
  border-radius: 50%;
`;
