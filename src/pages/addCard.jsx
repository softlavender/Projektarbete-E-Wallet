// imports
import { useSelector, useDispatch } from "react-redux"

const addCard = () => {
  let nameState = useSelector(state => {
    console.log(state);
  })
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