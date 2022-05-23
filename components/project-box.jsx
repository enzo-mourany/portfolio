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
}) {
    return (
        <div>
            <li className='item'>
                <div className={styles.projectInner}>
                    <div className={styles.top}>
                        <Link href={`/projects/${id}`}>
                            <a >
                                <h3 className={styles.projectTitle}>{title}</h3>
                            </a>
                        </Link>
                        <div className={styles.projectDescription}>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <ul className={styles.projectTechList}>
                            {tech.map((t) => (
                                <li>{t}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </li>
        </div>
    );
}
