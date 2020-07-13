
import { HELLO } from '../../utils/Enum'

const initialValue = {
  helloMessage: HELLO.HELLO_MESSAGE
}

function helloReducer (state, action) {
  switch (action.type) {
    default:
      throw new Error()
  }
}

export { helloReducer, initialValue }
