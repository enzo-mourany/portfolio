/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/project-box.module.scss';
import Link from 'next/link';

export default function ProjectBox({
    id,
    title,
    description,
    githublink,
    tech,
    date,
    img
}) {
    const imgLink = `https://github.com/enzo-mourany/projects-api/blob/gh-pages/IMG/${img}`;
    return (
        <div>
            <li className='item'>
                <div className={styles.projectInner}>
                    <div className={styles.top}>
                        <Link href={`/projects/${id}`}>
                            <a>
                                <h3 className={styles.projectTitle}>{title}</h3>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.date}>
                        <p>{date}</p>
                    </div>
                    <div>
                        <img src="../public/IMG/feelfarbig-magazine-0nCFpNXJsA0-unsplash.jpg" />
                    </div>
                </div>
            </li>
        </div>
    );
}
