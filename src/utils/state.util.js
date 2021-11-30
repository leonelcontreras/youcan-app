const StateUtil = () => {
  const createActionType = module => action => `${module}/${action}`

  return {
    createActionType
  }
}

export default StateUtil
