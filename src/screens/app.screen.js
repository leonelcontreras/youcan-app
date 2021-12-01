import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const AppScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>App</Text>
      <Button title='Goal'onPress={() => navigation.navigate('Goal', {
        id: 1
      })}/>
      <Button title='Stats' onPress={() => navigation.navigate('Stats')} />
    </View>
  )
}

export default AppScreen
