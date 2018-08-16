import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const asyncIncrement = actionCreator.async<null, null>('ASYNC_INCREMENT')
