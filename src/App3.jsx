import React, { useEffect, useState } from "react"
import useApi from "./myhooks/getData"
// useEffect
export default function App3() {
	const [data] = useApi()

	return (
		<>
			<ul>
				{data.map((i) => {
					return <li key={i}>{i}</li>
				})}
			</ul>
		</>
	)
}
