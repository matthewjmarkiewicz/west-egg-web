const steps = [
  {
    number: "01",
    title: "Catalog your assets",
    description:
      "Enter your portfolio once. Every asset class is supported — equities, real estate, vehicles, art, jewelry, business interests, and more.",
  },
  {
    number: "02",
    title: "Attach your coverage",
    description:
      "Link insurance policies to the assets they cover. Upload PDFs and let AI extract the data. Gaps surface automatically.",
  },
  {
    number: "03",
    title: "Stay protected",
    description:
      "Receive proactive alerts, generate your annual review report in one click, and never miss a renewal or underinsured exposure.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p
            className="font-body small-caps text-sm tracking-widest mb-4"
            style={{ color: "#B8960C" }}
          >
            Process
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal leading-snug">
            From onboarding to oversight in days
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Connector line — desktop */}
          <div
            className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px"
            style={{ background: "#E8E0D0" }}
          />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative pl-0 md:pr-10">
              {/* Step number */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{
                    background: "#FAF8F4",
                    border: "1px solid #B8960C",
                  }}
                >
                  <span
                    className="font-display text-sm"
                    style={{ color: "#B8960C" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Mobile connector */}
                {idx < steps.length - 1 && (
                  <div
                    className="flex-1 h-px md:hidden"
                    style={{ background: "#E8E0D0" }}
                  />
                )}
              </div>

              <h3 className="font-display text-xl text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="font-body text-lg text-charcoal-soft leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
