import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">CryptoGift</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Submit</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}