/* eslint-disable react/jsx-key */
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
//import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setCount(n => n + 1), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1>Count : {count}</h1>
      <ul>
        {posts.map(post => <li>
          <Link href={`/blog/${post.id}`}>
            <a>
              <h3>{post.id} - {post.title}</h3>
            </a>
          </Link>
        </li>)}
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