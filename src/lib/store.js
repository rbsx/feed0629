import { createStore, combineReducers, applyMiddleware } from 'redux'
import update from 'immutability-helper'
import thunk from 'redux-thunk'

let initialState = {
  byId: {},
  isPaused: false,
}

function tweets(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TWEETS':
      return update(state, {
        byId: { $merge: action.payload },
      })
    case 'TOGGLE_PAUSE':
      return update(state, {
        isPaused: { $set: !state.isPaused },
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({ tweets })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
