import React from 'react';

const defaultEndpoint = 'https://jsonplaceholder.typicode.com/users';

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
    const { results = [] } = data;
    return (
        <div>
            {results.map((post) => (
                <div key={post.id}>
                    <h3>{post.name}</h3>
                </div>
            ))}
        </div>
    )
}

