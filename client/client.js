import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import appStore from './store';
import 'bootstrap/dist/css/bootstrap.css';

import './css/main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './containers/Login';
import Home from './containers/Home';
import People from './containers/People';
import Quality from './containers/Quality';
import Velocity from './containers/Velocity';
import Cost from './containers/Cost';
import ShiftManager from './containers/ShiftManager';

import OhtAnother from './containers/oht/Another';
//import Home from './oht/containers/Home';
import OhtQuality from './containers/oht/Quality';

import OhtPeople from './containers/oht/People';
import OhtVelocity from './containers/oht/Velocity';
import OhtCost from './containers/oht/Cost';
//import OhtSideNav_ from './containers/oht/SideNav_';

ReactDOM.render(
	<Provider store={appStore}>
		<Router>
			<div>
			              
			<Route exact path="/" component={Login}/>
			<Route path="/home" component={Home}/>
			<Route path="/people" component={People}/>
			<Route path="/quality" component={Quality}/>
			<Route path="/velocity" component={Velocity}/>
			<Route path="/velocityPageTwo" component={ShiftManager}/>
			<Route path="/cost" component={Cost}/>
			
			<Route  path="/other" component={OhtAnother } />
            <Route  path="/ohtpeople" component={OhtPeople}/>
            <Route  path="/ohtquality" component={OhtQuality}/>
            <Route path="/ohtvelocity" component={OhtVelocity}/>
            <Route  path="/ohtcost" component={OhtCost}/>
         
          
		    </div> 
	    </Router>
	</Provider>
	, document.getElementById('root')
);
