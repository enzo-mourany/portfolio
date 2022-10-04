import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/topbar.module.scss';


export default function Topbar({
    contactPageOpen,
    setContactPageOpen,
}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.topbar}>
            <span className={styles.nav_logo}>Enzo Mourany</span>
            <div className={styles.nav_items}>
                <ul>
                    <Link className={styles.item} href="/Projects"><a className={styles.item}>Works</a></Link>
                    <a className={styles.item}>About</a>
                    <div className={styles.item} onClick={() => setContactPageOpen(!contactPageOpen)}>
                        <a>Contact</a>
                    </div>
                </ul>
            </div>
            <div
                className={isOpen ? styles.hamburger_open : styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    );
}
