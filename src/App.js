import './App.css';
import HomePage from "./pages/HomePage"
import addCard from "./pages/addCard"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        app header
      </header>

      
      <main className="App-main">
        app main
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/addCard' element={<addCard />}/>
        </Routes>
      </main>

      <footer className="App-footer">
        app footer
      </footer>
    </div>
  );
}

export default App;
