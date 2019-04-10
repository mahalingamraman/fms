import {COST } from '../../constants/fab/CostConstants'

 export function saveCostValues(rework,cost) {
  console.log(rework) 
  console.log(cost) 
  return {
     
     type: COST,
     rework:rework,
     cost: cost
   }
 }