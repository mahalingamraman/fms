import {  COST } from '../../constants/fab/CostConstants'

const initialState = {
  rework:"",
  cost:""
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case COST:
    {   console.log(action);
      return {...state,rework:action.rework,cost:action.cost};
    }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}
