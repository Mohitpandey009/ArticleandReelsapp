import { View, Image } from 'react-native'
import React from 'react'
import newsheadingimg from '../../../assets/images/breaking_news.jpg'
import titlecss from '../../../assets/css/newstitleimg/Newstitleimg'

export default function Newstitleimg({API,img}) {
  return (
    <View>
      <Image source={{uri:`${API}/${img}`}} style={titlecss.titleimg}/>
    </View>
  )
}