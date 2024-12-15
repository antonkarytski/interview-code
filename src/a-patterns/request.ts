export async function getEventsList(
  count: number,
  tags: string[],
  location: string,
  locationRadius: number,
  maxSteps: number,
  categories: string[],
  afterSave: () => void,
  saveToLocalstorage: boolean,
  localStorageKey: string,
  resendRequest: boolean,
  onResend: (...props: any[]) => any
) {
  try {
    const response = await fetch(
      `https://api.com/events?tags=${tags.join(',')}&location=${location}&locationRadius=${locationRadius}&maxSteps=${maxSteps}&categories=${categories.join(',')}&count=${count}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await response.json()
    afterSave()
    if (saveToLocalstorage) {
      localStorage.setItem(localStorageKey, JSON.stringify(data))
    }
    return data
  } catch (e) {
    if (resendRequest) {
      onResend(
        count,
        tags,
        location,
        locationRadius,
        maxSteps,
        categories,
        afterSave,
        saveToLocalstorage,
        localStorageKey,
        resendRequest,
        onResend
      )
    }
  }
}
