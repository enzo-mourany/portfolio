export default function Post({ post }) {
    return (
        <>
            <main>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </main>
        </>
    )
}

export async function getStaticProps({ params }) {
    const post = await fetch(`https://enzo-mourany.github.io/projects-api/projects.json/${params.id}`).then(r => r.json());
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const posts = await fetch('https://enzo-mourany.github.io/projects-api/projects.json?').then(r => r.json());
    return {
        paths: posts.map(post => ({
            params: { id: post.id.toString() }
        })),
        fallback: false,
    }
}