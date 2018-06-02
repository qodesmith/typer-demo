import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import appReducer from 'reducers/appReducer'
import itemChanger from 'middleware/itemChanger'
import togglePlay from 'middleware/togglePlay'


// Add all your custom middleware to this array.
const middlewareList = [itemChanger, togglePlay]

// Add all your reducers to this object.
const rootReducer = combineReducers({ app: appReducer })

// https://goo.gl/XRLgX8
// Using Redux DevTools extension? You should...
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create the Redux store, in all its router-ified glory!
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewareList))
)

export default store
