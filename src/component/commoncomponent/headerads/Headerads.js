import { View, Text, Image } from 'react-native'
import React from 'react'
import adsimg from '../../../assets/images/adsimg.jpg'
import Adscss from '../../../assets/css/adscss/Adscss'

export default function Headerads() {
  return (
    <View style={Adscss.imgcontainer}>
      <Image source={adsimg} style={Adscss.adsimg}/>
    </View>
  )
}