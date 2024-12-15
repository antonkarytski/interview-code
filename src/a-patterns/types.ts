export type UserFormData = {
  name: string
  description: string
  category: string
  tags: string
}

export type EventItem = {
  id: string
  title: string
  date: string
  location: string
  description: string
  image: string
  category: string
  tags: string[]
  steps: string[]
}
