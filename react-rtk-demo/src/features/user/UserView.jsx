import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
	//handle the dispatch hook.
	const dispatch = useDispatch()
	//handle the useselect hook.
	const user = useSelector(state => state.user)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])
	return (
		<div>
			<h2>List Of users</h2>
			{/* handle the loading. */}

			{user.loading && <h3>Working On It...</h3>}

			{/* handle the  error part */}

			{!user.loading && user.error ? <h4>Error: {user.error}</h4> : null}

			{/* show data on the user interface */}

			{!user.loading && user.users.length ? (
				<ul>
					{user.users.map((user, i) => (
						<li key={i}>{user.name}</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default UserView
