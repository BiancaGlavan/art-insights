'use client';

import { useState } from 'react';
import { generateAIResponse } from '@/lib/gemini';

export default function Features() {
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
    <div className="min-h-screen relative pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">Author Search</h1>
        
        {/* Search Form */}
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

        {/* Response Display */}
        {response && (
          <div className="mt-12 w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg prose">
            <pre className="whitespace-pre-wrap">{response}</pre>
          </div>
        )}
      </div>
    </div>
  );
} 