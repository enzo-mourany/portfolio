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
                        <div className={styles.projectTop}>
                            <div className={styles.folder}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    role='img'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#fff'
                                    strokeWidth='1'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='feather feather-folder'
                                >
                                    <title>Folder</title>
                                    <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
                                </svg>
                            </div>
                            <div className={styles.projectLinks}>
                                <a
                                    href={githublink}
                                    aria-label='GitHub Link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        role='img'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='#fff'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='feather feather-github'
                                    >
                                        <title>GitHub</title>
                                        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                                    </svg>
                                </a>
                                <a href='#'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        role='img'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='#fff'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='feather feather-external-link'
                                    >
                                        <title>External Link</title>
                                        <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                                        <polyline points='15 3 21 3 21 9'></polyline>
                                        <line x1='10' y1='14' x2='21' y2='3'></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <Link href={`/projects/${id}`}>
                            <a style={{ color: 'green' }}>
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
