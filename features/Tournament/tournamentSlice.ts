import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UniqueTournament } from "../../types/matcheTypes";
import { fetchAllTournamentThunk } from "./tournamentApi";

interface InitialState {
  tournaments : UniqueTournament[]
  loading : boolean
}

const initialState : InitialState = {
  tournaments : [],
  loading : false
}

const tournamentSlice = createSlice({
  name : 'tournament',
  initialState,
  reducers : {
    setTourmanet : (state, action : PayloadAction<UniqueTournament[]>) => {
      state.tournaments = action.payload
    }
  },
  extraReducers : (builder) => {
    builder.addCase(fetchAllTournamentThunk.pending, (state,action)=> {
      state.loading = true
    })
    .addCase(fetchAllTournamentThunk.fulfilled , (state, action) => {
      state.loading = false
      state.tournaments = action.payload
    })
    .addCase(fetchAllTournamentThunk.rejected, (state, action) => {
      state.loading = false
    })
  }
})

export const { setTourmanet } = tournamentSlice.actions
export default tournamentSlice.reducer