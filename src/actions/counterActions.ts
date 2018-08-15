import { $Call } from 'utility-types'

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export type Actions = $Call<typeof increment>
