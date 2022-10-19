import styles from '../../styles/selectedProject.module.scss';
import Link from 'next/link';
import Image from 'next/image'

export default function Post({ post }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <div className={styles.topBar_left}>
                        <div className={styles.projectTitle}>
                            <p className={styles.title}>{post.title}</p>
                        </div>
                        <div className={styles.repoLink}>
                            <a className={styles.github} href={post.githubLink}>View code</a>
                        </div>
                    </div>
                    <div className={styles.topBar_right}>
                        <Link href={'/'}>
                            <a>Close</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <span>
                            <p className={styles.description}>{post.description}</p>
                        </span>
                        <div className={styles.projectInfo}>
                            <div className={styles.projectInfo_title}>
                                <p>Project Info</p>
                            </div>
                            <div className={styles.projectType}>
                                <div>
                                    <p>Type</p>
                                    <p>{post.type}</p>
                                </div>
                            </div>
                            <div className={styles.projectYear}>
                                <div>
                                    <p>Year</p>
                                    <p>{post.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.image}>
                        </div>
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