'use client';

import { useState } from 'react';
import { generateAIResponse } from '@/lib/gemini';

const tabs = [
  {
    id: 'authors',
    label: 'Authors',
    color: 'bg-[#F3E5D8]',
    borderColor: 'border-[#A85C3E]',
    textColor: 'text-[#8A4E35]',
    hoverColor: 'hover:text-[#A85C3E]',
  },
  {
    id: 'books',
    label: 'Books',
    color: 'bg-[#E5EAE2]',
    borderColor: 'border-[#5C7B64]',
    textColor: 'text-[#496150]',
    hoverColor: 'hover:text-[#5C7B64]',
  },
  {
    id: 'art',
    label: 'Art',
    color: 'bg-[#E8D5CD]',
    borderColor: 'border-[#966A5B]',
    textColor: 'text-[#7A5548]',
    hoverColor: 'hover:text-[#966A5B]',
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState('authors');
  const [author, setAuthor] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateAIResponse(author);
      setResponse(result);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while fetching the response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-16">
        <div className="flex gap-12 relative">
          {/* Bottom Border Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200"></div>
          
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative pb-4 font-space text-sm tracking-[0.15em] transition-all duration-300
                ${activeTab === tab.id ? 
                  `${tab.textColor}` : 
                  `text-neutral-400 ${tab.hoverColor}`
                }
              `}
            >
              <span className="uppercase">{tab.label}</span>
              <span 
                className={`
                  absolute bottom-0 left-0 right-0 h-0.5 transform transition-all duration-300
                  ${tab.borderColor}
                  ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'}
                `}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative">
        <div className={`
          absolute inset-0 transition-opacity duration-300
          ${activeTab === 'authors' ? 'opacity-100 z-10' : 'opacity-0 z-0'}
        `}>
          {/* Authors Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="font-space text-2xl font-bold text-[#8A4E35] mb-4">Author Analysis</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter an author's name..."
                className="w-full p-4 rounded-full border-2 border-neutral-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#D65D4E] transition-all placeholder-neutral-500"
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full p-4 bg-[#D65D4E] text-white rounded-full hover:bg-opacity-90 disabled:bg-opacity-50 transition-all font-semibold shadow-lg"
              >
                {loading ? 'Searching...' : 'Discover Author'}
              </button>
            </form>
            {response && (
              <div className="mt-12 w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg prose">
                <pre className="whitespace-pre-wrap">{response}</pre>
              </div>
            )}
          </div>
        </div>

        <div className={`
          absolute inset-0 transition-opacity duration-300
          ${activeTab === 'books' ? 'opacity-100 z-10' : 'opacity-0 z-0'}
        `}>
          {/* Books Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="font-space text-2xl font-bold text-[#496150] mb-4">Book Insights</h2>
            {/* Add your books content here */}
          </div>
        </div>

        <div className={`
          absolute inset-0 transition-opacity duration-300
          ${activeTab === 'art' ? 'opacity-100 z-10' : 'opacity-0 z-0'}
        `}>
          {/* Art Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="font-space text-2xl font-bold text-[#7A5548] mb-4">Art Connections</h2>
            {/* Add your art content here */}
          </div>
        </div>
      </div>
    </div>
  );
} 