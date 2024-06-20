import { View, Text,Image } from 'react-native'
import React from 'react'
import reelsads from '../../../assets/images/reelsads.jpg'
import Adscss from '../../../assets/css/adscss/Adscss'

export default function Postads() {
  return (
    <View style={Adscss.postadsimgcontainer}>
      <Image source={reelsads} style={Adscss.postimg}/>
    </View>
  )
}