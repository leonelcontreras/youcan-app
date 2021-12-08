import { useNavigation } from '@react-navigation/core'

const useNavigate = () => {
  const { navigate, goBack } = useNavigation()

  return {
    navigate,
    goBack
  }
}

export default useNavigate
