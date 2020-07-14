import { CONTEXT } from '../../utils/Enum'

const initialValue = {
  counters: [
    { index: 0, name: 'Contador 1', currentValue: 0, selected: true },
    { index: 1, name: 'Contador 2', currentValue: 0, selected: false },
    { index: 2, name: 'Contador 3', currentValue: 0, selected: false },
    { index: 3, name: 'Contador 4', currentValue: 0, selected: false },
    { index: 4, name: 'Contador 5', currentValue: 0, selected: false },
    { index: 5, name: 'Contador 6', currentValue: 0, selected: false },
    { index: 6, name: 'Contador 7', currentValue: 0, selected: false }
  ]
}

function counterReducer (state, action) {
  let index = null
  switch (action.type) {
    case CONTEXT.COUNTER.INCREMENT:
      index = action.payload.index
      state.counters[index].currentValue++
      return { ...state }
    case CONTEXT.COUNTER.DECREMENT:
      index = action.payload.index
      index = action.payload.index
      state.counters[index].currentValue--
      return { ...state }
    default:
      throw new Error()
  }
}

export { counterReducer, initialValue }
