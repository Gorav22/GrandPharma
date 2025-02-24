import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chatbot from './pages/Chatbot'
import './index.css'
import VideoConference from "./pages/VideoConference";
import Product from "./pages/Product";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/video" element={<VideoConference/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </Router>
  );
};

export default App;