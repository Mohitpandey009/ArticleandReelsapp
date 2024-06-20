import {View, Text, Image, Share,TouchableOpacity} from 'react-native';
import React from 'react';
import share from '../../../../assets/images/share.png';
import sharingbtn from '../../../../assets/css/componrntbtns/Componentbtn';

export default function Multisharebtn() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
        url: 'https://play.google.com/store/apps',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
        <TouchableOpacity  onPress={onShare}>
      <Image source={share} style={sharingbtn.sharebtn} />
      </TouchableOpacity>
    </View>
  );
}
