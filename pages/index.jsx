/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Head from 'next/head';
import Topbar from './Topbar';
import HomePage from './HomePage';
import About from './About';
import styles from '../styles/index.module.scss';
import Projects from './Projects';

export default function Home() {
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
        </div>
      </main>
    </>
  );
}
