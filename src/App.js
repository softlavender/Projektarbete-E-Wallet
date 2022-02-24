import './App.css';
import HomePage from "./pages/HomePage"
import AddCard from "./pages/AddCard.jsx"
import { Routes, Route } from "react-router-dom"

function App() {
  console.log('App.jsx');
  // namn och efternamn kan hämtas här från cardSlice och skicka till AddCard

  return (
    <div className="App">
      <header className="App-header">
      <h1>Projektarbete - E-wallet</h1>
      </header>

      
      <main className="App-main">
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/addcard' element={<AddCard />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
