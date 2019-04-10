import {SAVE } from '../../constants/oht/CostConstants'

 export function saveCostValues(value) {
  
  return {
     
     type: SAVE,
     value: value
   }
 }