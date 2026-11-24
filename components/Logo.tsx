export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="13" width="4" height="8" rx="1" fill="#c4854f" opacity=".6" />
      <rect x="9" y="9" width="4" height="12" rx="1" fill="#c4854f" opacity=".85" />
      <rect x="15" y="4" width="4" height="17" rx="1" fill="#e0a672" />
    </svg>
  );
}
