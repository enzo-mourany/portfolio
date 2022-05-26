import React from 'react';
import styles from '../styles/about-description.module.scss';

export default function AboutDescription() {
    return (
        <div className={styles.aboutDescription}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h3 className={styles.title}>
                        <span>01. </span>FRONTEND
                    </h3>
                    <div className={styles.text2}>
                        <p alt='frontend'>
                            To become a frontend developer, I started by acquiring a
                            solid foundation in <span>HTML</span> and{' '}
                            <span>CSS</span>. Then I got into javascript. To start
                            creating and working on projects, I learned{' '}
                            <span>React</span> and <span>React Native</span>, then{' '}
                            <span>SASS</span> which I liked much more than CSS.
                            Finally I started to work a lot with{' '}
                            <span>NextJS </span>
                            to work on bigger projects. I also use some libraries
                            like
                            <span> Three.JS</span> or <span>Parallax.JS</span>.
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <h3 className={styles.title}>
                        <span>02. </span>BACKEND
                    </h3>
                    <div className={styles.text2}>
                        <p alt='backend'>
                            I started backend development in my studies even though
                            I already had some basics in python. I learned{' '}
                            <span>Java</span>, <span> SQL</span>
                            and <span>C#</span> with which I did some projects. To
                            work on fullstack projects, I learned to use{' '}
                            <span>NodeJS</span>, <span>Express</span> and
                            <span> MongoDB</span> in particular to create REST APIs
                            and to make online chat systems.
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <h3 className={styles.title}>
                        <span>03. </span>TEAM WORKING
                    </h3>
                    <div className={styles.text2}>
                        <p alt='team'>
                            I am used to working with a team and managing one.
                            Thanks to the different projects I have carried out, I
                            have learned to distribute the work between the members
                            of a team and to create a pleasant group atmosphere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
