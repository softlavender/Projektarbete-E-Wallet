import {configureStore} from "@reduxjs/toolkit";
import cardSlice from './cardsSlice'

const store = configureStore ({
  reducer: {
    cards: cardSlice
  }
})

export default store;