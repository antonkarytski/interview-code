import React from 'react'
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

type CustomInputProps = {
  isEmail?: boolean
  isPassword?: boolean
  inputStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>
} & TextInputProps

export const CustomInput = ({
  isEmail,
  isPassword,
  inputStyle,
  containerStyle,
  ...props
}: CustomInputProps) => {
  if (isEmail) {
    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput style={[styles.textInput, inputStyle]} {...props} />
      </View>
    )
  }

  if (isPassword) {
    return <TextInput secureTextEntry {...props} />
  }

  return <TextInput {...props} />
}

const styles = StyleSheet.create({
  container: {},
  textInput: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CCCCD2',
    fontSize: 16,
    width: 340,
    height: 46,
    backgroundColor: 'white',

    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.1,

    elevation: 3,
  },
  label: {
    fontSize: 16,
    lineHeight: 22.4,
    marginBottom: 8,
    fontWeight: '400',
  },
  labelContainer: {
    backgroundColor: 'red',
    position: 'absolute',
  },
})
