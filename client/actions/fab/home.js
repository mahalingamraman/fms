import {HOME } from '../../constants/fab/HomeConstants'

 export function saveHomeValues(date,shift) {
  console.log(date) 
  return {
     
     type: HOME,
     shift:shift,
     date:date
   }
 }