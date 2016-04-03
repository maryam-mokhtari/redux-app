import * as ActionTypes from '../actions/actionTypes'

const NEXT_PAGE = 'https://api.github.com/users/petehunt/repos?per_page=5'

const initialState = {
  activeRepo: null,
  allRepos: {},
  isFetching: false,
  isFailed: false,
  isNetworkFailed: false,
  nextPage: NEXT_PAGE,
  shouldStarsShown: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_REPO:
      return Object.assign({},state, {activeRepo: action.payload})
    case ActionTypes.SHOW_STARS:
      return Object.assign({}, state, {shouldStarsShown: true})
    case ActionTypes.HIDE_STARS:
      return Object.assign({}, state, {shouldStarsShown: false})
    case ActionTypes.REFRESH:
      return Object.assign({}, state, {
        allRepos: {},
        activeRepo: null,
        nextPage: NEXT_PAGE
      })
    case ActionTypes.FETCH_REPOS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        allRepos: Object.assign({}, state.allRepos, action.payload.repos),
        nextPage: action.payload.nextPage
      })
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
