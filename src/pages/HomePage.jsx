import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { changeName } from "../redux/cardsSlice";

const HomePage = _ => {
  console.log('HomePage.jsx');
  
  let {firstname, lastname, vendor, cardNr, expireMonth, expireYear, CCV} = useSelector(state => {
    console.log(state.cards.cards);
    return state.cards.cards[0]
  })
  
  // state/effects, actions
  const dispatch = useDispatch()
  
  // test 1
  const test1 = _ => {
    let x = 'hej'
    dispatch(changeName(x))
  }

  return (
    <div id="e-wallet">
      <section id="active-card">
        <h1>active card</h1>
          
        {/* kan funktion som returnerar första card från card arrayen */}
        <div className="card">
          <p>firstname: {firstname}</p>
          <p>lastname: {lastname}</p>
          <p>vendor: {vendor}</p>
          <p>cardNr: {cardNr}</p>
          <p>expireMonth: {expireMonth}</p>
          <p>expireYear: {expireYear}</p>
          <p>CCV: {CCV}</p>
        </div>
      </section>

      <section id="inactive-cards">
        <h1>inactive cards</h1>
        
        {/* bör göra map över cards arrayen och skapa de kort som finns*/}
        <div className="card">
          <p>firstname: {firstname}</p>
          <p>lastname: {lastname}</p>
          <p>vendor: {vendor}</p>
          <p>cardNr: {cardNr}</p>
          <p>expireMonth: {expireMonth}</p>
          <p>expireYear: {expireYear}</p>
          <p>CCV: {CCV}</p>
        </div>
        
        <div className="card">
          <p>firstname: {firstname}</p>
          <p>lastname: {lastname}</p>
          <p>vendor: {vendor}</p>
          <p>cardNr: {cardNr}</p>
          <p>expireMonth: {expireMonth}</p>
          <p>expireYear: {expireYear}</p>
          <p>CCV: {CCV}</p>
        </div>
      </section>

      {/* denna btn används senare där namn och efternamn kan skickad med*/}
      {/* <Link to='/addcard'>
        <button id="add-card">add new card</button>
      </Link> */}
      
      {/* test 1 */}
      <button id="add-card" onClick={test1}>add new card</button>
    </div>
  )
}

export default HomePage


// aktiva kort

// resterande kort

// lägg till kort
