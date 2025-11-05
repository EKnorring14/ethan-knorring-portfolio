import Link from 'next/link'


export default function Navbar() {
return (
<nav className="flex items-center justify-between py-4">
<Link href="/" className="font-semibold">Ethan Knorring</Link>
<div className="flex gap-4">
<Link href="/about" className="text-sm">About</Link>
<Link href="/experience" className="text-sm">Experience</Link>
<Link href="/projects" className="text-sm">Projects</Link>
<Link href="/contact" className="text-sm">Contact</Link>
</div>
</nav>
)
}