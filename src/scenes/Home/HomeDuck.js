import update from 'immutability-helper'
export const ADD = 'scenes/home/add'

const initialState = {
	value: []
}

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case ADD: return update(state, { value: { $push: [action.payload] }});
		default: return state
	}
}
