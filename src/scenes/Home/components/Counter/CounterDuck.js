import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('scenes/home/components/counter/increment')
export const decrement = createAction('scenes/home/components/counter/decrement')

const initialState = {
	value: 0,
}

export default createReducer(initialState, builder => {
  builder
    .addCase(increment, (state, action) => { state.value += action.payload.value || 1 })
    .addCase(decrement, (staet, action) => { staet.value -= action.payload.value || 1 })
})
