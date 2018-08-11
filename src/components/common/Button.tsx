import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface IProps {
  children: JSX.Element
  onPress: () => void
}

const Button = ({ children, onPress }: IProps) => {
  const { textStyle, buttonStyle } = styles
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
})

export { Button }
