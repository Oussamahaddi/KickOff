
export type RootStackParamListT = {
  Home : undefined
}

export type InitialStateT = {
}

export type ActionType<T, P> = {
  type : T
  payload : P
}

export type ActionTypesT = ActionType<"" | "", undefined> 
  | ActionType<"" | '', unknown>