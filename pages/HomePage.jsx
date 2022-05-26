/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/homepage.module.scss';


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
                        WELCOME TO <span>my</span> 2021 <span>Portfolio</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
