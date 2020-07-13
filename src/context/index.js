
import React, { useReducer, createContext } from 'react'
import { helloReducer, initialValue as helloState } from './reducers/helloRuducer'
import { themeReducer, initialValue as themeState } from './reducers/themeReducer'

export const { Context, Provider } = createDataContext()

function createDataContext () {
  const Context = createContext()

  const Provider = ({ children }) => {
    const reducersCombined = [
      { reducerName: 'hello', reducer: helloReducer, initialValue: helloState },
      { reducerName: 'theme', reducer: themeReducer, initialValue: themeState }
    ]

    const reducers = reducersCombined.map(({ reducerName, reducer, initialValue }) => {
      const [state, dispatch] = useReducer(reducer, initialValue)
      return { reducerName, state, dispatch }
    })

    const contexts = convertArrayToObject(reducers, 'reducerName')

    return (
      <Context.Provider value={contexts}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}

const convertArrayToObject = (array, key) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    }
  }, initialValue)
}
