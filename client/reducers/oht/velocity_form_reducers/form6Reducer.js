import {    SAVE} from '../../../constants/oht/velocity_forms_constants/Form6Constants'

const initialState = {
    qg3:"",
    calibration :"",
    water_wash :"",
    road_test:"", 
    rt_rect :"",
    body_mtg:""
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