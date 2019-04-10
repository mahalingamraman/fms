import {USERNAME } from '../constants/loginConstants'

 export function validateUsername(userName) {
  return (dispatch) => {
		dispatch ({
     type: USERNAME,
     userName: userName
   });}
 }
