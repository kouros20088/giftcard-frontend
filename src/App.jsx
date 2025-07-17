import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Sell Gift Cards for Crypto</h1>
        <p>
          Our secure, anonymous platform lets you convert gift cards into
          cryptocurrency. Fast payouts, no signup needed, verified by real users.
        </p>
        <button onClick={() => window.location.href = "/form"}>Start Now</button>
      </header>

      <footer>
        <p>© 2025 Giftcard Crypto Service</p>
      </footer>
    </div>
  );
}

export default App;