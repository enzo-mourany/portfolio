/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/project-card.module.scss';
import Link from 'next/link';

export default function ProjectCard({
    id,
    title,
    description,
    githublink,
    tech,
    date,
}) {
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
                    <div className={styles.description}>
                        <p>{description}</p>
                    </div>
                    <div className={styles.date}>
                        <p>{date}</p>
                    </div>
                </div>
            </li>
        </div>
    );
}
