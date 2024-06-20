import { View, Text, Image } from 'react-native'
import React from 'react'
import profile from '../../../assets/images/avtar.png'
import Profilecss from '../../../assets/css/userprofileimgcss/Profilecss'

export default function Userprofile({name}) {
  return (
    <View style={Profilecss.mainconainer}>
      <View style={Profilecss.imgconainer}>
      <Image source={profile} style={Profilecss.avtarimg}/>
      </View>
      <View>
        <Text style={Profilecss.profiletext}>{name}</Text>
      </View>
    </View>
  )
}