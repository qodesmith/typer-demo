import { menuItems } from 'utils/constants'

const initialState = {
  demoItem: null,
  index: null,
  playing: false
}

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DEMO_ITEM_CHANGE':
      return {
        ...state,
        demoItem: menuItems[action.index],
        index: action.index,
        playing: true
      }
    case 'TOGGLE_PLAY':
      console.log('TOGGLE PLAY: REDUCER')
      return { ...state, playing: action.playing }
    default:
      return state
  }
}

export default appReducer
