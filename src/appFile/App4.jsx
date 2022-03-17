import React, { createContext, useContext, useState } from "react"

const NumContext = createContext()

function Child() {
	const xxx = useContext(NumContext)
	console.log(xxx)
	return (
		<>
			<NumContext.Consumer>
				{({ num }) => {
					return <>{num}</>
				}}
			</NumContext.Consumer>
		</>
	)
}
function Father() {
	return (
		<>
			{/* <NumContext.Provider value={789}> */}
			<Child />
			{/* </NumContext.Provider> */}
		</>
	)
}
export default function App4() {
	const [num, setNum] = useState(123)
	return (
		<>
			<NumContext.Provider value={{ num, setNum }}>
				<Father />
			</NumContext.Provider>
		</>
	)
}
