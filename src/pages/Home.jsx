import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
	const navigate = useNavigate()
	const changeRouter = (name) => {
		if (name === "list") {
			navigate("/list", { state: { id: 123 } })
		} else navigate("/detail/456")
	}
	return (
		<>
			<p>Home</p>
			<button onClick={() => changeRouter("list")}>to List</button>
			<button onClick={() => changeRouter("detail")}>to Detail</button>
		</>
	)
}
