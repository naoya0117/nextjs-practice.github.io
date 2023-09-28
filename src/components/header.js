import Link from 'next/link';

export default function Header() {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/posts">blogs</Link>
            <Link href="/about">about</Link>
        </>

    )
}