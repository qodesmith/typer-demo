import { menuItems } from 'utils/constants'

const initialState = {
  demoItem: menuItems[0],
  playing: false
}

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DEMO_ITEM_CHANGE':
      return { ...state, demoItem: menuItems[action.index] }
    default:
      return state
  }
}

export default appReducer
