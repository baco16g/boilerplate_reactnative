import * as React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, Store } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'
import { Header, Card, CardSection } from './components/common'
import Counter from './containers/Counter'

function configureStore(initialState: object = {}, middlewares: [any]): Store {
  const middleware = applyMiddleware(...middlewares)
  return createStore(rootReducer, initialState!, middleware)
}

const store = configureStore(undefined, [ReduxThunk])

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerText="Counter App" />
        <Card>
          <CardSection>
            <Counter />
          </CardSection>
        </Card>
      </View>
    </Provider>
  )
}

export default App
