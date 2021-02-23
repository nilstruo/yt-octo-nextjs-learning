import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>This is career page</h1>
      <p>
        <Link href="/about">
          <a>About</a>
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
