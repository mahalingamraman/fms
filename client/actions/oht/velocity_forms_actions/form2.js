import {ADD_ROW,DELETE_ROW,EDIT } from '../../../constants/oht/QualityConstants'


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

 export function editRow(row){
     return{
         type:EDIT,
         row:row
     }

 }