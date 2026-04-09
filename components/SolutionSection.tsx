const features = [
  {
    title: "Asset Registry",
    description: "Track every asset across all classes and entities — equities, real estate, collectibles, alternative investments, and more.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="1.5" stroke="#B8960C" strokeWidth="1.3" />
        <path d="M5 7H15M5 10H15M5 13H11" stroke="#B8960C" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Insurance Layer",
    description: "Attach policies to specific assets. Surface coverage gaps automatically. Never miss a renewal or an underinsured exposure.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L18 5.5V10C18 14 14.5 17.5 10 19C5.5 17.5 2 14 2 10V5.5L10 2Z" stroke="#B8960C" strokeWidth="1.3" fill="none" />
        <path d="M7 10L9 12L13 8" stroke="#B8960C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Coverage Intelligence",
    description: "Eight alert rules flag risks before they become losses — expiring policies, inflation gaps, uninsured assets, and more.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#B8960C" strokeWidth="1.3" />
        <path d="M10 6V11M10 13.5V14" stroke="#B8960C" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "PDF Policy Parser",
    description: "Upload a policy PDF. Claude AI reads and extracts coverage limits, exclusions, premium amounts, and renewal dates.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 2H12L16 6V18C16 18.6 15.6 19 15 19H4C3.4 19 3 18.6 3 18V3C3 2.4 3.4 2 4 2Z" stroke="#B8960C" strokeWidth="1.3" fill="none" />
        <path d="M12 2V6H16" stroke="#B8960C" strokeWidth="1.3" />
        <path d="M7 11C7 9.9 7.9 9 9 9H11C11.6 9 12 9.4 12 10C12 10.6 11.6 11 11 11H9C8.4 11 8 11.4 8 12C8 12.6 8.4 13 9 13H11" stroke="#B8960C" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Annual Review Report",
    description: "One click generates a presentation-ready PDF for your annual broker review — coverage summary, gaps, and recommendations.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="2" width="14" height="16" rx="1.5" stroke="#B8960C" strokeWidth="1.3" fill="none" />
        <path d="M6 7H14M6 10H14M6 13H10" stroke="#B8960C" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M12 13.5L14 15.5L17.5 11" stroke="#B8960C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Document Vault",
    description: "Every appraisal, policy certificate, and legal document — securely stored, indexed, and retrievable in seconds.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="13" rx="1.5" stroke="#B8960C" strokeWidth="1.3" fill="none" />
        <path d="M6 5V4C6 2.9 6.9 2 8 2H12C13.1 2 14 2.9 14 4V5" stroke="#B8960C" strokeWidth="1.3" />
        <circle cx="10" cy="12" r="2" stroke="#B8960C" strokeWidth="1.3" />
        <path d="M10 14V16" stroke="#B8960C" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream" id="platform">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-4">
          <p
            className="font-body small-caps text-sm tracking-widest mb-4"
            style={{ color: "#B8960C" }}
          >
            The Platform
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal leading-snug mb-4">
            Aegis brings order to complexity
          </h2>
          <p className="font-body text-xl text-charcoal-soft">
            One platform. Every asset. Complete protection.
          </p>
        </div>

        {/* Thin rule */}
        <hr className="border-warm-gray my-12" />

        {/* Feature grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3"
          style={{ borderTop: "0.5px solid #E8E0D0", borderLeft: "0.5px solid #E8E0D0" }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-cream p-8 lg:p-10 group hover:bg-cream-dark transition-colors duration-200"
              style={{ borderRight: "0.5px solid #E8E0D0", borderBottom: "0.5px solid #E8E0D0" }}
            >
              <div className="mb-5 opacity-90 group-hover:opacity-100 transition-opacity">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg text-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-lg text-charcoal-soft leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
