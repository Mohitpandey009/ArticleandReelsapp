import { View, Image,TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import whatsbtn from '../../../../assets/images/whatsapp.png'
import sharingbtn from '../../../../assets/css/componrntbtns/Componentbtn'

export default function Whatsappbtn() {
  const message = 'Hello! Check out this awesome content!';
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

  const shareOnWhatsApp = () => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };
  
  return (
    <View>
      <TouchableOpacity onPress={shareOnWhatsApp}>
      <Image source={whatsbtn} style={sharingbtn.sharebtn}/>
      </TouchableOpacity>
    </View>
  )
}