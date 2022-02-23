import { useSelector, useDispatch } from "react-redux"
// aktiva kort

// resterande kort

// lägg till kort


const HomePage = test => {
  console.log(test);
  let nameState = useSelector(state => {
    console.log(state);
  })
  // state/effects, actions

  return (
    <>
    <h1>Projektarbete - E-wallet</h1>

    <section id="active-card">
      <p>active card</p>
    </section>

    <section id="inactive-cards">
      <p>inactive cards</p>
    </section>

    <button>add new card</button>
    </>
  )
}

export default HomePage