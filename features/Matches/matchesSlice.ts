import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Match, Tournament, UniqueTournament } from "../../types/matcheTypes"
import { fetchMatcheThunk } from "./matcheApi"

interface InitialState {
  matches : Match[]
  loading : boolean
  uniqueTournament : UniqueTournament | null
  favoriteMatches : Match[]
}

const initialState : InitialState = {
  matches : [],
  loading : false,
  uniqueTournament : null,
  favoriteMatches : []
}

const matchesSlice = createSlice({
  name : 'matches',
  initialState,
  reducers : {
    setTournament : (state, actions : PayloadAction<UniqueTournament>) => {
      state.uniqueTournament = actions.payload
    },
    resetFilter : (state, actions : PayloadAction<null>) => {
      state.uniqueTournament = actions.payload
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
    .addCase(fetchMatcheThunk.rejected, (state, action) => {
      state.loading = false
      console.log('something wrong');
      
    })
  }
})

export const { 
  resetFilter,
  setTournament
} = matchesSlice.actions

export default matchesSlice.reducer;