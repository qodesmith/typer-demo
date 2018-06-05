// You may or may not need this depending on
// what JavaScript features you're using.
// Feel free to remove it and see what happens!
import '@babel/polyfill'

// Import our top-level sass file.
import './styles/styles.scss'

// Add any 3rd party css libraries (be sure to inluce & whitelist them in webpack).
import 'typer-js/typer.css'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our store provider.
import { Provider } from 'react-redux'

// Import our top-level component.
import App from 'components/App'

// Import a store, created & ready to go.
import store from './store'

// Typer demonstration modules.
import intro from 'tutorial/intro.js'


const paneCls = 'f-1-1em f-0-9em-m w-0 h-0 ph3 bg-white-20 radius-0-5 pa3 df justify-center align-items-center'

// Create the markup for Typer and our React app.
const demoPanes = `
  <div id="explanation" class="${paneCls}">
    <div class="container lh-1-3 tc"></div>
  </div>
  <div class="pa3-d pa3-t pt3"></div>
  <div id="example" class="${paneCls} mla mono">
    <div class="container lh-1-3"></div>
  </div>
`

document.body.className = 'bg-black fw1 white df flex-col align-items-center'
document.body.innerHTML = `
  <div id="typer-demo-container" class="w-100 h-100 ph8-d pv6-d pa6-t pa3 df flex-col flex-grow-1"></div>
  <div id="app" class="w-100 pb3 ph3 ph0-t"></div>
`;

// While developing, set this to true to skip the matrix demo.
// For production, ensure it is false!
const skip = !__PROD__

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
  () => intro(store.dispatch, demoPanes, skip)
)
