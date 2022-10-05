/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import styles from '../styles/homepage.module.scss';
import ReactDOM from "react-dom";


export default function HomePage() {



    return (

        <div data-scroll-container className={styles.intro} id='intro'>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h3>
                        <span>F</span>
                        <span>R</span>
                        <span>E</span>
                        <span>N</span>
                        <span>C</span>
                        <span>H</span>
                        <span> </span>
                        <span>F</span>
                        <span>R</span>
                        <span>O</span>
                        <span>N</span>
                        <span>T</span>
                        <span>E</span>
                        <span>N</span>
                        <span>D</span>
                    </h3>
                    <h3>
                        <span>W</span>
                        <span>E</span>
                        <span>B</span>
                        <span> </span>
                        <span>A</span>
                        <span>N</span>
                        <span>D</span>
                        <span> </span>
                        <span>M</span>
                        <span>O</span>
                        <span>B</span>
                        <span>I</span>
                        <span>L</span>
                        <span>E</span>
                    </h3>
                    <span>D</span>
                    <span>E</span>
                    <span>V</span>
                    <span>E</span>
                    <span>L</span>
                    <span>O</span>
                    <span>P</span>
                    <span>E</span>
                    <span>R</span>
                </div>
                <div className={styles.welcome}>
                    <p>
                        WELCOME TO <span>my</span> 2022 <span>Portfolio</span>
                    </p>
                </div>
            </div>
            <div className={styles.scroll}>
                <div className={styles.arrow}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
