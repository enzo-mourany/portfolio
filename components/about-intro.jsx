/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/about-intro.module.scss';

export default function AboutIntro() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p>
                    <span>Hey!</span> I'm Enzo,</p>
                <p>a nineteen year <span>old</span></p>
                <p>frontend developer and student.</p>
                <p>Currently based <span>in</span> France</p>
            </div>
        </div>
    )

}
