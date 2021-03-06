import { FC, useState, useEffect } from 'react';

import Head from '@components/Head';
import SEO from '@config/next-seo';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import theme from 'src/styles/theme/theme';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/styles';

import '../src/styles/fonts';

const MyApp: FC<AppProps> = ({ Component, pageProps: { ...pageProps } }) => {
  const [mounted, setMounted] = useState(false);
  const { asPath } = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] =
    `https://portfolio-monorepo-sand.vercel.app${page}`.split('?');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme.theme.colors.lightTheme}>
          <DefaultSeo
            canonical={canonicalUrl}
            openGraph={{
              url: canonicalUrl,
              type: 'website',
              site_name: 'JA Portfolio',
            }}
            dangerouslySetAllPagesToNoIndex
            {...SEO}
          />
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <GlobalStyle />
            {mounted && <Component {...pageProps} />}
          </Head>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
