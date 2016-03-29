import * as ActionTypes from './actionTypes'
import { CALL_API } from 'redux-api-middleware'

// action creator:: () => action
const setActiveRepo = (repo) => {
  return { type: ActionTypes.SET_ACTIVE_REPO , payload: repo }
}
const fetchRepo = (name) => ({
  [CALL_API] : {
    endpoint: `https://api.github.com/repos/petehunt/${name}`,
    method: 'GET',
    types: [
      ActionTypes.FETCH_REPO_REQUEST,
      ActionTypes.FETCH_REPO_SUCCESS,
      ActionTypes.FETCH_REPO_FAILURE
    ]
  }
})
const fetchRepos = () => ({
 [CALL_API]: {
   endpoint: 'https://api.github.com/users/petehunt/repos?per_page=5',
   method: 'GET',
   types: [
     ActionTypes.FETCH_REPOS_REQUEST,
     {
       type: ActionTypes.FETCH_REPOS_SUCCESS,
       payload: (action, state, res) => {
          return res.json()
         .then((repos) => {
            repos = repos.reduce((out, repo) => {
              out[repo.name] = repo
              return out
            }, {})          
            localStorage.setItem('repos', JSON.stringify(repos))
            return repos
         })
       }
     },
     ActionTypes.FETCH_REPOS_FAILURE
   ]
 }
})

// thunk action creator :: _ -> (dispatch -> _)
// let counter = 1
const loadRepos = () => {
  // if (!(counter++ % 2)) {
  //   return { type: ActionTypes.FETCH_REPOS_REQUEST, error: true }
  // }
  return (dispatch, getState) => {
    const { app:{allRepos} } = getState()
    if (false && (allRepos.length > 3 || localStorage.getItem('repos'))) {
      return
    } else {
       dispatch(fetchRepos())
    }
  }
}

export { setActiveRepo, fetchRepos, loadRepos, fetchRepo }
