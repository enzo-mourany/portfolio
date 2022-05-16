import Link from 'next/link';

export default function Post({ post }) {
    return (
        <>
            <main>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </main>
        </>
    );
}

export async function getStaticProps({ params }) {
    const post = await fetch(
        `http://jsonplaceholder.typicode.com/posts/${params.id}`
    ).then((r) => r.json());
    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const post = await fetch(
        'http://jsonplaceholder.typicode.com/posts?_limit=4'
    ).then((r) => r.json());
    return {
        paths: post.map((post) => ({
            params: { id: post.id.toString() }
        })),
        // default id if no id correspond
        fallback: false,
    };
}
