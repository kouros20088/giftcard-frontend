import { useState } from 'react';

export default function FormPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to send to backend goes here
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Submit Gift Card</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name (Optional)" />
          <input type="text" placeholder="Gift Card Type" required />
          <input type="text" placeholder="Card Code" required />
          <input type="number" placeholder="Amount (£)" required />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Form submitted! We’ll be in touch.</p>
      )}
    </div>
  );
}