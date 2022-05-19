/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Head from 'next/head';
import Topbar from './Topbar';
import HomePage from './HomePage';
import About from './About';


export default function Home({ posts }) {

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
          <ul>
            {posts.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </div>

      </main>
    </>
  );
}

export async function getServerSideProps() {
  const postsResponse = await fetch(process.env.BASE_URL + '/api/projects');
  const postsData = await postsResponse.json();

  return {
    props: {
      posts: postsData
    }
  }
}
