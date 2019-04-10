import {    HOME } from '../constants/HomeConstants'

const initialState = {
  shift:"",
  type:""
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case HOME:
    {   console.log(action);
      return {...state,shift:action.shift,type:action.type};
    }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}
