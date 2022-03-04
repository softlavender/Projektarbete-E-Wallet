// imports
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateCards } from "../redux/cardsSlice";

const AddCard = () => {
  const location = useLocation();

  // state/effects, actions
  const dispatch = useDispatch();

  const [vendor, setVendor] = useState("Vendor");
  const [cardnumber, setCardnumber] = useState("xxxx xxxx xxxx xxxx");
  const [expireMonth, setExpireMonth] = useState("xx");
  const [expireYear, setExpireYear] = useState("xxxx");
  const [CCV, setCCV] = useState("xxx");

  let newCard = {
    firstName: location.state.firstname,
    lastName: location.state.lastname,
    vendor: vendor,
    cardNr: cardnumber,
    expireMonth: expireMonth,
    expireYear: expireYear,
    CCV: CCV,
    isActive: false,
  };

  let myCCV = document.querySelector("#CCV");

  myCCV.oninput = function () {
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  };

  return (
    <>
      <h1>add card</h1>
      <div className="newCard">
        <p>
          {location.state.firstname} {location.state.lastname}
        </p>
        <p>{cardnumber}</p>
        <p>
          {expireMonth} / {expireYear}
        </p>
        <p>{CCV}</p>
        <p>{vendor}</p>
      </div>
      <form className="createCard">
        <input
          type="text"
          id="firstname"
          placeholder={location.state.firstname}
          disabled
        />
        <input
          type="text"
          id="lastname"
          disabled
          placeholder={location.state.lastname}
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
          type="number"
          id="CCV"
          placeholder="CCV"
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
        <Link to="/">
          <button
            className="addBtn"
            onClick={() => {
              dispatch(updateCards(newCard));
            }}
          >
            Add Card
          </button>
        </Link>
      </form>

      <Link to="/">
        <button>Return to homepage</button>
      </Link>
    </>
  );
};

export default AddCard;
