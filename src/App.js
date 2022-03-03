import './App.css';
import HomePage from "./pages/HomePage"
import AddCard from "./pages/addCard.jsx"
import { Routes, Route } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomUserInfo } from './redux/cardsSlice';

// inputs från addcard ska in i arrayn. Dispatchs

function App() {
  console.log('App.jsx');
  const fetchStatus = useSelector(state => state.cards.status)
  
  const dispatch = useDispatch()

  useEffect( _ => {
    console.log('effect jsx app');
    dispatch(getRandomUserInfo())
  }, [])

  console.log('app j s x');
  return (
    <div className="App">
      <header className="App-header">
      <h1>Projektarbete - E-wallet</h1>
      </header>

      
      <main className="App-main">
        {fetchStatus === 'Ok' ? 
          (<Routes>
            <Route exact path='/' element={<HomePage />}/>
            <Route path='/addcard' element={<AddCard />}/>
          </Routes>)
          :
          <p>{fetchStatus}</p>
        }
      </main>
    </div>
  );
}

export default App;
