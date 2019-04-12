import { USERNAME } from '../constants/LoginConstants'

const initialState = {
  isValidUser:false,
  user:''
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case USERNAME:
		return { ...state,isValidUser : action.user === "oht" || action.user === "lptmachine" || action.user=== "fab" ? true : false,user:action.user};
	default:
      return state
   }
}
