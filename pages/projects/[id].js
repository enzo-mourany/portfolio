import styles from '../../styles/selectedProject.module.scss';
import Link from 'next/link';
import Image from 'next/image'

export default function Post({ post }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.topbar}>
                    <div className={styles.backMenu}>
                        <Link href={'/'}>
                            <a>Back</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <a className={styles.github} href={post.githubLink}>View code</a>
                        <p className={styles.description}>{post.description}</p>
                        <p className={styles.delivered}>{post.delivered}</p>
                        <p className={styles.retex}>{post.retex}</p>
                        <ul className={styles.techList}>
                            {post.tech.map((t) => (
                                <li key={t.id} className={styles.tech} >{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.right}>

                    </div>
                </div>



            </div>
        </>
    )
}

export async function getStaticProps({ params }) {
    const posts = await fetch(`https://raw.githubusercontent.com/enzo-mourany/projects-api/gh-pages/projects.json`).then(r => r.json());
    const post = posts.find(p => p.id === parseInt(params.id))
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