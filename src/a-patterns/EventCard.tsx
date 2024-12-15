import React from 'react'
import { Pressable, Animated, View, Text } from 'react-native'
import { EventItem } from './types'

type ListItemProps = {
  item: EventItem
  onTagPress: (tag: string) => void
}

const EventCard = ({ item, onTagPress }: ListItemProps) => {
  return (
    <Pressable>
      <Animated.View>
        <View>
          <Text>{item.date}</Text>
        </View>
        <View>
          <Text>{item.category}</Text>
        </View>
        {item.tags.map((tag, index) => {
          return (
            <Pressable
              onPress={() => {
                onTagPress(tag)
              }}
              key={index}
            >
              <Text>{tag}</Text>
            </Pressable>
          )
        })}
        <View></View>
      </Animated.View>
    </Pressable>
  )
}

export default EventCard
