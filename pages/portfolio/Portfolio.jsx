/* eslint-disable react/jsx-key */
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';


export default function Portfolio({ posts }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => setCount(n => n + 1), 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <>

            <h1>Count : {count}</h1>
            <ul>
                {posts.map(post =>
                    <li>
                        <Link href={`/blog/${post.id}`}>
                            <a>
                                <h3>{post.id} - {post.title}</h3>
                            </a>
                        </Link>
                        <div className="project-inner">
                            <div className="top">
                                <div className="project-top">
                                    <div className="folder">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder">
                                            <title>Folder</title>
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                    </div>
                                    <div className="project-links">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                            <title>GitHub</title>
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                            <title>External Link</title>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>

                                    </div>
                                </div>
                                <h3 className="project-title">

                                    <Link href={`/blog/${post.id}`}>
                                        <a>
                                            <h3>{post.id} - {post.title}</h3>
                                        </a>
                                    </Link>


                                </h3>

                            </div>
                            <div className="bottom">

                            </div>
                        </div>
                    </li>
                )}
            </ul>

        </>
    );
}


// async function
export async function getStaticProps() {
    const posts = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=4').then(r => r.json())
    return {
        props: {
            posts
        }
    }
}