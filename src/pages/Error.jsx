import React from "react"
import ErrorImg from "../img/404.webp"
export default function () {
	return (
		<div>
			<img src={ErrorImg} alt="找不到该页面" />
		</div>
	)
}
