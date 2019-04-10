import {VELOCITYSM} from '../constants/velocitySMConstants'

 export function validateVelocity( 
    OHT,
    UGM,
    PendingForRework,
    PartsPending,
    CriticalIssues) {
  return (dispatch) => {
		dispatch ({
     type:VELOCITYSM,
     OHT:OHT,
     UGM:UGM,
     PendingForRework:PendingForRework,
     PartsPending:PartsPending,
     CriticalIssues:CriticalIssues
   });}
 }
