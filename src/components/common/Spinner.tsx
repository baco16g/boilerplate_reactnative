import * as React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

interface IProps {
  size?: number | 'large' | 'small'
}

const Spinner = ({ size = 'large' }: IProps) => {
  const { spinnerStyle } = styles
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size} />
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { Spinner }
