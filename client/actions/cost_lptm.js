import {COST} from '../constants/costConstants_lptm'

 export function validateCost(reworkTime,
    rejectionScrapCost) {
  return (dispatch) => {
		dispatch ({
     type: COST,
     reworkTime:reworkTime,rejectionScrapCost:rejectionScrapCost
   });}
 }
