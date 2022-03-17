import { createStore } from "redux"

const defaultState = {
	num: 1,
	car: [
		{
			id: 1,
			name: "商品1",
			price: 10,
			count: 2,
		},
		{
			id: 2,
			name: "商品2",
			price: 5,
			count: 1,
		},
		{
			id: 3,
			name: "商品3",
			price: 15,
			count: 3,
		},
	],
	goods: [
		{
			id: 1,
			name: "商品1",
			price: 10,
			desc: "我是商品1的描述哈哈哈",
		},
		{
			id: 2,
			name: "商品2",
			price: 5,
			desc: "我是商品2的描述哈哈哈",
		},
	],
}

const reducer = (state = defaultState, action) => {
	let newState = JSON.parse(JSON.stringify(state))
	/* 	if (action.type === "addNum") {
		newState.num++
	} */
	const { type } = action
	switch (type) {
		case "addNum": {
			newState.num++
			break
		}
		case "deleteItem": {
			newState.car = newState.car.filter((i) => i.id !== action.id)
			break
		}
		default:
			break
	}
	return newState
}

const store = createStore(reducer)

export default store
