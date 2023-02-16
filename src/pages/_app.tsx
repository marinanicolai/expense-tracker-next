import React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Basic } from '../components/Basic';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />;
          <Basic />
        </QueryClientProvider>
      </React.StrictMode>
    </>
  );
}
