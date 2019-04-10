import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import peopleReducer from './peopleReducer';
import qualityReducer from './qualityReducer';
import velocityReducer from './velocityReducer';
import velocitySMReducer from './velocitySMReducer';

import costReducer from './oht/costReducer';
//import loginReducer from './loginReducer';
//import homeReducer from './homeReducer';
import peopleOhtReducer from './oht/peopleReducer';
import qualityOhtReducer from './oht/qualityReducer';
import velocityOhtReducer from './oht/velocityReducer';
import anotherOhtReducer from './oht/anotherReducer';
import form1Reducer from './oht/velocity_form_reducers/form1Reducer';
import form2Reducer from './oht/velocity_form_reducers/form2Reducer';
import form3Reducer from './oht/velocity_form_reducers/form3Reducer';
import form4Reducer from './oht/velocity_form_reducers/form4Reducer';
import form5Reducer from './oht/velocity_form_reducers/form5Reducer';
import form6Reducer from './oht/velocity_form_reducers/form6Reducer';
import form7Reducer from './oht/velocity_form_reducers/form7Reducer';
import form8Reducer from './oht/velocity_form_reducers/form8Reducer';
import form9Reducer from './oht/velocity_form_reducers/form9Reducer';


import peopleFabReducer from './fab/peopleReducer';
import qualityFabReducer from './fab/qualityReducer';
import velocityFabReducer from './fab/velocityReducer';
import costFabReducer from './fab/costReducer';
import FramePDIFabReducer from './fab/FramePDIReducer';
import BHLFabReducer from './fab/BHLReducer';
import BuildFabReducer from './fab/BuildReducer';
import MPSFabReducer from './fab/MPSReducer';


const rootReducer = combineReducers({
    loginReducer: loginReducer,
    homeReducer: homeReducer,
    peopleReducer:peopleReducer,
    qualityReducer:qualityReducer,
    velocityReducer:velocityReducer,
    velocitySMReducer:velocitySMReducer,
    costReducer:costReducer,
	
	peopleOhtReducer:peopleOhtReducer,
    qualityOhtReducer:qualityOhtReducer,
    velocityOhtReducer:velocityOhtReducer,
    anotherOhtReducer:anotherOhtReducer,
    form1Reducer:form1Reducer,
    form2Reducer:form2Reducer,
    form3Reducer:form3Reducer,
    form4Reducer:form4Reducer,
    form5Reducer:form5Reducer,
    form6Reducer:form6Reducer,
    form7Reducer:form7Reducer,
    form8Reducer:form8Reducer,
    form9Reducer:form9Reducer,
	
	peopleFabReducer:peopleFabReducer,
    qualityFabReducer:qualityFabReducer,
    velocityFabReducer:velocityFabReducer,
    costFabReducer:costFabReducer,
    FramePDIFabReducer:FramePDIFabReducer,
    BHLFabReducer:BHLFabReducer,
    BuildFabReducer:BuildFabReducer,
    MPSFabReducer:MPSFabReducer
});

export default rootReducer;