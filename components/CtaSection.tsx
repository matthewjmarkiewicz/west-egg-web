import DemoButton from "./DemoButton";

export default function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="max-w-3xl mx-auto text-center py-20 px-8 border border-warm-gray"
          style={{ background: "#F5F0E8" }}
        >
          {/* Decorative rule */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12" style={{ background: "#B8960C", opacity: 0.5 }} />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect
                x="1"
                y="1"
                width="8"
                height="8"
                stroke="#B8960C"
                strokeWidth="1"
                transform="rotate(45 5 5)"
                fill="none"
                strokeOpacity="0.5"
              />
            </svg>
            <div className="h-px w-12" style={{ background: "#B8960C", opacity: 0.5 }} />
          </div>

          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-charcoal leading-snug mb-6">
            Ready to bring order to your portfolio?
          </h2>
          <p className="font-body text-xl text-charcoal-soft mb-10 leading-relaxed">
            Schedule a 30-minute demonstration with our team.
          </p>
          <DemoButton variant="filled" size="md" className="mx-auto" />
          <p className="font-body text-sm text-charcoal-soft mt-6 tracking-wide">
            Typically responds within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}
