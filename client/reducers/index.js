import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import peopleReducer from './peopleReducer';
import qualityReducer from './qualityReducer';
import velocityReducer from './velocityReducer';
import velocitySMReducer from './velocitySMReducer';
import costReducer from './costReducer';


const rootReducer = combineReducers({
    loginReducer: loginReducer,
    homeReducer: homeReducer,
    peopleReducer:peopleReducer,
    qualityReducer:qualityReducer,
    velocityReducer:velocityReducer,
    velocitySMReducer:velocitySMReducer,
    costReducer:costReducer
   
});

export default rootReducer;