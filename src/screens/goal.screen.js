import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/core'

const GoalScreen = () => {
  const route = useRoute()
  console.log(route)
  console.log('route-id -->', route.params.id)
  return (
    <View>
      <Text>Goal</Text>
    </View>
  )
}

export default GoalScreen
