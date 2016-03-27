import * as ActionTypes from './actionTypes'

// action creator:: () => action
const setActiveRepo = (repo) => {
  return { type: ActionTypes.SET_ACTIVE_REPO , payload: repo }
}
const setAllRepos = (repos) => {
  return { type: ActionTypes.FETCH_REPOS_SUCCESS , payload: repos }
}

// thunk action creator :: _ -> (dispatch -> _)
const fetchRepos = () => {
  return function(dispatch) {
    dispatch({type: ActionTypes.FETCH_REPOS_REQUEST})
    fetch('https://api.github.com/users/petehunt/repos?per_page=5')
    .then(res=> res.json())
    .then(res=>
      // { this.setState({myRepos: res}) }
      dispatch(setAllRepos(res))
    )
    .catch((err)=>{
      console.error('fetchRepos> err=', err)
       dispatch({type: ActionTypes.FETCH_REPOS_FAILURE})
    })
  }
}

export { setActiveRepo, fetchRepos }
