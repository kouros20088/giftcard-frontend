import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form processing delay
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% success rate (for demo)
      if (success) {
        navigate('/success');
      } else {
        navigate('/error');
      }
    }, 1000);
  };

  return (
    <div className="page">
      <h1>Sell Your Gift Card</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Gift Card Type:
          <input type="text" name="type" required />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" required />
        </label>
        <label>
          Upload Image:
          <input type="file" name="image" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;