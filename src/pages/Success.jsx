import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => (
  <div className="page">
    <h1>🎉 Success!</h1>
    <p>Your gift card was submitted successfully. We’ll contact you shortly.</p>
    <Link className="cta" to="/">Go back home</Link>
  </div>
);

export default Success;