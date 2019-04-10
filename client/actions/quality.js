import {ADD_ROW,DELETE_ROW} from '../constants/qualityConstants'




 export function addRow(row) {
  
  return {
     
     type: ADD_ROW,
     row:row
   }
 }

 export function deleteRow(rowKeys){
     return{
         type:DELETE_ROW,
         rowKeys:rowKeys
     }
 }

