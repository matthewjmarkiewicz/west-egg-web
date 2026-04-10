export default function Footer() {
  return (
    <footer
      className="border-t border-warm-gray"
      style={{ background: "#F5F0E8" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-14">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Wordmark + tagline */}
          <div>
            <p className="font-display text-xl text-charcoal mb-2">
              West Egg Wealth
            </p>
            <p className="font-body text-sm text-charcoal-soft">
              Institutional-grade wealth management for families.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="#platform"
              className="font-body text-sm text-charcoal-soft hover:text-charcoal transition-colors tracking-wide"
            >
              Platform
            </a>
            <a
              href="#pricing"
              className="font-body text-sm text-charcoal-soft hover:text-charcoal transition-colors tracking-wide"
            >
              Pricing
            </a>
            <a
              href="/privacy"
              className="font-body text-sm text-charcoal-soft hover:text-charcoal transition-colors tracking-wide"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-body text-sm text-charcoal-soft hover:text-charcoal transition-colors tracking-wide"
            >
              Terms
            </a>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-warm-gray flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="font-body text-xs text-charcoal-soft tracking-wide">
            © 2026 West Egg Wealth. All rights reserved.
          </p>
          <p className="font-body text-xs text-charcoal-soft">
            Aegis is a product of West Egg Wealth LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
