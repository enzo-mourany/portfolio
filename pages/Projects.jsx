import React from 'react';
import Link from 'next/link';
import ProjectCard from '../components/project-card';
import Topbar from './topbar';


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
            <div>
                <div>
                    {data.map((result) => (
                        // eslint-disable-next-line react/jsx-key
                        <ProjectCard
                            id={result.id}
                            title={result.title}
                            description={result.description}
                            githublink={result.githublink}
                            tech={result.tech}
                            date={result.date}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
