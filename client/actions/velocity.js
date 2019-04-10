import {VELOCITY} from '../constants/velocityConstants'

 export function validateVelocity(  machinePlan,
    machineRun,
    DeburingCompleted,
    OPhrs,
    machinePlan1,
    machineRun1,
    OPhrs1,
   ) {
  return (dispatch) => {
		dispatch ({
     type:VELOCITY,
     machinePlan:machinePlan,
     machineRun:machineRun,
     DeburingCompleted:DeburingCompleted,
     OPhrs:OPhrs,
     machinePlan1:machinePlan1,
     machineRun1:machineRun1,
     OPhrs1:OPhrs1,
    
   });}
 }
