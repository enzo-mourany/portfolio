/* eslint-disable react/jsx-key */
import Portfolio from "./portfolio/Portfolio";
//import Link from 'next/link';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <Portfolio />
      </main>

    </>
  );
}


