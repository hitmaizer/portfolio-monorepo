import { FC, useState, useEffect } from 'react';

import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { GlobalStyle } from '../src/styles';
import { ThemeProvider } from 'styled-components';
import theme from 'src/styles/theme/theme';
import SEO from '@config/next-seo';
import { store } from 'src/redux/store';

const MyApp: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [mounted, setMounted] = useState(false);
  const { asPath } = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://radflix.com${page}`.split('?');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
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
          <GlobalStyle />
          {mounted && <Component {...pageProps} />}
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
