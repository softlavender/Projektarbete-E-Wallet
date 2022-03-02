// imports
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AddCard = () => {
  // state
  let cardsData = useSelector((state) => {
    return state;
  });

  // state/effects, actions
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [vendor, setVendor] = useState("")
  const [cardnumber, setCardnumber] = useState("")
  const [expireMonth, setExpireMonth] = useState("")
  const [expireYear, setExpireYear] = useState("")
  const [CCV, setCCV] = useState("")

  let newCard = {
    firstname: firstName,
    lastname: lastName,
    vendor: vendor,
    cardNr: cardnumber,
    expireMonth: expireMonth,
    expireYear: expireYear,
    CCV: CCV
  }

  return (
    <>
      <h1>add card</h1>
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{cardnumber}</p>
        <p>{expireMonth}</p>
        <p>{expireYear}</p>
        <p>{CCV}</p>
        <p>{vendor}</p>
      </div>
      <div>
        <input type="text" id="firstname" placeholder="Firstname" onChange={e => setFirstName(e.target.value)} />
        <input type="text" id="lastname" placeholder="Lastname" onChange={e => setLastName(e.target.value)}/>
        <input type="number" id="cardNr" placeholder="Card number" onChange={e => setCardnumber(e.target.value)}/>
        <select id="expireMonth" onChange={e => setExpireMonth(e.target.value)}>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        /
        <select id="expireYear" onChange={e => setExpireYear(e.target.value)}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
          <option value="2031">2031</option>
          <option value="2032">2032</option>
        </select>
        <input type="number" id="CCV" placeholder="CCV" onChange={e => setCCV(e.target.value)}/>
        <select id="vendor" onChange={e => setVendor(e.target.value)}>
          <option value="Mastercard">Mastercard</option>
          <option value="Visa">Visa</option>
          <option value="American Expess">American Expess</option>
        </select>
        <button>Add Card</button>
      </div>
      <button>Return to homepage</button>
    </>
  );
};

export default AddCard;

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
