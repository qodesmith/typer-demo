import { menuItems } from 'utils/constants'
import typerDemo from 'tutorial/typerDemo'

const kill = new Event('killTyper')
const items = {
  typer: typerDemo
}

const itemChanger = store => next => action => {
  next(action) // Actions get passed through by default.
  if (action.type !== 'DEMO_ITEM_CHANGE') return
  return

  // Kill all Typers on the screen.
  document.body.dispatchEvent(kill)

  // Clear the panes of any contents.
  document
    .querySelectorAll('.container')
    .forEach(container => (container.innerHTML = ''))

  // Start the demo for the particular item.
  const item = menuItems[action.index]
  items[item]()
}

export default itemChanger
