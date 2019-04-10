import {MPS} from '../../constants/fab/MPSConstants'

 export function saveMPSValues(
    splan,
    sadherence,
    sactual,
    smtd,
    sbacklog,
    fplan,
    fadherence,
    factual,
    fmtd,
    fbacklog
 ) {

  return {
     
     type: MPS,
     splan:splan,
    sadherence:sadherence,
    sactual:sactual,
    smtd:smtd,
    sbacklog:sbacklog,
    fplan:fplan,
    fadherence:fadherence,
    factual:factual,
    fmtd:fmtd,
    fbacklog:fbacklog
     
   }
 }