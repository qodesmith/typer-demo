// Import our top-level sass file.
import './styles/styles.scss'

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


// Create the markup for Typer and our React app.
const demoCls = 'w-100 ph8 pv7 flex-grow-1 df flex-col'
const appCls = 'w-100 pa3'
const paneCls = 'bg-white-20 radius-0-5 pa3 df justify-center align-items-center'
const demoPanes = `
  <div id="explanation" class="${paneCls} flex-grow-1 mb3">
    <div class="container lh-1-3 tc"></div>
  </div>
  <div id="example" class="${paneCls} flex-grow-2 mono">
    <div class="container lh-1-3 tc"></div>
  </div>
`

document.body.className = 'bg-black fw1 white df flex-col'
document.body.innerHTML = `
  <div id="typer-demo-container" class="${demoCls}"></div>
  <div id="app" class="${appCls}"></div>
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
  () => intro(store.dispatch, demoPanes)
)
