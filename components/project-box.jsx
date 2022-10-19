/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/project-box.module.scss';
import Link from 'next/link';
import Image from 'next/image'

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
    const src = 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';
    const myLoader = () => {
        return src;
    }
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
                        <Image className={styles.img} loader={myLoader} src={src} alt="" width={720} height={440} />
                        <div></div>
                    </div>
                </div>
                <div className={styles.border}>
                    <span></span>
                </div>
            </li>
        </div>
    );
}
