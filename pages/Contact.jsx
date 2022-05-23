import React from 'react';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>MOURANY</h2>
                </div>
                <div className={styles.message}>
                    <h3>GET IN TOUCH</h3>
                </div>
                <div className={styles.mailButton}>
                    Send me an e-mail
                </div>
            </div>
            <div className={styles.footer}>
                <p>THANKS FOR YOUR VISIT!</p>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>
                        <a href="#">GITHUB</a>
                    </li>
                    <li>
                        <a href="#">LINKEDIN</a>
                    </li>
                </ul>
            </div>


        </div>
    );
}
