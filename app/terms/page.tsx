import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — West Egg Wealth",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Nav />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p
            className="font-body small-caps text-sm tracking-widest mb-4"
            style={{ color: "#B8960C" }}
          >
            Legal
          </p>
          <h1 className="font-display text-4xl lg:text-5xl text-charcoal mb-3">
            Terms of Service
          </h1>
          <p className="font-body text-base text-charcoal-soft mb-12">
            Effective April 2026 &mdash; West Egg Wealth LLC
          </p>

          <hr className="border-warm-gray mb-12" />

          <div className="space-y-10 font-body text-lg text-charcoal-soft leading-relaxed">

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and West Egg Wealth LLC (&ldquo;West Egg Wealth,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) governing your access to and use of the Aegis platform and any related services (collectively, the &ldquo;Service&rdquo;). By creating an account or using the Service, you agree to be bound by these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">2. Service Description</h2>
              <p className="mb-4">
                Aegis is a software platform designed for family offices and high-net-worth individuals to manage assets, insurance policies, and related documents. Core capabilities include:
              </p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  "Asset registry and valuation tracking across multiple asset classes",
                  "Insurance policy management, coverage gap analysis, and renewal alerts",
                  "AI-assisted parsing of insurance policy documents",
                  "Document storage and retrieval",
                  "Annual review report generation",
                  "Role-based access for family members, advisors, and administrators",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#B8960C" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Aegis is a software tool and does not constitute financial, legal, tax, or insurance advice. Always consult qualified professionals before making financial or coverage decisions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">3. Acceptable Use</h2>
              <p className="mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You will not:</p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  "Use the Service for any unlawful purpose or in violation of applicable regulations",
                  "Upload or transmit data you do not have the right to share",
                  "Attempt to gain unauthorized access to any part of the Service or its infrastructure",
                  "Reverse engineer, decompile, or disassemble the Service",
                  "Use automated scripts, bots, or scrapers against the Service without prior written consent",
                  "Resell, sublicense, or otherwise make the Service available to third parties outside your organization without authorization",
                  "Transmit viruses, malware, or other malicious code",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#B8960C" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate accounts that violate these requirements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">4. Account Registration</h2>
              <p>
                You must provide accurate, complete, and current information when registering for Aegis. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at{" "}
                <a href="mailto:privacy@westwealth.com" className="text-charcoal underline underline-offset-2 hover:opacity-70 transition-opacity">
                  privacy@westwealth.com
                </a>{" "}
                if you suspect unauthorized use of your account. You may not share login credentials across individuals; each user requires a separately licensed seat.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                Subscription fees are charged in advance on a monthly or annual basis, depending on the plan selected. By providing payment information, you authorize us to charge your payment method on each renewal date.
              </p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  { label: "Annual contracts", desc: "Receive a 15% discount and are billed once at the start of the term. Annual subscriptions are non-refundable after the 14-day introductory period." },
                  { label: "Monthly contracts", desc: "Billed each month. You may cancel at any time; your access continues through the end of the current billing period." },
                  { label: "Price changes", desc: "We will provide at least 30 days advance notice of any price changes. Continued use after the effective date constitutes acceptance." },
                  { label: "Taxes", desc: "You are responsible for all applicable taxes. Prices do not include sales, use, or value-added taxes unless expressly stated." },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#B8960C" }} />
                    <span><strong className="text-charcoal">{label}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">6. Data Ownership</h2>
              <p>
                You retain full ownership of all data, documents, and content you upload to Aegis (&ldquo;Customer Data&rdquo;). You grant West Egg Wealth a limited, non-exclusive license to store, process, and display your Customer Data solely as necessary to provide the Service. We will not access your Customer Data except to operate the Service, respond to support requests, investigate security incidents, or as required by law. Upon termination, you may export your Customer Data; we will delete it from our systems within 90 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">7. Intellectual Property</h2>
              <p>
                All software, designs, trademarks, and content comprising the Aegis platform — excluding Customer Data — are the exclusive property of West Egg Wealth LLC or its licensors. Nothing in these Terms grants you any right, title, or interest in the platform beyond the limited right to use the Service during an active subscription.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by applicable law:
              </p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  "The Service is provided \"as is\" and \"as available\" without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.",
                  "West Egg Wealth shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, even if advised of the possibility of such damages.",
                  "Our total aggregate liability for any claims arising under or related to these Terms shall not exceed the fees paid by you in the twelve months preceding the event giving rise to the claim.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#B8960C" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages; these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">9. Termination</h2>
              <p className="mb-4">
                Either party may terminate the subscription at any time:
              </p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  { label: "By you", desc: "Cancel via account settings or by contacting support. Access continues through the end of your current billing period." },
                  { label: "By us", desc: "We may suspend or terminate your account immediately if you breach these Terms, fail to pay fees after a 10-day cure period, or if required by law. We will provide notice where reasonably practicable." },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#B8960C" }} />
                    <span><strong className="text-charcoal">{label}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Sections covering data ownership, intellectual property, limitation of liability, and governing law survive termination.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any dispute arising from these Terms shall be resolved exclusively in the state or federal courts located in Delaware, and both parties consent to personal jurisdiction in those courts.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">11. Changes to These Terms</h2>
              <p>
                We may modify these Terms from time to time. We will notify you of material changes by updating the effective date and, where appropriate, by sending an email. If you continue using the Service after changes take effect, you accept the revised Terms. If you do not agree to the revised Terms, you must stop using the Service and cancel your subscription.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-charcoal mb-4">12. Contact</h2>
              <p>
                Questions about these Terms may be directed to:
              </p>
              <div className="mt-4 pl-6 border-l-2 border-warm-gray">
                <p className="text-charcoal font-medium">West Egg Wealth LLC</p>
                <p>
                  Email:{" "}
                  <a href="mailto:privacy@westwealth.com" className="text-charcoal underline underline-offset-2 hover:opacity-70 transition-opacity">
                    privacy@westwealth.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
