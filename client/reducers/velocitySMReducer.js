import { VELOCITYSM } from '../constants/velocitySMConstants'

const initialState = {
    OHT:0,
    UGM:0,
    PendingForRework:0,
    PartsPending:0,CriticalIssues:"",
    
    
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case VELOCITYSM:
        return { ...state, OHT:action.OHT,UGM:action.UGM,PendingForRework:action.PendingForRework
            ,PartsPending:action.PartsPending,CriticalIssues:action.CriticalIssues};
	default:
      return state
   }
}
