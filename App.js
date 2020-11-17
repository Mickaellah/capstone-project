import React from 'react';

import {
	BrowserRouter as Router,
    Switch,
	Route,
	Link
} from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';



function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Photos />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
