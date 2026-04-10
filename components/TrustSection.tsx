const trustSignals = [
  {
    title: "SOC 2 roadmap",
    description:
      "Actively pursuing SOC 2 Type II certification. Security controls aligned to AICPA Trust Service Criteria.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L24 7.5V14C24 19.5 19.5 24 14 26C8.5 24 4 19.5 4 14V7.5L14 3Z"
          stroke="#B8960C"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M10 14L12.5 16.5L18 11"
          stroke="#B8960C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Audit logging on every action",
    description:
      "Every read, write, and deletion is captured with timestamp, user, and IP address. Full audit trail available on demand.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="3" width="20" height="22" rx="2" stroke="#B8960C" strokeWidth="1.5" fill="none" />
        <path d="M8 9H20M8 13H20M8 17H15" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="19" cy="19" r="4" fill="#FAF8F4" stroke="#B8960C" strokeWidth="1.3" />
        <path d="M17.5 19L18.5 20L20.5 17.5" stroke="#B8960C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Role-based access control",
    description:
      "Granular permissions for family members, advisors, and administrators. Principals see what they should — nothing more.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="12" width="12" height="10" rx="1.5" stroke="#B8960C" strokeWidth="1.5" fill="none" />
        <path
          d="M11 12V9C11 7.3 12.3 6 14 6C15.7 6 17 7.3 17 9V12"
          stroke="#B8960C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="17" r="1.5" fill="#B8960C" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="font-body small-caps text-sm tracking-widest mb-4"
            style={{ color: "#B8960C" }}
          >
            Security & Trust
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal leading-snug">
            Built for institutional standards
          </h2>
        </div>

        {/* Trust signals */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {trustSignals.map((signal) => (
            <div key={signal.title} className="flex flex-col">
              <div className="mb-5">{signal.icon}</div>
              <h3 className="font-display text-xl text-charcoal mb-3">
                {signal.title}
              </h3>
              <p className="font-body text-lg text-charcoal-soft leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div
          className="border-t border-warm-gray pt-14"
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Opening quote mark */}
            <div
              className="font-display text-7xl leading-none mb-4 select-none"
              style={{ color: "#E8E0D0" }}
            >
              &ldquo;
            </div>
            <blockquote className="font-display text-2xl lg:text-3xl text-charcoal italic leading-relaxed mb-8">
              Finally, a platform that treats our family office like the
              institution it is.
            </blockquote>
            <cite className="font-body text-base not-italic text-charcoal-soft tracking-wide">
              — Family Office Principal, San Francisco
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
