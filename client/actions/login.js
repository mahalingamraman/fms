import {USERNAME } from '../constants/loginConstants'

 export function validateUsername(user) {
  return (dispatch) => {
		dispatch ({
     type: USERNAME,
     user: user
   });}
 }
