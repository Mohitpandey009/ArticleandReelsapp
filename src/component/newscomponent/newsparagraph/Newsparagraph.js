import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import newstext from '../../../assets/css/newstext/Newstext'

export default function Newsparagraph({language,discription}) {
  return (
    <View>
      <Text 
      ellipsizeMode='tail' 
      numberOfLines={7}
      style={[newstext.newsparagraph,{
        fontFamily:language=='Hindi'? 'HelveticaNeue' : 'NotoSansDevanagari-Black'
      }]}>
      {discription}
      </Text>
    </View>
  )
}