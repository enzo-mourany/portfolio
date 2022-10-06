import React from 'react';
import styles from '../styles/contact.module.scss';
import Topbar from './Topbar';


export default function Contact() {
  return (
    <>
      <Topbar />
      <div className={styles.contact}>
        <div className={styles.header}>
          <div className={styles.mailButton}>
            <p>Send me an message</p>
            <a href='mailto:enzo.mourany@outlook.com'>
              enzo.mourany@outlook.com
            </a>
          </div>
        </div>
        <div className={styles.footer}>
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
