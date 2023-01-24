const { createSlice } = require('@reduxjs/toolkit')

//get the action cake function.
const { cakeActions } = require('../cake/cakeSlice')

//create the initial reducer.
const initialState = {
	numberOfIceCreams: 20,
}

//create the slice.
const iceCreamSlice = createSlice({
	name: 'IceCream',
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
		builder.addCase(cakeActions.ordered, state => {
			state.numberOfIceCreams--
		})
	},
})

//export the data to the store.
module.exports = iceCreamSlice.reducer

//goes to the undex page actions = index page
module.exports.iceCreamActions = iceCreamSlice.actions
