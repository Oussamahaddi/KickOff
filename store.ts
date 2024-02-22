import { Tuple, configureStore } from "@reduxjs/toolkit";
import matchesSlice from "./features/Matches/matchesSlice";
import playersSlice from "./features/Players/playersSlice";
import tournamentSlice from "./features/Tournament/tournamentSlice";
import { thunk } from "redux-thunk";

const middleware = [thunk];



export const store = configureStore({
  reducer : {
    matches : matchesSlice,
    players : playersSlice,
    tournaments : tournamentSlice,
  },
  middleware: () => new Tuple(thunk)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store


