export default function GlowCard({ children, className = "", padded = true }) {
  return (
    <div className={`glow-card ${className}`}>
      <div className={`inner h-full ${padded ? "p-4 sm:p-5" : ""}`}>{children}</div>
    </div>
  );
}