import React from 'react';
import Link from 'next/link';
import styles from '../styles/topbar.module.scss';

export default function Topbar({
    contactPageOpen,
    setContactPageOpen,
}) {
    return (
        <div className={styles.topbar}>
            <div className={styles.left}>
                <a href='#'>Enzo Mourany</a>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.right}>
                <ul className={styles.nav_items}>
                    <li>
                        <Link href='/Projects'>
                            <a>PROJECTS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/AboutPage'>
                            <a>ABOUT</a>
                        </Link>
                    </li>
                    <li>
                        <div className={styles.contactLink} onClick={() => setContactPageOpen(!contactPageOpen)}>
                            <a>CONTACT</a>
                        </div>
                    </li>
                </ul>
                <div
                    className={styles.hamburger}
                    //onClick={() => setMenuOpen(!menuOpen)}

                >
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    );
}
