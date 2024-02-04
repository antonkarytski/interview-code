import React from 'react'
import { TextInput, View } from 'react-native'
import { UserFormData } from './types'

type SaverFormProps = {
  data: UserFormData
  setData: (data: UserFormData) => void
}

const UserForm = ({ data, setData }: SaverFormProps) => {
  return (
    <View>
      <TextInput
        onTextInput={(e) => {
          setData({
            ...data,
            name: e.nativeEvent.text,
          })
        }}
      />
      <TextInput
        onTextInput={(e) => {
          setData({
            ...data,
            description: e.nativeEvent.text,
          })
        }}
      />
      <TextInput
        onTextInput={(e) => {
          setData({
            ...data,
            category: e.nativeEvent.text,
          })
        }}
      />
      <TextInput
        onTextInput={(e) => {
          setData({
            ...data,
            tags: e.nativeEvent.text,
          })
        }}
      />
    </View>
  )
}

export default UserForm
