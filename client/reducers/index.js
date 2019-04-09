import { combineReducers } from 'redux';

import githubReducer from './githubReducer';
import loginReducer from './loginReducer';
const rootReducer = combineReducers({
	mahaData : githubReducer,
	loginReducer: loginReducer,
	
});

export default rootReducer;

