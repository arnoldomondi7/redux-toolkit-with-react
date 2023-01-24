import CakeView from './features/cake/cakeView'
import UserView from './features/user/UserView'
import IcecreamView from './features/icecream/IcecreamView'
import './App.css'

function App() {
	return (
		<div className='App'>
			<CakeView />
			<IcecreamView />
			<UserView />
		</div>
	)
}

export default App
