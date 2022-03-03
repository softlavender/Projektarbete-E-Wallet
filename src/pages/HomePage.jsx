import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link ,useLocation } from "react-router-dom";
import { changeName } from "../redux/cardsSlice";

const HomePage = _ => {
  console.log('HomePage.jsx');
  // const locations = useLocation();
  // console.log(locations);
    // omfattar alla existerande kort
  let cards = useSelector(state => {
    return state.cards.cards
  })
  
  // data bara för det aktiva kortet
  let {firstName, lastName, vendor, cardNr, expireMonth, expireYear, CCV} = useSelector(state => {
    // första lösning med "state.cards.cards[0]" kommer att skapa problem för oss ifall den aktiva kortet inte är på plats 0 i cards arrayen
    // return state.cards.cards[0]
    return state.cards.cards[cards.indexOf(cards.find(card => card.isActive))]
  })
  
  // state/effects, actions
  const dispatch = useDispatch()

  // aktivera ett annat kort
  const changeCardStatus = (isActive) => {
    console.log(isActive);
    // får toggla runt lite mellan objektens isActive state här och skicka med i funktionen som dispatchas när den finns
  }

  return (
    <div id="e-wallet">
      <section id="active-card">
        <h1>Active Card</h1>
        <div className="card">
          <p>firstName: {firstName}</p>
          <p>lastName: {lastName}</p>
          <p>vendor: {vendor}</p>
          <p>cardNr: {cardNr}</p>
          <p>expireMonth: {expireMonth}</p>
          <p>expireYear: {expireYear}</p>
          <p>CCV: {CCV}</p>
        </div>
      </section>


      <section id="inactive-cards">
        <h1>Inactive Cards</h1>
        {cards.filter(card => !card.isActive).map((card, i) => {
          return (
            <div key={i} className="card" onClick={ () => changeCardStatus(card.isActive)}>
              <p>firstName: {card.firstName}</p>
              <p>lastName: {card.lastName}</p>
              <p>vendor: {card.vendor}</p>
              <p>cardNr: {card.cardNr}</p>
              <p>expireMonth: {card.expireMonth}</p>
              <p>expireYear: {card.expireYear}</p>
              <p>CCV: {card.CCV}</p>
            </div>
          )
        })}
      </section>

      <Link to='/addcard' state={{firstname: firstName, lastname: lastName}}>
        <button id="add-card">add new card</button>
      </Link>
    </div>
  )
}

export default HomePage




// testa igen senare
// const showCards = activeCardOnly => {
  //   const show = cardData => {
  //     console.log('cardData', cardData);

  //     cardData.map(card => {
  //       return (
  //         <div className="card">
  //           <p>firstName: {card.firstName}</p>
  //           <p>lastName: {card.lastName}</p>
  //           <p>vendor: {card.vendor}</p>
  //           <p>cardNr: {card.cardNr}</p>
  //           <p>expireMonth: {card.expireMonth}</p>
  //           <p>expireYear: {card.expireYear}</p>
  //           <p>CCV: {card.CCV}</p>
  //         </div>
  //       )
  //     })
  //   }
  //   return activeCardOnly ? show(cards.filter(card => card.isActive)) : show(cards)
  // }
  {/* {showCards(1)} */}

// aktiva kort

// resterande kort

// lägg till kort
