import { StateUtil } from '../../utils'

const stateUtil = StateUtil()
const module = stateUtil.createActionType('ACCESS')
const LOADING_DATA = module('LOADING_DATA')
const LOGIN = module('LOGIN')
const LOGOUT = module('LOGOUT')

export default {
  LOADING_DATA,
  LOGIN,
  LOGOUT
}
