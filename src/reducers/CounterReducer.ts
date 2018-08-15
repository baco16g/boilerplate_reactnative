import { Actions } from '../actions/counterActions'

export interface IState {
  count: number
}

const initialState: IState = {
  count: 0
}

export default (state: IState = initialState, action: Actions) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: ++state.count
      }
    default:
      return state
  }
}
