import React from 'react'
import styles from '../styles/topbar.module.scss';

export default function Topbar() {
    return (
        <div className={styles.topbar}>
            <div className={styles.left}>
                left
            </div>
            <div className={styles.middle}>
                middle
            </div>
            <div className={styles.right}>
                right
            </div>
        </div>
    )
}
