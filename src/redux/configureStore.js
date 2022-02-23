import {configureStore} from "@reduxjs/toolkit";
import cardSlice from './cardSlice'
// console.log(cardSlice);

const store = configureStore ({
    reducer: {
        card: cardSlice
    }
})

export default store;