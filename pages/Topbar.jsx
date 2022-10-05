import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/topbar.module.scss';


export default function Topbar() {

    const [isOpen, setIsOpen] = useState(false);

    const [show, setShow] = useState(true);
    /*
        let lastScrollTop = 0;
        const controlTopbar = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setShow(false);
            } else {
                setShow(true);
            }
            lastScrollTop = scrollTop;
        }
    
        useEffect(() => {
            window.addEventListener('scroll', controlTopbar);
            return () => window.removeEventListener('scroll', controlTopbar);
        }, []);
    */

    return (
        <div className={show ? styles.topbar : styles.topbar_hidden}>
            <Link href={"/"}>
                <a className={styles.nav_logo}>Enzo Mourany</a>
            </Link>
            <div className={styles.nav_items}>
                <ul>
                    <Link className={styles.item} href="/Projects"><a className={styles.item}>Works</a></Link>
                    <Link href="/AboutPage">
                        <a className={styles.item}>About</a>
                    </Link>
                    <Link href="/Contact">
                        <a className={styles.item}>Contact</a>
                    </Link>
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
