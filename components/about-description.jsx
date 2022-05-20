import React from 'react';
import styles from '../styles/about-description.module.scss';

export default function AboutDescription() {
    return (
        <div className={styles.aboutDescription}>
            <div className={styles.text}>
                <p>
                    I started frontend development because I like when websites
                    or applications are pleasant to use and intuitive. I love
                    designs that are out of the ordinary. My experience in
                    drawing could help me in this area.
                </p>
            </div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h3 className={styles.title}><span>01. </span>FRONTEND</h3>
                    <div className={styles.text2}>
                        <p alt="frontend">
                            To become a frontend developer, I started by acquiring a
                            solid foundation in HTML and CSS. Then I got into
                            javascript. To start creating and working on projects, I
                            learned React and React Native, then SASS which I liked much
                            more than CSS. Finally I started to work a lot with NextJS
                            to work on bigger projects. I also use some libraries like
                            Three.JS or Parallax.JS.
                        </p>
                    </div>
                </div>



                <div className={styles.item}>

                    <h3 className={styles.title}><span>02. </span>BACKEND</h3>
                    <div className={styles.text2}>
                        <p alt="backend">
                            I started backend development in my studies even though I
                            already had some basics in python. I learned Java, SQL and
                            C# with which I did some projects. To work on fullstack
                            projects, I learned to use NodeJS, Express and MongoDB in
                            particular to create REST APIs and to make online chat
                            systems.
                        </p>
                    </div>
                </div>


                <div className={styles.item}>

                    <h3 className={styles.title}><span>03. </span>TEAM WORKING</h3>
                    <div className={styles.text2}>
                        <p alt="team">
                            I am used to working with a team and managing one. Thanks to the different projects I have carried out, I have learned to distribute the work between the members of a team and to create a pleasant group atmosphere.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.text}>
                <p>
                    I am working to become a fullstack JS developer as well as a
                    blockchain developer. I would also like to be part of the
                    Ethereum project
                </p>
            </div>
        </div>
    );
}
