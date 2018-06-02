import { menuItems, menuItemDemos, killEvent } from 'utils/constants'
import { resetContainers } from 'helpers'

const itemChanger = store => next => action => {
  next(action) // Actions get passed through by default.
  if (action.type !== 'DEMO_ITEM_CHANGE') return

  // Kill all Typers on the screen.
  document.body.dispatchEvent(killEvent)

  // Clear the panes of any contents.
  resetContainers()

  // Start the demo for the particular item.
  const item = menuItems[action.index]
  const demoObj = menuItemDemos.find(({ name }) => name === item)
  demoObj.demo(store.dispatch, action.index)
}

export default itemChanger
