import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const colors = {
    brand: {
      900: '#5E0616',
      800: '#153e75',
      700: '#2a69ac',
    },
  };

  const theme = extendTheme({ colors });
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Restaurant Indian Spice</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
