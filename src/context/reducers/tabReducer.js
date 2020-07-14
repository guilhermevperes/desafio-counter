
import { CONTEXT } from '../../utils/Enum'

const initialValue = {
  listIconColor: '',
  configIconColor: '',
  headerTitle: ''
}

function tabReducer (state, action) {
  switch (action.type) {
    case CONTEXT.TAB.SET_LIST_ICON_COLOR:
      return { ...state, listIconColor: action.payload.color }
    case CONTEXT.TAB.SET_CONFIG_ICON_COLOR:
      return { ...state, configIconColor: action.payload.color }
    case CONTEXT.TAB.SET_HEADER_TITLE:
      return { ...state, headerTitle: action.payload.title }
    default:
      throw new Error()
  }
}

export { tabReducer, initialValue }
