import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchAllPlayersThunk } from "./playerApi"
import { Player } from "../../types/playerTypes"

interface InitialState {
  players : Player[]
  loading : boolean
  playerName : string
}

const initialState : InitialState = {
  players : [],
  loading : false,
  playerName : ''
}

const playersSlice = createSlice({
  name : 'players',
  initialState,
  reducers : {
    searchByName : (state, actions: PayloadAction<string>) => {
      state.playerName = actions.payload
    }
  },
  extraReducers : (builder) => {
    builder.addCase(fetchAllPlayersThunk.pending, (state, action) => {
      state.loading = true
    }).addCase(fetchAllPlayersThunk.fulfilled, (state, action) => {
      state.loading = false
      state.players = action.payload
    }).addCase(fetchAllPlayersThunk.rejected, (state, action) => {
      state.loading = false
      console.log((`rejected => ${action.error}`));
    })
  }
})

export const { searchByName } = playersSlice.actions;

export default playersSlice.reducer;