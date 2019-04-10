import {USERNAME } from '../constants/LoginConstants'

 export function validateUsername(userName) {
   return {
     type: USERNAME,
     userName: userName
   }
 }