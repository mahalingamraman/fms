import {PEOPLE } from '../constants/peopleConstants_lptm'

 export function validatePeoplePage(sm_six,opwd,opwod,Apprentice,Agency,Injure,sm_eight,opwd1,opwod1,Apprentice1,Agency1) {
  return (dispatch) => {
		dispatch ({
     type: PEOPLE,
     sm_six:sm_six,
     sm_eight:sm_eight,
     opwd:opwd,
     opwod:opwod,
     Apprentice:Apprentice,
     Agency:Agency,
     opwd1:opwd1,
     opwod1:opwod1,
     Injure:Injure,
     Apprentice1:Apprentice1,
     Agency1:Agency1
   });}
 }
