// imports
import { useDispatch, useSelector } from "react-redux"

const addCard = () => {
  console.log('AddCard.jsx');

  // state
  let cardsData = useSelector(state => {
    return state
  })

  console.log('cardsData', cardsData);


  // state/effects, actions
  const dispatch = useDispatch()

  return (
    <h1>add card</h1>
  )
}

export default addCard


// Lägg till nytt kort

// Vendor
// Förnamn
// Efternamn
// Kortnummer
// Expire month
// Expire year
// CCV

// Tre alternativ på kort

// Förhandsvisning på kort som uppdateras


// // set state
// let dispatch = useDispatch()
// // alvernativ 1: kan skicka med event och lösa ut all data genom event.target > hitta de olika kortfält
// // alvernativ 2: kan hitta alla existerand DOM-element relaterat till kortfält  och lösa ut datan som matades in
// const addNewCardd = (e) => {
//   // alt 1
//   let firstname = document.querySelector('#firstname').value
//   let lastname = document.querySelector('#lastname').value
//   let vendor = document.querySelector('#vendor').value
//   let cardNr = document.querySelector('#cardNr').value
//   let expireMonth = document.querySelector('#expireMonth').value
//   let expireYear = document.querySelector('#expireYear').value
//   let CCV = document.querySelector('#CCV').value
  
//   let newCard = {
//     firstname: firstname,
//     lastname: lastname
//     // ....
//   }

//   // alt 2
//   let firstname = e.target.children[0].value
//   let lastname = e.target.children[1].value
//   let vendor = e.target.children[2].value
  
//   let newCard = {
//     firstname: firstname,
//     lastname: lastname,
//     vendor: vendor
//     // ....
//   }
  
//   dispatch(addNewCard(newCard))
// }