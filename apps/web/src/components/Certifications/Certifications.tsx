import React from 'react';

import Card from '@components/Card';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import Text from '@components/Text';
import Image from 'next/image';
import { rem } from 'polished';

import * as S from './Certifications.styles';
import { CertificationsProps } from './Certifications.types';

const Certifications = ({ children, ...rest }: CertificationsProps) => {
  return (
    <S.Certifications {...rest}>
      <Card>
        <Stack
          display="flex"
          vertical
          alignItems="center"
          gridGap={rem('16px')}
          placeItems="flex-start"
        >
          <Heading oxygen size="lg" fontWeight="bold">
            Portfolio page
          </Heading>
          <Heading fontWeight="bold" size="2xl">
            Who am I?
          </Heading>
          <Stack display="flex" justifyContent="center" width="100%">
            <Image
              src="/dev-light.svg"
              width={rem('247px')}
              height={rem('324px')}
            />
          </Stack>
          <Text>
            My name is <b>José Eduardo Alves</b>, I&apos;m on my early 30&apos;s
            and I am a <b>Frontend developer</b> from <b>Porto, Portugal.</b>{' '}
            <br />I started off by learning <b>HTML</b> and <b>CSS/SCSS</b> and
            a tiny bit of <b>JavaScript</b>. <br />
            Eventually, I decided to get into the <b>React</b> library, and I
            have never gone back since.
            <br /> <b>Next.js</b> is my go to framework for the frontend. <br />
            I handle state management with <b>Redux Toolkit</b>.
            <br /> My styling is done with <b>CSS-in-JS</b>, mostly done with{' '}
            <b>styled-components</b>, most of the times on a <b>Storybook</b>{' '}
            app. <br />
            Big fan of <b>TypeScript</b>, I use it on every project and try my
            best to get more into it progressively as I go. <br />I have some
            experience with backend languages, such as <b>PHP</b>, but I&apos;ve
            been mainly using <b>NodeJS</b> apps, such as <b>Strapi</b>, a
            Headless CMS, from which I&apos;m able to fetch data using{' '}
            <b>REST API</b> or <b>GraphQL</b>.
            <br />
            I&apos;m very familiar with <b>Git</b>, and I try to keep my{' '}
            <b>GitHub</b> super clean and professional, all my commits are done
            using <b>conventional-commits</b>. <br />I set up my repos with{' '}
            <b>Husky</b>, so that all my git commits go through git-hooks
            testing before every commit and before every push.
            <br />
            I&apos;ve been using mostly <b>Turborepo</b> monorepos lately, setup
            with <b>ESLint</b> to keep my code clean and readable to other
            developers. <br />
            Since lately my work is really JavaScript heavy, I&apos;ve grown
            familiar with package managers like <b>NPM</b>, and mainly{' '}
            <b>Yarn</b>.
          </Text>
          <Heading fontWeight="bold" size="2xl" mt={rem('80px')}>
            Certificates
          </Heading>
          <Stack
            display="flex"
            vertical
            width="100%"
            placeItems="flex-start"
            gridGap={rem('64px')}
            mt={rem('32px')}
          >
            <a
              href="https://www.iscedouro.pt/pt/Oferta-formativa/1-%C2%BA-Ciclo-Licenciaturas/Producao-de-Conteudos-Interativos-e-Multimedia/"
              target="_blank"
              rel="noreferrer"
            >
              <S.CertificateBox
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                width="100%"
                gridGap={rem('32px')}
                mt={rem('32px')}
              >
                <Image src="/isceDouro.png" width="100px" height="100px" />
                <Stack display="flex" vertical gridGap={rem('8px')}>
                  <Heading subtitle>Sep 2019 - Jun 2022</Heading>
                  <Heading oxygen size="lg" fontWeight="bold">
                    Interactive Multimedia Content Creation
                  </Heading>
                  <Text>
                    University degree on creation of Interactive Multimedia
                    content
                  </Text>
                </Stack>
              </S.CertificateBox>
            </a>
            <a
              href="https://devchallenges.io/certificates/zPgyDxXXQyAAbf21bMRs"
              target="_blank"
              rel="noreferrer"
            >
              <S.CertificateBox
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                width="100%"
                gridGap={rem('32px')}
                mt={rem('32px')}
              >
                <Image src="/devchallenges.jpg" width="100px" height="100px" />
                <Stack display="flex" vertical gridGap={rem('8px')}>
                  <Heading subtitle>Feb 2022 - Mar 2022</Heading>
                  <Heading oxygen size="lg" fontWeight="bold">
                    Front End Developer
                  </Heading>
                  <Text>
                    8 real-life like pratical challenges by devChallenges.io
                  </Text>
                </Stack>
              </S.CertificateBox>
            </a>
            <a
              href="https://www.freecodecamp.org/certification/hitmaizer/responsive-web-design"
              target="_blank"
              rel="noreferrer"
            >
              <S.CertificateBox
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                width="100%"
                gridGap={rem('32px')}
                mt={rem('32px')}
              >
                <Image src="/freeCode.png" width="145px" height="145px" />
                <Stack display="flex" vertical gridGap={rem('8px')}>
                  <Heading subtitle>Sep 2020 - Feb 2021</Heading>
                  <Heading oxygen size="lg" fontWeight="bold">
                    Responsive Web Design
                  </Heading>
                  <Text>
                    Developer Certification from FreeCodeCamp, representing
                    approximately 300 hours of coursework.
                  </Text>
                </Stack>
              </S.CertificateBox>
            </a>
            <a
              href="https://devchallenges.io/certificates/FAn2CzkmrfG7oRcfTZWE"
              target="_blank"
              rel="noreferrer"
            >
              <S.CertificateBox
                display="flex"
                alignItems="center"
                width="100%"
                gridGap={rem('32px')}
                mt={rem('32px')}
              >
                <Image src="/devchallenges.jpg" width="100px" height="100px" />
                <Stack display="flex" vertical gridGap={rem('8px')}>
                  <Heading subtitle>Jan 2022 - Feb 2022</Heading>
                  <Heading oxygen size="lg" fontWeight="bold">
                    Responsive Web Developer
                  </Heading>
                  <Text>
                    8 real-life like pratical challenges by devChallenges.io
                  </Text>
                </Stack>
              </S.CertificateBox>
            </a>
          </Stack>
          {children}
        </Stack>
      </Card>
    </S.Certifications>
  );
};

export default Certifications;
