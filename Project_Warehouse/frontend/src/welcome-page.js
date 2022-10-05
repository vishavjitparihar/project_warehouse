import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Apple's Warehoue Page.
        </p>
        <p></p>
        <a
          className="App-link"
          href="https://www.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for our Offical Website
        </a>


      </header>
    </div>
  );
}

export default App;
