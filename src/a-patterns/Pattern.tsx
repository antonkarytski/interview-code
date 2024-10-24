import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import UserForm from './UserForm'
import SaverPreview from './SaverPreview'
import { EventItem, UserFormData } from './types'
import EventCard from './EventCard'
import { getEventsList } from './request'

type PatternProps = {}

const initialFormData: UserFormData = {
  name: '',
  description: '',
  category: '',
  tags: '',
}

const Pattern = ({}: PatternProps) => {
  const [currentTag, setCurrentTag] = useState('')
  const [isTagSelected, setIsTagSelected] = useState(false)
  const [formData, setFormData] = useState<UserFormData>(initialFormData)
  const [eventsList, setEventsList] = useState<EventItem[]>([])

  const changeTag = useCallback((tag: string) => {
    setCurrentTag(tag)
    setIsTagSelected(true)
  }, [])

  useEffect(() => {
    getEventsList(
      100,
      [''],
      '',
      2,
      4,
      [''],
      () => {},
      true,
      '',
      true,
      getEventsList
    ).then((events) => {
      //We expect that events list might be a quite big
      setEventsList(events)
    })
  }, [])

  return (
    <View>
      <View>
        <UserForm data={formData} setData={setFormData} />
        <SaverPreview isTagsSelected={isTagSelected} currentTag={currentTag} />
      </View>
      <ScrollView>
        {eventsList.map((item, index) => {
          return <EventCard onTagPress={changeTag} item={item} key={index} />
        })}
      </ScrollView>
    </View>
  )
}

export default Pattern
