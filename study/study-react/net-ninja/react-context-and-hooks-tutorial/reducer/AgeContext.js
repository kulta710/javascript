import react, { createContext, useState, useReducer } from 'react'

export const AgeContext = createContext()

const ageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1
    case 'ADD_FIVE':
      return state + 5
    case 'ADD_NUM':
      return state + action.num
    default:
      return state
  }
}

dispatch({ type: 'ADD_ONE' })
dispatch({ type: 'ADD_NUM', num: 7 })

const AgeContextProvider = (props) => {

  const [age, dispatch] = useReducer(ageReducer, 20)

  return (
    <AgeContext.Provider value={{age, dispatch}}>
      {props.children}
    </AgeContext.Provider>
  )
}

export default AgeContextProvider