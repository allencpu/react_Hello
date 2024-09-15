import logo from './logo.svg';
import './App.css';

function App(props) {
  const currDate = new Date();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Allen says, 'Hello'.</h1>
        <h2> The present time is now {currDate.toLocaleTimeString()}.</h2>
        <h2> The date is {currDate.toLocaleDateString()}.</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Click here to "Learn React"
        </a>
      </header>
    </div>
  );
}

export default App;
