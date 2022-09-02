import React from 'react';
import styles from '../styles/contact.module.scss';

export default function Contact({
    contactPageOpen,
    setContactPageOpen,
}) {
    return (
        <div className={styles.contact + " " + (contactPageOpen && "active")}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>GET IN TOUCH</h2>
                </div>
                <div className={styles.message}>
                    <h3>
                        <span>W</span>
                        <span>A</span>
                        <span>N</span>
                        <span>T</span>
                        <span> </span>
                        <span>T</span>
                        <span>O</span>
                        <span> </span>
                        <span>D</span>
                        <span>I</span>
                        <span>S</span>
                        <span>C</span>
                        <span>U</span>
                        <span>S</span>
                        <span>S</span>
                        <span> </span>
                        <span>A</span>
                        <span> </span>
                        <span>N</span>
                        <span>E</span>
                        <span>W</span>
                        <span> </span>
                        <span>P</span>
                        <span>R</span>
                        <span>O</span>
                        <span>J</span>
                        <span>E</span>
                        <span>C</span>
                        <span>T</span>
                        <span> </span>
                        <span>?</span>
                    </h3>
                </div>
                <div className={styles.mailButton}>
                    <a href='mailto:enzo.mourany@outlook.com'>
                        Send me an e-mail
                    </a>
                </div>
            </div>
            <div>
                <p>close</p>
            </div>
            <div className={styles.footer}>
                <p>THANKS FOR YOUR VISIT!</p>
                <div className={styles.links}>
                    <ul>
                        <li>
                            <a
                                href='https://github.com/enzo-mourany/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                GITHUB
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.linkedin.com/in/enzo-mourany-9b4a37228/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                LINKEDIN
                            </a>
                        </li>
                        <li>
                            <a
                                href='/files/CV.pdf'
                                alt='download resume'
                                download
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                RESUME
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
