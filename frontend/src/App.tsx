import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chatbot from './pages/Chatbot'
import './index.css'
import Signin from "./pages/Signin";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/chatbot" element={<Chatbot/>}/>
      </Routes>
    </Router>
  );
};

export default App;