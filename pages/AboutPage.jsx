/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/about-page.module.scss';
import AboutIntro from '../components/about-intro';
import AboutDescription from '../components/about-description';

export default function AboutPage() {
    return (
        <div className={styles.about}>
            <AboutIntro />
            <AboutDescription />
        </div>
    )
}
