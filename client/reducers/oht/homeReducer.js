import {    HOME } from '../constants/oht/HomeConstants'

const initialState = {
  shift:"",
  date:""
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case HOME:
    {   console.log(action);
      return {...state,shift:action.shift,date:action.date};
    }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}
