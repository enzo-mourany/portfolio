import React from 'react';
import Link from 'next/link';
import styles from '../styles/topbar.module.scss';

export default function Topbar({
    contactPageOpen,
    setContactPageOpen,
}) {
    return (
        <div className={styles.topbar}>
            <a className={styles.nav_logo} href='#'>Enzo Mourany</a>
                <div className={styles.nav_items}>
                    <a className={styles.item}>PROJECTS</a>
                    <a className={styles.item}>ABOUT</a>
                    <div className={styles.item} onClick={() => setContactPageOpen(!contactPageOpen)}>
                        <a>CONTACT</a>
                    </div>
                </div>
                <div className={styles.nav_toggle}>
                    <div className={styles.bar}></div>
                </div>
        </div>
    );
}
