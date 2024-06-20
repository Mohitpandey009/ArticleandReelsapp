import {View, Text, Image, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import Componentbtn from '../../../../assets/css/componrntbtns/Componentbtn';
import shareimg from '../../../../assets/images/share.png';
export default function Sharenewsbtn() {
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
      <TouchableOpacity onPress={onShare}>
        <View style={Componentbtn.sharenews}>
          <Text style={Componentbtn.readmoretext}>Share</Text>
          <Image source={shareimg} style={Componentbtn.shareimg} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
