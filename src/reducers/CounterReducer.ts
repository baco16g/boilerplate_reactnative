import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/counter'

export interface IState {
  count: number
}

const initialState: IState = {
  count: 0
}

export default reducerWithInitialState(initialState).case(
  actions.increment,
  state => ({ ...state, count: ++state.count })
)
