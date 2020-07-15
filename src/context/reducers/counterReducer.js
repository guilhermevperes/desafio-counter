import { CONTEXT } from '../../utils/Enum'

const initialValue = {
  counters: [
    // { index: 0, name: 'Contador 1', currentValue: 0, maxValue: 10, minValue: -3, selected: true },
    // { index: 1, name: 'Contador 2', currentValue: 0, maxValue: 10, minValue: -3, selected: false }
  ],
  selectedCounter: 0
}

function counterReducer (state, action) {
  let index = null
  let minValue = null
  let maxValue = null
  let currentValue = null
  let counters = null
  const counter = {}
  switch (action.type) {
    case CONTEXT.COUNTER.INCREMENT:
      index = action.payload.index
      minValue = state.counters[index].minValue
      maxValue = state.counters[index].maxValue
      currentValue = state.counters[index].currentValue
      if (currentValue < maxValue) {
        state.counters[index].currentValue++
      }
      return { ...state }
    case CONTEXT.COUNTER.DECREMENT:
      index = action.payload.index
      minValue = state.counters[index].minValue
      maxValue = state.counters[index].maxValue
      currentValue = state.counters[index].currentValue
      if (currentValue > minValue) {
        state.counters[index].currentValue--
      }
      return { ...state }
    case CONTEXT.COUNTER.SET_SELECTED_COUNTER:
      return { ...state, selectedCounter: action.payload.index }
    case CONTEXT.COUNTER.SET_MAX_VALUE:
      index = action.payload.index
      state.counters[index].maxValue = action.payload.value
      return { ...state }
    case CONTEXT.COUNTER.SET_MIN_VALUE:
      index = action.payload.index
      state.counters[index].minValue = action.payload.value
      return { ...state }
    case CONTEXT.COUNTER.UPDATE_COUNTER:
      index = action.payload.index
      state.counters[index].name = action.payload.name
      state.counters[index].currentValue = action.payload.currentValue
      state.counters[index].maxValue = action.payload.maxValue
      state.counters[index].minValue = action.payload.minValue
      return { ...state }
    case CONTEXT.COUNTER.REMOVE_COUNTER:
      index = action.payload.index
      counters = state.counters.filter(counter => counter.index !== index)
      if (counters.length > 0) {
        counters = counters.map((counter, index) => {
          return { ...counter, index }
        })
        state.counters = counters
        state.selectedCounter = counters[0].index
      } else {
        state.counters = []
        state.selectedCounter = null
      }
      return { ...state }
    case CONTEXT.COUNTER.ADD_COUNTER:
      counter.index = state.counters.length
      counter.minValue = action.payload.minValue
      counter.maxValue = action.payload.maxValue
      counter.name = action.payload.name
      counter.selected = state.counters.length === 0
      counter.currentValue = 0
      state.counters.push(counter)
      return { ...state, selectedCounter: index }
    case CONTEXT.COUNTER.RESET_COUNTER:
      index = action.payload.index
      state.counters[index].currentValue = 0
      state.counters[index].maxValue = 0
      state.counters[index].minValue = 0
      return { ...state }
    default:
      throw new Error()
  }
}

export { counterReducer, initialValue }
