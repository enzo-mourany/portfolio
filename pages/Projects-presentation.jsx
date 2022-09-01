import React from 'react';
import Link from 'next/link';
import ProjectBox from '../components/project-box';

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

export default function ProjectsPresentation() {
    return (
        <div>
            projects
        </div>
    );
}
