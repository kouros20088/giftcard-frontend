import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div className="page">
    <h1>❌ Oops!</h1>
    <p>Something went wrong. Please try again later.</p>
    <Link className="cta" to="/form">Try Again</Link>
  </div>
);

export default Error;