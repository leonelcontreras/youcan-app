import { StateUtil } from '../../utils'

const stateUtil = StateUtil()
const module = stateUtil.createActionType('THEME')
const SET_THEME = module('SET_THEME')

export default {
  SET_THEME
}
