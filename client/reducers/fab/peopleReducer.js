import {FABPEOPLE } from '../../constants/Fab/PeopleConstants'

const initialState = {
    no_of_operators:"",
    no_of_apprentice:"",
    no_of_agency:"",
    injury_free:"",
    reason_injury:"",

    no_of_operators1:"",
    no_of_apprentice1:"",
    no_of_agency1:"",
    injury_free1:"",
    reason_injury1:"",

    no_of_operators2:"",
    no_of_apprentice2:"",
    no_of_agency2:"",
    injury_free2:"",
    reason_injury2:""
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case FABPEOPLE:
    {   console.log(action);
      return {...state,  no_of_operators:action.no_of_operators,
        no_of_apprentice:action.no_of_apprentice,
        no_of_agency:action.no_of_agency,
        injury_free:action.injury_free,
        reason_injury:action.reason_injury,

        no_of_operators1:action.no_of_operators1,
        no_of_apprentice1:action.no_of_apprentice1,
        no_of_agency1:action.no_of_agency1,
        injury_free1:action.injury_free1,
        reason_injury1:action.reason_injury1,

        no_of_operators2:action.no_of_operators2,
        no_of_apprentice2:action.no_of_apprentice2,
        no_of_agency2:action.no_of_agency2,
        injury_free2:action.injury_free2,
        reason_injury2:action.reason_injury2
      };
    }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}