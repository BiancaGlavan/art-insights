export default function Navigation() {
  return (
    <nav className="px-6 py-4 flex items-center justify-between backdrop-blur-sm bg-neutral-50/60">
      <div className="text-2xl font-bold">art-insights</div>
      <div className="hidden md:flex items-center gap-8 ml-auto">
        <a href="/" className="hover:text-[#D65D4E] transition-colors">HOME</a>
        <a href="/features" className="hover:text-[#D65D4E] transition-colors">FEATURES</a>
        <a href="/gallery" className="hover:text-[#D65D4E] transition-colors">GALLERY</a>
      </div>
    </nav>
  );
} 