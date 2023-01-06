import Head from 'next/head';
import Link from 'next/link';

import { HomeIcon } from '@heroicons/react/solid';

function Custom404() {
  return (
    <>
      <Head>
        <title>Something went wrong.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-r from-red-700 to-orange-400 text-white flex justify-center items-center h-screen font-semibold">
        <nav className="fixed top-0 w-full h-14 md:h-16 py-3 px-4 md:px-7 flex items-center">
          <Link href="/" passHref>
            <a className="flex items-center">
              <HomeIcon className="w-7 h-7 mr-1" />
              <span className="text-xl">Home</span>
            </a>
          </Link>
        </nav>
        <div className="text-3xl">Sorry, couldn&apos;t find that.</div>
      </div>
    </>
  );
}

export default Custom404;
