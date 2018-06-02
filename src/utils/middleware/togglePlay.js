import { killEvent } from 'utils/constants'

const togglePlay = store => next => action => {
  next(action)
  if (action.type !== 'TOGGLE_PLAY') return

  if(!store.getState().app.playing) {
    // Kill all Typers on the screen.
    document.body.dispatchEvent(killEvent)
  }
}

export default togglePlay
