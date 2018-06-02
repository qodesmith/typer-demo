import { menuItems, menuItemDemos, killEvent } from 'utils/constants'
import { resetContainers } from 'helpers'

const togglePlay = store => next => action => {
  next(action)
  if (action.type !== 'TOGGLE_PLAY') return

  const { playing, index, demoItem } = store.getState().app

  // Not playing...
  if(!store.getState().app.playing) {
    // Kill all Typers on the screen.
    document.body.dispatchEvent(killEvent)

  // Should play the current demo from the beginning...
  } else {
    // Clear the panes of any contents.
    resetContainers()

    const demoObj = menuItemDemos.find(({ name }) => name === demoItem)
    demoObj.demo(store.dispatch, index)
  }
}

export default togglePlay
