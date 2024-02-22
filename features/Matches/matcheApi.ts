import { createAsyncThunk } from "@reduxjs/toolkit";
import { SofascoreResponse } from "../../types/matcheTypes";

export const fetchMatcheThunk = createAsyncThunk('matches/fetchMatches', async () => {
  const response = await fetch("https://api.sofascore.com/api/v1/sport/football/scheduled-events/2024-02-22")
  const matches : SofascoreResponse = await response.json();
  return matches.events;
})