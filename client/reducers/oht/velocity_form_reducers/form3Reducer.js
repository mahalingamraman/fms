import {    SAVE} from '../../../constants/oht/velocity_forms_constants/Form3Constants'

const initialState = {
    sol_month_plan:"",
    sol_mtd_plan:"",
    sol_actual:"",
  fol_month_plan:"",
  fol_mtd_plan:"",
  fol_actual:"",
   tonso_month_plan:"",
  tonso_mtd_plan:"",
  tonso_actual:""
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