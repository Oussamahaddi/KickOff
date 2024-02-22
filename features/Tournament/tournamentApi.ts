import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tournament, UniqueTournaments } from "../../types/matcheTypes";

export const fetchAllTournamentThunk = createAsyncThunk('tournament/fetchTournament', async () => {
  const response = await fetch("https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football")
  const tournaments : UniqueTournaments = await response.json();
  return tournaments.uniqueTournaments
})