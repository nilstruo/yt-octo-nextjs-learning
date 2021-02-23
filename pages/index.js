import Head from 'next/head'
import Link from 'next/link';
import axios from 'axios';

import styles from '../styles/Home.module.css'

export default function Home({ products = [] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Tutorial series by nilstruo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Let's get started - 
          <code className={styles.code}>pages/index.js</code>
        </p>

        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>

        <div>
          <ul>
            {products.map((product => (
              <li key={product.ProductID}>
                <Link href={String(product.ProductID)}>
                  <a>
                    {product.ProductName}
                  </a>
                </Link>
              </li>
            )))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // call api to get list of blog
  const products = await axios.get("https://services.odata.org/Northwind/Northwind.svc/Products?$format=json");
  
  // return blog
  return {props: {products: products.data.value}}
}