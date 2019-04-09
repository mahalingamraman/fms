import { VELOCITY } from '../constants/velocityConstants_lptm'

const initialState = {
    machinePlan:0,
    machineRun:0,
    DeburingCompleted:0,
    OPhrs:0,
    machinePlan1:0,
    machineRun1:0,
    OPhrs1:0,
    OHT:0,
    UGM:0,
    PendingForRework:0,
    PartsPending:0,CriticalIssues:"",
    
    
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case VELOCITY:
        return { ...state, machinePlan:action.machinePlan,machinePlan1:action.machinePlan1,machineRun:action.machineRun,machineRun1:action.machineRun1,DeburingCompleted:action.DeburingCompleted,OPhrs:action.OPhrs,OPhrs1:action.OPhrs1,OHT:action.OHT,UGM:action.UGM,PendingForRework:action.PendingForRework
            ,PartsPending:action.PartsPending,CriticalIssues:action.CriticalIssues};
	default:
      return state
   }
}
