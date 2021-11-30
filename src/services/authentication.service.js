const AuthenticationService = () => {
  const validateToken = (token) => false
  const refreshToken = () => true
  const login = () => true
  const logout = () => false
  const signup = () => true

  return {
    validateToken,
    refreshToken,
    login,
    logout,
    signup
  }
}

export default AuthenticationService
