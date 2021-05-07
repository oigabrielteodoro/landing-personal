import { AppProps } from 'next/app';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

import { GlobalStyle } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Header />

      <main role="main">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default MyApp;
