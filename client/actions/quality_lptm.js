import {QUALITY} from '../constants/qualityConstants_lptm'

 export function validateQualityPage(id,defect_type,defect_note) {
  return (dispatch) => {
		dispatch ({
     type: QUALITY,
     id:id,
     defect_note:defect_note,
     defect_type:defect_type,
   });}
 }
