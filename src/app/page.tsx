import Head from 'next/head';

import Intro from "./inicio/page";

export default function Home() {
  return (
    <main>
      <Head>
        {/* <meta name="emx-lgpsite-id" content="1" />
        <script src="https://lgpdquintera.nuvemx.com.br/Cookies/emx-inject.js?website_code=1" className="emx-cookie" async></script> */}
      </Head>
      <Intro />
    </main>
  );
}
