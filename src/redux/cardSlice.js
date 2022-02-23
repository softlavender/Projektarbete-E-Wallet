import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const getUserInfo = createAsyncThunk("/getUserInfo", async () => {
  let response = await fetch("https://randomuser.me/api/");
  let json = await response.json();
  console.log(json);
  return json;
  //det som returneras här, kommer att bli vår action.payload
});


const cardSlice = createSlice({
  name: 'cards',

  // state
  initialState: {
    cards: [
      {
        name: 'hello',
        lastname: null,
        vendor: 'visa',
        cardNr: 12334567891234121212,
        expireMonth: 22,
        expireYear: 9292,
        CCV: 123
      }
    ]
  },

  // reducers/actions
  extraReducers: {
    changeName: (state, action) => {
      state.cards.name = 'updated something'
    },
    // [getUserInfo.fulfilled]: (state, action) => {
    //   // let updatedTodos = state.todos.concat(action.payload);
    //   state.cards.name = 'updated something'
    //   // state.cards.name = action.payload?
    //   // state.cards.name = action.payload[0]
    //   // state.cards.lastname = action.payload[1]
    // },
    // [getUserInfo.pending]: (state) => {
    //   state.status = "Fetching todos. Please wait a moment...";
    // },
    // [getUserInfo.rejected]: (state) => {
    //   state.status = "Failed to fetch todos.";
    // }
  }

  // reducers: {
  //   getUserInfo: (state, action) => {
  //     state.name = 'hello'
  //   }
  // }
})

export const {changeName} = cardSlice.actions
export default cardSlice.reducer





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