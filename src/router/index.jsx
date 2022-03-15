import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App6"
import Detail from "../pages/Detail"
import Home from "../pages/Home"
import List from "../pages/List"
import Error from "../pages/Error"
const BaseRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/home" element={<Home />}></Route>
				</Route>
				<Route path="/list" element={<List />}></Route>
				<Route path="/detail/:id" element={<Detail />}></Route>
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default BaseRouter
