import { View, Text, Image } from 'react-native'
import React from 'react'
import Componentbtn from '../../../../assets/css/componrntbtns/Componentbtn'
import Dislike from '../../../../assets/images/likebttn.png'
export default function Dislikebtn() {
  return (
    <View>
      <Image source={Dislike} style={Componentbtn.dislikebtn}/>
    </View>
  )
}