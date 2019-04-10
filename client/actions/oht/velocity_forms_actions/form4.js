import {SAVE } from '../../../constants/oht/velocity_forms_constants/Form4Constants'

 export function saveForm4Values(value) {
 
  return {
     
     type: SAVE,
     value: value
   }
 }