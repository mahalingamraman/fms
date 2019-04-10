import { USERNAME } from '../constants/loginConstants'

const initialState = {
  isValidUser:false,
  userName:''
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case USERNAME:
		return { ...state, isValidUser : action.userName === "lptmachine" ? true : false,userName:action.userName};
	default:
      return state
   }
}
