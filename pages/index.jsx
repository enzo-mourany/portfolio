/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Topbar from './Topbar';
import HomePage from './HomePage';
import About from './About';
import styles from '../styles/index.module.scss';
import Projects from './Projects';
import ProjectBox from '../components/project-box';
import Contact from './Contact';
import ProjectCard from '../components/project-card';


const defaultEndpoint =
  'https://raw.githubusercontent.com/enzo-mourany/projects-api/gh-pages/projects.json';

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Home({ data }) {

  const [contactPageOpen, setContactPageOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <Topbar contactPageOpen={contactPageOpen} setContactPageOpen={setContactPageOpen} />
        <div className={styles.container}>
          <div className={styles.horizontalBloc}>
            <HomePage className='homePage' />
            <About className='about' />
            <div className={styles.outerWrapper}>
              <div className={styles.wrapper}>
                {data.map((result) => (
                  <ProjectBox
                    className={styles.projectBox}
                    id={result.id}
                    title={result.title}
                    description={result.description}
                    githublink={result.githublink}
                    tech={result.tech}
                    date={result.date}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
        <Contact contactPageOpen={contactPageOpen} setContactPageOpen={setContactPageOpen} />
      </main>
    </>
  );
}
