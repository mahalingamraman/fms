import {USERNAME } from '../constants/LoginConstants'

export function validateUsername(userName) {
	console.log(userName);
	return (dispatch) => {
		dispatch ({
		 type: USERNAME,
		 userName: userName
		});
	}
}
