export default function Post({ post }) {
    console.log(post)
    return (
        <>
            <main>
                <h1 style={{ color: 'white' }}>{post.title}</h1>
                <p style={{ color: 'white' }}>{post.description}</p>
            </main>
        </>
    )
}

export async function getStaticProps({ params }) {
    const posts = await fetch(`https://raw.githubusercontent.com/enzo-mourany/projects-api/gh-pages/projects.json`).then(r => r.json());
    const post = posts.find(p => p.id === parseInt(params.id))
    console.log(post)
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const posts = await fetch('https://raw.githubusercontent.com/enzo-mourany/projects-api/gh-pages/projects.json').then(r => r.json());
    return {
        paths: posts.map(post => ({
            params: { id: post.id.toString() }
        })),
        fallback: false,
    }
}