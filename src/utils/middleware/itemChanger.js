const kill = new Event('killTyper')

const itemChanger = store => next => action => {
  next(action) // Actions get passed through by default.
  if (action.type !== 'DEMO_ITEM_CHANGE') return

  // Kill all Typers on the screen.
  document.body.dispatchEvent(kill)

  // Clear the panes of any contents.
  document
    .querySelectorAll('.container')
    .forEach(container => (container.innerHTML = ''))

  // Get the starter content (if any) and put that in each pane.
}

export default itemChanger
