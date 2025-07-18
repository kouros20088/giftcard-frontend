import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>GiftCard Crypto Exchange</h1>
      <p>Fast, anonymous, and secure crypto purchases using your unused gift cards.</p>
      <Link to="/form"><button>Start Now</button></Link>
    </div>
  );
}