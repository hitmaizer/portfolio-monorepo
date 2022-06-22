/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:image"
          content="https://i.ibb.co/dWpsJ5L/SEO-thumbnail.png"
        />
        <meta
          property="og:description"
          content="My name is José Eduardo Alves, I'm on my early 30's and I am a Frontend developer from Porto, Portugal."
          key="ogdesc"
        />
      </Head>
      <section>
        <main>{children}</main>
      </section>
    </>
  );
}
