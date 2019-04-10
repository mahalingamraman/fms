import {MPS} from '../../constants/fab/MPSConstants'

const initialState = {
           splan:'',
           sadherence:'',
           sactual:'',
           smtd:'',
           sbacklog:'',
           fplan:'',
           fadherence:'',
           factual:'',
           fmtd:'',
           fbacklog:''
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case MPS:
    {   console.log(action);
      return {...state,splan:action.splan,sadherence:action.sadherence,sactual:action.sactual,
    amtd:action.smtd,sbacklog:action.sbacklog,fplan:action.fplan,fadherence:action.fadherence,
factual:action.factual,fmtd:action.fmtd, fbacklog:action.fbacklog};
    }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}
