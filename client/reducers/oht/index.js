import { combineReducers } from 'redux';

// import githubReducer from './githubReducer';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import peopleReducer from './peopleReducer';
import qualityReducer from './qualityReducer';
import velocityReducer from './velocityReducer';
import anotherReducer from './anotherReducer';
import form1Reducer from './velocity_form_reducers/form1Reducer';
import form2Reducer from './velocity_form_reducers/form2Reducer';
import form3Reducer from './velocity_form_reducers/form3Reducer';
import form4Reducer from './velocity_form_reducers/form4Reducer';
import form5Reducer from './velocity_form_reducers/form5Reducer';
import form6Reducer from './velocity_form_reducers/form6Reducer';
import form7Reducer from './velocity_form_reducers/form7Reducer';
import form8Reducer from './velocity_form_reducers/form8Reducer';
import form9Reducer from './velocity_form_reducers/form9Reducer';
const rootReducer = combineReducers({
	// mahaData : githubReducer,
    loginReducer: loginReducer,
    homeReducer:homeReducer,
    peopleReducer:peopleReducer,
    qualityReducer:qualityReducer,
    velocityReducer:velocityReducer,
    anotherReducer:anotherReducer,
    form1Reducer:form1Reducer,
    form2Reducer:form2Reducer,
    form3Reducer:form3Reducer,
    form4Reducer:form4Reducer,
    form5Reducer:form5Reducer,
    form6Reducer:form6Reducer,
    form7Reducer:form7Reducer,
    form8Reducer:form8Reducer,
    form9Reducer:form9Reducer,
    
});

export default rootReducer;
