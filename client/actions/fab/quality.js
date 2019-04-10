import {ADD,REMOVE,EDIT,TOGGLE_ADD_MODAL } from '../../constants/fab/QualityConstants'
import { ActionRemoveShoppingCart } from 'material-ui/svg-icons';

 export function addRow(defect_type,defect_note) {
//   console.log(date) 
  return {
     
     type: ADD,
     defect_type:defect_type,
     defect_note:defect_note
   }
 }
 
 export function removeRow(id) {
    //   console.log(date) 
      return {
         
         type: REMOVE,
         id:id
       }
     }
     
 export function editRow(id,defect_type,defect_note) {
    //   console.log(date) 
      return {
         
         type: EDIT,
         id:id,
         defect_type:defect_type,
         defect_note:defect_note
       }
     }
     
 export function toggleAddModal() {
    //   console.log(date) 
      return {
         
         type: TOGGLE_ADD_MODAL
       
       }
     }