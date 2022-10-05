import React from 'react';
import Link from 'next/link';
import ProjectBox from '../components/project-box';
import styles from '../styles/about.module.scss';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <p>01/</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.main_description}>
                        <p>I am passionate about web and mobile technology.</p>
                        <br />
                        <br />
                        <br />
                        <p>I first started to learn frontend development by building e-commerce and storefront websites. I was able to learn a lot of technologies like React.JS, Next.Js and also more specific technologies like ParallaxJS or ThreeJS.</p>
                        <br />
                        <br />
                        <br />
                        <p>In parallel, I started developing mobile applications in React Native, starting with an application of Tabata
                        </p>
                    </div>
                    <div className={styles.description}>
                        <p>After a few months, I decided to learn backend development to be able to create fullstack projects such as social networks. I chose javascript technologies with NodeJS, Express and MongoDB</p>
                        <p>I like to make interfaces that are pleasant to use and intuitive for the users. Fluid and warm ashes.</p>
                        <Link href="/AboutPage">
                            <a>More about me</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
