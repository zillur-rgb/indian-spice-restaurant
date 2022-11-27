import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

export default function App({ Component, pageProps }: AppProps) {
  const colors = {
    brand: {
      900: '#c0392b',
      800: '#153e75',
      700: '#2a69ac',
    },
  };

  const theme = extendTheme({ colors });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
