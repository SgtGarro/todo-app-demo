import { useState } from 'react'

export default function useLocal<T>(keyName: string) {
  const [data, setData] = useState<T>(() => {
    const localData = localStorage.getItem(keyName)
    if (!localData) {
      localStorage.setItem(keyName, JSON.stringify([]))
      return []
    }
    return JSON.parse(localData)
  })

  function updateData(data: T) {
    localStorage.setItem(keyName, JSON.stringify(data))
    setData(data)
  }

  return [data, updateData]
}
