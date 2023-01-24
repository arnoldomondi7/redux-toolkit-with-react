import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orderIceCream, restockIceCream } from './icecreamSlice'

const IcecreamView = () => {
	//allow the user to manually restock
	const [value, setValue] = useState(1)
	//handle the dispatch hook.
	const dispatch = useDispatch()
	const numOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams)

	return (
		<div>
			<h2> Number of Icecreams - {numOfIceCreams}</h2>
			<button onClick={() => dispatch(orderIceCream())}>Order Icecreams</button>
			<input
				type='Number'
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
			<button onClick={() => dispatch(restockIceCream(value))}>
				Restock Icecreams
			</button>
		</div>
	)
}

export default IcecreamView
