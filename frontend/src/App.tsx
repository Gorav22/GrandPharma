import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chatbot from './pages/Chatbot'
import Product from './pages/Product'
import './index.css'
import Signin from "./pages/Signin";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/product" element={<Product/>}/>

      </Routes>
    </Router>
  );
};

export default App;