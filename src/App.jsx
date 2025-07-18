<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Form from './pages/Form';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">⚡ FlashCrypto</div>
      </nav>

      <main className="hero">
        <h1 className="title">Instantly Convert Gift Cards to Crypto</h1>
        <p className="description">
          Trusted, anonymous, and fast. No account needed. Get paid in crypto for your unused gift cards in minutes.
        </p>
        <a href="#start" className="cta">Start Now</a>
      </main>

      <footer className="footer">
        © 2025 FlashCrypto. Anonymous. Secure. Fast.
      </footer>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
