import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'
import { bindThunkAction } from 'typescript-fsa-redux-thunk'
import * as asyncActions from './async'

const actionCreator = actionCreatorFactory()

export const increment = actionCreator('INCREMENT')

export const asyncIncrement = bindThunkAction(
  asyncActions.asyncIncrement,
  async (_, dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment())
    }, 1000)
    return null
  }
)
