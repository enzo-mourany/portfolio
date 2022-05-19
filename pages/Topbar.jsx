import React from 'react'
import styles from '../styles/topbar.module.scss';

export default function Topbar() {
    return (
        <div className={styles.topbar}>
            <div className={styles.left}>
                <p>Enzo Mourany</p>
            </div>
            <div className={styles.middle}>
                middle
            </div>
            <div className={styles.right}>
                <ul>
                    <li>
                        <a href="#">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
