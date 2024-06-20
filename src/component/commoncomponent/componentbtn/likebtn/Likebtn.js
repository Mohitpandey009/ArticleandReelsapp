import { View, Text, Image } from 'react-native'
import React from 'react'
import like from '../../../../assets/images/likebtn.png'
import componentbn from '../../../../assets/css/componrntbtns/Componentbtn'
export default function Likebtn() {
  return (
    <View>
      <Image source={like} style={componentbn.likebtn}/>
    </View>
  )
}