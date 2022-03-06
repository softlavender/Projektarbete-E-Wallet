import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link ,useLocation } from "react-router-dom";
import { changeName, removeCard } from "../redux/cardsSlice";

const HomePage = _ => {
  console.log('HomePage.jsx');
  
    // omfattar alla existerande kort
  let cards = useSelector(state => {
    return state.cards.cards
  })

  // data bara för det aktiva kortet
  let {firstName, lastName, vendor, cardNr, expireMonth, expireYear, CCV} = useSelector(state => {
    return state.cards.cards[cards.indexOf(cards.find(card => card.isActive))]
  })

  let firstname = firstName.toUpperCase()
  let lastname = lastName.toUpperCase()
  
  // state/effects, actions
  const dispatch = useDispatch()

  // aktivera ett annat kort
  const changeCardStatus = (isActive) => {
    console.log(' isActive', isActive);
    // får toggla runt lite mellan objektens isActive state här och skicka med i funktionen som dispatchas när den finns
  }

  const deleteWantedCard = wantedCard => {
    dispatch(removeCard(cards.indexOf(wantedCard)))
  }

  
  return (
    <div id="e-wallet">
      <section id="active-card">
        {/* <h1>Active Card</h1> */}
        <div className="card">
          <span className="chip"></span>
          <span className="vendor">{vendor}</span>
          <span className="fullname">{firstname} {lastname}</span>
          <span className="card-number">{cardNr}</span>
          <span className="valid-thru">{expireMonth}/{expireYear}</span>
          {/* <p className="CCV">CCV: {CCV}</p> */}
        </div>
      </section>

      {cards.length > 1 &&
        <section id="inactive-cards">
          {/* <h1>Inactive Cards</h1> */}
          {cards.filter(card => !card.isActive).map((card, i) => {
            return (
              <div className="inactive-card" key={i}>
                <div className="card">
                  <span className="chip"></span>
                  <span className="vendor">{card.vendor}</span>
                  <span className="fullname">{card.firstname} {lastname}</span>
                  <span className="card-number">{card.cardNr}</span>
                  <span className="valid-thru">{card.expireMonth}/{expireYear}</span>
                  {/* <p className="CCV">CCV: {CCV}</p> */}  
                </div>

                <button className="activate-card" onClick={_ => changeCardStatus(card.isActive)}>activate</button>
                <button className="delete-card" onClick={_ => deleteWantedCard(card)}>delete</button>
              </div>
            )
          })}
        </section>
      }

      <section id="add-new-card">
        {cards.length < 4 
          ? <Link to='/addcard' state={{firstname: firstName, lastname: lastName}}>
              <button id="add-card">add new card</button>
            </Link>
          : <span id="add-card-notice">Delete one inactive card to <span>add new card</span></span>
        }
      </section>
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
