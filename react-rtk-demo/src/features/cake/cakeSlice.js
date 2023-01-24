import { createSlice } from '@reduxjs/toolkit'

//create the inital state.
const initialState = {
	numberOfCakes: 10,
}

//create the slice.(reducer)
const cakeSlice = createSlice({
	name: 'cake',
	initialState,
	reducers: {
		ordered: state => {
			state.numberOfCakes--
		},
		restocked: (state, action) => {
			state.numberOfCakes += action.payload
		},
	},
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
