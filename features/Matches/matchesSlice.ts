import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Match, UniqueTournament } from "../../types/matcheTypes"
import { fetchMatcheThunk } from "./matcheApi"

interface InitialState {
  matches : Match[],
  loading : boolean
}

const initialState : InitialState = {
  matches : [],
  loading : false,
}

const matchesSlice = createSlice({
  name : 'matches',
  initialState,
  reducers : {
    setMatches : (state, actions : PayloadAction<Match[]>) => {
      state.matches = actions.payload
    },
    filterByTournamentName : (state, action : PayloadAction<string>) => {
      state.matches = state.matches.filter(matche => matche.tournament.name === action.payload)
    }
  },
  extraReducers : (builder) => {
    builder.addCase(fetchMatcheThunk.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchMatcheThunk.fulfilled, (state, action) => {
      state.loading = false,
      state.matches = action.payload
    })
    .addCase(fetchMatcheThunk.rejected, (state) => {
      state.loading = false
    })
  }
})

export const {setMatches, filterByTournamentName} = matchesSlice.actions

export default matchesSlice.reducer;