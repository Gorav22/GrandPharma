// src/VideoChat.tsx
import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { GoogleGenerativeAI } from '@google/generative-ai';

const VideoChat: React.FC = () => {
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [aiOutput, setAiOutput] = useState<string | null>(null);
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    const fetchAiOutput = async (input: string) => {
      const apiKey = 'AIzaSyDHYoUo5WYldZXOMp6cOaS3m3rS-AiR3DA';
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      try {
        setIsAiSpeaking(true);
        const response = await model.generateContent(input);

        setAiOutput(response?.response?.text());
        const s = response.response.text();
        speak(s);
        setTimeout(() => {
          setIsAiSpeaking(false);
          setAiOutput(null);
        }, 5000); // AI speaks for 5 seconds
      } catch (error) {
        console.error('Error fetching AI output:', error);
        setIsAiSpeaking(false);
      }
    };

    if (transcript) {
      fetchAiOutput(transcript);
      resetTranscript();
    }
  }, [transcript, resetTranscript]);

  const startListening = () => {
    SpeechRecognition.startListening();
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Video Chat with AI</h1>
      <button
        onClick={startListening}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
      >
        Start Listening
      </button>

      {/* AI Speaking GIF */}
      <div className="mt-6">
        {isAiSpeaking && (
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="AI Speaking"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
          />
        )}
      </div>

      {/* AI Output */}
      {aiOutput && (
        <div className="mt-6 w-full max-w-2xl px-4">
          <p className="text-lg text-gray-700">{aiOutput}</p>
        </div>
      )}
    </div>
  );
};

export default VideoChat;
