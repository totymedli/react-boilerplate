import { createAction, createReducer } from '@reduxjs/toolkit'
import update from 'immutability-helper'

import counterReducer, { increment, decrement} from './components/Counter/CounterDuck'

export const toggleEditing = createAction('scenes/home/toggle-editing')
export const addCounter = createAction('scenes/home/add-counter')
export const removeCounter = createAction('scenes/home/remove-counter')

const initialState = {
  isEditing: false,
  counters: [],
}

export default createReducer(initialState, builder => {
  builder
    .addCase(toggleEditing, state => update(state, { isEditing: { $set: !state.isEditing }}))
    .addCase(addCounter, state => {
      state.counters.push(counterReducer(undefined, {}))
    })
    .addCase(removeCounter, (state, action) => {
      state.counters = state.counters.filter((counter, key) => key != action.payload.id)
    })
    .addCase(increment, (state, action) => {
      state.counters[action.payload.id] = counterReducer(state.counters[action.payload.id], increment(action.payload))
    })
    .addCase(decrement, (state, action) => {
      state.counters[action.payload.id] = counterReducer(state.counters[action.payload.id], decrement(action.payload))
    })
})
