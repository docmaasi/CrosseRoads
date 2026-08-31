/** "Your career profile": top traits, clusters, and career families. */
export function ProfileSummary({ report }) {
  const topClusters = report.clusters.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-[#1e4d5c]">
          Your strongest career characteristics
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {report.topTraits.map((trait) => (
            <span
              key={trait}
              className="rounded-full bg-[#2e7d8c]/10 px-3 py-1 text-sm font-medium text-[#1e4d5c]"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-[#1e4d5c]">
          Your career personality
        </h3>
        <div className="mt-3 space-y-3">
          {topClusters.map(({ cluster, score }) => (
            <div key={cluster.id}>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-stone-800">{cluster.name}</p>
                <span className="text-sm font-bold text-[#c2703e]">{score}%</span>
              </div>
              <p className="text-sm text-stone-600">{cluster.description}</p>
              <p className="mt-0.5 text-xs text-stone-500">
                Pathways: {cluster.pathways}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-[#1e4d5c]">
          Your top career families
        </h3>
        <div className="mt-3 space-y-2">
          {report.families.map((family, index) => (
            <div key={family.id} className="flex items-center gap-2 text-sm">
              <span className="w-5 font-semibold text-[#e8a33d]">{index + 1}</span>
              <span className="flex-1 text-stone-700">{family.name}</span>
              <div className="h-2 w-28 overflow-hidden rounded-full bg-stone-100">
                <div
                  className="h-full rounded-full bg-[#c2703e]"
                  style={{ width: `${family.score}%` }}
                />
              </div>
              <span className="w-12 text-right font-medium text-stone-600">
                {family.score}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
