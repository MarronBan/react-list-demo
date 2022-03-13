//class的写法
import React, { /* Component,  */ useState } from "react"
/* class Child extends Component {
	render() {
		return (
			<>
				<h2>This is a {this.props.title} Class Component</h2>
				<p>第{this.props.times}次改变</p>
			</>
		)
	}
} */
/* class App extends Component {
	state = {
		title: "Child",
		text: "",
		times: 0,
	}
	setTitle(times) {
		const { title, text } = this.state
		//console.log("this", this) //bind的话，就是app，没bind就是undifined
		if (title === "Child" || text !== "") {
			this.setState({ title: "hahaha " + text })
		} else {
			this.setState({ title: "Child" })
		}
		this.setText("")
		this.setTimes(times)
	}
	setText(text) {
		this.setState({ text })
	}
	setTimes(addNum) {
		const times = this.state.times + addNum
		this.setState({ times })
		console.log(this.state.times)
	}
	render() {
		const { title, text, times } = this.state
		return (
			<>
				<h1>This is a Class Component</h1>
				<Child title={title} times={times} />
				{/* 	<button
					onClick={() => {
						this.setState({ title: "hahaha" }) //内容直接在JSX执行
					}}
				>
					setTitle
				</button> */ /*}
				<input
					type="text"
					value={text}
					onChange={(e) => {
						this.setText(e.target.value) //内容为调用函数，不需要绑定this
					}}
				/>
				<button
					onClick={
						//需要绑定this
						this.setTitle.bind(this, 1)
					}
				>
					setTitle
				</button>
			</>
		)
	}
} */

function Child(props) {
	return (
		<>
			<h2>This is a {props.title} Class Component</h2>
			<p>第{props.times}次改变</p>
		</>
	)
}
function App() {
	const [title, setTitle] = useState("Child")
	const [text, setText] = useState("")
	const [times, setTimes] = useState(0)

	function changeTitle(addNum) {
		if (title === "Child" || text !== "") {
			setTitle("hahaha " + text)
		} else {
			setTitle("Child")
		}
		setTimes(times + addNum)
		setText("")
	}
	return (
		<>
			<h1>This is a Class Component</h1>
			<Child title={title} times={times} />
			<input
				type="text"
				value={text}
				onChange={(e) => {
					setText(e.target.value)
				}}
			/>
			<button
				onClick={() => {
					changeTitle(1)
				}}
			>
				setTitle
			</button>
		</>
	)
}

export default App
