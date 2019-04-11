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
import OhtHome from './containers/oht/Home';
import OhtQuality from './containers/oht/Quality';

import OhtPeople from './containers/oht/People';
import OhtVelocity from './containers/oht/Velocity';
import OhtCost from './containers/oht/Cost';
//import OhtSideNav_ from './containers/oht/SideNav_';

import FabAnother from './containers/fab/Another';
import FabQuality from './containers/fab/Quality';
import FabFramePDI from './containers/fab/FramePDI';
import FabPeople from './containers/fab/People';
import FabVelocity from './containers/fab/Velocity';
import FabCost from './containers/fab/Cost';
import FabTable from './containers/fab/Table';
import FabNavBar from "./components/fab/NavBar";
import FabSidenav from "./components/fab/Sidenav";
import FabJumbo from "./components/fab/Jumbo";
import FabCostpage from './containers/fab/Costpage';
import FabBHLform from './containers/fab/BHLform';
import FabBuildmissform from './containers/fab/Buildmissform';
import FabMPSStatus from './containers/fab/MPSStatus';


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
			
			<Route path="/ohthome" component={OhtHome}/>
			<Route  path="/ohtother" component={OhtAnother } />
            <Route  path="/ohtpeople" component={OhtPeople}/>
            <Route  path="/ohtquality" component={OhtQuality}/>
            <Route path="/ohtvelocity" component={OhtVelocity}/>
            <Route  path="/ohtcost" component={OhtCost}/>
			
			<Route  path="/fabother" component={FabAnother } />
            <Route  path="/fabpeople" component={FabPeople}/>
            <Route  path="/fabqualitytable" component={FabTable}/>
            <Route path="/fabvelocity" component={FabVelocity}/>
            <Route  path="/fabcost" component={FabCost}/>
            <Route  path="/fabframepdi" component={FabFramePDI}/>
            <Route  path="/fabcostinfo" component={FabCostpage}/>
            <Route  path="/fabbhlpage" component={FabBHLform}/>
            <Route  path="/fabbuildmiss" component={FabBuildmissform}/>
            <Route  path="/fabmpsstatus" component={FabMPSStatus}/>
            <Route  path="/fabjumbo" component={FabJumbo}/>
          
		    </div> 
	    </Router>
	</Provider>
	, document.getElementById('root')
);
