import { QUALITY } from '../constants/qualityConstants_lptm'

const initialState = {
  
    product :{
        id:0,
        defect_type:'',
        defect_note:'',}
    
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case QUALITY:
		return { ...state,id:action.id,defect_type:action.defect_type,defect_note:action.defect_note};
	default:
      return state
   }
}
