import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Match, UniqueTournament } from "../../types/matcheTypes"
import { fetchMatcheThunk } from "./matcheApi"

interface InitialState {
  matches : Match[]
  matchesContainer : Match[]
  loading : boolean
}

const initialState : InitialState = {
  matches : [],
  loading : false,
  matchesContainer : []
}

const matchesSlice = createSlice({
  name : 'matches',
  initialState,
  reducers : {
    setMatches : (state, actions : PayloadAction<Match[]>) => {
      state.matches = actions.payload
    },
    filterByTournamentName : (state, action : PayloadAction<string>) => {
        state.matches = state.matchesContainer.filter((matche) => matche.tournament.name.includes(action.payload))
    }
  },
  extraReducers : (builder) => {
    builder.addCase(fetchMatcheThunk.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchMatcheThunk.fulfilled, (state, action) => {
      state.loading = false,
      state.matches = action.payload
      state.matchesContainer = action.payload
    })
    .addCase(fetchMatcheThunk.rejected, (state, action) => {
      state.loading = false
    })
  }
})

export const {setMatches, filterByTournamentName} = matchesSlice.actions

export default matchesSlice.reducer;