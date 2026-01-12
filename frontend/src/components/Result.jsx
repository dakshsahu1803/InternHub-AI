export default function Result({ result }) {
  return (
    <div className="glass max-w-6xl mx-auto p-10 space-y-6">
      <h2 className="section-title">Match Score</h2>
      <p className="text-5xl font-bold text-cyan-400">
        {result.match_score}%
      </p>
      <p className="text-gray-300">{result.summary}</p>

      <div>
        <h3 className="section-title">Skill Gaps</h3>
        <ul className="list-disc ml-6">
          {result.skill_gaps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="section-title">Resume Improvement Tips</h3>
        <ul className="list-disc ml-6">
          {result.resume_tips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
