/* eslint-disable react/jsx-key */
import Head from 'next/head';
import Topbar from './Topbar';
import HomePage from './HomePage';
import About from './About';


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <Topbar />
        <div className="sections">
          <HomePage />
          <About />
        </div>

      </main>
    </>
  );
}
