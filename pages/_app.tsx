import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="cupcake">
      <Component {...pageProps} />
    </div>
  );
  
}
