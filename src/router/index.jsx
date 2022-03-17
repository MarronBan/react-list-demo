import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import Error from "../pages/Error"
const BaseRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/detail/:id" element={<Detail />}></Route>
				</Route>
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default BaseRouter
