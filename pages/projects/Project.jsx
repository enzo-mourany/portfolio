import React from 'react';
import Link from 'next/link';

export default function Project() {
    return (
        <>
            <main>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </main>
        </>
    );
}

export async function getStaticProps({ params }) {
    const post = fetch(
        `../api/projects.json${params.id}`
    ).then((r) => r.json());
    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const post = fetch(
        '../api/projects.json'
    ).then((r) => r.json());
    return {
        paths: post.map((post) => ({
            params: { id: post.id.toString() }
        })),
        // default id if no id correspond
        fallback: false,
    };
}