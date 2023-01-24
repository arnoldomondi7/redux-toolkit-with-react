import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	loading: false,
	users: [],
	error: '',
}

//invoke the asyncthunk function.
//basically fetching the users.
//will generate a promise (pending, fullfilled or rejected).
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
	return axios
		.get('https://jsonplaceholder.typicode.com/users')
		.then(response => response.data)
})

export const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		//add the different cases.
		builder.addCase(fetchUsers.pending, state => {
			state.loading = true
		}),
			builder.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false
				state.users = action.payload
				state.error = ''
			}),
			builder.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false
				state.users = []
				state.error = action.error.message
			})
	},
})

//export the reducer and the async function.
export default userSlice.reducer
