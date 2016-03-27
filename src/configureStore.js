import {createStore, compose} from 'redux'
// action type
const SET_ACTIVE_REPO = 'SET_ACTIVE_REPO'
const SET_ALL_REPOS = 'SET_ALL_REPOS'

const initialState = {activeRepo: null, allRepos: null}

// action creator:: () => action
const setActiveRepo = (repo) => {
  return { type: SET_ACTIVE_REPO , repo}
}
const setAllRepos = (repos) => {
  return { type: SET_ALL_REPOS , repos}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_REPO:
      return Object.assign({},state, {activeRepo: action.repo})
    case SET_ALL_REPOS:
      return Object.assign({}, state, {allRepos: action.repos})
      //return {...state, {activeRepo: action.repo}}
    default:
      return state
  }
}
const finalCreateStore = compose(

  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = finalCreateStore(reducer)

export { store, setActiveRepo, setAllRepos }
