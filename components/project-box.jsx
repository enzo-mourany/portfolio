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
    type,
    date,
    img
}) {
    const imgLink = `https://github.com/enzo-mourany/projects-api/blob/gh-pages/IMG/${img}`;
    return (
        <div>
            <li className={styles.item}>
                <div className={styles.projectInner}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            <Link href={`/projects/${id}`}>
                                <a>
                                    <h3 className={styles.projectTitle}>{title}</h3>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.type}>
                            <p className={styles.projectType}>{type}</p>
                        </div>
                        <div className={styles.tech}>
                            {tech.map((result) => (
                                <p className={styles.projectTech}>{result} - </p>
                            ))}
                        </div>

                    </div>

                    <div className={styles.right}>
                        <p> </p>
                    </div>
                </div>
                <div className={styles.border}>
                    <span></span>
                </div>
            </li>
        </div>
    );
}
