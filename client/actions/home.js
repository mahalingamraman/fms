import {homeConstants} from '../constants/homeConstants.js';
export function validateHomePageValues(selectedDay,shift,supervisor){

return (dispatch) => {
    dispatch ({
        type:homeConstants,
        selectedDay:selectedDay,
        shift:shift,
        supervisor:supervisor
});}
}