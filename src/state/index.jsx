import React, { useReducer } from "react"
import axios from "axios"

export const State = React.createContext()
const initialState = { authenticated: false, user: {} }

const reducer = (state, action) => {
	switch (action.type) {
	case "FETCHED_USER":
		return { ...state, authenticated: true, user: { ...action.payload } }
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