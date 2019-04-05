const apiUrl = 'https://api.github.com/users/KrunalLathiya';

export const fetchData = (data) => {

  return {
    type: FETCH_GITHUB_DATA,
    data
  }
};