import DemoButton from "./DemoButton";
import StatCounter from "./StatCounter";

function DashboardMockup() {
  return (
    <div
      className="relative w-full max-w-[540px] mx-auto lg:mx-0"
      style={{
        filter:
          "drop-shadow(0 32px 64px rgba(15,22,41,0.55)) drop-shadow(0 4px 16px rgba(0,0,0,0.25))",
      }}
    >
      <svg
        viewBox="0 0 540 360"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        role="img"
        aria-label="Aegis portfolio dashboard"
      >
        <defs>
          <clipPath id="card-clip">
            <rect width="540" height="360" rx="10" />
          </clipPath>
          <linearGradient id="navy-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#131E35" />
            <stop offset="100%" stopColor="#0F1629" />
          </linearGradient>
        </defs>

        {/* Base */}
        <rect width="540" height="360" rx="10" fill="url(#navy-grad)" clipPath="url(#card-clip)" />

        {/* ── Header bar ── */}
        <rect width="540" height="50" fill="#131E35" clipPath="url(#card-clip)" />
        <line x1="0" y1="50" x2="540" y2="50" stroke="#1E3060" strokeWidth="1" />

        {/* Aegis hex icon */}
        <polygon
          points="30,18 38,23 38,33 30,38 22,33 22,23"
          stroke="#C9A84C"
          strokeWidth="1.2"
          fill="rgba(184,150,12,0.1)"
        />
        {/* A letterform inside hex */}
        <text x="27" y="34" fontFamily="Georgia,serif" fontSize="11" fill="#C9A84C" fontStyle="italic">A</text>

        {/* Wordmark */}
        <text
          x="48"
          y="31"
          fontFamily="Georgia,serif"
          fontSize="12"
          fill="#C9A84C"
          letterSpacing="4"
          fontWeight="normal"
        >
          AEGIS
        </text>

        {/* Nav pills */}
        <rect x="140" y="17" width="52" height="16" rx="2" fill="rgba(255,255,255,0.04)" />
        <text x="166" y="29" fontFamily="Arial,sans-serif" fontSize="8" fill="#4A6080" textAnchor="middle">Portfolio</text>

        <rect x="200" y="17" width="52" height="16" rx="2" fill="rgba(184,150,12,0.12)" />
        <text x="226" y="29" fontFamily="Arial,sans-serif" fontSize="8" fill="#C9A84C" textAnchor="middle">Insurance</text>

        <rect x="260" y="17" width="52" height="16" rx="2" fill="rgba(255,255,255,0.04)" />
        <text x="286" y="29" fontFamily="Arial,sans-serif" fontSize="8" fill="#4A6080" textAnchor="middle">Reports</text>

        {/* Status */}
        <circle cx="502" cy="25" r="3.5" fill="#2ECC71" />
        <text x="514" y="29" fontFamily="Arial,sans-serif" fontSize="8" fill="#2ECC71">Live</text>
        <text x="428" y="29" fontFamily="Arial,sans-serif" fontSize="8" fill="#4A6080">Q4 2025</text>

        {/* ── Portfolio value block ── */}
        <text x="24" y="78" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#4A6080" letterSpacing="2.5">TOTAL PORTFOLIO VALUE</text>
        <text x="24" y="106" fontFamily="Georgia,serif" fontSize="28" fill="#F0EBE3">$284,760,000</text>

        {/* Trend badge */}
        <rect x="24" y="112" width="52" height="16" rx="2" fill="rgba(46,204,113,0.1)" />
        <text x="50" y="124" fontFamily="Arial,sans-serif" fontSize="8" fill="#2ECC71" textAnchor="middle">↑ 8.4%</text>
        <text x="82" y="124" fontFamily="Arial,sans-serif" fontSize="8" fill="#4A6080">vs. prior quarter</text>

        {/* ── Allocation stacked bar ── */}
        <text x="24" y="148" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#4A6080" letterSpacing="2">ALLOCATION</text>
        {/* Bar track */}
        <rect x="24" y="154" width="492" height="7" rx="3.5" fill="#1A2840" />
        {/* Segments */}
        <rect x="24" y="154" width="187" height="7" rx="3.5" fill="#B8960C" />
        <rect x="213" y="154" width="118" height="7" fill="#1E4080" />
        <rect x="333" y="154" width="94" height="7" fill="#2C6B4F" />
        <rect x="429" y="154" width="59" height="7" fill="#5B3A8A" />
        <rect x="490" y="154" width="26" height="7" rx="3.5" fill="#3A5070" />

        {/* Legend */}
        <circle cx="30" cy="173" r="3" fill="#B8960C" />
        <text x="38" y="177" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#8AA0B8">Public Equities</text>
        <text x="38" y="187" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#C9A84C">$108.2M · 38%</text>

        <circle cx="145" cy="173" r="3" fill="#1E4080" />
        <text x="153" y="177" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#8AA0B8">Private Credit</text>
        <text x="153" y="187" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#8AA0B8">$68.3M · 24%</text>

        <circle cx="260" cy="173" r="3" fill="#2C6B4F" />
        <text x="268" y="177" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#8AA0B8">Real Estate</text>
        <text x="268" y="187" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#8AA0B8">$54.1M · 19%</text>

        <circle cx="370" cy="173" r="3" fill="#5B3A8A" />
        <text x="378" y="177" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#8AA0B8">Alternatives</text>
        <text x="378" y="187" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#8AA0B8">$34.2M · 12%</text>

        {/* ── Divider ── */}
        <line x1="24" y1="200" x2="516" y2="200" stroke="#1E3060" strokeWidth="0.75" />

        {/* ── Stat cards row ── */}
        {/* Card: Assets */}
        <rect x="24" y="212" width="152" height="68" rx="5" fill="#1A2840" />
        <text x="36" y="232" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#4A6080" letterSpacing="2">ASSETS</text>
        <text x="36" y="258" fontFamily="Georgia,serif" fontSize="26" fill="#D0D8E8">142</text>
        <text x="36" y="272" fontFamily="Arial,sans-serif" fontSize="7" fill="#2ECC71">↑ 12 this quarter</text>

        {/* Card: Policies */}
        <rect x="192" y="212" width="152" height="68" rx="5" fill="#1A2840" />
        <text x="204" y="232" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#4A6080" letterSpacing="2">POLICIES</text>
        <text x="204" y="258" fontFamily="Georgia,serif" fontSize="26" fill="#D0D8E8">23</text>
        <text x="204" y="272" fontFamily="Arial,sans-serif" fontSize="7" fill="#4A6080">Active coverage</text>

        {/* Card: Alerts — gold accent */}
        <rect x="360" y="212" width="156" height="68" rx="5" fill="rgba(184,150,12,0.08)" stroke="#C9A84C" strokeWidth="0.75" />
        <text x="372" y="232" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#C9A84C" letterSpacing="2">ALERTS</text>
        <text x="372" y="258" fontFamily="Georgia,serif" fontSize="26" fill="#C9A84C">3</text>
        <text x="372" y="272" fontFamily="Arial,sans-serif" fontSize="7" fill="#C9A84C">Require attention</text>

        {/* ── Alert card ── */}
        <rect x="24" y="294" width="492" height="52" rx="5" fill="rgba(184,150,12,0.06)" stroke="rgba(184,150,12,0.22)" strokeWidth="0.75" />

        {/* Alert icon */}
        <circle cx="44" cy="320" r="9" stroke="#C9A84C" strokeWidth="1" fill="none" />
        <line x1="44" y1="315" x2="44" y2="321" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="44" cy="324" r="0.8" fill="#C9A84C" />

        <text x="62" y="313" fontFamily="Arial,sans-serif" fontSize="8" fill="#C9A84C" letterSpacing="1">COVERAGE ALERT</text>
        <text x="62" y="325" fontFamily="Arial,sans-serif" fontSize="8" fill="#8AA0B8">Malibu estate policy expires in 47 days.</text>
        <text x="62" y="337" fontFamily="Arial,sans-serif" fontSize="8" fill="#C9A84C">Schedule renewal →</text>

        {/* Timestamp */}
        <text x="420" y="337" fontFamily="Arial,sans-serif" fontSize="7" fill="#2A3F60">2 hours ago</text>
      </svg>

      {/* Ambient glow */}
      <div
        className="absolute -inset-6 -z-10 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, #B8960C, transparent)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-cream" id="platform">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left column */}
          <div className="fade-in-up lg:pl-4 xl:pl-8 max-w-xl">
            {/* Eyebrow */}
            <p
              className="font-body small-caps text-sm mb-6 tracking-widest"
              style={{ color: "#B8960C" }}
            >
              Private Wealth Management
            </p>

            {/* H1 */}
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-tight text-charcoal mb-6">
              Your family's wealth,
              <br />
              <span className="italic">protected and organized.</span>
            </h1>

            {/* Subtext */}
            <p className="font-body text-xl lg:text-2xl text-charcoal-soft leading-relaxed mb-10 max-w-lg">
              Aegis brings institutional-grade portfolio management and insurance
              oversight to the modern family office. Built for families managing
              $50M to $1B+ in assets.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14">
              <DemoButton variant="filled" size="md" />
              <a
                href="#platform"
                className="inline-flex items-center justify-center font-body tracking-wide px-7 py-3 text-base border border-warm-gray text-charcoal-soft hover:border-charcoal hover:text-charcoal transition-all duration-200"
              >
                See the Platform
              </a>
            </div>

            {/* Counter */}
            <div className="border-t border-warm-gray pt-8">
              <StatCounter />
            </div>
          </div>

          {/* Right column — dashboard mockup */}
          <div className="fade-in-up-delay-2 lg:justify-self-end w-full">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
