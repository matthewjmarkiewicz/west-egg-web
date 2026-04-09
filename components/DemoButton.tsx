"use client";

type Props = {
  variant?: "filled" | "outlined";
  size?: "sm" | "md";
  children?: React.ReactNode;
  className?: string;
};

export default function DemoButton({
  variant = "filled",
  size = "md",
  children = "Request a Demo",
  className = "",
}: Props) {
  const handleClick = () => {
    document.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  const base =
    "inline-flex items-center justify-center font-body tracking-wide transition-all duration-200 cursor-pointer";

  const sizes: Record<string, string> = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
  };

  const variants: Record<string, string> = {
    filled:
      "bg-charcoal text-cream border border-charcoal hover:bg-charcoal-soft",
    outlined:
      "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-cream",
  };

  return (
    <button
      onClick={handleClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
