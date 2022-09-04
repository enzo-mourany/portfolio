import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/topbar.module.scss';

export default function Topbar({
    contactPageOpen,
    setContactPageOpen,
}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.topbar}>
            <span className={styles.nav_logo} >Enzo Mourany</span>
            <div className={styles.nav_items + " " + (isOpen && "open")}>
                <Link href="/Projects">Projects</Link>
                <a className={styles.item}>PROJECTS</a>
                <a className={styles.item}>ABOUT</a>
                <div className={styles.item} onClick={() => setContactPageOpen(!contactPageOpen)}>
                    <a>CONTACT</a>
                </div>
            </div>
            <div className={styles.nav_toggle + " " + (isOpen && "open")} onClick={() => setIsOpen(!isOpen)}>
                <div className={styles.bar}></div>
            </div>
        </div>
    );
}
