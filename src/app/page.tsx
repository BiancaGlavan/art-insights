'use client';

import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const features = [
  {
    title: 'AUTHORS',
    description: 'Discover detailed insights about any author. Our AI provides comprehensive information about their life, works, and literary impact.',
    className: 'lg:col-span-2 lg:row-span-1',
  },
  {
    title: 'BOOKS',
    description: 'Explore books through AI-powered analysis. Get summaries, themes, and connections to other literary works.',
    className: 'lg:col-span-1 lg:row-span-2',
  },
  {
    title: 'ART',
    description: 'Understand the intersection of literature and art. Learn how authors influenced and were influenced by various art movements.',
    className: 'lg:col-span-1 lg:row-span-1',
  },
];

const socialLinks = [
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
];

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/img/books-background.jpg"
          alt="Books Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-100/75 backdrop-blur-[2px]"></div>
      </div>

      {/* Fixed Left Side Title */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <h1 className="text-6xl lg:text-8xl font-black text-neutral-900 tracking-tight leading-none flex flex-col">
          <span className="bg-gradient-to-r from-neutral-900 to-[#D65D4E] bg-clip-text text-transparent drop-shadow-sm">IMAGINE</span>
          <span className="bg-gradient-to-r from-[#D65D4E] to-neutral-900 bg-clip-text text-transparent drop-shadow-sm">FREELY</span>
        </h1>
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-[#1A1A1A] hover:text-[#D65D4E] transition-colors transform hover:scale-110"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Main Content */}
      <main className="pl-[300px] pr-20 py-16 relative">
        <div className="text-left mb-16 max-w-xl">
          <p className="text-2xl font-medium text-neutral-800 leading-relaxed">
            Explore the world of literature through our 
            <span className="text-[#D65D4E] font-semibold"> AI-powered platform</span>. 
            Discover authors, books, and artistic insights.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white/90 hover:shadow-lg ${feature.className}`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6">
                  <a
                    href="/features"
                    className="inline-flex items-center text-[#D65D4E] font-semibold hover:text-neutral-900 transition-colors"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
