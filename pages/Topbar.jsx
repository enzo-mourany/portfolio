import React from 'react';
import Link from 'next/link';
import styles from '../styles/topbar.module.scss';

export default function Topbar() {
    return (
        <div className={styles.topbar}>
            <div className={styles.left}>
                <a href='#'>Enzo Mourany</a>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.right}>
                <ul>
                    <li>
                        <Link href="/Projects">
                            <a>PROJECTS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/About">

                            <a>ABOUT</a>
                        </Link>
                    </li>
                    <li>
                        <a href="https://google.com">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
