import { combineReducers } from 'redux'
import CounterReducer, { IState as CounterState } from './CounterReducer'

export default combineReducers({
  counter: CounterReducer
})

export interface IRootState {
  counter: CounterState
}
