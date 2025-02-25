import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

import '../index.css';

const genAI = new GoogleGenerativeAI('AIzaSyDHYoUo5WYldZXOMp6cOaS3m3rS-AiR3DA');

const Chatbot: React.FC = () => {
  const [geminiOutput, setGeminiOutput] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setError('');
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const prompt="You are a ai doctor give consultation and basic medicine telling for there health like paracetamol, dolo for headache, aspirin for fever and painkillers for body pain and many more that you know. Only tell about that medicine that is asked";
      const result = await model.generateContent(prompt+message);
      const response = await result.response;
      setGeminiOutput(response.text());
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to get response. Please try again.');
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ChatContent geminiOutput={geminiOutput} loading={loading} error={error} />
        <InputArea message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} loading={loading} />
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => (
  <div className="w-80 bg-gray-900 text-white flex flex-col">
    <div className="p-4 border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="w-8 h-8" />
        <h1 className="text-lg font-semibold">Medical Assistant</h1>
      </div>
    </div>
  </div>
);

const Header: React.FC = () => (
  <header className="bg-white border-b px-6 py-4 flex justify-between">
    <h2 className="text-lg font-semibold">Medical Assistant</h2>
  </header>
);

const ChatContent: React.FC<{ geminiOutput: string; loading: boolean; error: string }> = ({ geminiOutput, loading, error }) => (
  <div className="flex-1 overflow-y-auto p-6">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-custom/10 mb-4">
          <i className="fas fa-robot text-2xl text-custom"></i>
        </div>
        <h1 className="text-3xl font-bold mb-2">Your Medical Assistant</h1>
        <p className="text-gray-600">Get instant answers about medications, symptoms, and medical advice. Please note: This is for informational purposes only and not a substitute for professional medical advice.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-custom transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-custom/10">
              <i className="fas fa-bolt text-custom"></i>
            </div>
            <h3 className="font-semibold">Quick Medical Search</h3>
          </div>
          <p className="text-gray-600 text-sm">Find medications and their uses quickly</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-custom transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-custom/10">
              <i className="fas fa-photo-video text-custom"></i>
            </div>
            <h3 className="font-semibold">Medical References</h3>
          </div>
          <p className="text-gray-600 text-sm">Access trusted medical resources and guides</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-custom transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-custom/10">
              <i className="fas fa-language text-custom"></i>
            </div>
            <h3 className="font-semibold">Healthcare Support</h3>
          </div>
          <p className="text-gray-600 text-sm">Connect with healthcare professionals</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
        <button className="text-custom font-medium px-4 py-2 rounded-lg bg-custom/10">AI</button>
        <button className="text-gray-600 hover:text-custom px-4 py-2">Medications</button>
        <button className="text-gray-600 hover:text-custom px-4 py-2">Symptoms</button>
        <button className="text-gray-600 hover:text-custom px-4 py-2">First Aid</button>
        <button className="text-gray-600 hover:text-custom px-4 py-2">Doctors</button>
        <button className="text-gray-600 hover:text-custom px-4 py-2">Reports</button>
      </div>
      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <p className="text-gray-600">{geminiOutput}</p>
    </div>
  </div>
);

const InputArea: React.FC<{ message: string; setMessage: (msg: string) => void; handleSendMessage: () => void; loading: boolean }> = ({ message, setMessage, handleSendMessage, loading }) => (
  <div className="bg-white border-t p-4 flex">
    <input
      type="text"
      placeholder="Ask about medical advice..."
      className="flex-1 border rounded-lg px-4 py-2"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      aria-label="Input your medical query"
    />
    <button
      className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
      onClick={handleSendMessage}
      disabled={loading}
      aria-label="Send message"
    >
      {loading ? 'Sending...' : 'Send'}
    </button>
  </div>
);

export default Chatbot;
