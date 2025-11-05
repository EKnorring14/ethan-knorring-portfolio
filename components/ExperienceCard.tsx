export default function ExperienceCard({ title, period, location, points } : { title: string, period: string, location: string, points: string[] }) {
return (
<article className="p-4 bg-white rounded shadow">
<h3 className="text-lg font-semibold">{title}</h3>
<p className="text-sm text-slate-600">{period} • {location}</p>
<ul className="mt-2 list-disc list-inside text-sm">
{points.map((p, i) => <li key={i}>{p}</li>)}
</ul>
</article>
)
}