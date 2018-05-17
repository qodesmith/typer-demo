import { menuItems } from 'utils/constants'

const initialState = {
  demoItem: menuItems[6],
  index: 6,
  playing: false
}

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DEMO_ITEM_CHANGE':
      return { ...state, demoItem: menuItems[action.index], index: action.index }
    case 'TOGGLE_PLAY':
      return { ...state, playing: action.playing }
    default:
      return state
  }
}

export default appReducer
