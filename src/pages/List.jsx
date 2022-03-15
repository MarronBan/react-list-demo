import React from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"

export default function List() {
	/* const [searchParams] = useSearchParams()
	console.log(searchParams.get("id")) */
	const { state } = useLocation()
	console.log(state.id)
	return (
		<>
			<div>List</div>
			<Link to="/home">Back to Home</Link>
		</>
	)
}
