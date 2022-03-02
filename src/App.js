import './App.css';
import HomePage from "./pages/HomePage"
import AddCard from "./pages/addCard.jsx"
import { Routes, Route } from "react-router-dom"
import {getRandomUserInfo} from "./redux/cardsSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  // console.log('App.jsx');
  // namn och efternamn kan hämtas här från cardSlice och skicka till AddCard

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomUserInfo());
  }, []);

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
