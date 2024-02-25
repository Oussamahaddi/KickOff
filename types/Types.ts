import { NavigatorScreenParams } from "@react-navigation/native"
import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { Match } from "./matcheTypes"
import { Player } from "./playerTypes"

export type RootStackParamListT = {
  Home : undefined
  Tab : undefined
  Favorites : undefined
  MatcheDetails : {matche : Match}
  PlayerDetails : {player : Player}
}
export type RootTabParamListT = {
  Matches : undefined
  Players : undefined
  MatcheDetails : {matche : Match}
  PlayerDetails : {player : Player}
}