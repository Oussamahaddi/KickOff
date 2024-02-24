import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlayersResponse } from "../../types/playerTypes";


export const fetchAllPlayersThunk = createAsyncThunk("players/fetchPlayers", async () => {
  const response = await fetch("https://www.footballtransfers.com/en/players/actions/overview/overview");
  const players : PlayersResponse = await response.json();
  return players.records;
})