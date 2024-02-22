import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
  players : []
}

const initialState : InitialState = {
  players : []
}

const playersSlice = createSlice({
  name : 'players',
  initialState,
  reducers : {
    fetchAllPlayers : () => {
      console.log("player reducer")
    }
  }
})

export const {fetchAllPlayers} = playersSlice.actions;

export default playersSlice.reducer;