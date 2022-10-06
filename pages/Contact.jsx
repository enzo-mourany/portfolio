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
            <ul>
              <li>
                <span>S</span>
                <span>E</span>
                <span>N</span>
                <span>D</span>
                <span>&nbsp;</span>
                <span>M</span>
                <span>E</span>
                <span>&nbsp;</span>
                <span>A</span>
                <span>&nbsp;</span>
                <span>M</span>
                <span>E</span>
                <span>S</span>
                <span>S</span>
                <span>A</span>
                <span>G</span>
                <span>E</span>
              </li>
            </ul>
            <a href='mailto:enzo.mourany@outlook.com'>
              <ul>
                <li>
                  <span>E</span>
                  <span>N</span>
                  <span>Z</span>
                  <span>O</span>
                  <span>.</span>
                  <span>M</span>
                  <span>O</span>
                  <span>U</span>
                  <span>R</span>
                  <span>A</span>
                  <span>N</span>
                  <span>Y</span>
                  <span>@</span>
                  <span>O</span>
                  <span>U</span>
                  <span>T</span>
                  <span>L</span>
                  <span>O</span>
                  <span>O</span>
                  <span>K</span>
                  <span>.</span>
                  <span>C</span>
                  <span>O</span>
                  <span>M</span>
                </li>
              </ul>
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
