import {    PEOPLE } from '../../constants/oht/PeopleConstants'

const initialState = {
    no_of_operators:"",
    no_of_apprentice:"",
    no_of_agency:"",
    injury_free:"",
    reason_injury:""
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case PEOPLE:
    {   console.log(action);
      return {...state,  no_of_operators:action.no_of_operators,
        no_of_apprentice:action.no_of_apprentice,
        no_of_agency:action.no_of_agency,
        injury_free:action.injury_free,
        reason_injury:action.reason_injury
      };
    }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}