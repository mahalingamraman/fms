import {
  FETCH_GITHUB_DATA
} from '../constants/GithubConstants'

const initialState = {
  data: []
}

export default function update(state = initialState, action) {
  if (action.type === FETCH_GITHUB_DATA) {
    return action.data
  }
  return state
}
