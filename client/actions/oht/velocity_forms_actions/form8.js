import {SAVE } from '../../../constants/oht/velocity_forms_constants/Form8Constants'

 export function saveForm8Values(value) {
  
  return {
     
     type: SAVE,
     value: value
   }
 }