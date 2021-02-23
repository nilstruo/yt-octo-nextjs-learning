import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>This is about page</h1>
      <p>
        <Link href="/about/career">
          <a>Career</a>
        </Link>
      </p>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </>
  )
}