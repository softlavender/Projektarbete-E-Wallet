import { useSelector, useDispatch } from "react-redux"
import { Link  } from "react-router-dom";
import { removeCard, changeCardStatus } from "../redux/cardsSlice";

const HomePage = _ => {
  
    // omfattar alla existerande kort
  let cards = useSelector(state => {
    return state.cards.cards
  })

  // data bara för det aktiva kortet
  let {firstName, lastName, vendor, cardNr, expireMonth, expireYear, CCV} = useSelector(state => {
    return state.cards.cards[cards.indexOf(cards.find(card => card.isActive))]
  })

  let activeCard = useSelector(state => {
    return state.cards.cards[cards.indexOf(cards.find(card => card.isActive))]
  })
  

  let firstname = firstName.toUpperCase()
  let lastname = lastName.toUpperCase()
  
  // state/effects, actions
  const dispatch = useDispatch()

  const deleteWantedCard = wantedCard => {
    dispatch(removeCard(cards.indexOf(wantedCard)))
  }

  return (
    <div id="e-wallet">
      <section id="active-card">
        <div className={`card ${vendor}`}>
          <span className="chip"></span>
          <span className="vendor">{vendor}</span>
          <span className="fullname">{firstname} {lastname}</span>
          <span className="card-number">{cardNr}</span>
          <span className="valid-thru">{expireMonth} / {expireYear}</span>
          {/* <p className="CCV">CCV: {CCV}</p> */}
        </div>
      </section>

      {cards.length > 1 &&
        <section id="inactive-cards">
          {cards.filter(card => !card.isActive).map(card => {
            return (
              <div className="inactive-card" key={card.cardNr}>
                <div className={`card ${card.vendor}`}>
                  <span className="chip"></span>
                  <span className="vendor">{card.vendor}</span>
                  <span className="fullname">{card.firstName} {card.lastName}</span>
                  <span className="card-number">{card.cardNr}</span>
                  <span className="valid-thru">{card.expireMonth} / {card.expireYear}</span>
                  {/* <p className="CCV">CCV: {CCV}</p> */}
                </div>

                <button className="activate-card" onClick={_ => dispatch(changeCardStatus([card, activeCard]))}>activate</button>
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



