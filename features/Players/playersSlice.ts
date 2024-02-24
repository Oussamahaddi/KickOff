import { createSlice } from "@reduxjs/toolkit"
import { fetchAllPlayersThunk } from "./playerApi"
import { Player } from "../../types/playerTypes"

interface InitialState {
  players : Player[]
  loading : boolean
}

const initialState : InitialState = {
  players : [],
  loading : false
}

const playersSlice = createSlice({
  name : 'players',
  initialState,
  reducers : {

  },
  extraReducers : (builder) => {
    builder.addCase(fetchAllPlayersThunk.pending, (state, action) => {
      state.loading = true
    }).addCase(fetchAllPlayersThunk.fulfilled, (state, action) => {
      console.log('accepted');
      state.loading = false
      state.players = action.payload
    }).addCase(fetchAllPlayersThunk.rejected, (state, action) => {
      state.loading = false
      console.log((`rejected => ${action.error}`));
    })
  }
})

export const {  } = playersSlice.actions;

export default playersSlice.reducer;