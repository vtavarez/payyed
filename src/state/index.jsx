import React, { useReducer } from "react"
import axios from "axios"

export const State = React.createContext()
const initialState = { authenticated: true, user: {}}

const reducer = (state, action) => {
	switch (action.type) {
	case "LOGGED_IN":
    return { ...state, authenticated: true, user: { ...action.payload } }
  case "SIGNED_OUT":
    return { ...state, authenticated: false, user: {} }
	default:
		return state
	}
}

export function Provider({ children }){
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <State.Provider value={value}>
      { children }
    </State.Provider>
  )
}