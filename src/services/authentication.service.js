import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const AuthenticationService = () => {
  const validateToken = (token) => false
  const refreshToken = () => true
  const login = async (email, password) => {
    const auth = getAuth()
    try {
      return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      return error
    }
  }

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
