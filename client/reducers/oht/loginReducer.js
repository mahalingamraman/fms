import { USERNAME ,HIDE,HIDE_PEOPLE} from '../constants/oht/LoginConstants'

const initialState = {
  isValidUser:false,
  userName:'oht',
  // hide:false,
  // hide_people:false
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case USERNAME:
    {   if(action.userName==="oht")
        {   
            
            return {...state,isValidUser:true};
        }
        else
        {
            alert("Not a valid user!!");
            return {...state,isValidUser:false};
        }
    }
    // case HIDE:
    // {
    //   return{...state,hide:true};
    // }
    // case HIDE_PEOPLE:
    // {
    //   return{...state,hide_people:true};
    // }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}
