import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Props } from '../App'


const Submit = ({ route, navigation }: Props) => {
    // useEffect(() => {
    //   route.params.handleSubmit();
    // }, [])
    
  return (
    <View>
      <Text>Submit</Text>
    </View>
  )
}

export default Submit