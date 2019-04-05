import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import appStore from './store';
import 'bootstrap/dist/css/bootstrap.css';

import './css/main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import GithubData from './containers/GithubData';
import Login from './pages/Login';
ReactDOM.render(
	<Provider store={appStore}>
		<Router>
			<div>
			  <Route exact path="/" component={Login} />
			  <Route path="/login" component={Login} />
		      <Route path="/dashboard" component={GithubData} />
		    </div> 
	    </Router>
	</Provider>
	, document.getElementById('root')
);
