import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomUserInfo = createAsyncThunk("cards/getRandomUserInfo", async () => {
  let response = await fetch("https://randomuser.me/api/");
  let json = await response.json();
  // console.log(json);
  return json;
});

const cardsSlice = createSlice({
  name: "cards",

  // Initial state för random user
  initialState: {
    cards: [
      {
        firstName: "",
        lastName: "",
        vendor: "Visa",
        cardNr: "1233 4567 8912 0000",
        expireMonth: 4,
        expireYear: 2024,
        CCV: 123,
        isActive: true
      }
    ],

    status: null
  },

  // reducers/actions
  reducers: {
    updateCards: (state, action) => {
      state.cards.push(action.payload);
    },
  },

  extraReducers: {
    [getRandomUserInfo.fulfilled]: (state, {payload}) => {
      state.cards[0].firstName = payload.results[0].name.first
      state.cards[0].lastName = payload.results[0].name.last
      state.status = 'Ok';
    },
    [getRandomUserInfo.pending]: (state) => {
      state.status = "Fetching random user data... Please wait a moment.";
    },
    [getRandomUserInfo.rejected]: (state) => {
      state.status = "Failed to fetch random user data.";
    },
  },
});

export const { updateCards } = cardsSlice.actions;
export default cardsSlice.reducer;

// /* Alternativet med (redux-toolkit) */
// import {createSlice} from '@reduxjs/toolkit'

// // createSlice är ett objekt innehåller actions, state + reducer
// const headerSlice = createSlice({
//   // slice name
//   name: 'header',

//   // state
//   initialState: {
//     name: 'Todo'
//   },

//   // action reducer
//   reducers: {
//     newName: (state, action) => {
//       // console.log(action);
//       state.name = action.payload
//     }
//   }
// })

// export const {newName} = headerSlice.actions
// export default headerSlice.reducer

// https://codesandbox.io/s/redux-toolkit-api-todolist-pegrd?file=/src/redux/todoListSlice.js:0-998
