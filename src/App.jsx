import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Form from './pages/Form';
import Success from './pages/Success';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
