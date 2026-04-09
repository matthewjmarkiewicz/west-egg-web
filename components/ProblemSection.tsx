const problems = [
  {
    title: "Fragmented visibility",
    description:
      "Assets scattered across custodians, LLCs, trusts, and partnerships — with no unified view. Reconciliation happens manually, if at all.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="1" stroke="#B8960C" strokeWidth="1.4" />
        <rect x="12" y="2" width="8" height="8" rx="1" stroke="#B8960C" strokeWidth="1.4" strokeDasharray="2 1.5" />
        <rect x="2" y="12" width="8" height="8" rx="1" stroke="#B8960C" strokeWidth="1.4" strokeDasharray="2 1.5" />
        <rect x="12" y="12" width="8" height="8" rx="1" stroke="#B8960C" strokeWidth="1.4" />
        <path d="M10 6H12M10 16H12M6 10V12M16 10V12" stroke="#B8960C" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1 1.5" />
      </svg>
    ),
  },
  {
    title: "Insurance blind spots",
    description:
      "Policies managed reactively through brokers, gaps discovered only after a loss. Renewal dates missed. Coverage limits quietly eroded by inflation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L20 6V11C20 15.5 16.5 19.5 11 21C5.5 19.5 2 15.5 2 11V6L11 2Z"
          stroke="#B8960C"
          strokeWidth="1.4"
          fill="none"
        />
        <path d="M11 8V12M11 14.5V15" stroke="#B8960C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Operational overhead",
    description:
      "Appraisals, policy PDFs, and legal documents scattered across email threads and shared drives. Every review cycle begins with a file hunt.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 3H14L18 7V19C18 19.6 17.6 20 17 20H4C3.4 20 3 19.6 3 19V4C3 3.4 3.4 3 4 3Z"
          stroke="#B8960C"
          strokeWidth="1.4"
          fill="none"
        />
        <path d="M14 3V7H18" stroke="#B8960C" strokeWidth="1.4" />
        <path d="M7 11H15M7 14H12" stroke="#B8960C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="font-body small-caps text-sm tracking-widest mb-4"
            style={{ color: "#B8960C" }}
          >
            The Challenge
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal leading-snug">
            The family office challenge
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="p-8 relative overflow-hidden group transition-colors duration-300"
              style={{ borderLeft: "3px solid #C9A84C", background: "rgba(255,255,255,0.6)" }}
            >
              <div className="mb-5">{problem.icon}</div>
              <h3 className="font-display text-xl text-charcoal mb-3">
                {problem.title}
              </h3>
              <p className="font-body text-lg text-charcoal-soft leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
