const initialState = {
  demoItem: 'Matrix'
}

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DEMO_ITEM_CHANGE':
      return { ...state, demoItem: action.demoItem }
    default:
      return state
  }
}

export default appReducer
