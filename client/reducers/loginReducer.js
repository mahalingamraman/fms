import { USERNAME } from '../constants/LoginConstants'

const initialState = {
  isValidUser:false,
  userName:''
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case USERNAME:
		return {isValidUser : action.userName === "oht" ? true : false,userName:action.userName};
	default:
      return state
   }
}
