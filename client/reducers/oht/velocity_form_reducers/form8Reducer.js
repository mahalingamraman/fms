import {    SAVE} from '../../../constants/oht/velocity_forms_constants/Form8Constants'

const initialState = {
    model:"",
    pdi_preparation:"",
     pdi_inspection :"",
     pda :"",
     fpc :"",
     rts :"",
     shipped_machine:""
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case SAVE:
    {   console.log(action);
       
        for (const prop in action.value) {
               
            state[prop] = action.value[prop];
          
          }
        return{...state};
    }
		
	default:
      return state
   }
}