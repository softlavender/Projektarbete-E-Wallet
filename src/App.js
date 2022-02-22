import './App.css';
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        app header
      </header>

      <main className="App-main">
        app main
        <HomePage/>
      </main>

      <footer className="App-footer">
        app footer
      </footer>
    </div>
  );
}

export default App;
