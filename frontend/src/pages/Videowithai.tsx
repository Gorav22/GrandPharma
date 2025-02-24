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
        const s=response.response.text();
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
    <div>
      <h1>Video Chat with AI</h1>
      <button onClick={startListening}>Start Listening</button>
      <div>
        {isAiSpeaking && (
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="AI Speaking"
            width="200px"
            height="200px"
          />
        )}
      </div>
      {aiOutput && <p>{aiOutput}</p>}
    </div>
  );
};

export default VideoChat;
