import { USERNAME } from '../constants/LoginConstants'

const initialState = {
  isValidUser:false,
  userName:'fab'
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case USERNAME:
    {   if(action.userName==="fab")
        { 
            return {...state,isValidUser:true};
        }
        else
        {
            alert("Not a valid user!!");
            return {...state,isValidUser:false};
        }
    }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}
