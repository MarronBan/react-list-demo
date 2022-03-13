import React, { useState, useReducer } from "react"

export default function App2() {
	const initialText = "higher~oh~higher"
	const [text, setText] = useReducer(changeText, initialText)
	function changeText(_, value) {
		return value
	}
	return (
		<>
			<p>{text}</p>
			<input type="text" onChange={(e) => setText(e.target.value)} />
		</>
	)
}
