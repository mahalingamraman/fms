// index.js

import { FETCH_GITHUB_DATA } from '../constants/GithubConstants';
import axios from 'axios';

const apiUrl = 'https://api.github.com/users/lingammaha';

export const fetchData = (data) => {
	
  return {
    type: FETCH_GITHUB_DATA,
    data
  }
};

export const fetchGithubData = () => {
  return (dispatch) => {
	  console.log('ssss');
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
		 console.log(error);
        throw(error);
      });
  };
};