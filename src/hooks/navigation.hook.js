import { useNavigation } from '@react-navigation/core'

const useNavigate = () => {
  const { navigate } = useNavigation()

  return {
    navigate
  }
}

export default useNavigate
