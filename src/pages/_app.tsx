import { AppProps } from 'next/app';

import { Header } from '~/components/Header';

import { GlobalStyle } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Header />

      <main role="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
