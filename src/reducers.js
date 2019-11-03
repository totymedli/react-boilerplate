import { combineReducers } from 'redux'

import { default as home } from 'scenes/Home/HomeDuck'

const appReducer = combineReducers({
  home,
})

const rootReducer = (state, action) => {
  if (action.type === 'GLOBAL_RESET') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
