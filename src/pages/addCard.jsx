// imports
import { Link , useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AddCard = () => {
  console.log('AddCard.jsx');
  const location = useLocation();
  console.log(location);

  // state
  let cardsData = useSelector((state) => {
    return state;
  });

  // state/effects, actions
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("Firstname");
  const [lastName, setLastName] = useState("Lastname");
  const [vendor, setVendor] = useState("Vendor");
  const [cardnumber, setCardnumber] = useState("xxxx xxxx xxxx xxxx");
  const [expireMonth, setExpireMonth] = useState("xx");
  const [expireYear, setExpireYear] = useState("xxxx");
  const [CCV, setCCV] = useState("xxx");

  let newCard = {
    firstName: firstName,
    lastName: lastName,
    vendor: vendor,
    cardNr: cardnumber,
    expireMonth: expireMonth,
    expireYear: expireYear,
    CCV: CCV,
    isActive: false
  };

  return (
    <>
      <h1>add card</h1>
      <div className="newCard">
        <p>{location.state.firstname} {location.state.lastname}</p>
        <p>{cardnumber}</p>
        <p>{expireMonth} / {expireYear}</p>
        <p>{CCV}</p>
        <p>{vendor}</p>
      </div>
      <div className="createCard">
        <input
          type="text"
          id="firstname"
          placeholder={location.state.firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          id="lastname"
          placeholder={location.state.lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          type="tel"
          id="cardNr"
          placeholder="Card number"
          maxLength={16}
          onChange={(e) => setCardnumber(e.target.value)}
        />
        <br />
        <select
          id="expireMonth"
          defaultValue={"disabled"}
          onChange={(e) => setExpireMonth(e.target.value)}
        >
          <option value="disabled" disabled>
            Experation month
          </option>
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
        <select
          id="expireYear"
          defaultValue={"disabled"}
          onChange={(e) => setExpireYear(e.target.value)}
        >
          <option value="disabled" disabled>
            Experation year
          </option>
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
        <input
          type="tel"
          id="CCV"
          placeholder="CCV"
          maxLength={3}
          onChange={(e) => setCCV(e.target.value)}
        />
        <br />
        <select
          id="vendor"
          defaultValue={"disabled"}
          onChange={(e) => setVendor(e.target.value)}
        >
          <option value="disabled" disabled>
            Choose a vendor
          </option>
          <option value="Mastercard">Mastercard</option>
          <option value="Visa">Visa</option>
          <option value="American Expess">American Expess</option>
        </select>
        <br />
        <button className="addBtn"
          onClick={() => {
            console.log(newCard);
            // dispatch(addNewCard(newCard))
          }}
        >
          Add Card
        </button>
      </div>

      <Link to='/'>
        <button>Return to homepage</button>
      </Link>
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
