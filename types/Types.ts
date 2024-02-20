import { NavigatorScreenParams } from "@react-navigation/native"

export type RootStackParamListT = {
  Home : undefined
  Tab : undefined
  Favorites : undefined
}
export type RootTabParamListT = {
  Matches : undefined
  Players : undefined
}

export type InitialStateT = {
}

export type ActionType<T, P> = {
  type : T
  payload : P
}

export type ActionTypesT = ActionType<"" | "", undefined> 
  | ActionType<"" | '', unknown>