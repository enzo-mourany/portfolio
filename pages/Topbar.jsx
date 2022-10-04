import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/topbar.module.scss';


export default function Topbar({
    contactPageOpen,
    setContactPageOpen,
}) {

    /*
    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
        // ✅ Can use window here
    } else {
        console.log('You are on the server')
        // ⛔️ Don't use window here
    }


    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
*/

    const [isOpen, setIsOpen] = useState(false);
    const [isHamburgerMenuShown, setIsHamburgerMenuShown] = useState(false);

    return (
        <div className={styles.topbar}>
            <span className={styles.nav_logo}>Enzo Mourany</span>
            {isHamburgerMenuShown ? (
                <div className={isOpen ? styles.nav_items : styles.nav_items_open}>
                    <ul>
                        <Link className={styles.item} href="/Projects"><a className={styles.item}>Works</a></Link>
                        <a className={styles.item}>About</a>
                        <div className={styles.item} onClick={() => setContactPageOpen(!contactPageOpen)}>
                            <a>Contact</a>
                        </div>
                    </ul>
                </div>
            ) : (
                <>
                    <div className={styles.nav_items}>
                        <Link className={styles.item} href="/Projects"><a className={styles.item}>Works</a></Link>
                        <a className={styles.item}>About</a>
                        <div className={styles.item} onClick={() => setContactPageOpen(!contactPageOpen)}>
                            <a>Contact</a>
                        </div>
                    </div>
                    <div className={styles.hamburger}>
                        <p>Test</p>
                    </div>
                </>
            )
            }



        </div>
    );
}
