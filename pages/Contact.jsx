import React from 'react';
import styles from '../styles/contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>GET IN TOUCH</h2>
                </div>
                <div className={styles.message}>
                    <h3>WANT TO DISCUSS A NEW PROJECT?</h3>
                </div>
                <div className={styles.mailButton}>
                    <a href="mailto:enzo.mourany@outlook.com">Send me an e-mail</a>
                </div>
            </div>
            <div className={styles.footer}>
                <p>THANKS FOR YOUR VISIT!</p>
                <div className={styles.links}>
                    <ul>
                        <li>
                            <a href="https://github.com/enzo-mourany/" target="_blank" rel="noreferrer">GITHUB</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/enzo-mourany-9b4a37228/" target="_blank" rel="noreferrer">LINKEDIN</a>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    );
}
