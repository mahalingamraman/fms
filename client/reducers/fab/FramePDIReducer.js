import {FramePDI} from '../../constants/fab/FramePDIConstants'

const initialState = {
 plan:'',
 actual:'',
 backlog:'',
 adherence:''
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case FramePDI:
    {   console.log(action);
      return {...state,plan:action.plan,actual:action.actual,backlog:action.backlog,adherence:action.adherence};
    }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}
