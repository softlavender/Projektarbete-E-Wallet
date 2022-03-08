import './App.css';
import HomePage from "./pages/HomePage"
import AddCard from "./pages/addCard.jsx"
import { Routes, Route } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomUserInfo } from './redux/cardsSlice';
import eWalletLogo1 from './media/e-wallet-x.png'
import eWalletLogo2 from './media/e-wallet.png'
// inputs från addcard ska in i arrayn. Dispatchs

function App() {
  console.log('App.jsx');
  const fetchStatus = useSelector(state => state.cards.status)
  
  const dispatch = useDispatch()

  useEffect( _ => {
    dispatch(getRandomUserInfo())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div id='logo'>
          {/* <img src={eWalletLogo1} alt='e-wallet-logo' /> */}
          <img src={eWalletLogo2} alt='e-wallet-logo' />
        </div>
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
