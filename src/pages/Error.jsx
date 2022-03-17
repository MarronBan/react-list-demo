import React from "react"
import ErrorImg from "../assets/img/404.webp"
export default function Error() {
	return (
		<div>
			<img src={ErrorImg} alt="找不到该页面" />
		</div>
	)
}
