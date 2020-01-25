import { createAction, createReducer } from '@reduxjs/toolkit'
import update from 'immutability-helper'

import counterReducer, { increment, decrement} from './components/Counter/CounterDuck'

export const toggleEditing = createAction('scenes/home/toggle-editing')
export const addCounter = createAction('scenes/home/add-counter')

const initialState = {
  isEditing: false,
  counters: [],
}

export default createReducer(initialState, {
  [toggleEditing]: s => update(s, { isEditing: { $set: !s.isEditing }}),
  [addCounter]: s => {
    s.counters.push(counterReducer(undefined, {}))
  },
  [increment]: (s, a) => {
    s.counters[a.payload] = counterReducer(s.counters[a.payload], increment)
  },
  [decrement]: (s, a) => {
    s.counters[a.payload] = counterReducer(s.counters[a.payload], decrement)
  },
})
