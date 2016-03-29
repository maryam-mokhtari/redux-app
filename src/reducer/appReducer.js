import * as ActionTypes from '../actions/actionTypes'

const initialState = {
  activeRepo: null,
  allRepos: {},
  isFetching: false,
  isFailed: false,
  isNetworkFailed: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_REPO:
      return Object.assign({},state, {activeRepo: action.payload})
    case ActionTypes.FETCH_REPOS_SUCCESS:
      return Object.assign({}, state, {isFetching: false, allRepos: action.payload})
    case ActionTypes.FETCH_REPOS_REQUEST:
      if (action.error)
        return Object.assign({}, state, {isFetching: false, isNetworkFailed: true})
      else
        return Object.assign({}, state, {isFetching: true})
    case ActionTypes.FETCH_REPOS_FAILURE:
      return Object.assign({}, state, {isFetching: false, isFailed: true})

    case ActionTypes.FETCH_REPO_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        allRepos: Object.assign({}, state.allRepos, {[action.payload.name]: action.payload})
      })
    case ActionTypes.FETCH_REPO_REQUEST:
      if (action.error)
        return Object.assign({}, state, {isFetching: false, isNetworkFailed: true})
      else
        return Object.assign({}, state, {isFetching: true})
    case ActionTypes.FETCH_REPO_FAILURE:
      return Object.assign({}, state, {isFetching: false, isFailed: true})

    case ActionTypes.CLOSE_NETWORK_ALERT:
      return Object.assign({}, state, {isNetworkFailed: false})
    //return {...state, {activeRepo: action.repo}}
    default:
      return state
  }
}
