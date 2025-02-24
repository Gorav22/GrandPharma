import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';

const Sidebar: React.FC = () => {
  

  return (
    <div className="w-80 bg-gray-900 text-white flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-lg font-semibold">Medical Assistant</h1>
        </div>
      </div>
      <div className="p-4">
        <div className="relative">
          <input type="text" id="searchInput" placeholder="Search" className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg pl-10" />
          <i className="fas fa-search absolute left-3 top-3 text-black"></i>
        </div>
      </div>
      <div className="p-4">
        <button id="newChatButton" className="flex items-center gap-2 bg-custom text-white px-4 py-2 rounded-lg w-full !rounded-button">
          <i className="fas fa-plus"></i>
          <span>New chat</span>
        </button>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-arrow-left"></i>
          </button>
          <h2 className="text-lg font-semibold">Name chat</h2>
          <span className="bg-custom/10 text-custom px-2 py-1 rounded-full text-sm">AI</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-expand"></i>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-share"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

const ChatContent= ({geminiOutput}:any) => {
  return (
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
        <p className="text-gray-600">{geminiOutput}</p>
      </div>
    </div>
  );
};

const InputArea = ({onSendMessage}:any) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    await onSendMessage(message);
    setMessage('');
  };

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (event) => {
      setMessage(event.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="w-full">
        <div className="relative">
          <div className="absolute left-4 top-3"><i className="fas fa-robot text-custom"></i></div>
          <input
            type="text"
            id="chatInput"
            placeholder="Ask about medications, symptoms, or medical advice..."
            className="w-full pl-12 pr-32 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-custom"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="absolute right-14 top-3">
            <label htmlFor="image-upload" className="cursor-pointer">
              <i className="fas fa-image text-gray-400 hover:text-custom p-2"></i>
            </label>
            <input type="file" id="image-upload" accept="image/*" className="hidden" />
            <button className="p-2" onClick={handleVoiceInput}>
              <i className="fas fa-microphone text-gray-400 hover:text-custom"></i>
            </button>
          </div>
          <button id="sendButton" className="absolute right-3 top-3 bg-custom text-black p-2 rounded-lg !rounded-button" onClick={handleSendMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const Chatbot: React.FC = () => {
  const [geminiOutput, setGeminiOutput] = useState('');

  useEffect(() => {
    const fetchGeminiOutput = async () => {
      const response = await axios.get('https://grand-pharma.vercel.app/api/gemini');
      setGeminiOutput(response.data.output);
    };

    fetchGeminiOutput();
  }, []);

  const handleSendMessage = async (message:string) => {
    const response = await axios.post('https://grand-pharma.vercel.app/api/chat', { message });
    setGeminiOutput(response.data.reply);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ChatContent geminiOutput={geminiOutput} />
        <InputArea onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chatbot;
