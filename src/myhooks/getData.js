import React, { useEffect, useState } from "react"
const getData = () => {
	return new Promise((res) => {
		setTimeout(() => {
			res([4, 5, 6])
		}, 1000)
	})
}
const useApi = () => {
	const [data, setData] = useState([1, 2, 3])
	useEffect(() => {
		getData().then((data) => {
			setData(data)
		})
	}, [])
	return [data]
}

export default useApi
