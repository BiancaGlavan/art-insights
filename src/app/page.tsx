'use client';

import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const features = [
  {
    title: 'AUTHORS',
    description: 'Discover detailed insights about any author. Our AI provides comprehensive information about their life, works, and literary impact.',
    className: 'lg:col-span-2 lg:row-span-1',
    image: '/img/authors-art.jpg',
    bgColor: 'bg-[#F3E5D8]',
    accentColor: 'text-[#A85C3E] hover:text-[#8A4E35]',
    titleColor: 'text-[#8A4E35]',
  },
  {
    title: 'BOOKS',
    description: 'Explore books through AI-powered analysis. Get summaries, themes, and connections to other literary works.',
    className: 'lg:col-span-1 lg:row-span-2',
    image: '/img/books-art.jpg',
    bgColor: 'bg-[#E5EAE2]',
    accentColor: 'text-[#5C7B64] hover:text-[#496150]',
    titleColor: 'text-[#496150]',
  },
  {
    title: 'ART',
    description: 'Understand the intersection of literature and art. Learn how authors influenced and were influenced by various art movements.',
    className: 'lg:col-span-1 lg:row-span-1',
    image: '/img/visual-art.jpg',
    bgColor: 'bg-[#E8D5CD]',
    accentColor: 'text-[#966A5B] hover:text-[#7A5548]',
    titleColor: 'text-[#7A5548]',
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
      {/* Background with subtle noise texture and gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8f8f8]"></div>
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-neutral-100/50"></div>
      </div>

      {/* Fixed Left Side Title */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <h1 className="font-space text-6xl lg:text-8xl font-black tracking-tight leading-none flex flex-col">
          <span className="bg-gradient-to-r from-[#966A5B] to-[#A85C3E] bg-clip-text text-transparent drop-shadow-sm">
            IMAGINE
          </span>
          <span className="bg-gradient-to-r from-[#5C7B64] to-[#966A5B] bg-clip-text text-transparent drop-shadow-sm">
            FREELY
          </span>
        </h1>
        <div className="mt-4 ml-1">
          <p className="font-inter text-sm tracking-widest text-neutral-600 uppercase">
            AI-Powered Literary Insights
          </p>
        </div>
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
      <main className="pl-[300px] pr-20 py-8 relative">
        <div className="text-left mb-16 max-w-xl">
          <p className="font-inter text-2xl font-light text-neutral-800 leading-relaxed tracking-wide">
            Explore the world of literature through our 
            <span className="text-[#A85C3E] font-medium"> AI-powered platform</span>. 
            Discover authors, books, and artistic insights.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] ${feature.className}`}
            >
              <div className="flex flex-col h-full">
                {/* Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 ${feature.bgColor} opacity-95`}></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className={`font-space text-3xl font-bold tracking-wide ${feature.titleColor}`}>
                      {feature.title}
                    </h3>
                    <div className="h-1 w-12 bg-current mt-2 opacity-50"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <p className="font-inter text-lg text-neutral-700 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="mt-auto">
                    <a
                      href="/features"
                      className={`font-inter inline-flex items-center font-medium transition-colors tracking-wide ${feature.accentColor}`}
                    >
                      Learn more
                      <svg
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
