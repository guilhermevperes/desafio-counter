
import React, { useReducer, createContext } from 'react'
import { helloReducer, initialValue as helloState } from './reducers/helloRuducer'
import { themeReducer, initialValue as themeState } from './reducers/themeReducer'
import { tabReducer, initialValue as tabState } from './reducers/tabReducer'
import { counterReducer, initialValue as counterState } from './reducers/counterReducer'

export const { Context, Provider } = createDataContext()

function createDataContext () {
  const Context = createContext()

  const Provider = ({ children }) => {
    const reducersCombined = [
      { reducerName: 'hello', reducer: helloReducer, initialValue: helloState },
      { reducerName: 'theme', reducer: themeReducer, initialValue: themeState },
      { reducerName: 'tab', reducer: tabReducer, initialValue: tabState },
      { reducerName: 'counter', reducer: counterReducer, initialValue: counterState }
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
