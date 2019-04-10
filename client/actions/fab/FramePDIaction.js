import {FramePDI} from '../../constants/fab/FramePDIConstants'

 export function saveFramePDIValues(plan,actual,backlog,adherence) {
  console.log(plan) 
  return {
     
     type: FramePDI,
    plan:plan,
    actual:actual,
    backlog:backlog,
    adherence:adherence
   }
 }