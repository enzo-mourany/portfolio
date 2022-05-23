/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Topbar from './Topbar';
import HomePage from './HomePage';
import About from './About';
import styles from '../styles/index.module.scss';
import Projects from './Projects';
import ProjectBox from '../components/project-box';

const defaultEndpoint = 'https://raw.githubusercontent.com/enzo-mourany/projects-api/gh-pages/projects.json';

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <Topbar />
        <div className={styles.sections}>
          <HomePage className="homePage" />
          <About className="about" />
          <div className={styles.outerWrapper}>
            <div className={styles.wrapper}>
              {data.map(result => (
                <ProjectBox id={result.id} title={result.title} description={result.description} githublink={result.githublink} tech={result.tech} />
              ))}
            </div>
          </div>

          <Projects />

        </div>
      </main>
    </>
  );
}
