export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M2 2l10 10M5 12h7V5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
