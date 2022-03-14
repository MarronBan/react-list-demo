import React from "react"
import { connect } from "react-redux"

function App5(props) {
	return (
		<>
			<div>num:{props.num}</div>
			<button
				onClick={() => {
					props.addNum()
				}}
			>
				+1
			</button>
		</>
	)
}

const storeState = (state) => {
	return {
		num: state.num,
	}
}
const dispatchStore = (dispatch) => {
	return {
		addNum() {
			let action = { type: "addNum" }
			dispatch(action)
		},
	}
}
export default connect(storeState, dispatchStore)(App5)
