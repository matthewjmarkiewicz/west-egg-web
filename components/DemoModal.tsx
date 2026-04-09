"use client";

import { useState, useEffect, useCallback } from "react";

type FormState = "idle" | "submitting" | "success";

const AUM_RANGES = [
  "Under $50M",
  "$50M–$150M",
  "$150M–$500M",
  "$500M–$1B",
  "Over $1B",
];

const inputClass =
  "w-full px-4 py-3 font-body text-[17px] text-charcoal bg-cream border border-warm-gray focus:border-charcoal outline-none transition-colors duration-150";

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    firm: "",
    aum: "",
    message: "",
  });

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setFormState("idle");
      setFields({ name: "", email: "", firm: "", aum: "", message: "" });
    }, 300);
  }, []);

  useEffect(() => {
    document.addEventListener("open-demo-modal", open);
    return () => document.removeEventListener("open-demo-modal", open);
  }, [open]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const set = (key: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1100);
  };

  if (!isOpen) return null;

  // First name for personalised thank-you
  const firstName = fields.name.trim().split(" ")[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
      style={{ background: "rgba(26,26,26,0.6)" }}
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg bg-cream border border-warm-gray shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-5 right-5 text-charcoal-soft hover:text-charcoal transition-colors z-10"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1.5 1.5L14.5 14.5M14.5 1.5L1.5 14.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {formState === "success" ? (
          /* ── Thank you state ── */
          <div className="px-8 py-16 text-center">
            <div
              className="w-12 h-12 flex items-center justify-center mx-auto mb-7"
              style={{ border: "1px solid #C9A84C" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 9L7 13L15 5"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="font-display text-2xl text-charcoal mb-3">
              Thank you{firstName ? `, ${firstName}` : ""}.
            </h2>
            <p className="font-body text-xl text-charcoal-soft leading-relaxed mb-8">
              We&rsquo;ll be in touch shortly.
            </p>
            <button
              onClick={close}
              className="font-body text-sm text-charcoal-soft underline underline-offset-4 hover:text-charcoal transition-colors tracking-wide"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <div className="px-8 py-10">
            {/* Header */}
            <div className="mb-8 pr-6">
              <p
                className="font-body small-caps text-xs tracking-widest mb-3"
                style={{ color: "#C9A84C" }}
              >
                West Egg Wealth
              </p>
              <h2
                id="modal-title"
                className="font-display text-2xl text-charcoal mb-1"
              >
                Request a demonstration
              </h2>
              <p className="font-body text-base text-charcoal-soft">
                Our team will contact you within one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label className="block font-body text-sm text-charcoal-soft mb-1.5 tracking-wide">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  value={fields.name}
                  onChange={set("name")}
                  className={inputClass}
                  placeholder="Margaret Whitfield"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-body text-sm text-charcoal-soft mb-1.5 tracking-wide">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={fields.email}
                  onChange={set("email")}
                  className={inputClass}
                  placeholder="margaret@familyoffice.com"
                />
              </div>

              {/* Firm Name */}
              <div>
                <label className="block font-body text-sm text-charcoal-soft mb-1.5 tracking-wide">
                  Firm name
                </label>
                <input
                  type="text"
                  required
                  value={fields.firm}
                  onChange={set("firm")}
                  className={inputClass}
                  placeholder="Whitfield Family Office"
                />
              </div>

              {/* AUM Range */}
              <div>
                <label className="block font-body text-sm text-charcoal-soft mb-1.5 tracking-wide">
                  Assets under management
                </label>
                <div className="relative">
                  <select
                    required
                    value={fields.aum}
                    onChange={set("aum")}
                    className={`${inputClass} appearance-none cursor-pointer pr-10`}
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    {AUM_RANGES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {/* Chevron */}
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="#8A8070" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-body text-sm text-charcoal-soft mb-1.5 tracking-wide">
                  Message{" "}
                  <span className="opacity-50">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={fields.message}
                  onChange={set("message")}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your family office and what you're looking for."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full py-3.5 font-body text-[17px] tracking-wide text-cream bg-charcoal border border-charcoal hover:bg-charcoal-soft transition-colors duration-150 disabled:opacity-50 mt-1"
              >
                {formState === "submitting" ? "Sending…" : "Send Request"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
