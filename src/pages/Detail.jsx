import React from "react"
import { connect } from "react-redux"
import { Link, useParams } from "react-router-dom"

function Detail(props) {
	const { id } = useParams()
	const [item] = props.goods.filter((i) => i.id === Number(id))
	return item ? (
		<div>
			<p>商品名称：{item.name}</p>
			<p>商品单价：{item.price}</p>
			<p>商品详情：{item.desc}</p>
			<Link to="/home">Back to Home</Link>
		</div>
	) : (
		<div>
			<p>该商品已下架</p>
			<Link to="/home">Back to Home</Link>
		</div>
	)
}
const storeState = (state) => {
	return {
		goods: state.goods,
	}
}

export default connect(storeState)(Detail)
