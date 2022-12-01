import type { AppProps } from 'next/app';
import { workSansFont } from '../styles/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${workSansFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
