import DemoButton from "./DemoButton";

const tiers = [
  {
    name: "Foundation",
    price: "$2,500",
    period: "/mo",
    aum: "Up to $150M AUM",
    featured: false,
    features: [
      "5 users",
      "250 assets",
      "5 GB document storage",
      "All core features",
      "Email support",
    ],
    cta: "Get started",
  },
  {
    name: "Private",
    price: "$6,500",
    period: "/mo",
    aum: "Up to $500M AUM",
    featured: true,
    features: [
      "15 users",
      "Unlimited assets",
      "25 GB document storage",
      "All core features",
      "White-glove onboarding",
      "Priority support",
    ],
    cta: "Request a Demo",
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    aum: "$500M+ AUM",
    featured: false,
    features: [
      "Unlimited users",
      "Unlimited assets",
      "Unlimited storage",
      "Private deployment option",
      "Dedicated client success",
      "Custom integrations",
    ],
    cta: "Contact us",
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream-dark" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-4">
          <p
            className="font-body small-caps text-sm tracking-widest mb-4"
            style={{ color: "#B8960C" }}
          >
            Pricing
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal leading-snug mb-4">
            Straightforward pricing
          </h2>
          <p className="font-body text-xl text-charcoal-soft">
            No percentage of AUM. No hidden fees. Just software.
          </p>
        </div>

        {/* Annual discount note */}
        <div className="flex items-center gap-2 mb-12">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#B8960C" }}
          />
          <p className="font-body text-base text-charcoal-soft">
            15% discount with annual contract
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col bg-cream p-8 lg:p-10 ${
                tier.featured
                  ? "border-2 border-gold"
                  : "border border-warm-gray"
              }`}
            >
              {/* Featured label */}
              {tier.featured && (
                <div
                  className="absolute -top-px left-8 right-8 h-0.5"
                  style={{ background: "#B8960C" }}
                />
              )}
              {tier.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-body tracking-widest"
                  style={{
                    background: "#B8960C",
                    color: "#FAF8F4",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Tier header */}
              <div className="mb-6">
                <h3 className="font-display text-xl text-charcoal mb-1">
                  {tier.name}
                </h3>
                <p className="font-body text-sm text-charcoal-soft tracking-wide mb-5">
                  {tier.aum}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl text-charcoal">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="font-body text-lg text-charcoal-soft">
                      {tier.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Divider */}
              <hr className="border-warm-gray mb-6" />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="flex-shrink-0 mt-1"
                    >
                      <path
                        d="M2.5 7L5.5 10L11.5 4"
                        stroke="#B8960C"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-body text-lg text-charcoal-soft leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {tier.name === "Private" ? (
                <DemoButton
                  variant="filled"
                  className="w-full justify-center"
                />
              ) : tier.name === "Institutional" ? (
                <DemoButton
                  variant="outlined"
                  className="w-full justify-center"
                >
                  Contact us
                </DemoButton>
              ) : (
                <DemoButton
                  variant="outlined"
                  className="w-full justify-center"
                >
                  Get started
                </DemoButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
