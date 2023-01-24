import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
	//create the useDispatch hook.
	//recall the purpose of the dispatch is to dispatch the actions.
	// for you to dispatch actions you need the action creators. from the slice
	const dispatch = useDispatch()
	//call the state from the useSelector.
	const numOfCakes = useSelector(state => state.cake.numberOfCakes)

	return (
		<div>
			<h2> Number of Cakes - {numOfCakes} </h2>
			<button onClick={() => dispatch(ordered())}>Order Cakes</button>
			<button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
		</div>
	)
}

export default CakeView
