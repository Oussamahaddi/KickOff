import { NavigatorScreenParams } from "@react-navigation/native"

export type RootStackParamListT = {
  Home : undefined
  Tab : NavigatorScreenParams<RootTabParamListT>
}
export type RootDrawerParamListT = {
  Matches : undefined
}
export type RootTabParamListT = {
  Draw : NavigatorScreenParams<RootDrawerParamListT>
  Favorite : undefined
}

export type InitialStateT = {
}

export type ActionType<T, P> = {
  type : T
  payload : P
}

export type ActionTypesT = ActionType<"" | "", undefined> 
  | ActionType<"" | '', unknown>