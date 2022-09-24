/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/homepage.module.scss';
import { HiArrowDown } from 'react-icons/hi';


export default function HomePage() {
    return (
        <div data-scroll-container className={styles.intro} id='intro'>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h3>FRENCH FRONTEND</h3>
                    <h3>WEB AND MOBILE</h3>
                    <h3>DEVELOPER</h3>
                </div>
                <div className={styles.welcome}>
                    <p>
                        WELCOME TO <span>my</span> 2022 <span>Portfolio</span>
                    </p>
                </div>
            </div>
            <div className={styles.scroll}>
                <HiArrowDown style={{ color: '#fff', width: 30, height: 30 }} />
                <h3>Scroll to discover</h3>
            </div>
        </div>
    );
}
