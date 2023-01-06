import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away-subtle.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        autoClose={3000}
        bodyClassName="text-center font-semibold"
        closeButton={false}
        draggable={false}
        hideProgressBar
        limit={1}
        position="bottom-center"
      />
    </>
  );
}

export default MyApp;
