import React from "react"
import List from "./List"
import { Provider } from "react-redux"
import store from "../store"
import "../assets/css/home.css"
export default function Home() {
	return (
		<>
			<p>Home</p>
			<p>List:</p>
			<Provider store={store}>
				<List />
			</Provider>
		</>
	)
}
