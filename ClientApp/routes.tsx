import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import About from './components/About';
import Noticias from './components/Noticias';
import Eventos from './components/Eventos';
import Login from './components/Login';

export default
	<Route component={Layout}>
		<Route path='/' components={{ body: Home }} />
		<Route path='/counter' components={{ body: Counter }} />
		<Route path='/fetchdata' components={{ body: FetchData }}>
			<Route path='(:startDateIndex)' /> { /* Optional route segment that does not affect NavMenu highlighting */}
		</Route>
		<Route path='/acercade' components={{ body: About }} />
		<Route path='/noticias' components={{ body: Noticias }} />
		<Route path='/eventos' components={{ body: Eventos }} />
		<Route path='/login' components={{ body: Login }} />
		<Route path='/publicacion/:titulo' components={{ body: Login }} />
		<Route path='/evento/:id' components={{ body: Login }} />
	</Route>;

// Enable Hot Module Replacement (HMR)
if (module.hot) {
	module.hot.accept();
}