import { ActionTypesT, InitialStateT } from "../types/Types"


const initialState : InitialStateT = {
}

export const reducer = (state = initialState, action : ActionTypesT) => {
  switch (action.type) {
    case '':
      return {
      }
    default:
      return state
  }
}
