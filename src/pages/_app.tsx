import { AppProps } from 'next/app';

import { Header } from '~/components/shared/Header';
import { Footer } from '~/components/shared/Footer';

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
