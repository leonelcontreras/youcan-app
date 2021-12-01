import { ACCESS } from '../action-types'

const { LOADING_DATA, LOGIN, LOGOUT } = ACCESS

const initialState = {
  loading: true,
  isSigned: false,
  token: ''
}

const accessReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return { ...state, ...action.payload }
    case LOGIN:
      return { ...state, ...action.payload }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default accessReducer
