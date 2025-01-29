import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) throw new Error('NEXT_PUBLIC_GEMINI_API_KEY is not defined');

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Response Structure for Author Information: Life, Books, Important Ideas of the author's work, Similar Authors.\nIf the author cannot be found, respond with: Thank you for your query. Unfortunately, we couldn't find any information on the author you entered. Please check the spelling or try searching for a different author.",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function generateAIResponse(input: string) {
    const chatSession = model.startChat({
        generationConfig,
        history: [], // You can maintain chat history if needed
    });

    const result = await chatSession.sendMessage(input);
    return result.response.text();
}

export { generateAIResponse };