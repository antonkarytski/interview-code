import React, { useEffect, useState } from 'react'
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

  const changeTag = (tag: string) => {
    setCurrentTag(tag)
    setIsTagSelected(true)
  }

  const functionWithALotOfCode = () => {
    //No matter what this function does, here is just a lot of code
    //...300 line of code and it does not use state of the component
  }

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
      //about 300 items in the list
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
