import React from 'react'

function Things() {
	return (
		<div>
			<h1 className="true">My Strawhat</h1>
			<h1 className="true">Gum Gum Fruit</h1>
			<h1 className="false">The Red Vest</h1>
		</div>
	)
}
function Notonhand(props) {
	const isThings = props.isThings
	if (isThings) {
		return <Things />
	}
	return (
		<div>
			<h1>My Strawhat</h1>
			<h1>Gum Gum Fruit</h1>
			<h1>The Red Vest</h1>
		</div>
	)
}

export default function App() {
	return (
		<div>
			<Notonhand isThings={true} />
		</div>
	)
}
