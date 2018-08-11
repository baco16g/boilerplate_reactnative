import * as React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface IProps {
  label: string
  value: string
  placeholder: string
  onChangeText: (value: string) => { [key: string]: string }
  secureTextEntry?: boolean
}

const Input = ({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry
}: IProps) => {
  const { inputStyle, labelStyle, containerStyle } = styles
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export { Input }
