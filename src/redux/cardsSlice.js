import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

// export const getUserInfo = createAsyncThunk("/getUserInfo", async () => {
//   let response = await fetch("https://randomuser.me/api/");
//   let userInfo = await response.json();
//   console.log(userInfo);
//   return userInfo;
//   //det som returneras här, kommer att bli vår action.payload
// });


const cardsSlice = createSlice({
  name: 'cards',

  // state
  initialState: {
    cards: [
      {
        firstname: 'Array',
        // name: 'Holum',
        lastname: 'Length',
        vendor: 'Visa',
        cardNr: '1233 4567 8912 0000',
        expireMonth: 4,
        expireYear: 3024,
        CCV: 123
      }
    ]
  },

  // reducers/actions
  reducers: {
    changeName: (state, action) => {
      state.cards.push(action.payload)
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

export const {changeName} = cardsSlice.actions
export default cardsSlice.reducer





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