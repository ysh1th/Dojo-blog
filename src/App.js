// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Hello there';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h2>{ title }</h2>
      </div>
    </div>
  );
}

export default App;
