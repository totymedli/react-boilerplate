import { all } from 'redux-saga/effects'

import { watchCounterAdd } from 'scenes/Home/HomeSagas'

export default function* rootSaga() {
  yield all([
    watchCounterAdd(),
  ])
}