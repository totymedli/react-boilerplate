import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('scenes/home/components/counter/increment')
export const decrement = createAction('scenes/home/components/counter/decrement')

const initialState = {
	value: 0,
}
export default createReducer(initialState, {
  [increment]: s => { ++s.value },
  [decrement]: s => { --s.value },
})
