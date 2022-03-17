import { Button } from "@mui/material"
import React from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { MyLi } from "../assets/css/list"

function List(props) {
	const navigate = useNavigate()
	const toDetail = (id) => {
		navigate(`/detail/${id}`)
	}
	const handleDelete = (id) => {
		props.deleteItem(id)
	}
	return (
		<>
			<ul>
				{props.car.map((i) => {
					return (
						<MyLi key={i.id} className="item">
							<div className="item-info">
								<p className="title">商品名称：{i.name}</p>
								<p className="price">商品单价：{i.price}</p>
								<p className="nums">商品数量：{i.count}</p>
								<p className="totle">
									商品总价：￥{i.count * i.price}
								</p>
							</div>
							<div className="item-tools">
								<Button
									onClick={() => {
										toDetail(i.id)
									}}
								>
									查看
								</Button>
								<Button
									onClick={() => {
										handleDelete(i.id)
									}}
								>
									删除
								</Button>
							</div>
						</MyLi>
					)
				})}
			</ul>
		</>
	)
}
const storeState = (state) => {
	return {
		car: state.car,
	}
}
const dispatchStore = (dispatch) => {
	return {
		deleteItem(id) {
			let action = { type: "deleteItem", id }
			dispatch(action)
		},
	}
}
export default connect(storeState, dispatchStore)(List)
