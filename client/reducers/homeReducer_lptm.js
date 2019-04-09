import {homeConstants} from '../constants/homeConstants_lptm'

const initialState = {
   
  selectedDay:'',
  shift:'',
  supervisor:''
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case homeConstants:
        return { ...state,selectedDay:action.selectedDay,shift:action.shift,supervisor:action.supervisor};
   
	default:
      return state
   }
}
