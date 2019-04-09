import { PEOPLE } from '../constants/peopleConstants_lptm'

const initialState = {
  
    sm_six:"",
    sm_eight:"",
    opwd:0,
    opwod:0,
    Apprentice:0,
    Agency:0,
    Injure:"No",
    opwd1:0,
    opwod1:0,
    Apprentice1:0,
    Agency1:0,
    
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case PEOPLE:
		return { ...state, sm_six:action.sm_six,sm_eight:action.sm_eight,opwd:action.opwd,opwod:action.opwod,Apprentice:action.Apprentice,Agency:action.Agency,Injure:action.Injure,opwd1:action.opwd1,opwod1:action.opwod1,Apprentice1:action.Apprentice1,Agency1:action.Agency1};
	default:
      return state
   }
}
