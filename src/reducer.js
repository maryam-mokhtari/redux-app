import * as ActionTypes from './actions/actionTypes'

const initialState = {activeRepo: null, allRepos: [], isFetching: false, isFailed: false}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_REPO:
      return Object.assign({},state, {activeRepo: action.payload})
    case ActionTypes.FETCH_REPOS_SUCCESS:
      return Object.assign({}, state, {isFetching: false, allRepos: action.payload})
    case ActionTypes.FETCH_REPOS_REQUEST:
      return Object.assign({}, state, {isFetching: true})
    case ActionTypes.FETCH_REPOS_FAILURE:
      return Object.assign({}, state, {isFetching: false, isFailed: true})

    //return {...state, {activeRepo: action.repo}}
    default:
      return state
  }
}
