## Project Context

### Tech Stack
- Frontend: 
  - Next.js 14 (App Router)
  - TypeScript 5
  - TailwindCSS 3
- AI Integration:
  - Google Gemini AI API
  - @google/generative-ai SDK

### Documentation Links
1. Frontend Core
   - Next.js: https://nextjs.org/docs
   - TypeScript: https://www.typescriptlang.org/docs/
   - TailwindCSS: https://tailwindcss.com/docs

2. AI Integration
   - Gemini AI Documentation: https://ai.google.dev/docs
   - Gemini API Reference: https://ai.google.dev/api
   - Google AI Node.js SDK: https://www.npmjs.com/package/@google/generative-ai

3. Project Features to Test
   - Text Generation
   - Code Generation & Analysis
   - Multi-modal Capabilities (text + images)
   - Chat Functionalities
   - Function Calling

### Project Requirements
- Key Features:
  - AI Chat Interface
  - Code Highlighting (using libraries like Prism.js or highlight.js)
  - Image Upload & Processing
  - Response Streaming
  - Error Handling
  - Rate Limiting

### Environment Setup
- Node.js version: 18+ (for Next.js 14)
- Required Environment Variables:
  - GOOGLE_API_KEY=your_gemini_api_key

### Development Standards
- Code Style: TypeScript strict mode
- Component Pattern: Server & Client Components
- State Management: React Hooks
- API Routes: Next.js API routes with Edge Runtime support
- Styling: TailwindCSS with custom theme configuration

### Current Focus
Setting up the project and implementing basic AI interactions

### Constraints
- Browser Support: Modern browsers only
- Response Time: Quick responses for better UX
- API Usage: Follow Gemini AI rate limits and quotas
