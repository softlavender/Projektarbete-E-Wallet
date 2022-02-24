import {configureStore} from "@reduxjs/toolkit";
import cardSlice from './cardsSlice'
// import homeSlice from './homeSlice'
// console.log(homeSlice);

const store = configureStore ({
  reducer: {
    cards: cardSlice
  }
})

export default store;