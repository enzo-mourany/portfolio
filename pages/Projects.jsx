import React from 'react'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = res.json();

    return {
        props: { projects: data }
    }
}

export default function Projects({ projects }) {
    return (
        <div>
            {projects.map(project => (
                <div key={project.id}>
                    <h3>{project.name}</h3>
                </div>
            ))}
        </div>
    )
}

