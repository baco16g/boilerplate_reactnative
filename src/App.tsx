import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, Store } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'
import Router from './Router'

function configureStore(initialState: object = {}, middlewares: [any]): Store {
  const middleware = applyMiddleware(...middlewares)
  return createStore(rootReducer, initialState!, middleware)
}

const store = configureStore(undefined, [ReduxThunk])

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
