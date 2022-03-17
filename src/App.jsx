import React, { useEffect } from "react"
import { Provider } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import store from "./store"
export default function App() {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		//执行跳转逻辑
		if (pathname === "/") {
			navigate("/home")
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<>
			<Provider store={store}>
				<Outlet></Outlet>
			</Provider>
		</>
	)
}
