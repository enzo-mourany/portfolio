/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/about.module.scss';
import AboutIntro from '../components/about-intro';
import AboutDescription from '../components/about-description';

export default function AboutPage() {
    return (
        <div className={styles.about}>
            <AboutIntro />
            <AboutDescription />
            <p className={styles.title}>
                Hey! I'm Enzo, a nineteen year old frontend developer and student. Currently based in France
            </p>
            <p className={styles.text}>
                I’m french developer and first year computer science
                student. I working on web 3.0 projects with
                technologies like React, Node JS and more.
                I also develop blockchain projects with solidity.
            </p>
            <p className={styles.text}>
                I am very interested in cryptocurrencies as well as
                its issues and projects
                During several projects I was able to develop my relationship.
                I am comfortable leading a team.
            </p>
            <p className={styles.text}>
                I keep up to date on new technologies, especially those related to web 3.0
            </p>
            <p className={styles.text}>
                I am working to become a fullstack JS developer as well as a blockchain developer.
                I would also like to be part of the Ethereum project
            </p>
        </div>
    );
}
