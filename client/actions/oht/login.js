import {USERNAME ,HIDE,HIDE_PEOPLE} from '../../constants/oht/LoginConstants'

 export function validateUsername(userName) {
   return {
     type: USERNAME,
     userName: userName
   }
 }
 export function hidePeople(){
   return{
     type:HIDE_PEOPLE
   }
 }
 export function hideAll(){
   return{
     type:HIDE
   }
 }