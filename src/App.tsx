import * as React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import rootReducer from './reducers'
import { Header, Card, CardSection } from './components/common'
import Counter from './containers/Counter'

function configureStore(initialState?: object): Store {
  return createStore(rootReducer, initialState!)
}

const store = configureStore()

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
