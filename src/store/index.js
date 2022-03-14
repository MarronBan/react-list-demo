import { createStore } from "redux"

const defaultState = {
	num: 1,
}

const reducer = (state = defaultState, action) => {
	let newState = JSON.parse(JSON.stringify(state))
	if (action.type === "addNum") {
		newState.num++
	}
	return newState
}

const store = createStore(reducer)

export default store
