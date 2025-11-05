export default function ProjectCard({ title, summary, tech, link } : { title: string, summary: string, tech: string[], link: string }) {
return (
<article className="p-4 bg-white rounded shadow">
<h3 className="text-xl font-semibold">{title}</h3>
<p className="mt-2 text-sm text-slate-700">{summary}</p>
<div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
{tech.map(t => <span key={t} className="px-2 py-1 bg-slate-100 rounded">{t}</span>)}
</div>
<div className="mt-3">
<a href={link} className="text-sm underline">View</a>
</div>
</article>
)
}