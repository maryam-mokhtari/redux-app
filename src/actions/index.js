import * as ActionTypes from './actionTypes'
import { CALL_API } from 'redux-api-middleware'

// action creator:: () => action
const setActiveRepo = (repo) => {
  return { type: ActionTypes.SET_ACTIVE_REPO , payload: repo }
}


// thunk action creator :: _ -> (dispatch -> _)
let counter = 1
const fetchRepos = () => {
  if (counter++ % 2) {
    return { type: ActionTypes.FETCH_REPOS_REQUEST, error: true }
  }
  return {
    [CALL_API]: {
      endpoint: 'https://api.github.com/users/petehunt/repos?per_page=5',
      method: 'GET',
      types: [
        ActionTypes.FETCH_REPOS_REQUEST,
        ActionTypes.FETCH_REPOS_SUCCESS,
        ActionTypes.FETCH_REPOS_FAILURE
      ]
    }
  }

}

export { setActiveRepo, fetchRepos }
