export default function Footer() {
  return (
    <footer className="border-t border-[#1A1F2E] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <span className="font-mono text-sm text-[#00FF94]">&lt;saif /&gt;</span>
        <p className="text-center font-mono text-xs text-[#4A5568]">
          Designed &amp; built by Mohammed Saif Ibrahim · 2026
        </p>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00FF94]" />
          <span className="font-mono text-xs text-[#4A5568]">Open to work</span>
        </div>
      </div>
    </footer>
  );
}
