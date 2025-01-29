export default function Navigation() {
  const menuItems = [
    { label: 'Explore', path: '/' },
    { label: 'Discover', path: '/features' },
    { label: 'Collection', path: '/gallery' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg shadow-neutral-900/5 border border-white/20">
      <div className="font-space text-xl font-light tracking-[0.2em] text-neutral-800 pr-12 border-r border-neutral-200">
        ai<span className="text-[#A85C3E]">·</span>sight
      </div>
      <div className="hidden md:flex items-center gap-12 px-12">
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="relative font-inter text-neutral-600 text-sm tracking-[0.15em] hover:text-[#966A5B] transition-all duration-300 uppercase font-light group"
          >
            {item.label}
            <span className="absolute inset-x-0 bottom-0 h-px bg-[#966A5B] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        ))}
      </div>
      <div className="hidden md:block pl-12 border-l border-neutral-200">
        <a 
          href="/start"
          className="font-inter text-sm tracking-wider text-[#5C7B64] hover:text-[#496150] transition-colors duration-300"
        >
          Create New
        </a>
      </div>
    </nav>
  );
} 