import './styles/index.scss';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login';
import { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Map from './pages/Map';

function App() {
	const [isLogin, setIsLogin] = useLocalStorage('isLogin', null);

	useEffect(() => {
		if (!isLogin) {
			<Redirect
				to={{
					pathname: '/login',
				}}
			/>;
		}
		return () => {};
	}, [isLogin]);

	return (
		<div className='App'>
			<Switch>
				<Route
					path='/login'
					exact
					render={(props) => <Login setIsLogin={setIsLogin} {...props} />}
				/>
				<Redirect from='/' to='/login' exact />
				<Route
					path='/map'
					exact
					render={(props) => <Map isLogin={isLogin} {...props} />}
				/>
			</Switch>
		</div>
	);
}

export default App;
