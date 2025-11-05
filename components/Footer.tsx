export default function Footer() {
return (
<footer className="mt-12 border-t pt-6 text-sm text-slate-600">
<div className="container mx-auto">© {new Date().getFullYear()} Ethan Knorring. Built with Next.js.</div>
</footer>
)
}