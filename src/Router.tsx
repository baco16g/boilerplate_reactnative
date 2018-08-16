import * as React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Counter from './containers/Counter'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="counter" component={Counter} title="Counter" initial />
      </Scene>
    </Router>
  )
}

export default RouterComponent
