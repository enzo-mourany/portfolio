/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Head from 'next/head';
import Topbar from './Topbar';
import HomePage from './HomePage';
import About from './About';
import styles from '../styles/index.module.scss';
import Projects from './Projects';
import ProjectBox from '../components/project-box';

const defaultEndpoint = 'https://enzo-mourany.github.io/projects-api/projects.json';

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}


export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <Topbar />
        <div className={styles.sections}>
          <HomePage />
          <About />
          {data.map(result => (
            <h3 style={{ color: '#fff' }}>{result.title}</h3>
          ))}
          <ProjectBox props={"test"} />
        </div>
      </main>
    </>
  );
}
