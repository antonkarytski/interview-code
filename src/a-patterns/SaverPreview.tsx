import React from 'react'
import { Pressable, Text, View } from 'react-native'

type SaverPreviewProps = {
  isTagsSelected: boolean
  currentTag: string
}

const SaverPreview = ({ isTagsSelected, currentTag }: SaverPreviewProps) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          fetch('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify({
              isTagsSelected,
              currentTag,
            }),
          })
        }}
      >
        <Text>Save</Text>
      </Pressable>
    </View>
  )
}

export default SaverPreview
