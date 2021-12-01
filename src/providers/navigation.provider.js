import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
// import { ACCESS } from '../states/action-types'
// import { AuthenticationService } from '../services'
import {
//  SplashScreen,
  LoginScreen,
  AppScreen,
  GoalScreen,
  StatsScreen
} from '../screens'

const { Navigator, Screen } = createNativeStackNavigator()

const NavigationProvider = () => {
  // const dispatch = useDispatch()
  const { /* loading, */ isSigned } = useSelector(state => state.accessReducer)
  // const authService = AuthenticationService()
  // const validToken = false

  // if (loading) return <SplashScreen />

  return (
    <NavigationContainer>
      <Navigator initialRouteName='App'>
        {
          isSigned
            ? (
            <>
              <Screen name='App' component={AppScreen} />
              <Screen name='Goal' component={GoalScreen} />
              <Screen name='Stats' component={StatsScreen} />
            </>
              )
            : (
            <Screen name='Login' component={LoginScreen} />
              )
        }
      </Navigator>
    </NavigationContainer>
  )
}

export default NavigationProvider
