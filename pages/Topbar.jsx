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
                        <Link href={'./Projects.jsx'}>
                            <a>PROJECTS</a>
                        </Link>
                    </li>
                    <li>
                        <a>ABOUT</a>
                    </li>
                    <li>
                        <a>CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
