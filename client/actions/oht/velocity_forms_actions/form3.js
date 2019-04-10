import {SAVE } from '../../../constants/oht/velocity_forms_constants/Form3Constants'

 export function saveForm3Values(value) {
 
  return {
     
     type: SAVE,
     value: value
   }
 }