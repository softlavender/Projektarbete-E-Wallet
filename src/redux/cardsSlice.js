import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomUserInfo = createAsyncThunk("cards/getRandomUserInfo", async () => {
  let response = await fetch("https://randomuser.me/api/");
  let json = await response.json();
  return json;
});

const cardsSlice = createSlice({
  name: "cards",

  // Initial state för random user
  initialState: {
    randomUser: {
      firstName: "",
      lastName: ""
    },
    cards: [
      {
        randomUser: {
          firstName: "",
          lastName: "",
        },
        vendor: "Visa",
        cardNr: "1233 4567 8912 0000",
        expireMonth: 4,
        expireYear: 2024,
        CCV: 123,
      },
    ],
  },

  // reducers/actions
  reducers: {
    changeName: (state, action) => {
      state.cards.push(action.payload);
    },
  },

  extraReducers: {
      [getRandomUserInfo.fulfilled]: (state, {payload}) => {
        state.randomUser.firstName = payload.results[0].name.first.toUppercase();
        state.cards[0].randomUser.firstName = payload.results[0].name.first.toUppercase();
        state.randomUser.lastName = payload.results[0].name.last.toUppercase();
        state.cards[0].randomUser.lastName = payload.results[0].name.last.toUppercase();
      },
      [getRandomUserInfo.pending]: (state) => {
        state.status = "Fetching user... Please wait a moment.";
      },
      [getRandomUserInfo.rejected]: (state) => {
        state.status = "Failed to fetch user.";
      },
  },
});

export const { changeName } = cardsSlice.actions;
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
