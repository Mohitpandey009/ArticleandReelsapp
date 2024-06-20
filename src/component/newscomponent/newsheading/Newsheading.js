import { View, Text } from 'react-native'
import React from 'react'
import headingcss from '../../../assets/css/newstext/Newstext'

export default function Newsheading({title,language}) {
  return (
    <View>
      <Text style={[headingcss.newsheading,{
        fontFamily:language=='Hindi'? 'HelveticaNeue' : 'NotoSansDevanagari-Black'
      }]}>{title}</Text>
    </View>
  )
}