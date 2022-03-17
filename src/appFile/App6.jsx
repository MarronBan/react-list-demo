import React, { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
export default function App6() {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		//执行跳转逻辑
		if (pathname === "/") {
			navigate("/home")
		}
	}, [])
	return (
		<>
			<Outlet />
		</>
	)
}
