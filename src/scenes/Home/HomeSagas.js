import { takeEvery } from 'redux-saga/effects'

import { addCounter } from './HomeDuck'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* counterAdd() {
  yield delay(1000)
  console.log('Counter was added')
}

export function* watchCounterAdd() {
  yield takeEvery(addCounter, counterAdd)
}