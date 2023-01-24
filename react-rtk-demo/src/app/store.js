//contains the code related to our redux store.
import { configureStore } from '@reduxjs/toolkit'

//import the reducers.
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

// //get the logger to work with async functions.
// const reduxLogger = require('redux-logger')
// //get the logger.
// const logger = reduxLogger.createLogger()

//create the store function.
const store = configureStore({
	//this is where we specify all the reducers.
	reducer: {
		cake: cakeReducer,
		iceCream: iceCreamReducer,
		user: userReducer,
	},
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})
export default store
