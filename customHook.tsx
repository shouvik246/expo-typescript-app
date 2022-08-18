import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const customHook = (value:string) => {

    const [answer, setAnswer] = useState<string|string[]>([]);
    
    useEffect(() => {
        setAnswer([...answer, value])
    },[value])
    console.log(answer)

  return (
    <></>
  )
}

export default customHook