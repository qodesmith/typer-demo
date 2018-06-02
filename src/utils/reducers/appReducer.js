import { menuItems } from 'utils/constants'

const initialState = {
  showControls: false,
  controlsEnabled: false,
  demoItem: null,
  index: null,
  playing: false
}

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SHOW_CONTROLS':
      return { ...state, showControls: true }
    case 'ENABLE_CONTROLS':
      return { ...state, controlsEnabled: true }
    case 'DEMO_ITEM_CHANGE':
      return {
        ...state,
        demoItem: menuItems[action.index],
        index: action.index,
        playing: true
      }
    case 'TOGGLE_PLAY':
      return { ...state, playing: !state.playing }
    default:
      return state
  }
}

export default appReducer
