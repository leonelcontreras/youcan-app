import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f4f8ff',
    padding: 20,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  }
})

export default styles
