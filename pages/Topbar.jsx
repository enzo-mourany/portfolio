import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/topbar.module.scss';

export default function Topbar({
    contactPageOpen,
    setContactPageOpen,
}) {
    const [isOpen, setIsOpen] = useState(true);
    const [isHamburgerMenuShown, setIsHamburgerMenuShown] = useState(true);
    return (
        <div className={styles.topbar}>
            <span className={styles.nav_logo} >Enzo Mourany</span>
            {isHamburgerMenuShown ? (
                <div className={styles.nav_items + " " + (isOpen && "open")}>
                    <Link className={styles.item} href="/Projects"><a className={styles.item}>Works</a></Link>
                    <a className={styles.item}>About</a>
                    <div className={styles.item} onClick={() => setContactPageOpen(!contactPageOpen)}>
                        <a>Contact</a>
                    </div>
                </div>
            ) : (
                <div className={styles.nav_items}>
                    <Link className={styles.item} href="/Projects"><a className={styles.item}>Works</a></Link>
                    <a className={styles.item}>About</a>
                    <div className={styles.item} onClick={() => setContactPageOpen(!contactPageOpen)}>
                        <a>Contact</a>
                    </div>
                </div>
            )
            }



        </div>
    );
}
