import React from 'react';
import Link from 'next/link';
import Topbar from './Topbar';
import ProjectBox from '../components/project-box';
import styles from '../styles/projects.module.scss';


const defaultEndpoint = 'https://raw.githubusercontent.com/enzo-mourany/projects-api/gh-pages/projects.json';

export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}


export default function Projects({ data }) {
    return (
        <>
            <Topbar />
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <p>01/</p>
                    </div>
                    <div className={styles.right}>
                        <h1>Projects</h1>
                        <p>06</p>
                    </div>
                </div>
                <div>
                    {data.map((result) => (
                        // eslint-disable-next-line react/jsx-key
                        <ProjectBox
                            //className={styles.projectBox}
                            id={result.id}
                            title={result.title}
                            description={result.description}
                            githublink={result.githublink}
                            tech={result.tech}
                            type={result.type}
                            date={result.date}
                            img={result.img}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
