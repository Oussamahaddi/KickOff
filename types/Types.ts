import { NavigatorScreenParams } from "@react-navigation/native"
import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"

export type RootStackParamListT = {
  Home : undefined
  Tab : undefined
  Favorites : undefined
}
export type RootTabParamListT = {
  Matches : undefined
  Players : undefined
}