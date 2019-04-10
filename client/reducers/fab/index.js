import { combineReducers } from 'redux';

// import githubReducer from './githubReducer';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import peopleReducer from './peopleReducer';
import qualityReducer from './qualityReducer';
import velocityReducer from './velocityReducer';
import costReducer from './costReducer';
import FramePDIReducer from './FramePDIReducer';
import BHLReducer from './BHLReducer';
import BuildReducer from './BuildReducer';
import MPSReducer from './MPSReducer';
const rootReducer = combineReducers({
	// mahaData : githubReducer,
    loginReducer: loginReducer,
    homeReducer:homeReducer,
    peopleReducer:peopleReducer,
    qualityReducer:qualityReducer,
    velocityReducer:velocityReducer,
    costReducer:costReducer,
    FramePDIReducer:FramePDIReducer,
    BHLReducer:BHLReducer,
    BuildReducer:BuildReducer,
    MPSReducer:MPSReducer
    
});

export default rootReducer;
