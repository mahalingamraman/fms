import {COST} from '../constants/costConstants'

 export function validateCost(reworkTime,
    rejectionScrapCost) {
  return (dispatch) => {
		dispatch ({
     type: COST,
     reworkTime:reworkTime,rejectionScrapCost:rejectionScrapCost
   });}
 }
