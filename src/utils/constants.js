import typerDemo from 'tutorial/typerDemo'
import cursorDemo from 'tutorial/cursorDemo'
import lineDemo from 'tutorial/lineDemo'
import backDemo from 'tutorial/backDemo'
import continueDemo from 'tutorial/continueDemo'
import pauseDemo from 'tutorial/pauseDemo'
import emitDemo from 'tutorial/emitDemo'
import listenDemo from 'tutorial/listenDemo'
import emptyDemo from 'tutorial/emptyDemo'
import runDemo from 'tutorial/runDemo'
import endDemo from 'tutorial/endDemo'


export const menuItemDemos = [
  { name: 'typer', demo: typerDemo },
  { name: 'cursor', demo: cursorDemo },
  { name: 'line', demo: lineDemo },
  { name: 'back', demo: backDemo },
  { name: 'continue', demo: continueDemo },
  { name: 'pause', demo: pauseDemo },
  { name: 'emit', demo: emitDemo },
  { name: 'listen', demo: listenDemo },
  { name: 'empty', demo: emptyDemo },
  { name: 'run', demo: runDemo },
  { name: 'end', demo: endDemo }
]

export const menuItems = menuItemDemos.map(({ name }) => name)

export const killEvent = new Event('killTyper')
