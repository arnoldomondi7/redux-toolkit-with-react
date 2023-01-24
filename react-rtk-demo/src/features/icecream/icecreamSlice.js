import { createSlice } from '@reduxjs/toolkit'

//get the action cake function.
import { ordered as cakeOrdered } from '../cake/cakeSlice'

//create the initial reducer.
const initialState = {
	numberOfIceCreams: 20,
}

//create the slice.
const iceCreamSlice = createSlice({
	name: 'iceCream',
	initialState,
	reducers: {
		orderIceCream: state => {
			state.numberOfIceCreams--
		},
		restockIceCream: (state, action) => {
			state.numberOfIceCreams += action.payload
		},
	},

	// extraReducers: {
	// 	['cake/ordered']: state => {
	// 		state.numberOfIceCreams--
	// 	},
	// },

	extraReducers: builder => {
		builder.addCase(cakeOrdered, state => {
			state.numberOfIceCreams--
		})
	},
})

//export the data to the store.
export default iceCreamSlice.reducer

//goes to the undex page actions = index page
export const { orderIceCream, restockIceCream } = iceCreamSlice.actions
